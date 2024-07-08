const Header = () => {
  return (
    <div className="flex gap-0 justify-between self-stretch px-10 py-3 border-b border-gray-200 border-solid max-md:flex-wrap max-md:px-5">
      <div className="flex gap-4 my-auto text-lg font-bold leading-6 text-neutral-900">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0b11e8681a2209722bdb7623ce4ce97fe9cb87779e9a7abf7730f792332bc88?apiKey=23ef07f824434f9a8236d755b15aa490&"
          className="flex-1 shrink-0 my-auto w-full aspect-square"
        />
        <div>Nom Nom Nook</div>
      </div>
      <div className="flex flex-1 gap-5 pl-20 max-md:flex-wrap">
        <div className="flex flex-1 gap-0 rounded-xl">
          <div className="flex flex-col justify-center items-center px-4 w-10 h-10 rounded-xl bg-stone-100">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/34a2e0a6739af094c85b5524d8ee5a4f51ac6d5dab0db7cf2b507ef24310d0ca?apiKey=23ef07f824434f9a8236d755b15aa490&"
              className="w-6 aspect-square"
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 justify-center py-2 pr-4 pl-2 text-base leading-6 whitespace-nowrap rounded-none bg-stone-100 text-stone-500"
          />
        </div>
        <div className="flex gap-2">
          <button className="justify-center px-4 py-2.5 text-sm font-bold leading-5 text-center rounded-xl bg-stone-100 text-ellipsis text-neutral-900 max-md:pl-5">
            Log in
          </button>
          <div className="flex justify-center items-center px-2.5 w-10 h-10 rounded-xl bg-stone-100">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b97abdb46a101942c46249dc3285390ba76e8f048e3ddfbb1374e5d1902cb10?apiKey=23ef07f824434f9a8236d755b15aa490&"
              className="w-5 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
