import ContentBox from "../components/ContentBox";

const About = () => {
  return (
    <div className="w-full py-20">
      <div className="--container w-[80%] bg-gradient-to-b from-[rgba(0,0,0,0.2)]  to-[rgba(255,255,255,0.23)] mx-auto flex justify-between items-center  gap-8 py-8 px-20 rounded-[20px] ">
        <div className="w-[40%] flex flex-col gap-4">
          <img
            src="/images/about.jpg"
            alt=""
            className="w-full rounded-[50px]"
          />
          <div className="--pop-up flex flex-col gap-2">
            <div className="info px-2 w-[70%] py-2 bg-white rounded-lg rounded-br-none text-[0.5rem] self-end ">
              Brace yourselves for an unforgettable experience featuring an
              impressive lineup of enthusiastic speakers who will ignite your
              curiosity and leave you inspired.
            </div>
            <div className="px-4 py-2 bg-white rounded-lg w-fit flex items-center justify-center font-medium text-[0.6rem] self-end">
              InnovationX
            </div>
          </div>
        </div>
        <ContentBox
          heading="About InnovationX"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo dolorem, at aliquid molestiae temporibus aspernatur explicabo officia mollitia accusantium consequuntur consequatur consectetur voluptatem sed minima quas, iusto dolor omnis ducimus corporis quidem fuga! Impedit asperiores quam reprehenderit veritatis minima, incidunt, quas nesciunt eveniet earum voluptas quaerat in ea ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo dolorem, at aliquid molestiae temporibus aspernatur explicabo officia mollitia accusantium consequuntur consequatur consectetur voluptatem sed minima quas, iusto dolor omnis ducimus corporis quidem fuga! Impedit asperiores quam reprehenderit veritatis minima, incidunt, quas nesciunt eveniet earum voluptas quaerat in ea ut."
          }
        />
      </div>
    </div>
  );
};

export default About;
