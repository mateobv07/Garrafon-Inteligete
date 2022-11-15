
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const waterApi = createApi({
    reducerPath: 'waterApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mateobernasconivagas.pythonanywhere.com',
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Token ${'63cc22aacd5a46737f5267e97a26b09b8bd7e312'}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getGarrafones: builder.query({query: () => '/garrafon/my/' }),
        getBotellas: builder.query({query: () => '/botella/my/' }),
        getMyWeek: builder.query({query: () => '/agua/myWeek/' }),
    }),
});

export const {
    useGetGarrafonesQuery,
    useGetBotellasQuery,
    useGetMyWeekQuery,
} = waterApi;