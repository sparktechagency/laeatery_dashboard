import EditorLoading from "../components/loader/EditorLoading";
import CreateAboutUs from "../components/policy/CreateAboutUs";
import UpdateAboutUs from "../components/policy/UpdateAboutUs";
import { useGetAboutUsQuery } from "../redux/features/policy/policyApi";


const AboutPage = () => {
 const { data, isLoading, isSuccess, error} = useGetAboutUsQuery(undefined);
 const about = data?.data;


 if(isLoading){
  return <EditorLoading/>
 }
 if(!isLoading && error && !about?._id){
  return <CreateAboutUs/>
 }
 
 if(!isLoading && isSuccess && about?._id){
   return <UpdateAboutUs description={about?.description}/>
 }
 
};

export default AboutPage;
