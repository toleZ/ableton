import { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const MobileNav = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleHidden = () => setIsHidden(!isHidden);
  return (
    <>
      <nav
        className={`relative z-50 p-6 flex lg:hidden items-center gap-6  font-futura-pt font-semibold text-xl ${
          isHidden ? "text-black fill-black" : "text-white fill-white"
        } transition-all duration-150`}
      >
        <ul>
          <a href="#">
            <svg
              role="img"
              aria-labelledby="logo"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="28"
              viewBox="0 0 45 21"
              className="fill-current"
            >
              <title id="logo">Ableton Homepage</title>
              <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
            </svg>
          </a>
        </ul>

        <button className="flex items-center" onClick={handleHidden}>
          Menu {isHidden ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </button>
      </nav>

      <div
        className={`lg:hidden w-screen overflow-hidden absolute z-40 top-0 left-0 flex flex-col gap-6 p-6 pt-[5rem] text-lg font-semibold bg-ableton-0000ff text-white ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } transition-all duration-300`}
      >
        <ul className="flex flex-col gap-6">
          <li>
            <a href="#">Live</a>
          </li>
          <li>
            <a href="#">Push</a>
          </li>
          <li>
            <a href="#">Note</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Packs</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>

        <ul className="mt-2 flex flex-col gap-6">
          <a href="#" className="text-xl">
            Try Live for free
          </a>
          <a href="#" className="text-sm font-normal">
            Log in or register
          </a>
        </ul>

        <section className="mt-2">
          <h4 className="text-xl mb-4">More on Ableton.com:</h4>
          <ul className="flex flex-col gap-6">
            <li className="text-sm font-normal">
              <a href="#">Blog</a>
            </li>
            <li className="text-sm font-normal">
              <a href="#">Ableton for the Classroom</a>
            </li>
            <li className="text-sm font-normal">
              <a href="#">Ableton for Colleges and Universities</a>
            </li>
            <li className="text-sm font-normal">
              <a href="#">Certified Training</a>
            </li>
            <li className="text-sm font-normal">
              <a href="#">About Ableton</a>
            </li>
            <li className="text-sm font-normal">
              <a href="#">Jobs</a>
            </li>
            <li className="text-sm font-normal">
              <a href="#">Apprenticeships</a>
            </li>
          </ul>
        </section>

        <section className="mt-2">
          <h4 className="text-xl mb-3">More from Ableton:</h4>
          <div className="mb-5 w-full flex gap-4 overflow-x-auto text-sm font-normal">
            <article>
              <h5 className="w-48">Loop</h5>
              <p>
                {
                  "Watch Talks, Performances and Features from Ableton's Summit for Music Makers"
                }
              </p>
            </article>
            <article>
              <h5 className="w-48">Learning Music</h5>
              <p>
                Learn the fundamentals of music making right in your browser.
              </p>
            </article>
            <article>
              <h5 className="w-48">Learning Synths</h5>
              <p>
                Get started with synthesis using a web-based synth and
                accompanying lessons.
              </p>
            </article>
            <article>
              <h5 className="w-48">Making Music</h5>
              <p>
                Some tips from 74 Creative Strategies for Electronic Producers.
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileNav;
