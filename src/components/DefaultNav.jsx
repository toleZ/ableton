const DefaultNav = () => {
  return (
    <nav className="p-8 hidden lg:flex items-center justify-between font-futura-pt font-medium text-xl">
      <div className="flex items-center gap-8">
        <a href="#">
          <svg
            role="img"
            aria-labelledby="logo"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="28"
            viewBox="0 0 45 21"
          >
            <title id="logo">Ableton Homepage</title>
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
          </svg>
        </a>

        <ul className="flex items-center gap-6">
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
          <li>
            <a href="#">More +</a>
          </li>
        </ul>
      </div>

      <ul className="flex items-center gap-6">
        <a href="#" className="text-ableton-0000ff">
          Try Live for free
        </a>
        <a href="#" className="text-base">
          Log in or register
        </a>
      </ul>
    </nav>
  );
};

export default DefaultNav;
