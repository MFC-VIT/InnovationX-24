import PrimaryButton from "../components/PrimaryButton";
const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="--content text-white w-fit mx-auto h-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-8xl font-grotesk font-medium">JOIN US</h1>
        <h1 className="text-8xl font-groteskb">FOR</h1>
        <h1 className="text-8xl font-grotesk font-bold">InnovationX</h1>
        <div className="mt-6">
          <PrimaryButton label="REGISTER FOR THE EVENT" link="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
