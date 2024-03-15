import PrimaryButton from "../components/PrimaryButton";
import Pipeline from "../components/Pipeline";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="--content text-white w-fit mx-auto h-full flex flex-col justify-center items-center gap-4 -mt-32 md:-mt-12 relative">
        <motion.h1
          className="text-5xl md:text-8xl font-grotesk font-medium"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          viewport={{ once: true }}
        >
          JOIN US
        </motion.h1>
        <div className="w-full absolute top-[28%] md:top-[40%] left-[60%] md:left-[75%]">
          <Pipeline label="" small={true} color={"#ff7a01"}>
            <p className="text-xs text-[#e0e0e0]">-BUILD-THE-FUTURE-</p>
          </Pipeline>
        </div>
        <motion.h1
          className="text-5xl md:text-8xl font-groteskb"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          viewport={{ once: true }}
        >
          FOR
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-8xl font-grotesk font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          viewport={{ once: true }}
        >
          InnovationX
        </motion.h1>
        <div className="w-full absolute bottom-[25%] md:bottom-[28%] right-[5%] md:right-[10%]">
          <Pipeline label="" small={true}>
            <p className="text-xs text-[#e0e0e0]">-DESIGNERS-DEVELOPERS</p>
          </Pipeline>
        </div>
        <div className="mt-6">
          <PrimaryButton label="REGISTER FOR THE EVENT" link="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
