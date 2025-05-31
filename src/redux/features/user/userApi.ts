/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {apiSlice} from "../api/apiSlice.js";
import TagTypes from "../../../constant/tagType.constant.js";
import { SetUser } from "./userSllice.js";
import { ErrorToast } from "../../../helper/ValidationHelper.js";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/auth/admin/profile",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.me],
      async onQueryStarted(_arg, { queryFulfilled, dispatch}) {
        try {
          const res = await queryFulfilled;
          const data = res?.data?.data;
          dispatch(SetUser(data))
        } catch (err:any) {
         ErrorToast("Server error is occured");
        }
      },
    }),
  }),
});


export const { useGetMeQuery } = userApi;