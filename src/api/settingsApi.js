import { mainApi } from "./mainApi";

export const settingsApi = mainApi.injectEndpoints({
   tagTypes: ["settings", "countries"],
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

      // master data

      getCountries: builder.query({
         query: (params) => ({
            url: `/api/super-admin/master-data/country-list`,
            params,
         }),
         providesTags: ["countries"],
      }),
   }),
});

export const {
   useGetSettingsQuery,
   usePostSettingsUpdateMutation,
   useGetCountriesQuery,
} = settingsApi;
