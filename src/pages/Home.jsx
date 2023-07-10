import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <main>
      <section className="font-semibold">
        <article className="w-[60vw] max-w-[900px] h-[40vw] max-h-[600px] p-12 bg-[url('/img/403_Product_Takeover2_2BftvZt.avif')] bg-cover bg-no-repeat bg-center text-ableton-fdf900">
          <a href="#">
            <h2 className="text-4xl lg:text-5xl lg:mb-4">
              Your computer is your instrument
            </h2>
            <p className="flex items-center gap-1 text-xl lg:text-2xl underline">
              Learn more about Live <IoIosArrowForward />
            </p>
          </a>
        </article>
        <article className="translate-x-[215%] -translate-y-full w-[33vw] lg:w-[27vw] h-[20vh] lg:h-[32vh] p-6 bg-[url('/img/Note.avif')] bg-cover bg-no-repeat bg-center text-ableton-00ffff">
          <a href="#">
            <h2 className="text-base lg:text-3xl">Make new ideas a habit</h2>
            <p className="flex items-center gap-1 text-base lg:text-xl underline">
              Get Note <IoIosArrowForward />
            </p>
          </a>
        </article>
        <article className="translate-x-[125%] -translate-y-[125%] w-[33vw] lg:w-[27vw] h-[20vh] lg:h-[32vh] p-6 bg-[url('/img/Push-opt2.avif')] bg-cover bg-no-repeat bg-center text-ableton-00ffff">
          <a href="#">
            <h2 className="text-base lg:text-3xl">Focus and feel</h2>
            <p className="flex items-center gap-1 text-base lg:text-xl underline">
              Meet the new Push <IoIosArrowForward />
            </p>
          </a>
        </article>
      </section>

      <section className="w-5/6 mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">The latest from Ableton</h2>
          <a
            href="#"
            className="flex items-center gap-1 text-xl font-medium text-ableton-0000ff"
          >
            See all posts <IoIosArrowForward />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="#">
            <article>
              <img
                src="/img/thumb_419_Andri_Soren.jpg.600x340_q85_crop_upscale.jpg"
                alt="Tutorial image"
              />
              <span className="mt-2 mb-1 p-1 inline-block text-sm font-medium bg-ableton-00ffff">
                Tutorials
              </span>
              <h3 className="font-semibold">
                Contours of Expression – Andri Søren on Push
              </h3>
            </article>
          </a>
          <a href="#">
            <article>
              <img
                src="/img/thumb_418_Water_From_Your_Eyes2.jpg.600x340_q85_crop_upscale.jpg"
                alt="Artists image"
              />
              <span className="mt-2 mb-1 p-1 inline-block text-sm font-medium bg-ableton-fed134">
                Artists
              </span>
              <h3 className="font-semibold">
                Water From Your Eyes: Microtonal Indie-Pop
              </h3>
            </article>
          </a>
          <a href="#">
            <article>
              <img
                src="/img/thumb_416_Tutorial_Improved_Audio.jpg.600x340_q85_crop_upscale.jpg"
                alt="Tutorial image"
              />
              <span className="mt-2 mb-1 p-1 inline-block text-sm font-medium bg-ableton-00ffff">
                Tutorials
              </span>
              <h3 className="font-semibold">
                Good Timing – Beatmaking with Auto-Warp in Live 11.3
              </h3>
            </article>
          </a>
        </div>
      </section>

      <section className="mt-12 w-5/6 mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Expand Live with Packs</h2>
          <a
            href="#"
            className="flex items-center gap-1 text-xl font-medium text-ableton-0000ff"
          >
            Discover more <IoIosArrowForward />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="#">
            <article>
              <img src="/img/NL_Spitfire_Choir.avif" alt="Spitfire" />
              <h3 className="mt-2 font-semibold flex items-center gap-1">
                Expessive Choir by Spitfire Audio <IoIosArrowForward />
              </h3>
            </article>
          </a>
          <a href="#">
            <article>
              <img
                src="/img/thumb_418_Water_From_Your_Eyes2.jpg.600x340_q85_crop_upscale.jpg"
                alt="Artists image"
              />
              <h3 className="mt-2 font-semibold flex items-center gap-1">
                Building Max Devices by Ableton <IoIosArrowForward />
              </h3>
            </article>
          </a>
          <a href="#">
            <article>
              <img
                src="/img/thumb_416_Tutorial_Improved_Audio.jpg.600x340_q85_crop_upscale.jpg"
                alt="Tutorial image"
              />
              <h3 className="mt-2 font-semibold flex items-center gap-1">
                SPAT Bundle by Music Unit <IoIosArrowForward />
              </h3>
            </article>
          </a>
        </div>
      </section>

      <section className="mt-12 w-5/6 mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold">Develop your music-making</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="#">
            <article>
              <img
                src="/img/Screenshot_2023-04-11_at_12.20.55.avif"
                alt="Spitfire"
              />
              <h3 className="mt-2 font-semibold flex items-center gap-1">
                Learn the foundations of music <IoIosArrowForward />
              </h3>
            </article>
          </a>
          <a href="#">
            <article>
              <img src="/img/403_Product_Takeover5.avif" alt="Artists image" />
              <h3 className="mt-2 font-semibold flex items-center gap-1">
                Get started with Live <IoIosArrowForward />
              </h3>
            </article>
          </a>
          <a href="#">
            <article>
              <img
                src="/img/Screenshot_2023-04-11_at_12.22.04.avif"
                alt="Tutorial image"
              />
              <h3 className="mt-2 font-semibold flex items-center gap-1">
                Go further with Live and Push tutorials <IoIosArrowForward />
              </h3>
            </article>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
