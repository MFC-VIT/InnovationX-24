import Pipeline from "../components/Pipeline";
const AboutClubs = () => {
  return (
    <div className="w-[100%] bg-gradient-to-b to-[rgba(0,0,0,0.2)]  from-[rgba(255,255,255,0.15)] min-h-screen rounded-t-[35px] md:rounded-t-[70px] text-white">
      <br />
      <br />
      <div className="font-grotesk text-4xl md:text-8xl tracking-wide font-semibold text-center">
        About Us
      </div>
      <div className="w-[100%] md:translate-x-[15%] my-12 mb-32">
        <div className="translate-x-[20%] md:translate-x-0">
          <Pipeline label={"Mozilla Firefox Club"}>
            <div className="text-lg md:text-6xl font-groteskb font-medium w-[50%] text-nowrap text-brightpurple">
              ---MOZILLA FIREFOX CLUB VIT---MOZILLA FIREFOX CLUB VIT---MOZILLA
              FIREFOX CLUB VIT---MOZILLA FIREFOX CLUB VIT---
            </div>
          </Pipeline>
        </div>
        <div className="description w-[90%] md:w-[75%] mx-auto md:m-0 font-grotesk mt-6 md:mt-6  text-justify text-[#e0e0e0] text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          repudiandae. Qui, quis unde. Asperiores architecto ullam obcaecati ea
          eligendi nesciunt natus facilis amet deleniti provident culpa,
          voluptate, dolores aliquid voluptatem exercitationem suscipit, hic in
          doloremque reiciendis. Ratione doloribus voluptate minus sunt quos quo
          perferendis placeat at nam doloremque, inventore suscipit aliquam enim
          consectetur iste tempore unde sapiente et. Laboriosam qui deserunt
          odit dolorum molestias dicta aspernatur, provident accusantium dolorem
          ducimus.
        </div>
      </div>
      <div className="w-[100%] md:-translate-x-[15%] my-12 mb-32">
        <div className="-translate-x-[20%] md:translate-x-0">
          <Pipeline shift={true} label={"Admark Club"}>
            <div className="text-lg md:text-6xl font-groteskb font-medium w-[50%] text-nowrap text-brightpurple">
              ---ADMARK VIT---ADMARK VIT---ADMARK VIT---ADMARK VIT---
            </div>
          </Pipeline>
        </div>
        <div className="description w-[90%] md:w-[75%] mx-auto md:m-0 md:mt-6 font-grotesk mt-6 text-[#e0e0e0] md:translate-x-[33%] text-justify text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          repudiandae. Qui, quis unde. Asperiores architecto ullam obcaecati ea
          eligendi nesciunt natus facilis amet deleniti provident culpa,
          voluptate, dolores aliquid voluptatem exercitationem suscipit, hic in
          doloremque reiciendis. Ratione doloribus voluptate minus sunt quos quo
          perferendis placeat at nam doloremque, inventore suscipit aliquam enim
          consectetur iste tempore unde sapiente et. Laboriosam qui deserunt
          odit dolorum molestias dicta aspernatur, provident accusantium dolorem
          ducimus.
        </div>
      </div>
    </div>
  );
};

export default AboutClubs;
