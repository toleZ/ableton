import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <main>
      <section className="relative font-semibold">
        <article className="absolute top-0 left-0 w-[60vw] max-w-[900px] h-[40vw] max-h-[600px] p-12 bg-[url('/img/403_Product_Takeover2_2BftvZt.avif')] bg-cover bg-no-repeat bg-center text-ableton-fdf900">
          <a href="#">
            <h2 className="text-4xl lg:text-5xl lg:mb-4">
              Your computer is your instrument
            </h2>
            <p className="flex items-center gap-1 text-xl lg:text-2xl underline">
              Learn more about Live <IoIosArrowForward />
            </p>
          </a>
        </article>
        <article className="absolute top-[10rem] lg:top-[20rem] right-0 w-[33vw] lg:w-[27vw] lg:h-[32vh] h-[20vh] p-6 bg-[url('/img/Note.avif')] bg-cover bg-no-repeat bg-center text-ableton-00ffff">
          <a href="#">
            <h2 className="text-base lg:text-3xl">Make new ideas a habit</h2>
            <p className="flex items-center gap-1 text-base lg:text-xl underline">
              Get Note <IoIosArrowForward />
            </p>
          </a>
        </article>
        <article className="absolute top-[20rem] lg:top-[34rem] left-[60%] -translate-x-1/2 w-[33vw] lg:w-[27vw] lg:h-[32vh] h-[20vh] p-6 bg-[url('/img/Push-opt2.avif')] bg-cover bg-no-repeat bg-center text-ableton-00ffff">
          <a href="#">
            <h2 className="text-base lg:text-3xl">Focus and feel</h2>
            <p className="flex items-center gap-1 text-base lg:text-xl underline">
              Meet the new Push <IoIosArrowForward />
            </p>
          </a>
        </article>
      </section>
    </main>
  );
};

export default Home;
