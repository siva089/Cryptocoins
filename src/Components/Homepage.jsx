import React,{Fragment} from 'react'
import millify from "millify"
import {Typography,Row,Col,Statistic} from "antd"
import { useGetCryptosQuery } from '../Services/cryptoapi'
import { Link } from "react-router-dom"
import CryptoCurrencies from "./Cryptocurrencies"
import Loader from "./Loader"
import News from "./News"
const {Title}=Typography
const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10)
  if(isFetching)return <Loader /> 
  const globalStats = data?.data?.stats;
    return (
      <Fragment>
        <Title level={2}>Global crypto stats </Title>
        <Row>
          <Col span={12}>
            {" "}
            <Statistic
              title="Total crypto currencies"
              value={globalStats.total}
            />
          </Col>
          <Col span={12}>
            {" "}
            <Statistic
              value={millify(globalStats.totalExchanges)}
              title="Total exchanges"
            />
          </Col>
          <Col span={12}>
            {" "}
            <Statistic
              value={millify(globalStats.totalMarketCap)}
              title="Total Market Cap"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24h volume"
              value={millify(globalStats.total24hVolume)}
            />
          </Col>
          <Col span={12}>
            {" "}
            <Statistic title="Total markets" value={globalStats.totalMarkets} />
          </Col>
        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Top 10 Cryptocurrencies in the world
          </Title>
          <Title level={3} className="show-more">
            <Link to="/cryptocurrencies">Show More</Link>
          </Title>
        </div>
        <CryptoCurrencies simplified />
        <div className="home-heading-container">
          <Title level={2} className="home-title">
          Latest CryptoNews
          </Title>
          <Title level={3} className="show-more">
            <Link to="/news">Show More</Link>
          </Title>
        </div>
        <News simplified />
      </Fragment>
    );
}

export default Homepage
