import React,{useState} from 'react'
import bgimg from "../../assets/images/Frame.jpg";
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleFAQ = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null); // Close if the same question is clicked
    } else {
      setSelectedQuestion(index);
    }
  };
  const faqs = [
    {
      question: "What is a Payment Gateway?",
      answer:
        "A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers.",
    },
    {
      question:
        "Do I need to pay to Instapay even when there is no transaction going on in my business?",
      answer:
        "You may need to check with Instapay’s terms and conditions, but typically, no transactions mean no fees.",
    },
    {
      question: "What platforms does ACME payment gateway support?",
      answer:
        "ACME supports platforms such as WooCommerce, Shopify, and Magento.",
    },
    {
      question: "Does ACME provide international payments support?",
      answer:
        "Yes, ACME provides international payment support for a wide range of countries.",
    }
    ,
    
    
   
    {
      question:
        "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    }
    ,
    {
      question:
        "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    }
  ];
  return (
    <div className='min-h-screen flex flex-col' style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
      }}>
      <Navbar/>



      <div className='w-full lg:mt-16 xl:mt-20 mt-8 sm:mt-12 flex-grow  '>
      
      <div className="mx-4 sm:mx-2 lg:mx-16 px-12  xl:mx-20 shadow-md  md:mx-12 p-4  sm:p-8 lg:p-10 pb-12 py-4 rounded-xl pt-12 bg-white">
      <h2 className="text-[19px] inter_ff  font-bold mb-4">Frequently Asked Questions</h2>
      <div className=" pt-4">
        {faqs.map((faq, index) => (
          <div key={index} className="  rounded-md ">
            <button
              className="w-full  text-left border-b-2 border p-6 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex text-[15px] font-normal inter_ff items-center">
                <span
                  className={`w-3 h-3 rounded-full mr-3 ${
                    selectedQuestion === index ? "bg-blue-500" : "bg-orange-500 "
                  }`}
                ></span>
                {faq.question}
              </span>
              <span>
                {selectedQuestion === index ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                )}
              </span>
            </button>
            {selectedQuestion === index && (
              <div className="p-4 bg-blue-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Faq
