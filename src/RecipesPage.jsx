import * as React from "react";

function RecipesPage() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center pb-5 w-full bg-white max-md:max-w-full">
        <div className="flex gap-0 justify-between self-stretch px-10 py-3 border-b border-gray-200 border-solid max-md:flex-wrap max-md:px-5">
          <div className="flex gap-4 my-auto text-lg font-bold leading-6 whitespace-nowrap text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce91b243b97169c3db281cf5ad1cc8adaf7de6b29c2b8e39f0a4f36aa0084a35?apiKey=23ef07f824434f9a8236d755b15aa490&"
              className="flex-1 shrink-0 my-auto w-full aspect-square"
            />
            <div>Cookbook</div>
          </div>
          <div className="flex flex-1 gap-5 pl-20 max-md:flex-wrap">
            <div className="flex flex-1 gap-0 rounded-xl">
              <div className="flex flex-col justify-center items-center px-4 w-10 h-10 rounded-xl bg-stone-100">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a29e5c923de5cdf731fa15165b080dcdde5a86c1ec90266715e8b1dfe97dec52?apiKey=23ef07f824434f9a8236d755b15aa490&"
                  className="w-6 aspect-square"
                />
              </div>
              <div className="flex-1 justify-center py-2 pr-4 pl-2 text-base leading-6 whitespace-nowrap rounded-none bg-stone-100 text-stone-500">
                Search
              </div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fb4bedf871027bacb9cbbb0194d815815c3bda41daae0d2992fba5bad1fee798?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb4bedf871027bacb9cbbb0194d815815c3bda41daae0d2992fba5bad1fee798?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb4bedf871027bacb9cbbb0194d815815c3bda41daae0d2992fba5bad1fee798?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb4bedf871027bacb9cbbb0194d815815c3bda41daae0d2992fba5bad1fee798?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb4bedf871027bacb9cbbb0194d815815c3bda41daae0d2992fba5bad1fee798?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb4bedf871027bacb9cbbb0194d815815c3bda41daae0d2992fba5bad1fee798?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb4bedf871027bacb9cbbb0194d815815c3bda41daae0d2992fba5bad1fee798?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb4bedf871027bacb9cbbb0194d815815c3bda41daae0d2992fba5bad1fee798?apiKey=23ef07f824434f9a8236d755b15aa490&"
              className="shrink-0 w-10 aspect-square"
            />
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col justify-end items-start px-16 pt-20 pb-6 mt-9 w-full rounded-xl max-w-[928px] min-h-[480px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c6d25e5dc9651f1eda6a64ad848549f10eebd2b6e34e83b6888028bed75f9a17?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6d25e5dc9651f1eda6a64ad848549f10eebd2b6e34e83b6888028bed75f9a17?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6d25e5dc9651f1eda6a64ad848549f10eebd2b6e34e83b6888028bed75f9a17?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6d25e5dc9651f1eda6a64ad848549f10eebd2b6e34e83b6888028bed75f9a17?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6d25e5dc9651f1eda6a64ad848549f10eebd2b6e34e83b6888028bed75f9a17?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6d25e5dc9651f1eda6a64ad848549f10eebd2b6e34e83b6888028bed75f9a17?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6d25e5dc9651f1eda6a64ad848549f10eebd2b6e34e83b6888028bed75f9a17?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6d25e5dc9651f1eda6a64ad848549f10eebd2b6e34e83b6888028bed75f9a17?apiKey=23ef07f824434f9a8236d755b15aa490&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative mt-56 text-5xl font-bold tracking-tighter text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Find your next favorite recipe
          </div>
          <div className="flex relative gap-0 pr-20 mt-8 max-w-full rounded-xl w-[668px] max-md:flex-wrap max-md:pr-5">
            <div className="flex flex-col justify-center items-start py-6 pr-4 pl-4 bg-white rounded-xl border-t border-b border-l border-solid border-stone-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d364d30d83ad26a8c5fa316cab044dc68aa21a77bcdd73be21b2de026b518575?apiKey=23ef07f824434f9a8236d755b15aa490&"
                className="w-5 aspect-square"
              />
            </div>
            <div className="flex-1 justify-center p-2 text-base leading-6 bg-white border-t border-b border-solid border-stone-200 text-stone-500">
              Search for recipes
            </div>
            <div className="flex flex-col justify-center py-2 pr-2 text-base font-bold leading-6 text-center whitespace-nowrap bg-white rounded-none border-t border-r border-b border-solid border-stone-200 text-neutral-900">
              <div className="justify-center px-5 py-3 bg-orange-500 rounded-xl text-ellipsis">
                Search
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 px-4 py-px mt-4 max-w-full text-sm font-bold leading-5 border-b border-solid border-stone-200 text-stone-500 w-[960px] max-md:flex-wrap max-md:pr-5">
          <div className="justify-center pt-4 pb-3.5 whitespace-nowrap border-gray-200 border-solid border-b-[3px] text-neutral-900">
            Featured
          </div>
          <div className="justify-center pt-4 pb-3.5 whitespace-nowrap border-gray-200 border-solid border-b-[3px]">
            Trending
          </div>
          <div className="justify-center pt-4 pb-3.5 whitespace-nowrap border-gray-200 border-solid border-b-[3px]">
            New
          </div>
          <div className="justify-center pt-4 pb-3.5 whitespace-nowrap border-gray-200 border-solid border-b-[3px]">
            Video
          </div>
          <div className="justify-center pt-4 pb-3.5 border-gray-200 border-solid border-b-[3px]">
            Quick & Easy
          </div>
        </div>
        <div className="flex flex-col p-4 mt-3 w-full max-w-[960px] max-md:max-w-full">
          <div className="flex gap-3 text-base font-medium leading-6 text-neutral-900 max-md:flex-wrap">
            <div className="flex flex-col pb-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a44f9bfc8bc7b9ba2c9e87cedb52bf1ded050708ac4c7c6baf54dcf1506766f?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a44f9bfc8bc7b9ba2c9e87cedb52bf1ded050708ac4c7c6baf54dcf1506766f?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a44f9bfc8bc7b9ba2c9e87cedb52bf1ded050708ac4c7c6baf54dcf1506766f?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a44f9bfc8bc7b9ba2c9e87cedb52bf1ded050708ac4c7c6baf54dcf1506766f?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a44f9bfc8bc7b9ba2c9e87cedb52bf1ded050708ac4c7c6baf54dcf1506766f?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a44f9bfc8bc7b9ba2c9e87cedb52bf1ded050708ac4c7c6baf54dcf1506766f?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a44f9bfc8bc7b9ba2c9e87cedb52bf1ded050708ac4c7c6baf54dcf1506766f?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a44f9bfc8bc7b9ba2c9e87cedb52bf1ded050708ac4c7c6baf54dcf1506766f?apiKey=23ef07f824434f9a8236d755b15aa490&"
                className="self-center w-44 aspect-square"
              />
              <div className="mt-3">Grilled Corn</div>
            </div>
            <div className="flex flex-col pb-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3dfb10f067229f66a3cf038e5fb5b311d12109624283c0a5c2b59883f490638b?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfb10f067229f66a3cf038e5fb5b311d12109624283c0a5c2b59883f490638b?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfb10f067229f66a3cf038e5fb5b311d12109624283c0a5c2b59883f490638b?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfb10f067229f66a3cf038e5fb5b311d12109624283c0a5c2b59883f490638b?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfb10f067229f66a3cf038e5fb5b311d12109624283c0a5c2b59883f490638b?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfb10f067229f66a3cf038e5fb5b311d12109624283c0a5c2b59883f490638b?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfb10f067229f66a3cf038e5fb5b311d12109624283c0a5c2b59883f490638b?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfb10f067229f66a3cf038e5fb5b311d12109624283c0a5c2b59883f490638b?apiKey=23ef07f824434f9a8236d755b15aa490&"
                className="self-center w-44 aspect-square"
              />
              <div className="mt-3">Tropical Fruit Salad</div>
            </div>
            <div className="flex flex-col pb-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/21ef6ab7e105fa1b2587c9cebad1e3bfaadfa0aa5f2cfc54cef5c8dcdf8d56d0?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/21ef6ab7e105fa1b2587c9cebad1e3bfaadfa0aa5f2cfc54cef5c8dcdf8d56d0?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21ef6ab7e105fa1b2587c9cebad1e3bfaadfa0aa5f2cfc54cef5c8dcdf8d56d0?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/21ef6ab7e105fa1b2587c9cebad1e3bfaadfa0aa5f2cfc54cef5c8dcdf8d56d0?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/21ef6ab7e105fa1b2587c9cebad1e3bfaadfa0aa5f2cfc54cef5c8dcdf8d56d0?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21ef6ab7e105fa1b2587c9cebad1e3bfaadfa0aa5f2cfc54cef5c8dcdf8d56d0?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/21ef6ab7e105fa1b2587c9cebad1e3bfaadfa0aa5f2cfc54cef5c8dcdf8d56d0?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/21ef6ab7e105fa1b2587c9cebad1e3bfaadfa0aa5f2cfc54cef5c8dcdf8d56d0?apiKey=23ef07f824434f9a8236d755b15aa490&"
                className="self-center w-44 aspect-square"
              />
              <div className="mt-3">Grilled Chicken</div>
            </div>
            <div className="flex flex-col pb-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03edff2239dce777c40e859e77a44b29302e0cf9ecf13766154f980581dd262f?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03edff2239dce777c40e859e77a44b29302e0cf9ecf13766154f980581dd262f?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03edff2239dce777c40e859e77a44b29302e0cf9ecf13766154f980581dd262f?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03edff2239dce777c40e859e77a44b29302e0cf9ecf13766154f980581dd262f?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03edff2239dce777c40e859e77a44b29302e0cf9ecf13766154f980581dd262f?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03edff2239dce777c40e859e77a44b29302e0cf9ecf13766154f980581dd262f?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03edff2239dce777c40e859e77a44b29302e0cf9ecf13766154f980581dd262f?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03edff2239dce777c40e859e77a44b29302e0cf9ecf13766154f980581dd262f?apiKey=23ef07f824434f9a8236d755b15aa490&"
                className="self-center w-44 aspect-square"
              />
              <div className="mt-3">Coconut Rice</div>
            </div>
            <div className="flex flex-col pb-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/571decdc4eb1d65ec87573650efb42e122095e03775598df86d9934df3f76cae?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/571decdc4eb1d65ec87573650efb42e122095e03775598df86d9934df3f76cae?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/571decdc4eb1d65ec87573650efb42e122095e03775598df86d9934df3f76cae?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/571decdc4eb1d65ec87573650efb42e122095e03775598df86d9934df3f76cae?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/571decdc4eb1d65ec87573650efb42e122095e03775598df86d9934df3f76cae?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/571decdc4eb1d65ec87573650efb42e122095e03775598df86d9934df3f76cae?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/571decdc4eb1d65ec87573650efb42e122095e03775598df86d9934df3f76cae?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/571decdc4eb1d65ec87573650efb42e122095e03775598df86d9934df3f76cae?apiKey=23ef07f824434f9a8236d755b15aa490&"
                className="self-center w-44 aspect-square"
              />
              <div className="mt-3">Cornbread Muffins</div>
            </div>
          </div>
          <div className="mt-3 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-3 text-base font-medium leading-6 text-neutral-900 max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7bc796ad59af578ff0f641ec9c09640d3e42eb8e6c72d11625d6a9ca210e853a?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bc796ad59af578ff0f641ec9c09640d3e42eb8e6c72d11625d6a9ca210e853a?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bc796ad59af578ff0f641ec9c09640d3e42eb8e6c72d11625d6a9ca210e853a?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bc796ad59af578ff0f641ec9c09640d3e42eb8e6c72d11625d6a9ca210e853a?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bc796ad59af578ff0f641ec9c09640d3e42eb8e6c72d11625d6a9ca210e853a?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bc796ad59af578ff0f641ec9c09640d3e42eb8e6c72d11625d6a9ca210e853a?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bc796ad59af578ff0f641ec9c09640d3e42eb8e6c72d11625d6a9ca210e853a?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bc796ad59af578ff0f641ec9c09640d3e42eb8e6c72d11625d6a9ca210e853a?apiKey=23ef07f824434f9a8236d755b15aa490&"
                    className="self-center w-44 aspect-square"
                  />
                  <div className="mt-3">Pulled Pork</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-3 text-base font-medium leading-6 text-neutral-900 max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa2f2001a122f2c3dd93b1b94dbf431802f4ad9eaadae3b705997ae96dc9e0b1?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2f2001a122f2c3dd93b1b94dbf431802f4ad9eaadae3b705997ae96dc9e0b1?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2f2001a122f2c3dd93b1b94dbf431802f4ad9eaadae3b705997ae96dc9e0b1?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2f2001a122f2c3dd93b1b94dbf431802f4ad9eaadae3b705997ae96dc9e0b1?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2f2001a122f2c3dd93b1b94dbf431802f4ad9eaadae3b705997ae96dc9e0b1?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2f2001a122f2c3dd93b1b94dbf431802f4ad9eaadae3b705997ae96dc9e0b1?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2f2001a122f2c3dd93b1b94dbf431802f4ad9eaadae3b705997ae96dc9e0b1?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2f2001a122f2c3dd93b1b94dbf431802f4ad9eaadae3b705997ae96dc9e0b1?apiKey=23ef07f824434f9a8236d755b15aa490&"
                    className="self-center w-44 aspect-square"
                  />
                  <div className="mt-3">Fried Green Tomatoes</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-3 text-base font-medium leading-6 text-neutral-900 max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a710e5095093dfeafc5de28baa4aa47863d16f75dd6afac7432fe6477f8fa511?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a710e5095093dfeafc5de28baa4aa47863d16f75dd6afac7432fe6477f8fa511?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a710e5095093dfeafc5de28baa4aa47863d16f75dd6afac7432fe6477f8fa511?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a710e5095093dfeafc5de28baa4aa47863d16f75dd6afac7432fe6477f8fa511?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a710e5095093dfeafc5de28baa4aa47863d16f75dd6afac7432fe6477f8fa511?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a710e5095093dfeafc5de28baa4aa47863d16f75dd6afac7432fe6477f8fa511?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a710e5095093dfeafc5de28baa4aa47863d16f75dd6afac7432fe6477f8fa511?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a710e5095093dfeafc5de28baa4aa47863d16f75dd6afac7432fe6477f8fa511?apiKey=23ef07f824434f9a8236d755b15aa490&"
                    className="self-center w-44 aspect-square"
                  />
                  <div className="mt-3">Shrimp Scampi</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-3 text-base font-medium leading-6 text-neutral-900 max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f386bfdd3c3035e1025f37724b83c4574564ce642a2e92ebc0a9922003e6e60c?apiKey=23ef07f824434f9a8236d755b15aa490&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f386bfdd3c3035e1025f37724b83c4574564ce642a2e92ebc0a9922003e6e60c?apiKey=23ef07f824434f9a8236d755b15aa490&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f386bfdd3c3035e1025f37724b83c4574564ce642a2e92ebc0a9922003e6e60c?apiKey=23ef07f824434f9a8236d755b15aa490&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f386bfdd3c3035e1025f37724b83c4574564ce642a2e92ebc0a9922003e6e60c?apiKey=23ef07f824434f9a8236d755b15aa490&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f386bfdd3c3035e1025f37724b83c4574564ce642a2e92ebc0a9922003e6e60c?apiKey=23ef07f824434f9a8236d755b15aa490&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f386bfdd3c3035e1025f37724b83c4574564ce642a2e92ebc0a9922003e6e60c?apiKey=23ef07f824434f9a8236d755b15aa490&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f386bfdd3c3035e1025f37724b83c4574564ce642a2e92ebc0a9922003e6e60c?apiKey=23ef07f824434f9a8236d755b15aa490&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f386bfdd3c3035e1025f37724b83c4574564ce642a2e92ebc0a9922003e6e60c?apiKey=23ef07f824434f9a8236d755b15aa490&"
                    className="self-center w-44 aspect-square"
                  />
                  <div className="mt-3">Peach Cobbler</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipesPage;
