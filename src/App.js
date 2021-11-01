import React from 'react'
import { Switch, Route,Link } from "react-router-dom"
import {Layout,Typography,Space} from 'antd'
import Navbar from "./Components/Navbar.jsx"
import CryptoDetails from "./Components/CryptoDetails"
import News from "./Components/News"
import Homepage from "./Components/Homepage"
import Exchanges from "./Components/Exchanges"
import Cryptocurrencies  from './Components/Cryptocurrencies.jsx'
import "./App.css"
const App = () => {
    return (
        <div className="app">
            <div className="navbar">
               <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage/>
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                              <Cryptocurrencies/>   
                            </Route>
                            <Route exact path="/crypto/:coinid">
                                <CryptoDetails/>
                            </Route>
                            <Route exact path="/news">
                             <News/>
                            </Route>
                        </Switch>
                    </div>
</Layout>
        
            <div className="footer" >
                <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
                    Cryptolate <br />
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/exchanges">
                        Exchanges
                    </Link>
                    <Link to="/news">
                        News
                    </Link>
                  
                </Space>
                </div>
            </div>
      </div>
    )
}

export default App
