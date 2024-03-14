import ClipBox from "../components/ClipBox";
import Timeline from "../components/Timeline";
const Itenary = () => {
  return (
    <div className="w-full py-20">
      <div className="--container w-[80%] mx-auto flex flex-col text-white gap-8">
        <ClipBox>
          <div className="text-8xl font-grotesk font-medium">ITINERARY</div>
        </ClipBox>
        <div className="font-grotesk text-sm flex justify-between">
          <span>
            Here is the detailed Itinerary for the
            <br />
            best event that you have ever
            <br />
            experienced
          </span>
          <div className="font-groteskb text-6xl uppercase">FOR 18th March</div>
        </div>
        <Timeline />
      </div>
    </div>
  );
};

export default Itenary;
