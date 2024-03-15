import ClipBox from "../components/ClipBox";
import Timeline from "../components/Timeline";
const March18 = [
  "Reporting & Registration: March 18, 9:00 - 9:30",
  "Opening Ceremony: March 18, 9:30 - 11:00",
  "Tracks & Ideation: March 18, 11:00 - 13:00",
  "Lunch: March 18, 13:00 - 14:00",
  "Phase 2: March 18, 14:00 - 15:00",
  "Review 1 by Admark: March 18, 15:15 - 17:30",
  "Phase 3: March 18, 17:30 - 20:00",
  "Dinner: March 18, 20:00 - 21:00",
  "Phase 4: March 18, 21:00 - 00:00",
];
const March19 = [
  "Fillers: March 19, 00:00 - 01:00",
  "Phase 5: March 19, 01:00 - 04:00",
  "Review 2: March 19, 04:00 - 07:00",
  "Breakfast: March 19, 07:00 - 09:00",
  "Phase 6: March 19, 09:00 - 13:00",
  "Lunch: March 19, 13:00 - 14:00",
  "Phase 7: March 19, 14:00 - 15:00",
  "Review 3: March 19, 15:00 - 17:00",
  "Closing Ceremony: March 19, 17:30 - 20:00",
];
const Itenary = () => {
  return (
    <div className="w-full py-12 md:py-20 relative">
      <img
        src="/images/floater3.webp"
        alt=""
        className="w-28 md:w-72 absolute top-4 md:top-[20%] right-2 md:left-4 floater"
      />
      <img
        src="/images/floater1.webp"
        alt=""
        className="w-28 md:w-72 absolute -bottom-12 md:bottom-12 right-4 floater2"
      />
      <div className="--container w-[90%] md:w-[80%] mx-auto flex flex-col text-white gap-4 md:gap-8">
        <ClipBox>
          <h1 className="text-4xl md:text-8xl font-grotesk font-medium">
            ITINERARY
          </h1>
        </ClipBox>
        <div className="font-grotesk text-xs md:text-sm flex flex-col md:flex-row md:justify-between">
          <span className="md:hidden block">
            Here is the detailed Itinerary for the best event that you have ever
            experienced
          </span>
          <span className="hidden md:block">
            Here is the detailed Itinerary for the
            <br />
            best event that you have ever
            <br />
            experienced
          </span>
          <div className="font-groteskb text-3xl md:text-6xl uppercase mt-2 md:mt-0">
            FOR 18th March
          </div>
        </div>
        <Timeline sampleData={March18} />
        <div className="font-groteskb text-3xl md:text-6xl uppercase mt-2 md:mt-0">
          FOR 18th March
        </div>
        <Timeline sampleData={March19} />
      </div>
    </div>
  );
};

export default Itenary;
