interface Props {
  heading: string;
  description: string;
}
const ContentBox = ({ heading, description }: Props) => {
  return (
    <div className="w-full p-8 text-content  font-grotesk bg-primary relative rounded-xl overflow-hidden">
      <div className="--heading text-5xl mb-8 font-bold relative z-[10]">
        {heading}
      </div>
      <div className="description leading-5 text-sm text-justify relative z-[10]">
        {description}
      </div>
    </div>
  );
};

export default ContentBox;
