
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const waterApi = createApi({
    reducerPath: 'waterApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mateobernasconivagas.pythonanywhere.com',
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Token ${localStorage.getItem('token')}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getGarrafones: builder.query({query: () => '/garrafon/my/' }),
        getBotellas: builder.query({query: () => '/botella/my/' }),
        getMyWeek: builder.query({query: () => '/agua/myWeek/' }),
        getMyStadistics: builder.query({query: () => '/agua/myStadistics/' }),
    }),
});

export const {
    useGetGarrafonesQuery,
    useGetBotellasQuery,
    useGetMyWeekQuery,
    useGetMyStadisticsQuery,
} = waterApi;