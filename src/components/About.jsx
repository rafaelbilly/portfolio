const About = () => {
  return (
    <section
      id="about"
      className="bg-primary relative -mt-20 md:-mt-0 z-20 w-full h-fit py-10"
    >
      <div className="wrapper text-white">
        <div
          className="border-t-2  border-l-2 border-r-2 border-white w-full h-fit pb-32 md:pb-0 md:h-96 rounded-[2rem] px-10 pt-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className="text-4xl font-bold">Meet Rafael,</h1>
          <p className="mt-4 text-2xl">
            I am a Software Developer with almost 2 years of experience
          </p>
          <p className="mt-10">
            My passion lies in crafting innovative solutions using MERN Stack,
            exploring the intricacies of Blockchain (Smart Contracts and
            Hyperledgers), venturing into cross-platform development, and
            delving into the realms of AI-models, whether it{"'"}s designing
            neural networks or seamlessly integrating cutting-edge transformers
            like openai, Falcon, and Langchain.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-10 -mt-20 gap-10">
          <div
            className="border-white border-2 flex  justify-center flex-col gap-2 items-center h-60 rounded-xl p-4"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="text-blue-400 text-[4rem] font-semibold">24+</h1>
            <h1 className="text-white te    xt-[3rem]">Projects</h1>
          </div>
          <div
            className="border-white border-2 flex  justify-center flex-col gap-2 items-center h-60 rounded-xl p-4"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <h1 className="text-blue-400 text-[4rem] font-semibold">3+</h1>
            <h1 className="text-white text-[2rem] text-center">
              Years Experience
            </h1>
          </div>{" "}
          <div
            className="border-white border-2 flex  justify-center flex-col gap-2 items-center h-60 rounded-xl p-4"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h1 className="text-blue-400 text-[4rem] font-semibold">5+</h1>
            <h1 className="text-white text-[2rem] text-center">
              Technologies Mastered
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
