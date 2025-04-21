import { FaTrash } from "react-icons/fa";

const faqs = [
  {
    question: "How do I find restaurants on LAEATERY?",
    answer:
      "You can search by vibe, cuisine, or neighborhood — or explore trending spots on the homepage. Use filters to refine your preferences! Enjoy and explore!",
  },
  {
    question: "Can I book a table directly from the site?",
    answer:
      'Yes! Most restaurants have a "Book Now" button that links to OpenTable or their own reservation system.',
  },
  {
    question: "What is a Trend Score?",
    answer:
      "Our Trend Score shows how popular a restaurant is in real time — based on searches, bookings, and saves. Higher = hotter right now.",
  },
  {
    question: "Are all restaurants in Los Angeles?",
    answer:
      "Yes! We focus exclusively on the best dining experiences in Los Angeles — from Downtown to Venice Beach.",
  },
];

const FaqsPage = () => {
  return (
    <div className="p-6 mx-auto bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Question no: {index + 1}
                </p>
                <h3 className="font-semibold text-gray-800">
                  {faq.question}
                </h3>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <FaTrash />
              </button>
            </div>
            <div className="mt-3">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          + Add FAQ
        </button>
      </div>
    </div>
  );
};

export default FaqsPage;
