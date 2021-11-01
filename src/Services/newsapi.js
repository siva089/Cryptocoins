import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl = `https://bing-news-search1.p.rapidapi.com`
const newsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'b4f794b2d8msh7fa20d72aa01bbfp1d412fjsndeea117e0aff'
};


const createRequest = (url) => ({ url, headers: newsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})


export const { useGetCryptoNewsQuery } = cryptoNewsApi