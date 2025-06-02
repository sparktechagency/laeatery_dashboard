import EditorLoading from "../components/loader/EditorLoading";
import CreatePrivacyPolicy from "../components/policy/CreatePrivacyPolicy";
import UpdatePrivacyPolicy from "../components/policy/UpdatePrivacyPolicy";
import { useGetPrivacyPolicyQuery } from "../redux/features/policy/policyApi";


const PrivacyPolicyPage = () => {
 const { data, isLoading, isSuccess, error} = useGetPrivacyPolicyQuery(undefined);
 const privacy = data?.data;


 if(isLoading){
  return <EditorLoading/>
 }
 if(!isLoading && error && !privacy?._id){
  return <CreatePrivacyPolicy/>
 }
 
 if(!isLoading && isSuccess && privacy?._id){
   return <UpdatePrivacyPolicy description={privacy?.description}/>
 }
 
};

export default PrivacyPolicyPage;
