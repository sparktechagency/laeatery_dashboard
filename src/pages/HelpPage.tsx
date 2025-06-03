import CreateHelp from "../components/help/CreateHelp";
import UpdateHelp from "../components/help/UpdateHelp";
import EditorLoading from "../components/loader/EditorLoading";
import { useGetHelpQuery } from "../redux/features/help/helpApi";


const HelpPage = () => {
 const { data, isLoading, isSuccess, error} = useGetHelpQuery(undefined);
 const help = data?.data;
 console.log(help);


 if(isLoading){
  return <EditorLoading/>
 }
 if(!isLoading && error && !help?._id){
  return <CreateHelp/>
 }
 
 if(!isLoading && isSuccess && help?._id){
   return <UpdateHelp description={help?.description}/>
 }
 
};

export default HelpPage;
