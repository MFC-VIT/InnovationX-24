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
          The Mozilla Firefox Club VIT, Vellore, is a vibrant student developers
          community at VIT, with a rich six-year history and a team of 1000+
          core members. We foster a familial atmosphere, dedicated to
          translating ideas into reality and enhancing technical skills across
          various Engineering & Technology fields. Our global reach includes a
          diverse audience from over 15 countries. With a dedicated executive
          board of 16 and four mentors, we acknowledge the invaluable
          contributions of our faculty coordinator, executive board, mentor
          team, and industry leaders. Special recognition is extended to active
          club members positively impacting college development. MFC-VIT' s
          mission is to uplift, inspire, and educate members, empowering them to
          achieve success in their ambitions and dreams.
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
          AdMark, VIT Vellore's Marketing & Advertising Club, is your one-stop
          shop to ignite your marketing passion. Collaborate with a diverse
          group of students who share your love for creativity, strategy, and
          innovation. Develop your skills through workshops led by industry
          professionals and faculty, covering everything from social media
          marketing to consumer behavior. Showcase your talents and network with
          peers at our marketing-themed competitions and events. AdMark - where
          marketing minds meet and the future of the industry is ignited.
        </div>
      </div>
    </div>
  );
};

export default AboutClubs;
