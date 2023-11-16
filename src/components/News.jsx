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
  "https://imgs.search.brave.com/NWklMc22QbQqpaCADzb-RIV2_jo3-J_CjcdCRnwcNZw/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQxL0JC/Q19Mb2dvXzIwMjEu/c3ZnLzUxMnB4LUJC/Q19Mb2dvXzIwMjEu/c3ZnLnBuZw"
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
        {cryptoNews?.articles.map((neews, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={neews?.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {neews?.title}
                  </Title>
                  <img
                    src={neews?.urlToImage || demoImage}
                    alt="news"
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                  />
                </div>
                <p>
                  {neews?.description > 100
                    ? `${neews?.description.substring(0, 100)}...`
                    : neews?.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        demoImage[i%4]
                      }
                      alt="news"
                    />
                    <Text className="provider-name">
                      {neews?.source?.name}
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
