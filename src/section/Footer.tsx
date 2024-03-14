import PrimaryButton from "../components/PrimaryButton";
const Footer = () => {
  return (
    <div className="w-full py-20">
      <div className="w-[80%] mx-auto flex justify-between">
        <div className="w-[50%] text-white font-grotesk ">
          <section className="w-[70%] flex flex-col items-start gap-4">
            <h1 className="text-2xl">
              These are some questions that are often asked.
            </h1>
            <span className="text-xs w-[70%]">
              Do you have another question that is not listed here? Or do you
              want to ask us about anything?
            </span>
            <PrimaryButton label="VISIT OUR INSTAGRAM" link="/" small={true} />
          </section>
        </div>
        <div className="w-[50%]">
          <h1 className="text-2xl text-white font-grotesk">
            Follow Us On Social Media
          </h1>
          <section className="flex gap-2 mt-4">
            <span className="w-10 h-10 p-2 bg-bright rounded-lg hover:scale-[90%] transition-all duration-200 ease-linear">
              <img
                src="/images/facebook.png"
                alt="facebook"
                className="invert"
              />
            </span>
            <span className="w-10 h-10 p-2 bg-bright rounded-lg hover:scale-[90%] transition-all duration-200 ease-linear">
              <img src="/images/twitter.png" alt="twitter" className="invert" />
            </span>
            <span className="w-10 h-10 p-2 bg-bright rounded-lg hover:scale-[90%] transition-all duration-200 ease-linear">
              <img
                src="/images/linkedin.png"
                alt="linkedin"
                className="invert"
              />
            </span>
            <span className="w-10 h-10 p-2 bg-bright rounded-lg hover:scale-[90%] transition-all duration-200 ease-linear">
              <img
                src="/images/instagram.png"
                alt="instagram"
                className="invert"
              />
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
