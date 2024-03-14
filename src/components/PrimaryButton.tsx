interface Props {
  label: string;
  link: string;
}
const PrimaryButton = ({ label, link }: Props) => {
  return (
    <a href={link} className="flex h-10">
      <div className="px-4 py-2 rounded-lg bg-bright font-grotesk text-lg font-medium">
        {label}
      </div>
      <div className="bg-[#fac493] rounded-full flex items-center justify-center h-full aspect-square">
        <img
          src="/images/arrow.png"
          alt="arrow"
          className="w-4 h-auto -rotate-45"
        />
      </div>
    </a>
  );
};

export default PrimaryButton;
