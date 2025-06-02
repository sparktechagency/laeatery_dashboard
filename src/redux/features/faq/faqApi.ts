/* eslint-disable @typescript-eslint/no-explicit-any */
import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import TagTypes from "../../../constant/tagType.constant.js";

export const faqApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: () => ({
          url: "/dashboard/get-faqs",
          method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.faq],
    }),
    createFaq: builder.mutation({
      query: (data) => ({
        url: "/dashboard/add-faqs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.faq]
        }
        return []
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Faq is created successfully");
        } catch (err:any) {
          const status = err?.error?.status;
          if (status === 409) {
            ErrorToast(err?.error?.data?.message);
          } else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
    deleteFaq: builder.mutation({
      query: (id) => ({
        url: `/dashboard/delete-faqs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.faq]
        }
        return []
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Faq is deleted successfully");
        } catch (err:any) {
          const status = err?.error?.status;
          if (status === 404) {
            ErrorToast(err?.error?.data?.message);
          } else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
    updateFaq: builder.mutation({
      query: ({ id, data }) => ({
        url: `/dashboard/update-faqs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.faq]
        }
        return []
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
            SuccessToast("Faq is updated successfully");
        } catch (err:any) {
          const status = err?.error?.status;
          if (status === 404) {
            ErrorToast(err?.error?.data?.message);
          } else if (status === 409) {
            ErrorToast(err?.error?.data?.message);
          } else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
  }),
});


export const { useGetFaqsQuery, useCreateFaqMutation, useDeleteFaqMutation, useUpdateFaqMutation } = faqApi;