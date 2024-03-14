import Pipeline from "../components/Pipeline";
const AboutClubs = () => {
  return (
    <div className="w-[100%] bg-gradient-to-b to-[rgba(0,0,0,0.2)]  from-[rgba(255,255,255,0.15)] min-h-screen rounded-t-[70px] text-white">
      <br />
      <br />
      <div className="font-grotesk text-8xl font-bold text-center">
        About Us
      </div>
      <div className="w-[100%] translate-x-[15%] my-12 mb-32">
        <Pipeline label={"Mozilla Firefox Club"}>
          <div className="text-6xl font-groteskb font-medium w-[50%] text-nowrap text-brightpurple">
            ---MOZILLA FIREFOX CLUB VIT---MOZILLA FIREFOX CLUB VIT---MOZILLA
            FIREFOX CLUB VIT---MOZILLA FIREFOX CLUB VIT---
          </div>
        </Pipeline>
        <div className="description w-[75%] font-grotesk mt-6  text-justify text-[#e0e0e0]">
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
      <div className="w-[100%] -translate-x-[15%] my-12 mb-32">
        <Pipeline shift={true} label={"Admark Club"}>
          <div className="text-6xl font-groteskb font-medium w-[50%] text-nowrap text-brightpurple">
            ---ADMARK VIT---ADMARK VIT---ADMARK VIT---ADMARK VIT---
          </div>
        </Pipeline>
        <div className="description w-[75%] font-grotesk mt-6 text-[#e0e0e0] translate-x-[33%] text-justify">
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
