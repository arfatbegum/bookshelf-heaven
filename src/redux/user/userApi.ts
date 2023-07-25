import { api } from '../api/apiSlice';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
    addToFinishedBooks: builder.mutation({
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
    removeFromFinishedBooks: builder.mutation({
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
    getFinishedBooks: builder.query({
      query: () => '/users/finishedReading',
      providesTags: ['finishedReading'],
    }),
  }),
});

export const {
  useAddToWishListMutation,
  useGetWishlistQuery,
  useAddToReadingListMutation,
  useAddToFinishedBooksMutation,
  useGetReadingListQuery,
  useGetFinishedBooksQuery,
  useRemoveFromWishListMutation,
  useRemoveFromReadingListMutation,
  useRemoveFromFinishedBooksMutation,
} = userApi;
