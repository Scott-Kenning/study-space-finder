const Header = () => {
  return (
    <nav className="bg-purple-700/90 w-full text-white">
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto py-4">
        <a href="https://studyspace.vikelabs.ca/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Study Space Finder
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-white font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.vikelabs.ca/"
                target="_blank"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Vikelabs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
