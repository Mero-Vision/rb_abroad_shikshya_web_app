import { mainApi } from "./mainApi";

export const settingsApi = mainApi.injectEndpoints({
   tagTypes: ["settings"],
   endpoints: (builder) => ({
      getSettings: builder.query({
         query: (params) => ({
            url: `/api/super-admin/site-settings`,
            params,
         }),
         providesTags: ["settings"],
      }),

      postSettingsUpdate: builder.mutation({
         query: (data) => ({
            url: `/api/super-admin/site-settings`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["settings"],
      }),
   }),
});

export const { useGetSettingsQuery, usePostSettingsUpdateMutation } =
   settingsApi;
