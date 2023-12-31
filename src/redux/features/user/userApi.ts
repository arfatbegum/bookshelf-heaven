import { api } from '@/redux/api/apiSlice';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => '/users/my-profile',
      providesTags: ['myProfile'],
    }),
    addToWishList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToWishlist/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['wishlist'],
    }),
    addToReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToReadingList/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['wishlist', 'readingList'],
    }),
    addToFinishedReading: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToFinishedReading/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['readingList', 'finishedReading'],
    }),
    removeFromWishList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromWishlist/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['wishlist'],
    }),
    removeFromReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromReadingList/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['readingList'],
    }),
    removeFromFinishedReading: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromFinishedReading/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['finishedReading'],
    }),
    getWishlist: builder.query({
      query: () => '/users/wishlist',
      providesTags: ['wishlist'],
    }),
    getReadingList: builder.query({
      query: () => '/users/readingList',
      providesTags: ['readingList'],
    }),
    getFinishedReading: builder.query({
      query: () => '/users/finishedReading',
      providesTags: ['finishedReading'],
    }),
  }),
});

export const {
  useAddToWishListMutation,
  useGetWishlistQuery,
  useGetMyProfileQuery,
  useAddToReadingListMutation,
  useAddToFinishedReadingMutation,
  useGetReadingListQuery,
  useGetFinishedReadingQuery,
  useRemoveFromWishListMutation,
  useRemoveFromReadingListMutation,
  useRemoveFromFinishedReadingMutation,
} = userApi;
