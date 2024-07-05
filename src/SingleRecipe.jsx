import * as React from "react";

function SingleRecipe() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center px-5 pb-5 w-full bg-white max-md:max-w-full">
        <div className="flex gap-0 justify-between self-stretch px-10 py-3 border-b border-gray-200 border-solid max-md:flex-wrap max-md:px-5">
          <div className="flex gap-4 my-auto text-lg font-bold leading-6 whitespace-nowrap text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e9076429151ed1389325764e28669399f0a02889728863ebff9f5738c1f554?apiKey=23ef07f824434f9a8236d755b15aa490&"
              className="flex-1 shrink-0 my-auto w-full aspect-square"
            />
            <div>Delish</div>
          </div>
          <div className="flex flex-1 gap-5 pl-20 max-md:flex-wrap">
            <div className="flex flex-1 gap-0 rounded-xl">
              <div className="flex flex-col justify-center items-center px-4 w-10 h-10 rounded-xl bg-stone-100">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/235a189af63fbcc506aae9a237255f940f6cb231e26df225ffa7ae4fefab17b0?apiKey=23ef07f824434f9a8236d755b15aa490&"
                  className="w-6 aspect-square"
                />
              </div>
              <div className="flex-1 justify-center py-2 pr-4 pl-2 text-base leading-6 whitespace-nowrap rounded-none bg-stone-100 text-stone-500">
                Search
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex justify-center items-center px-2.5 w-10 h-10 rounded-xl bg-stone-100">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf9c9f54e63eca5a2d7d7b89192d0ca68b12693753503954f330b6fc16f52654?apiKey=23ef07f824434f9a8236d755b15aa490&"
                  className="w-5 aspect-square"
                />
              </div>
              <div className="flex justify-center items-center px-2.5 w-10 h-10 rounded-xl bg-stone-100">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2cfa659d8b683940e887f56a66abe08b22190823af5a912c414cabeefb8851c?apiKey=23ef07f824434f9a8236d755b15aa490&"
                  className="w-5 aspect-square"
                />
              </div>
              <div className="flex justify-center items-center px-2.5 w-10 h-10 rounded-xl bg-stone-100">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5dd10d0d5f888a04f4a0e564c91f703dbee1b9dffe1b7c3dafd0b72da1b9b60?apiKey=23ef07f824434f9a8236d755b15aa490&"
                  className="w-5 aspect-square"
                />
              </div>
              <div className="flex justify-center items-center px-2.5 w-10 h-10 rounded-xl bg-stone-100">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d82828afe7cc054e3ba15f804cb0d042666ec63c2e9d1f9533716ae0f879bba?apiKey=23ef07f824434f9a8236d755b15aa490&"
                  className="w-5 aspect-square"
                />
              </div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/81ed5cb3423f3593791a5f8ebfd5e0138ed9a15596e6393b126f9f713e673b5a?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ed5cb3423f3593791a5f8ebfd5e0138ed9a15596e6393b126f9f713e673b5a?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ed5cb3423f3593791a5f8ebfd5e0138ed9a15596e6393b126f9f713e673b5a?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ed5cb3423f3593791a5f8ebfd5e0138ed9a15596e6393b126f9f713e673b5a?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ed5cb3423f3593791a5f8ebfd5e0138ed9a15596e6393b126f9f713e673b5a?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ed5cb3423f3593791a5f8ebfd5e0138ed9a15596e6393b126f9f713e673b5a?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ed5cb3423f3593791a5f8ebfd5e0138ed9a15596e6393b126f9f713e673b5a?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ed5cb3423f3593791a5f8ebfd5e0138ed9a15596e6393b126f9f713e673b5a?apiKey=23ef07f824434f9a8236d755b15aa490&"
              className="shrink-0 w-10 aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col items-start px-4 mt-9 w-full font-bold max-w-[960px] text-neutral-900 max-md:max-w-full">
          <div className="text-3xl max-md:max-w-full">
            Lemon Garlic Butter Shrimp
          </div>
          <div className="mt-3 text-sm leading-5 text-stone-500 max-md:max-w-full">
            A recipe by Delish
          </div>
          <div className="self-stretch mt-9 text-2xl leading-7 max-md:max-w-full">
            Ingredients
          </div>
        </div>
        <div className="flex flex-col px-4 mt-3 w-full text-base leading-6 max-w-[960px] text-neutral-900 max-md:max-w-full">
          <div className="flex gap-3 py-3 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded border-2 border-solid border-stone-200" />
            <div className="max-md:max-w-full">1 lb. large shrimp</div>
          </div>
          <div className="flex gap-3 py-3 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded border-2 border-solid border-stone-200" />
            <div className="max-md:max-w-full">Kosher salt</div>
          </div>
          <div className="flex gap-3 py-3 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded border-2 border-solid border-stone-200" />
            <div className="max-md:max-w-full">Freshly ground black pepper</div>
          </div>
          <div className="flex gap-3 py-3 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded border-2 border-solid border-stone-200" />
            <div className="max-md:max-w-full">
              2 tbsp. extra-virgin olive oil
            </div>
          </div>
          <div className="flex gap-3 py-3 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded border-2 border-solid border-stone-200" />
            <div className="max-md:max-w-full">3 tbsp. melted butter</div>
          </div>
          <div className="flex gap-3 py-3 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded border-2 border-solid border-stone-200" />
            <div className="max-md:max-w-full">3 cloves garlic, minced</div>
          </div>
          <div className="flex gap-3 py-3 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded border-2 border-solid border-stone-200" />
            <div className="max-md:max-w-full">Juice of 1 lemon</div>
          </div>
          <div className="flex gap-3 py-3 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded border-2 border-solid border-stone-200" />
            <div className="max-md:max-w-full">
              1/4 c. freshly chopped parsley
            </div>
          </div>
          <div className="flex gap-3 py-3 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded border-2 border-solid border-stone-200" />
            <div className="max-md:max-w-full">Crusty bread, for serving</div>
          </div>
          <div className="flex gap-3 py-3 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded border-2 border-solid border-stone-200" />
            <div className="max-md:max-w-full">Lemon wedges, for serving</div>
          </div>
        </div>
        <div className="mt-5 text-2xl font-bold leading-7 text-neutral-900 max-md:max-w-full">
          Directions
        </div>
        <div className="mt-7 w-full max-w-[928px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch p-4 w-full bg-white rounded-lg border border-solid border-stone-200 max-md:mt-3 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f70968e30376de23920aed9ed38a9f447295aed75f101fc199725e48dd5a4061?apiKey=23ef07f824434f9a8236d755b15aa490&"
                  className="w-6 aspect-square"
                />
                <div className="mt-3 text-base font-bold text-neutral-900 max-md:max-w-full">
                  Season shrimp with salt and pepper.
                </div>
                <div className="mt-1 text-sm leading-5 text-stone-500 max-md:max-w-full">
                  Add shrimp and cook until pink and opaque, about 2 minutes per
                  side. Transfer to a plate.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch p-4 w-full bg-white rounded-lg border border-solid border-stone-200 max-md:mt-3 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/22a5419af9817e025c0006b58b0c7206a93c20c4d0017d045e2d41ccbf5eb8be?apiKey=23ef07f824434f9a8236d755b15aa490&"
                  className="w-6 aspect-square"
                />
                <div className="mt-3 text-base font-bold leading-5 text-neutral-900 max-md:max-w-full">
                  In a large skillet over medium heat, heat 1 tablespoon oil.
                </div>
                <div className="mt-1 text-sm leading-5 text-stone-500 max-md:max-w-full">
                  Add remaining 1 tablespoon oil and butter. Add garlic and cook
                  until fragrant, about 1 minute.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-4 mt-4 w-full bg-white max-w-[960px] max-md:max-w-full">
          <div className="flex flex-col justify-center bg-white rounded-xl max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/857eb3a2b525ecfc765d4615e59950a3642e2175d47c9ea94c6ba8c6413dfaff?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/857eb3a2b525ecfc765d4615e59950a3642e2175d47c9ea94c6ba8c6413dfaff?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/857eb3a2b525ecfc765d4615e59950a3642e2175d47c9ea94c6ba8c6413dfaff?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/857eb3a2b525ecfc765d4615e59950a3642e2175d47c9ea94c6ba8c6413dfaff?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/857eb3a2b525ecfc765d4615e59950a3642e2175d47c9ea94c6ba8c6413dfaff?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/857eb3a2b525ecfc765d4615e59950a3642e2175d47c9ea94c6ba8c6413dfaff?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/857eb3a2b525ecfc765d4615e59950a3642e2175d47c9ea94c6ba8c6413dfaff?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/857eb3a2b525ecfc765d4615e59950a3642e2175d47c9ea94c6ba8c6413dfaff?apiKey=23ef07f824434f9a8236d755b15aa490&"
              className="w-full aspect-[1.49] max-md:max-w-full"
            />
          </div>
        </div>
        <div className="mt-4 w-full max-w-[928px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch p-4 w-full bg-white rounded-lg border border-solid border-stone-200 max-md:mt-3 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/85e51650d0b85456752bb1c5af8e48a020d8c378947615e17ee1d178bcd5e9ae?apiKey=23ef07f824434f9a8236d755b15aa490&"
                  className="w-6 aspect-square"
                />
                <div className="mt-3 text-base font-bold text-neutral-900 max-md:max-w-full">
                  Add lemon juice and parsley and stir to combine.
                </div>
                <div className="mt-1 text-sm leading-5 text-stone-500 max-md:max-w-full">
                  Serve immediately with crusty bread and lemon wedges.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch p-4 w-full bg-white rounded-lg border border-solid border-stone-200 max-md:mt-3 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447da7c6e133192847c4627fe6a085fca1cf71bb57ffb1f93a40eb6e6c55fb4e?apiKey=23ef07f824434f9a8236d755b15aa490&"
                  className="w-6 aspect-square"
                />
                <div className="mt-3 text-base font-bold leading-5 text-neutral-900 max-md:max-w-full">
                  Return shrimp to skillet and toss to coat. Season with more
                  salt and pepper if needed.
                </div>
                <div className="mt-1 text-sm leading-5 text-stone-500 max-md:max-w-full">
                  Enjoy!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-4 mt-4 w-full bg-white max-w-[960px] max-md:max-w-full">
          <div className="flex flex-col justify-center bg-white rounded-xl max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0fcb403bfacea42c5356acb39ccd36341ab6511766b8f880e48f8d8889e6f1c5?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fcb403bfacea42c5356acb39ccd36341ab6511766b8f880e48f8d8889e6f1c5?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fcb403bfacea42c5356acb39ccd36341ab6511766b8f880e48f8d8889e6f1c5?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fcb403bfacea42c5356acb39ccd36341ab6511766b8f880e48f8d8889e6f1c5?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fcb403bfacea42c5356acb39ccd36341ab6511766b8f880e48f8d8889e6f1c5?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fcb403bfacea42c5356acb39ccd36341ab6511766b8f880e48f8d8889e6f1c5?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fcb403bfacea42c5356acb39ccd36341ab6511766b8f880e48f8d8889e6f1c5?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fcb403bfacea42c5356acb39ccd36341ab6511766b8f880e48f8d8889e6f1c5?apiKey=23ef07f824434f9a8236d755b15aa490&"
              className="w-full aspect-[1.49] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe;
