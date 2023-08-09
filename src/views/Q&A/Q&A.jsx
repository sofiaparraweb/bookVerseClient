import React, { useState } from "react";
import "./Q&A.css";

const Qa = () => {
  const questionsAndAnswers = [
    {
      question: "What is an eBook?",
      answer:
        "An eBook is an electronic version of a book that can be read on digital devices such as eReaders, tablets, or smartphones.",
    },
    {
      question: "How do I purchase an eBook?",
      answer:
        "To purchase an eBook, simply browse our collection, select the eBook you want, and click on the 'Buy Now' or 'Add to Cart' button. Follow the checkout process to complete your purchase.",
    },
    {
      question: "What formats are available for the eBooks?",
      answer:
        "Our eBooks are available in popular formats such as PDF, EPUB, MOBI, AZW3, and CBZ.",
    },
    {
      question: "Can I read eBooks on my Kindle device?",
      answer:
        "Yes, most of our eBooks are compatible with Kindle devices. Just make sure to choose the Kindle-compatible format (MOBI or AZW3) when purchasing.",
    },
    {
      question: "Can I read eBooks on my iPad or Android tablet?",
      answer:
        "Absolutely! You can read our eBooks on any tablet that supports eBook formats like EPUB or PDF.",
    },
    {
      question: "Is there a limit to the number of eBooks I can purchase?",
      answer: "No, there's no limit! You can purchase as many eBooks as you like.",
    },
    {
      question: "How do I access my purchased eBooks?",
      answer:
        "Once you complete the purchase, you will receive an email with a download link. You can also access your purchased eBooks from your account on our website.",
    },
    {
      question: "Can I get a refund for an eBook I purchased?",
      answer: "We don't offer refunds on eBooks because you can have them within minutes!",
    },
    {
      question: "Are there any special offers or discounts available?",
      answer:
        "Yes, we frequently run promotions and offer discounts on selected eBooks. Keep an eye on our website or subscribe to our newsletter to stay updated.",
    },
    {
      question: "Can I share my purchased eBooks with others?",
      answer:
        "No, sharing eBooks with others is a violation of copyright laws. Each eBook is intended for individual use only.",
    },
    {
      question: "Do you offer gift cards for eBooks?",
      answer: "Yes, we offer gift cards that can be redeemed for eBooks. They make great presents for book lovers!",
    },
    {
      question: "Can I access my eBooks offline?",
      answer: "Yes, once you download the eBook to your device, you can access it offline without an internet connection.",
    },
    {
      question: "Are there any restrictions on copying or printing eBooks?",
      answer:
        "Some eBooks may have copy and print restrictions, depending on the publisher's settings. Please check the eBook details for more information.",
    },
    {
      question: "Can I return an eBook if I accidentally purchased the wrong one?",
      answer:
        "We generally do not accept returns for accidental purchases. Please make sure to review your cart before completing the purchase.",
    },
    {
      question: "How can I contact customer support if I have an issue with my eBook purchase?",
      answer:
        "You can contact our customer support team through the 'Contact Us' section on our website or by emailing bookversesupport@gmail.com.",
    },
  ];

  const [isOpen, setIsOpen] = useState(Array(questionsAndAnswers.length).fill(false));

  const toggleAnswer = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className="qa-container">
       <h2 className="qa-title">Curious Minds: Ask Away!</h2>
      <p className="qa-subtitle">Can't find your answer here? Shoot us an email!</p>
      {questionsAndAnswers?.map((qa, index) => (
        <div key={index} className="qa-item">
          <div className="question" onClick={() => toggleAnswer(index)}>
            <span>{qa.question}</span>
            <span className={isOpen[index] ? "arrow-up" : "arrow-down"}></span>
          </div>
          {isOpen[index] && <div className="answer">{qa.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Qa;
