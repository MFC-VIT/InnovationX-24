interface Props {
  heading: string;
  description: string;
}
const ContentBox = ({ heading, description }: Props) => {
  return (
    <div className="w-full p-4 md:p-8  font-grotesk bg-primary relative rounded-xl overflow-hidden text-white">
      <div className="--heading text-3xl md:text-5xl mb-8 font-bold relative z-[10]">
        {heading}
      </div>
      <div className="description leading-5 text-xs md:text-sm text-justify relative z-[10] text-[#e0e0e0]">
        {description}
      </div>
    </div>
  );
};

export default ContentBox;
