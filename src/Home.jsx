import * as React from "react";

function Home() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center w-full bg-white max-md:max-w-full">
        <div className="flex gap-0 justify-between self-stretch px-10 py-3 border-b border-gray-200 border-solid max-md:flex-wrap max-md:px-5">
          <div className="flex gap-4 my-auto text-lg font-bold leading-6 text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0b11e8681a2209722bdb7623ce4ce97fe9cb87779e9a7abf7730f792332bc88?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
              className="flex-1 shrink-0 my-auto w-full aspect-square"
            />
            <div>Nom Nom Nook</div>
          </div>
          <div className="flex flex-1 gap-5 pl-20 max-md:flex-wrap">
            <div className="flex flex-1 gap-0 rounded-xl">
              <div className="flex flex-col justify-center items-center px-4 w-10 h-10 rounded-xl bg-stone-100">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34a2e0a6739af094c85b5524d8ee5a4f51ac6d5dab0db7cf2b507ef24310d0ca?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
                  className="w-6 aspect-square"
                />
              </div>
              <div className="flex-1 justify-center py-2 pr-4 pl-2 text-base leading-6 whitespace-nowrap rounded-none bg-stone-100 text-stone-500">
                Search
              </div>
            </div>
            <div className="flex gap-2">
              <div className="justify-center px-4 py-2.5 text-sm font-bold leading-5 text-center rounded-xl bg-stone-100 text-ellipsis text-neutral-900 max-md:pl-5">
                Log in
              </div>
              <div className="flex justify-center items-center px-2.5 w-10 h-10 rounded-xl bg-stone-100">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b97abdb46a101942c46249dc3285390ba76e8f048e3ddfbb1374e5d1902cb10?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
                  className="w-5 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 mt-5 w-full max-w-[960px] max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 rounded-xl min-h-[480px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2fbecb702039c01a4046b79179c2c02dff3257fc340d407125844db6653223c3?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fbecb702039c01a4046b79179c2c02dff3257fc340d407125844db6653223c3?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fbecb702039c01a4046b79179c2c02dff3257fc340d407125844db6653223c3?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fbecb702039c01a4046b79179c2c02dff3257fc340d407125844db6653223c3?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fbecb702039c01a4046b79179c2c02dff3257fc340d407125844db6653223c3?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fbecb702039c01a4046b79179c2c02dff3257fc340d407125844db6653223c3?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fbecb702039c01a4046b79179c2c02dff3257fc340d407125844db6653223c3?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fbecb702039c01a4046b79179c2c02dff3257fc340d407125844db6653223c3?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col mt-24 mb-9 max-w-full w-[685px] max-md:mt-10">
              <div className="text-5xl font-bold tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">
                Find me something delicious!
              </div>
              <div className="flex gap-0 self-center mt-8 max-w-full rounded-xl w-[480px] max-md:flex-wrap">
                <div className="flex flex-col justify-center items-start py-6 pr-4 pl-4 bg-white rounded-xl border-t border-b border-l border-solid border-stone-200">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd071160835c8fcf3537f35db3953ce9fb7a27dfb3a8b435bf2b1e959a995ae4?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
                    className="w-5 aspect-square"
                  />
                </div>
                <div className="flex-1 justify-center p-2 text-base leading-6 bg-white border-t border-b border-solid border-stone-200 text-stone-500">
                  Search for recipes
                </div>
                <div className="flex flex-col justify-center py-2 pr-2 text-base font-bold leading-6 text-center bg-white rounded-none border-t border-r border-b border-solid border-stone-200 text-neutral-900">
                  <div className="justify-center px-5 py-3 bg-orange-500 rounded-xl text-ellipsis">
                    Find Recipes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9 text-2xl font-bold leading-7 text-neutral-900 max-md:max-w-full">
            Trending Recipes
          </div>
          <div className="px-px mt-7 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-3 leading-[150%] max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8642fa64f268f15b5bc7aa3ccaa3e48d65653b35e18ff72884d48d8177343e77?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8642fa64f268f15b5bc7aa3ccaa3e48d65653b35e18ff72884d48d8177343e77?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8642fa64f268f15b5bc7aa3ccaa3e48d65653b35e18ff72884d48d8177343e77?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8642fa64f268f15b5bc7aa3ccaa3e48d65653b35e18ff72884d48d8177343e77?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8642fa64f268f15b5bc7aa3ccaa3e48d65653b35e18ff72884d48d8177343e77?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8642fa64f268f15b5bc7aa3ccaa3e48d65653b35e18ff72884d48d8177343e77?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8642fa64f268f15b5bc7aa3ccaa3e48d65653b35e18ff72884d48d8177343e77?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8642fa64f268f15b5bc7aa3ccaa3e48d65653b35e18ff72884d48d8177343e77?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
                    className="w-full aspect-[1.79]"
                  />
                  <div className="mt-3 text-base font-medium text-neutral-900">
                    Spicy Shrimp Ramen
                  </div>
                  <div className="text-sm text-stone-500">30 minutes</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-3 leading-[150%] max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1022cef90e997b1d321e8d6bbee54f188f0821ac8e34ca33b168c461553341f6?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1022cef90e997b1d321e8d6bbee54f188f0821ac8e34ca33b168c461553341f6?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1022cef90e997b1d321e8d6bbee54f188f0821ac8e34ca33b168c461553341f6?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1022cef90e997b1d321e8d6bbee54f188f0821ac8e34ca33b168c461553341f6?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1022cef90e997b1d321e8d6bbee54f188f0821ac8e34ca33b168c461553341f6?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1022cef90e997b1d321e8d6bbee54f188f0821ac8e34ca33b168c461553341f6?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1022cef90e997b1d321e8d6bbee54f188f0821ac8e34ca33b168c461553341f6?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1022cef90e997b1d321e8d6bbee54f188f0821ac8e34ca33b168c461553341f6?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
                    className="w-full aspect-[1.79]"
                  />
                  <div className="mt-3 text-base font-medium text-neutral-900">
                    Sweet Potato Fries
                  </div>
                  <div className="text-sm text-stone-500">40 minutes</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-3 leading-[150%] max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66e17fcc91ba29731ab2dd57009949aee3bc421d8a188602b3240295eea547a7?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66e17fcc91ba29731ab2dd57009949aee3bc421d8a188602b3240295eea547a7?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66e17fcc91ba29731ab2dd57009949aee3bc421d8a188602b3240295eea547a7?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66e17fcc91ba29731ab2dd57009949aee3bc421d8a188602b3240295eea547a7?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66e17fcc91ba29731ab2dd57009949aee3bc421d8a188602b3240295eea547a7?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66e17fcc91ba29731ab2dd57009949aee3bc421d8a188602b3240295eea547a7?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66e17fcc91ba29731ab2dd57009949aee3bc421d8a188602b3240295eea547a7?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66e17fcc91ba29731ab2dd57009949aee3bc421d8a188602b3240295eea547a7?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
                    className="w-full aspect-[1.79]"
                  />
                  <div className="mt-3 text-base font-medium text-neutral-900">
                    Butter Chicken
                  </div>
                  <div className="text-sm text-stone-500">1 hour</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9 text-2xl font-bold leading-7 text-neutral-900 max-md:max-w-full">
            Most Loved
          </div>
          <div className="px-px mt-7 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-3 leading-[150%] max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/85410d23a0be9a3332c2a160c806131bad6354fbf2718430c4487ab89f5048bb?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/85410d23a0be9a3332c2a160c806131bad6354fbf2718430c4487ab89f5048bb?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/85410d23a0be9a3332c2a160c806131bad6354fbf2718430c4487ab89f5048bb?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/85410d23a0be9a3332c2a160c806131bad6354fbf2718430c4487ab89f5048bb?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/85410d23a0be9a3332c2a160c806131bad6354fbf2718430c4487ab89f5048bb?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/85410d23a0be9a3332c2a160c806131bad6354fbf2718430c4487ab89f5048bb?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/85410d23a0be9a3332c2a160c806131bad6354fbf2718430c4487ab89f5048bb?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/85410d23a0be9a3332c2a160c806131bad6354fbf2718430c4487ab89f5048bb?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
                    className="w-full aspect-[1.79]"
                  />
                  <div className="mt-3 text-base font-medium text-neutral-900">
                    Chocolate Chip Cookies
                  </div>
                  <div className="text-sm text-stone-500">35 minutes</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-3 leading-[150%] max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61f8e95e9808ebd90e468a461034af37313f83f13295febabd052d6bcee611ff?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f8e95e9808ebd90e468a461034af37313f83f13295febabd052d6bcee611ff?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f8e95e9808ebd90e468a461034af37313f83f13295febabd052d6bcee611ff?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f8e95e9808ebd90e468a461034af37313f83f13295febabd052d6bcee611ff?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f8e95e9808ebd90e468a461034af37313f83f13295febabd052d6bcee611ff?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f8e95e9808ebd90e468a461034af37313f83f13295febabd052d6bcee611ff?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f8e95e9808ebd90e468a461034af37313f83f13295febabd052d6bcee611ff?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f8e95e9808ebd90e468a461034af37313f83f13295febabd052d6bcee611ff?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
                    className="w-full aspect-[1.79]"
                  />
                  <div className="mt-3 text-base font-medium text-neutral-900">
                    Pizza Dough
                  </div>
                  <div className="text-sm text-stone-500">5 minutes</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-3 leading-[150%] max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30f64d18905fa0e15400c974fbe0b46a316329db09bfa26a490a21a6af9a2f69?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30f64d18905fa0e15400c974fbe0b46a316329db09bfa26a490a21a6af9a2f69?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30f64d18905fa0e15400c974fbe0b46a316329db09bfa26a490a21a6af9a2f69?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30f64d18905fa0e15400c974fbe0b46a316329db09bfa26a490a21a6af9a2f69?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30f64d18905fa0e15400c974fbe0b46a316329db09bfa26a490a21a6af9a2f69?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30f64d18905fa0e15400c974fbe0b46a316329db09bfa26a490a21a6af9a2f69?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30f64d18905fa0e15400c974fbe0b46a316329db09bfa26a490a21a6af9a2f69?apiKey=7ff70609f35e4fa9b8c7fa2872325278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30f64d18905fa0e15400c974fbe0b46a316329db09bfa26a490a21a6af9a2f69?apiKey=7ff70609f35e4fa9b8c7fa2872325278&"
                    className="w-full aspect-[1.79]"
                  />
                  <div className="mt-3 text-base font-medium text-neutral-900">
                    Brownies
                  </div>
                  <div className="text-sm text-stone-500">25 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-5 py-10 mt-5 w-full text-base leading-6 text-center max-w-[960px] text-stone-500 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 gap-y-6 justify-between content-center max-md:max-w-full">
            <div>About Us</div>
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
          </div>
          <div className="mt-6 max-md:max-w-full">© 2022 Nom Nom Nook</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
