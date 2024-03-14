interface Props {
  label: string;
  link: string;
  small?: boolean;
}
const PrimaryButton = ({ label, link, small }: Props) => {
  return (
    <a href={link} className={`flex ${small ? "h-8" : "h-10"} `}>
      <div
        className={`min-w-fit rounded-lg bg-bright font-grotesk  font-medium ${
          small ? "text-xs flex items-center px-3" : "text-lg px-4 py-2"
        }`}
      >
        {label}
      </div>
      <div className="bg-[#fac493] rounded-full flex items-center justify-center h-full aspect-square">
        <img
          src="/images/arrow.png"
          alt="arrow"
          className={`${small ? "w-3" : "w-4"} h-auto -rotate-45`}
        />
      </div>
    </a>
  );
};

export default PrimaryButton;
