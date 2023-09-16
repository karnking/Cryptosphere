import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/exchangesApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data: cryptoExchanges, isFetching } = useGetExchangesQuery();
  console.log(isFetching)
  if (isFetching) return <Loader />;
  const exchangesList = cryptoExchanges;
  console.log(exchangesList)
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>Year Established</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Trust Score</Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => (
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
                    <Col span={7}>{exchange.year_established}</Col>
                    <Col span={6}>{millify(exchange.trade_volume_24h_btc)}</Col>
                    <Col span={5}>{exchange.trust_score}</Col>
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
