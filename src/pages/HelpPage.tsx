import CreateHelp from "../components/help/CreateHelp";
import UpdateHelp from "../components/help/UpdateHelp";
import EditorLoading from "../components/loader/EditorLoading";
import { useGetPrivacyPolicyQuery } from "../redux/features/policy/policyApi";


const PrivacyPolicyPage = () => {
 const { data, isLoading, isSuccess, error} = useGetPrivacyPolicyQuery(undefined);
 const privacy = data?.data;


 if(isLoading){
  return <EditorLoading/>
 }
 if(!isLoading && error && !privacy?._id){
  return <CreateHelp/>
 }
 
 if(!isLoading && isSuccess && privacy?._id){
   return <UpdateHelp description={privacy?.description}/>
 }
 
};

export default PrivacyPolicyPage;
