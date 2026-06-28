import { baseApi } from "../api";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all featured projects endpoint
    getAllFeaturedProjects: build.query({
      query: () => ({
        url: "/projects/featured/",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    // get project by slug endpoint
    getProjectBySlug: build.query({
      query: (slug) => ({
        url: `/projects/${slug}/`,
        method: "GET",
      }),
      providesTags: ["projects"],
    }),
  }),
});

export const { useGetAllFeaturedProjectsQuery, useGetProjectBySlugQuery } = projectApi;
