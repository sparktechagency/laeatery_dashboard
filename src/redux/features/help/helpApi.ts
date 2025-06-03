/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from "../api/apiSlice.js";
import { ErrorToast, SuccessToast } from "../../../helper/ValidationHelper.js";
import TagTypes from "../../../constant/tagType.constant.js";

export const helpApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHelp: builder.query({
      query: () => {
        return {
          url: `/dashboard/get_help_support`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.help],
    }),
    createUpdateHelp: builder.mutation({
      query: ({data}) => ({
        url: `/dashboard/addupdate_help_support`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.help];
        }
        return [];
      },
      async onQueryStarted({ message }, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast(`Help is ${message} successfully`);
        } catch (err:any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
  }),
});

export const {
  useGetHelpQuery,
  useCreateUpdateHelpMutation
} = helpApi;
