import CreateFaqModal from "../components/modal/faq/CreateFaqModal";
import { FaqList } from "../components/faqs/FaqList";


const FaqsPage = () => {
  return (
    <div className="p-6 mx-auto h-full bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">FAQs</h2>
      {/* FAQ List */}
      <FaqList/>
      <div className="mt-8 text-center bottom-0 flex justify-center items-center">
        <CreateFaqModal />
      </div>
    </div>
  );
};

export default FaqsPage;
