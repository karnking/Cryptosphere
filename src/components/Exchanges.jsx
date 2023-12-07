import React from "react";
import millify from "millify";
import { Button, Collapse, Row, Col, Typography, Avatar } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons"
import { useGetExchangesQuery } from "../services/exchangesApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data: cryptoExchanges, isFetching } = useGetExchangesQuery();
  if (isFetching) return <Loader />;
  const exchangesList = cryptoExchanges;
  return (
    <>
      <Row style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>Year Established</Col>
        <Col span={4}>24h Trade Volume</Col>
        <Col span={4}>Trust Score</Col>
        <Col span={4} style={{ paddingLeft: "1.5rem" }}>Buy</Col>
      </Row>
      <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24}>
            <Collapse accordion>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.trust_score_rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.image}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={7}>{exchange.year_established || 'Not Shared'}</Col>
                    <Col span={4}>{millify(exchange.trade_volume_24h_btc)}</Col>
                    <Col span={3}>{exchange.trust_score}</Col>
                    <Col span={4} >
                      <Button href={exchange?.url} type="primary" style={{ backgroundColor: "#001529" }} shape="round" icon={<ShoppingCartOutlined />} size={'large'}>
                        Buy
                      </Button>
                    </Col>
                  </Row>
                }
              >
                {exchange?.description || `${exchange?.country} - ${exchange?.url}` || ""}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
