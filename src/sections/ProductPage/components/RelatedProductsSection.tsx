import { ProductCard } from "@/sections/ProductPage/components/ProductCard";

export const RelatedProductsSection = () => {
  return (
    <section
      role="region"
      aria-label="Other products in the range"
      className="relative text-sm box-border caret-transparent leading-[25.375px] outline-[3px] my-16 pl-6 md:text-[15.6667px] md:leading-[28.3958px] md:my-24 md:pl-0"
    >
      <div className="text-sm box-border caret-transparent leading-[25.375px] max-w-[1440px] outline-[3px] w-full mx-auto pl-0 pr-6 md:text-[15.6667px] md:leading-[28.3958px] md:px-[72px]">
        <header className="text-sm [align-items:normal] box-border caret-transparent block leading-[25.375px] outline-[3px] mb-6 md:text-[15.6667px] md:items-end md:flex md:leading-[28.3958px] md:mb-10">
          <div className="text-sm items-center box-border caret-transparent flex justify-between leading-[25.375px] min-h-0 min-w-0 outline-[3px] mb-10 md:text-[15.6667px] md:[align-items:normal] md:block md:justify-normal md:leading-[28.3958px] md:min-h-[auto] md:min-w-[auto] md:mb-0">
            <h2 className="text-[32px] font-bold box-border caret-transparent tracking-[-0.5px] leading-[37.024px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[37px] md:leading-[37px] md:min-h-0 md:min-w-0">
              Other products in the range
            </h2>
          </div>
          <div className="text-sm items-center box-border caret-transparent hidden leading-[25.375px] outline-[3px] ml-auto md:text-[15.6667px] md:leading-[28.3958px]">
            <button
              type="button"
              className="relative appearance-none text-zinc-800 text-base items-center bg-white bg-no-repeat caret-transparent inline-flex h-10 justify-center leading-[29px] min-w-fit outline-[3px] text-center align-top w-10 z-[1] bg-center ml-2 mt-1 p-0 rounded-[100%] inset-0 md:text-white md:text-[15.6667px] md:h-12 md:leading-[28.3958px] md:min-w-0 md:w-12 md:ml-0 md:mt-0 md:bottom-auto"
            >
              <span className="absolute text-zinc-800 text-base items-center box-border caret-transparent flex h-4 leading-[29px] outline-[3px] pointer-events-none w-4 right-2/4 top-2/4 md:text-white md:text-[15.6667px] md:leading-[28.3958px]">
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-59.svg"
                  alt="Icon"
                  className="text-gray-400 text-base box-border caret-transparent h-[19.2px] leading-[29px] outline-[3px] w-[19.2px] md:text-[15.6667px] md:h-[18.8px] md:leading-[28.3958px] md:w-[18.8px]"
                />
              </span>
              <span className="text-zinc-800 text-base box-border caret-transparent block leading-[29px] outline-[3px] md:text-white md:text-[15.6667px] md:leading-[28.3958px]"></span>
            </button>
            <div className="text-sm box-border caret-transparent hidden leading-[25.375px] outline-[3px] text-nowrap -mb-px md:text-[15.6667px] md:leading-[28.3958px]">
              <span className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] text-nowrap md:text-[15.6667px] md:leading-[28.3958px]">
                1 - 1 from 1
              </span>
            </div>
            <button
              type="button"
              className="relative appearance-none text-zinc-800 text-base items-center bg-white bg-no-repeat caret-transparent inline-flex h-10 justify-center leading-[29px] min-w-fit outline-[3px] text-center align-top w-10 z-[1] bg-center ml-2 mt-1 p-0 rounded-[100%] inset-0 md:text-white md:text-[15.6667px] md:h-12 md:leading-[28.3958px] md:min-w-0 md:w-12 md:ml-0 md:mt-0 md:bottom-auto"
            >
              <span className="absolute text-zinc-800 text-base items-center box-border caret-transparent flex h-4 leading-[29px] outline-[3px] pointer-events-none w-4 right-2/4 top-2/4 md:text-white md:text-[15.6667px] md:leading-[28.3958px]">
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-60.svg"
                  alt="Icon"
                  className="text-gray-400 text-base box-border caret-transparent h-[19.2px] leading-[29px] outline-[3px] w-[19.2px] md:text-[15.6667px] md:h-[18.8px] md:leading-[28.3958px] md:w-[18.8px]"
                />
              </span>
              <span className="text-zinc-800 text-base box-border caret-transparent block leading-[29px] outline-[3px] md:text-white md:text-[15.6667px] md:leading-[28.3958px]"></span>
            </button>
          </div>
        </header>
      </div>
      <div className="text-sm box-border caret-transparent leading-[25.375px] max-w-[1440px] outline-[3px] w-full mx-auto px-0 md:text-[15.6667px] md:leading-[28.3958px] md:px-[72px]">
        <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
          <div className="relative text-sm box-border caret-transparent leading-[25.375px] outline-[3px] z-0 overflow-hidden pr-[20%] md:text-[15.6667px] md:leading-[28.3958px] md:pr-0">
            <div
              role="presentation"
              className="text-sm box-border caret-transparent flex h-full leading-[25.375px] outline-[3px] w-full md:text-[15.6667px] md:leading-[28.3958px]"
            >
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm box-border caret-transparent leading-[25.375px] max-w-[1440px] outline-[3px] w-full mx-auto px-6 md:text-[15.6667px] md:leading-[28.3958px] md:px-[72px]">
        <div className="relative text-sm bg-gray-100 box-border caret-transparent hidden h-0.5 leading-[25.375px] outline-[3px] w-full mt-10 md:text-[15.6667px] md:leading-[28.3958px]">
          <div className="absolute text-sm bg-emerald-900 box-border caret-transparent h-0.5 leading-[25.375px] outline-[3px] w-0 top-0 md:text-[15.6667px] md:leading-[28.3958px]"></div>
        </div>
      </div>
    </section>
  );
};
