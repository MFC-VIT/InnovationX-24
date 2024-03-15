import ClipBox from "../components/ClipBox";
import TrackCard from "../components/TrackCard";
const trackData = [
  {
    img: "a.webp",
    title: "Education",
  },
  {
    img: "b.webp",
    title: "Healthcare",
  },
  {
    img: "c.webp",
    title: "Finance & Fintech",
  },
  {
    img: "d.webp",
    title: "Social Impact",
  },
  {
    img: "h.webp",
    title: "E-Commerce",
  },
  {
    img: "f.webp",
    title: "Advertisement & Marketing",
  },
];
const Tracks = () => {
  return (
    <div className="py-12 w-full">
      <div className="--container w-[90%] md:w-[80%] mx-auto flex flex-col text-white gap-4 md:gap-8">
        <ClipBox>
          <h1 className="text-4xl md:text-8xl font-grotesk font-medium ">
            TRACKS
          </h1>
        </ClipBox>
        <div className="font-grotesk text-xs md:text-sm flex flex-col md:flex-row md:justify-between">
          <span className="block md:hidden">
            Here is the clues to guarantee success in this quest
          </span>
          <span className="hidden md:block">
            Here is the clues to guarantee
            <br />
            success in this quest
          </span>
          <div className="font-groteskb text-3xl md:text-6xl uppercase mt-2 md:mt-0">
            FOR EXECUTION
          </div>
        </div>
      </div>
      <div className="--tracks-card w-[90%] md:w-[80%] mx-auto py-12 flex justify-center md:justify-start gap-[3.33%] flex-wrap">
        {trackData.map((track, i) => (
          <TrackCard title={track.title} img={track.img} key={i} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
