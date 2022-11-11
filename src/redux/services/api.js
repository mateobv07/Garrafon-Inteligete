
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

var test = "hello";
export const waterApi = createApi({
    reducerPath: 'waterApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mateobernasconivagas.pythonanywhere.com',
        //prepareHeaders: (headers) => {
            //headers.set('Authorization', `Token ${test}`);

          //  return headers;
        //},
    }),
    endpoints: (builder) => ({
        getGarrafones: builder.query({query: () => '/garrafon/' }),
    }),
});

export const {
    useGetGarrafonesQuery,
} = waterApi;