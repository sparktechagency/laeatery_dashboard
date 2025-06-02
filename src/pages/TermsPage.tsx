import EditorLoading from "../components/loader/EditorLoading";
import CreateTermsCondition from "../components/policy/CreateTermsCondition";
import UpdateTermsCondition from "../components/policy/UpdateTermsCondition";
import { useGetTermsConditionsQuery } from "../redux/features/policy/policyApi";


const TermsConditionPage = () => {
 const { data, isLoading, isSuccess, error} = useGetTermsConditionsQuery(undefined);
 const terms = data?.data;


 if(isLoading){
  return <EditorLoading/>
 }
 if(!isLoading && error && !terms?._id){
  return <CreateTermsCondition/>
 }
 
 if(!isLoading && isSuccess && terms?._id){
   return <UpdateTermsCondition description={terms?.description}/>
 }
 
};

export default TermsConditionPage;
