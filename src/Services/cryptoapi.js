import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseUrl =`https://coinranking1.p.rapidapi.com`
const cryptoApiHeaders= {
  
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'b4f794b2d8msh7fa20d72aa01bbfp1d412fjsndeea117e0aff'
    
};

const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query:(coindId)=>createRequest(`/coin/${coindId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinid,timePeriod}) => createRequest(`/coin/${coinid}/history/${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    })
})


export const { useGetCryptosQuery, useGetCryptoDetailsQuery,useGetExchangesQuery,useGetCryptoHistoryQuery}=cryptoApi