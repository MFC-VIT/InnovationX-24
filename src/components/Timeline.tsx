import { motion } from "framer-motion";

const Timeline = ({ sampleData }: { sampleData: string[] }) => {
  return (
    <div className="font-grotesk text-content relative my-12">
      <div className="line w-[2px] bg-light h-[110%] absolute top-1/2 md:left-1/2 md:-translate-x-1/2 left-5 -translate-y-1/2"></div>
      <div className="flex flex-col gap-4 md:gap-8 items-center">
        {sampleData.map((data, index) => (
          <>
            <div className="flex w-full text-sm">
              {index % 2 === 1 && (
                <motion.div
                  className="bg-brightpurple h-10 w-[98%] md:h-12 md:w-fit px-3 md:px-6 pl-10 md:pr-12 py-1 md:py-2 flex  items-center rounded-lg rounded-r-lg rounded-l-none md:rounded-l-lg md:rounded-r-none md:-translate-x-[50%] mx-auto text-xs text-nowrap relative left-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {data}
                </motion.div>
              )}
              <motion.div
                className="h-10 md:h-12 aspect-square rounded-lg  bg-bright absolute md:left-1/2 md:-translate-x-1/2 z-[50] flex justify-center items-center "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {index + 1}
              </motion.div>
              {index % 2 === 0 && (
                <motion.div
                  className="bg-light   h-10 md:h-12 w-[98%] md:w-fit px-3 md:px-6 pl-12 md:pl-12 py-1 md:py-2 flex items-center rounded-lg rounded-l-none md:translate-x-[50%] mx-auto text-xs text-nowrap relative left-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {data}
                </motion.div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
