import { IoIosArrowForward } from "react-icons/io";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-12">
      <div className="py-8 px-4 flex items-center justify-center gap-2 bg-[#eeeeee] text-xl font-medium">
        More:
        <ul className="flex items-start gap-2 text-ableton-0000ff">
          <li>
            <a href="#">All posts</a>
          </li>
          <li>
            <a href="#">Artists</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Downloads</a>
          </li>
          <li>
            <a href="#">Tutorials</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Loop</a>
          </li>
          <li>
            <a href="#">One Thing</a>
          </li>
        </ul>
      </div>

      <h3 className="pt-16 pl-16 font-semibold text-4xl lg:text-6xl">
        Ableton
      </h3>

      <div className="p-16 grid lg:grid-cols-3 gap-8">
        <div className="lg:order-3">
          <h5 className="font-medium">Sign up to our newsletter</h5>
          <p className="text-lg">
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>

          <form className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="w-5/6 p-2 outline-none bg-[#eeeeee]"
            />
            <button className="px-6 lg:px-2 py-2 font-medium text-white bg-ableton-0000ff">
              Sign up
            </button>
          </form>
        </div>

        <ul className="text-lg lg:order-1">
          <li>
            <a href="#" className="flex items-center gap-1">
              Register Live or Push <IoIosArrowForward />
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1">
              About Ableton <IoIosArrowForward />
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1">
              Jobs <IoIosArrowForward />
            </a>
          </li>

          <ul className="flex items-center gap-3">
            <li className="p-3 bg-brands-facebook">
              <a href="#">
                <BsFacebook className="scale-125 fill-white" />
              </a>
            </li>
            <li className="p-3 bg-brands-twitter">
              <a href="#">
                <BsTwitter className="scale-125 fill-white" />
              </a>
            </li>
            <li className="p-3 bg-brands-youtube">
              <a href="#">
                <BsYoutube className="scale-125 fill-white" />
              </a>
            </li>
            <li className="p-3 bg-brands-instagram">
              <a href="#">
                <BsInstagram className="scale-125 fill-white" />
              </a>
            </li>
          </ul>
        </ul>

        <section className="order-2">
          <h6 className="font-medium">Education</h6>
          <ul>
            <li className="text-lg flex items-center gap-1">
              Offers for students and teachers <IoIosArrowForward />
            </li>
            <li className="text-lg flex items-center gap-1">
              Ableton for the Classroom <IoIosArrowForward />
            </li>
            <li className="text-lg flex items-center gap-1">
              Ableton for Colleges and Universities <IoIosArrowForward />
            </li>
          </ul>
        </section>

        <section className="order-4">
          <h6 className="font-medium">Community</h6>
          <ul>
            <li className="text-lg flex items-center gap-1">
              Find Ableton User Groups <IoIosArrowForward />
            </li>
            <li className="text-lg flex items-center gap-1">
              Find Certified Training <IoIosArrowForward />
            </li>
            <li className="text-lg flex items-center gap-1">
              Become a Certified Trainer <IoIosArrowForward />
            </li>
          </ul>
        </section>

        <section className="order-5">
          <h6 className="font-medium">Language and Location</h6>
          <select className="p-2 mr-2 rounded-sm font-medium text-sm bg-[#f3f3f3]">
            <option>English</option>
            <option>Español</option>
          </select>

          <select className="p-2 rounded-sm font-medium text-sm bg-[#f3f3f3]">
            <option>United States</option>
            <option>Argentina</option>
          </select>
        </section>
      </div>

      <div className="px-16 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <ul className="mb-12 flex flex-col lg:flex-row lg:items-center gap-2 font-medium">
          <li>Contact Us</li>
          <li>Press Resources</li>
          <li>Legal Info</li>
          <li>Privacy Policy</li>
          <li>Cookie Settings</li>
          <li>Imprint</li>
        </ul>

        <h3 className="flex items-center gap-3">
          <img src="./ableton.svg" alt="Ableton logo" className="h-12 w-12" />
          <p className="font-medium text-lg">Made in Berlin</p>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
