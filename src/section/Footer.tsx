import PrimaryButton from "../components/PrimaryButton";
const Footer = () => {
  return (
    <div className="w-full py-20">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row md:justify-between gap-6 md:gap-0">
        <div className="w-full md:w-[50%] text-white font-grotesk ">
          <section className="w-full md:w-[70%] flex flex-col items-start gap-4">
            <h1 className="text-xl md:text-2xl">
              These are some questions that are often asked.
            </h1>
            <span className="text-xs w-full md:w-[70%]">
              Do you have another question that is not listed here? Or do you
              want to ask us about anything?
            </span>
            <PrimaryButton
              label="VISIT OUR INSTAGRAM"
              link="https://www.instagram.com/mfc_vit/"
              small={true}
            />
          </section>
        </div>
        <div className="w-full md:w-[50%]">
          <h1 className="text-xl md:text-2xl text-white font-grotesk">
            Follow Us On Social Media
          </h1>
          <section className="flex gap-2 mt-2 md:mt-4">
            <span className="w-8 md:w-10 aspect-square p-1 md:p-2 bg-bright rounded-lg hover:scale-[90%] transition-all duration-200 ease-linear">
              <a href="https://www.facebook.com/mfcvit/">
                <img
                  src="/images/facebook.png"
                  alt="facebook"
                  className="invert"
                />
              </a>
            </span>
            {/* <span className="w-8 md:w-10 aspect-square p-1 md:p-2 bg-bright rounded-lg hover:scale-[90%] transition-all duration-200 ease-linear">
              <img src="/images/twitter.png" alt="twitter" className="invert" />
            </span> */}
            <span className="w-8 md:w-10 aspect-square p-1 md:p-2 bg-bright rounded-lg hover:scale-[90%] transition-all duration-200 ease-linear">
              <a href="https://in.linkedin.com/company/mfcvit">
                <img
                  src="/images/linkedin.png"
                  alt="linkedin"
                  className="invert"
                />
              </a>
            </span>
            <span className="w-8 md:w-10 aspect-square p-1 md:p-2 bg-bright rounded-lg hover:scale-[90%] transition-all duration-200 ease-linear">
              <a href="https://www.instagram.com/mfc_vit/">
                <img
                  src="/images/instagram.png"
                  alt="instagram"
                  className="invert"
                />
              </a>
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
