import { apiSlice } from "../api/apiSlice.js";
import TagTypes from "../../../constant/tagType.constant.js";
import { IParam } from "../../../types/global.type.js";

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/dashboard/get_all_user",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.users],
    }),
    getTotal: builder.query({
      query: () => {
        return {
          url: `/dashboard/get_total_count`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.total],
    }),
  }),
});

export const { useGetUsersQuery, useGetTotalQuery } = dashboardApi;
