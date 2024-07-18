const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-4">
      <div className="flex justify-start items-center gap-10">
        <h1>Nom Nom Nook</h1>
        <ul className="flex gap-4 justify-end">
          <li>
            <a href="/#" className="hover:text-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="/recipes" className="hover:text-gray-700">
              Recipes
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <a href="#login" className="hover:text-gray-700">
          Login
        </a>
        <a href="#signup" className="hover:text-gray-700">
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
