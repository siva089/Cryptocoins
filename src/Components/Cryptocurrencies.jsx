import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd';
import millify from "millify"
import { useGetCryptosQuery } from '../Services/cryptoapi';
import Loader from "./Loader"
const Cryptocurrencies = ({simplified}) => {
    const count = simplified?10:100
    const { data, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([])
    const [searchTerm,setSearchTerm]=useState("")
   

    useEffect(() => {
       
        const filteredData=data?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
     setCryptos(filteredData);
    }, [data, searchTerm])
    if (isFetching) return <Loader />
    console.log("rendering")
    return (
        <>
            {!simplified && <div className="search-crypto">
                <Input placeholder="Search Crytocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            }
        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currency) => (
            <Col
              key={currency.id}
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
            >
              <Link to={`/crypto/${currency.id}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      hoverable
                    />
                  }
                >
                  <p>Price: {currency.price>1000?millify(currency.price):currency.price}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  {currency.totalSupply && (
                    <p>Total Supply: {millify(currency.totalSupply)}</p>
                  )}
                  {currency.circulatingSupply && (
                    <p>
                      Circulating Supply: {millify(currency.circulatingSupply)}
                    </p>
                  )}
                  <p>Daily Change: {currency.change}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </>
    );
}

export default Cryptocurrencies
