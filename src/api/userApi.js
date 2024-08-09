import { mainApi } from "./mainApi";

export const userApi = mainApi.injectEndpoints({
   tagTypes: ["user", "userPassowrdUpdate"],
   endpoints: (builder) => ({
      getSingleUser: builder.query({
         query: (id) => ({
            url: `/api/super-admin/user/${id}`,
         }),
         providesTags: ["user"],
      }),

      postUserUpdate: builder.mutation({
         query: ({ data, id }) => ({
            url: `/api/super-admin/user/${id}`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) => (error ? [] : ["user"]),
      }),
      postUserPasswordUpdate: builder.mutation({
         query: (data) => ({
            url: `/api/super-admin/change-password`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["userPassowrdUpdate"],
      }),
   }),
});

export const {
   useGetSingleUserQuery,
   usePostUserUpdateMutation,
   usePostUserPasswordUpdateMutation,
} = userApi;
