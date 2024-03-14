interface Props {
  img: string;
  title: string;
}
const TrackCard = ({ img, title }: Props) => {
  return (
    <div className="border-style w-[30%] aspect-square p-4 border-dashed flex flex-col gap-4 text-white  mb-8 relative group hover:border-light transition-all duration-200 ease-linear  hover:scale-[98%]">
      <span className="w-8 h-8 flex justify-center items-center font-grotesk  text-2xl absolute -top-4 -left-4 group-hover:scale-150 transition-all duration-200 ease-linear group-hover:text-bright">
        +
      </span>
      <span className="w-8 h-8 flex justify-center items-center font-grotesk  text-2xl absolute -top-4 -right-4 group-hover:scale-150 transition-all duration-200 ease-linear group-hover:text-bright">
        +
      </span>
      <span className="w-8 h-8 flex justify-center items-center font-grotesk  text-2xl absolute -bottom-4 -right-4 group-hover:scale-150 transition-all duration-200 ease-linear group-hover:text-bright">
        +
      </span>
      <span className="w-8 h-8 flex justify-center items-center font-grotesk  text-2xl absolute -bottom-4 -left-4 group-hover:scale-150 transition-all duration-200 ease-linear group-hover:text-bright">
        +
      </span>
      <div className="w-full h-[80%]  rounded-xl p-8 flex justify-center">
        <img src={`/images/${img}`} alt={title} className="h-full w-auto" />
      </div>
      <div className="title font-grotesk text-2xl font-bold text-center">
        {title}
      </div>
    </div>
  );
};

export default TrackCard;
