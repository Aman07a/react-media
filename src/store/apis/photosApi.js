import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photosApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({}),
      addPhoto: builder.migration({}),
      removePhoto: builder.migration({}),
    };
  },
});
