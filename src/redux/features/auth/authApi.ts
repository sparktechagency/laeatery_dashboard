import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {setEmail, setOtp, setToken, } from "../../../helper/SessionHelper.js";
import {SetForgotError, SetLoginError, SetNewPasswordError, SetRegisterError, SetVerifyOtpError} from "./authSlice.js";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    const token = res?.data?.data?.accessToken;
                    setToken(token)
                    SuccessToast("Login Success")
                    // console.log(res?.meta?.response?.status);
                    // if(res?.data?.message === "success"){
                    //     let MyToken = res.data['token'];
                    //     setToken(MyToken);
                    //     SuccessToast("Login Success");
                    //     setTimeout(()=>{
                    //         window.location.href="/";
                    //     },500)
                    // }
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
        forgotPasswordVerifyEmail: builder.mutation({
            query: (data) => ({
                url: "/auth/forgot-password-verify-email",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    let status = res?.meta?.response?.status;
                    if(status === 200){
                        setEmail(arg.email)
                        // SuccessToast("Success");
                    }
                }catch(err) {
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
                    if(status === 200){
                        setOtp(arg.otp)
                        // SuccessToast("Success");
                    }
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
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
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


export const {useLoginMutation, useForgotPasswordVerifyEmailMutation, useForgotPasswordVerifyOtpMutation, useCreateNewPasswordMutation} = authApi;