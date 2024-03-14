import { motion } from "framer-motion";
const sampleData = [
  "Registration Opens: February 1, 2024",
  "Registration Closes: February 28, 2024",
  "Team Formation: March 1 - March 7, 2024",
  "Hackathon Kickoff: March 10, 2024 at 9:00 AM",
  "Idea Pitching: March 10, 2024 at 10:00 AM",
  "Development Phase: March 10 - March 12, 2024",
  "Mentorship Sessions: March 10 - March 11, 2024",
  "Submission Deadline: March 12, 2024 at 5:00 PM",
  "Judging Period: March 13 - March 14, 2024",
  "Winner Announcement: March 15, 2024 at 12:00 PM",
];

const Timeline = () => {
  return (
    <div className="font-grotesk text-content relative my-12">
      <div className="line w-[2px] bg-light h-[110%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="flex flex-col gap-8 items-center">
        {sampleData.map((data, index) => (
          <>
            <div className="flex w-full text-sm">
              {index % 2 === 1 && (
                <motion.div
                  className="bg-brightpurple h-12 w-fit px-6 pr-12 py-2 flex items-center rounded-lg rounded-r-none -translate-x-[50%] mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {data}
                </motion.div>
              )}
              <motion.div
                className="w-12 h-12 rounded-lg  bg-bright absolute left-1/2 -translate-x-1/2 z-[50] flex justify-center items-center "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {index + 1}
              </motion.div>
              {index % 2 === 0 && (
                <motion.div
                  className="bg-light  h-12 w-fit px-6 pl-12 py-2 flex items-center rounded-lg rounded-l-none translate-x-[50%] mx-auto"
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
