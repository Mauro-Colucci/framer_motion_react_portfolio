import LineGradient from "../components/LineGradient";
import { motion as m } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Poject = ({ title }) => {
  const overlayStyles =
    "absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue";
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <m.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quis
          eveniet. Voluptatum esse quos dolorem.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </m.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-48">
      <m.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          necessitatibus reprehenderit obcaecati molestiae accusamus, ipsum ipsa
          beatae voluptatem amet dolor.
        </p>
      </m.div>

      {/*projects*/}
      <div className="flex justify-center">
        <m.div
          variants={container}
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/*1st row*/}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Poject title="Project 1" />
          <Poject title="Project 2" />
          {/*2nd row*/}
          <Poject title="Project 3" />
          <Poject title="Project 4" />
          <Poject title="Project 5" />
          {/*3rd row*/}
          <Poject title="Project 6" />
          <Poject title="Project 7" />
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Projects;
