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
    img: "e.webp",
    title: "AR/VR",
  },
  {
    img: "f.webp",
    title: "IoT",
  },
  {
    img: "g.webp",
    title: "Gaming",
  },
  {
    img: "h.webp",
    title: "E-Commerce",
  },
];
const Tracks = () => {
  return (
    <div className="py-12 w-full">
      <div className="--container w-[80%] mx-auto flex flex-col text-white gap-8">
        <ClipBox>
          <h1 className="text-8xl font-grotesk font-medium ">TRACKS</h1>
        </ClipBox>
        <div className="font-grotesk text-sm flex justify-between">
          <span>
            Here is the clues to guarantee
            <br />
            success in this quest
          </span>
          <div className="font-groteskb text-6xl uppercase">FOR EXECUTION</div>
        </div>
      </div>
      <div className="--tracks-card w-[80%] mx-auto py-12 flex justify-start gap-[3.33%]  flex-wrap">
        {trackData.map((track, i) => (
          <TrackCard title={track.title} img={track.img} key={i} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
