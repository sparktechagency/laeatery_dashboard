/* eslint-disable @typescript-eslint/no-explicit-any */
import { setEmail, setOtp, setToken } from "../../../helper/SessionHelper.ts";
import { SuccessToast } from "../../../helper/ValidationHelper.ts";
import {apiSlice} from "../api/apiSlice.ts";
import { SetForgotError, SetLoginError, SetNewPasswordError, SetVerifyOtpError } from "./authSlice.ts";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(_arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    const token = res?.data?.data?.accessToken;
                    const role = res?.data?.data?.user?.authId?.role;
                    if(role==="ADMIN" || role ==="SUPER_ADMIN"){
                        setToken(token)
                        SuccessToast("Login Success")
                        setTimeout(()=>{
                            window.location.href="/"
                        }, 300)
                    }
                    else{
                      dispatch(SetLoginError("You are not admin!"));  
                    }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }catch(err:any) {                    
                    const status = err?.error?.status;
                    if(status === 404){
                        dispatch(SetLoginError("Could not Find this Email!"));
                    }
                    if(status === 400){
                        dispatch(SetLoginError("Wrong Password!"));
                    }
                    if(status === 500){
                        dispatch(SetLoginError("Something Went Wrong"));
                    }    
                }
            }
        }),
        forgotPasswordSendOtp: builder.mutation({
            query: (data) => ({
                url: "/auth/forgot-password",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                   // const res = await queryFulfilled;
                   //const status = res?.meta?.response?.status;
                   SuccessToast("OTP send success")
            
                }catch(err:any) {
                    const status = err?.error?.status;
                    if(status === 404) {
                        dispatch(SetForgotError("Could not Find this Email!"));
                    } else{
                        // console.log(err)
                    }
                }
            }
        }),
        forgotPasswordVerifyOtp: builder.mutation({
            query: (data) => ({
                url: "/auth/forgot-password-verify-otp",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    let status = res?.meta?.response?.status;
                }catch(err) {
                    const status = err?.error?.status;
                    let result = err?.error?.data?.data;
                    if(status === 400) {
                        dispatch(SetVerifyOtpError(result));
                    } else{
                        // console.log(err)
                    }
                }
            }
        }),
        createNewPassword: builder.mutation({
            query: (data) => ({
                url: "/auth/create-new-password",
                method: "POST",
                body: data
            }),
            async onQueryStarted(_arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    let status = res?.meta?.response?.status;
                    if(status === 200){
                        localStorage.clear()
                        // SuccessToast("Success");
                    }
                }catch(err) {
                    const status = err?.error?.status;
                    let result = err?.error?.data?.data;
                    if(status === 400) {
                        dispatch(SetNewPasswordError(result));
                    } else{
                        // console.log(err)
                    }
                }
            }
        }),
    }),
})


export const {useLoginMutation, useForgotPasswordSendOtpMutation, useForgotPasswordVerifyOtpMutation, useCreateNewPasswordMutation} = authApi;