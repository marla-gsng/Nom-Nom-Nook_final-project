const Header = () => {
  return (
    <header className=" w-full h-20 flex justify-between items-center p-4 bg-chamoisee z-50">
      <div className="flex justify-start items-center gap-10">
        <h1>
          <a href="/#" className="hover:text-green-700 text-licorice">
            Nom Nom Nook
          </a>
        </h1>
        <ul className="flex gap-4 justify-end">
          <li>
            <a href="/recipes" className="hover:text-gray-700 text-white">
              Recipes
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-6">
        <a href="#login" className="hover:text-gray-700 text-white">
          Login
        </a>
        <a href="#signup" className="hover:text-gray-700 text-white">
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
