import PrimaryButton from "../components/PrimaryButton";
import FAQItem from "../components/FAQItem";
const faqData = [
  {
    question: "How many participants per team?",
    answer: "No. of team members can vary from 2 to 4.",
  },
  {
    question: "How many reviews?",
    answer:
      "Three Reviews: One Business, Second Technical and Third is amalgamation of both.",
  },
  {
    question:
      "Do I need to have a team to participate, or can I join as an individual?",
    answer: "No, we will accept only fresh projects.",
  },
  {
    question: "What aspects will be looked for in Review 1?",
    answer: "Idea implementation and design.",
  },
  {
    question: "What aspects will be looked for in Review 2?",
    answer:
      "Techinal Implementation, Team management and functioning of website.",
  },
  {
    question: "Will participants be allowed to leave the venue during night?",
    answer: "Participants have to stay in the event hall during the night.",
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
          <PrimaryButton
            label="CONTACT US"
            link="https://www.instagram.com/mfc_vit/"
          />
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
