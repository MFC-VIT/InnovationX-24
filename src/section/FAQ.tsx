import PrimaryButton from "../components/PrimaryButton";
import FAQItem from "../components/FAQItem";
const faqData = [
  {
    question: "Can I work on my existing projects during a hackathon?",
    answer: "No, we will accept only fresh projects.",
  },
  {
    question: "What should I bring to a hackathon?",
    answer: "No, we will accept only fresh projects.",
  },
  {
    question:
      "Do I need to have a team to participate, or can I join as an individual?",
    answer: "No, we will accept only fresh projects.",
  },
  {
    question: "Can anyone participate in a hackathon?",
    answer: "No, we will accept only fresh projects.",
  },
  {
    question: "Is there a parking facility available for participants?",
    answer: "No, we will accept only fresh projects.",
  },
  {
    question: "Can I use open-source libraries or frameworks in my project?",
    answer: "No, we will accept only fresh projects.",
  },
  {
    question:
      "Are there any restrictions on the programming languages or technologies I can use?",
    answer: "No, we will accept only fresh projects.",
  },
  {
    question: "Can I use hardware or external devices in my project?",
    answer: "No, we will accept only fresh projects.",
  },
];
const FAQ = () => {
  return (
    <div className="w-full py-20">
      <div className="container w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        <div className="w-full md:w-[50%] text-white font-grotesk flex flex-col gap-4">
          <h1 className="text-xl md:text-4xl">
            These are some questions that are often asked.
          </h1>
          <span className="text-sm">
            Do you have another question that is not listed here? Or do you want
            to ask us about anything?
          </span>
          <PrimaryButton label="CONTACT US" link="/" />
        </div>
        <div className="w-full md:w-[50%]">
          {faqData.map((faq, i) => (
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              index={i + 1}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
