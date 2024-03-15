import { useState } from "react";

interface Props {
  question: string;
  answer: string;
  index: number;
}
const FAQItem = ({ question, answer, index }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`w-full md:w-[90%] min-h-max h-18 float-right flex flex-col  border-[1px] border-bright relative`}
    >
      <div className="--box w-2 aspect-square bg-bright absolute -bottom-1 -right-1"></div>
      <div className="--box w-2 aspect-square bg-bright absolute -bottom-1 -left-1"></div>
      <div className="--box w-2 aspect-square bg-bright absolute -top-1 -left-1"></div>
      <div className="--box w-2 aspect-square bg-bright absolute -top-1 -right-1"></div>
      <section className="w-[100%]  text-xl font-grotesk font-medium text-bright p-2 flex justify-between overflow-hidden">
        <span className="text-sm">{index < 10 ? `0${index}` : index}</span>
        <span className="text-white w-[80%] text-sm md:text-[1rem]">
          {question}
        </span>
        <button
          type="button"
          className={`w-6 h-6 flex items-center justify-center ${
            isOpen
              ? " bg-secondary text-brightpurple"
              : " bg-white text-secondary"
          } rounded-full font-serif transition-all duration-100 ease-linear`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p
            className={`${
              isOpen ? "rotate-45" : ""
            }   transition-all duration-200 ease-linear`}
          >
            +
          </p>
        </button>
      </section>
      {isOpen && (
        <section className={`font-grotesk px-12 text-sm text-brightpurple`}>
          {answer}
        </section>
      )}
    </div>
  );
};

export default FAQItem;
