import React, { useState, useEffect } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text, Title } = Typography;
const Option = Select.Option;
const demoImage =[
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg",
  "https://imgs.search.brave.com/UwuJTMB_X3E4_0GRHG02qAzlkVyogpnYmjW8hYd3C9k/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzY2NThiMjBm/NmRhODhlYjJkYjlk/NGVkY2NhN2Q3ODYx/NmUxN2U5N2U0NTZi/N2U0Y2FjN2QwOTlh/ZDg5MTU1NC93d3cu/dGhldmVyZ2UuY29t/Lw",
  "https://imgs.search.brave.com/NWklMc22QbQqpaCADzb-RIV2_jo3-J_CjcdCRnwcNZw/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQxL0JC/Q19Mb2dvXzIwMjEu/c3ZnLzUxMnB4LUJC/Q19Mb2dvXzIwMjEu/c3ZnLnBuZw",
  "https://avatars.githubusercontent.com/u/164318?s=200&v=4",
  "https://play-lh.googleusercontent.com/jGpj_gR6iUi1FqHZ8w__2G0zonoONbRYkYIgARnKpOtKL7we9d213Bvn6AOUMF5WVgOV=w240-h480-rw",
  "data:image/jpeg;base64,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"
]
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const count = simplified ? 6 : 12;
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count,
  });
  const [news, setNews] = useState([]);
  if (isFetching) return <Loader/>;
  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a new Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => (
                <Option value={coin.name}>{coin.name}</Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews?.data.map((neews, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={neews?.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {neews?.title}
                  </Title>
                  <img
                    src={neews?.image || demoImage[i%6]}
                    alt="news"
                    style={{ maxWidth: "150px", maxHeight: "50px" }}
                  />
                </div>
                <p>
                  {neews?.description.length > 150
                    ? `${neews?.description.substring(0, 150)}...`
                    : neews?.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={neews?.image ||
                        demoImage[i%6]
                      }
                      alt="news"
                    />
                    <Text className="provider-name">
                      {neews?.author}
                    </Text>
                  </div>
                  <Text>
                    {moment(neews?.publishedAt).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
