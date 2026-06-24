import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const MainNavigation = () => {
  return (
    <div className="relative text-sm bg-gray-100 border-b-zinc-200 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent h-[57px] leading-[25.375px] outline-[3px] border-b md:text-[15.6667px] md:h-[85px] md:leading-[28.3958px]">
      <div className="static text-sm items-center box-border caret-transparent flex flex-wrap h-full leading-[25.375px] max-w-[1440px] outline-[3px] w-full mx-auto px-6 md:relative md:text-[15.6667px] md:flex-nowrap md:leading-[28.3958px] md:px-[72px]">
        <a
          href="/en-gb/"
          aria-label="Keter"
          className="text-sm box-border caret-transparent block leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis md:text-[15.6667px] md:leading-[28.3958px]"
        >
          <img
            src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-7.svg"
            alt="Icon"
            className="text-sm box-border caret-transparent inline-block h-11 leading-[25.375px] outline-[3px] w-[68px] md:text-[15.6667px] md:leading-[28.3958px] md:w-[105px]"
          />
        </a>
        <DesktopMenu />
        <MobileMenu />
        <HeaderActions />
      </div>
      <div className="absolute text-white text-sm bg-emerald-900 box-border caret-transparent hidden h-full leading-[25.375px] outline-[3px] w-full z-10 left-0 top-0 md:text-[15.6667px] md:leading-[28.3958px] after:accent-auto after:bg-gray-400 after:box-border after:caret-transparent after:text-white after:block after:text-sm after:not-italic after:normal-nums after:font-medium after:h-6 after:tracking-[normal] after:leading-[25.375px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:-bottom-6 after:font-cera_pro after:md:text-[15.6667px] after:md:leading-[28.3958px]">
        <div className="text-sm box-border caret-transparent h-full leading-[25.375px] max-w-[1440px] outline-[3px] w-full mx-auto px-6 md:text-[15.6667px] md:leading-[28.3958px] md:px-[72px]">
          <div className="text-sm items-center box-border caret-transparent flex h-full leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
            <div className="text-sm box-border caret-transparent flex leading-[25.375px] outline-[3px] w-full md:text-[15.6667px] md:leading-[28.3958px]">
              <form
                role="search"
                name="simpleSearch"
                className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] w-full md:text-[15.6667px] md:leading-[28.3958px]"
              >
                <input
                  type="hidden"
                  value="en_GB"
                  name="lang"
                  className="appearance-none text-sm bg-transparent box-border caret-transparent hidden leading-[normal] outline-[3px] p-0 md:text-[15.6667px]"
                />
                <div className="relative text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
                  <div className="relative text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
                    <input
                      type="search"
                      name="q"
                      aria-label="Search"
                      role="combobox"
                      className="text-base bg-transparent box-border caret-transparent block h-10 leading-4 outline-[3px] w-full pl-14 pr-2 py-2 rounded-[30px]"
                    />
                    <button
                      aria-label="Submit search"
                      type="submit"
                      className="absolute appearance-none text-sm bg-transparent caret-transparent flex leading-[25.375px] outline-[3px] text-center align-top p-0 left-2 top-2/4 md:text-[15.6667px] md:leading-[28.3958px]"
                    >
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-21.svg"
                        alt="Icon"
                        className="text-sm box-border caret-transparent h-6 leading-[25.375px] outline-[3px] w-6 md:text-[15.6667px] md:leading-[28.3958px]"
                      />
                    </button>
                    <span className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]"></span>
                  </div>
                  <div className="text-red-600 text-xs box-border caret-transparent hidden tracking-[-0.24px] leading-[21.996px] outline-[3px] mt-2"></div>
                </div>
              </form>
              <button
                aria-label="Close search"
                className="relative appearance-none text-sm bg-transparent caret-transparent block leading-[25.375px] outline-[3px] text-center align-top p-2 md:text-[15.6667px] md:leading-[28.3958px]"
              >
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-22.svg"
                  alt="Icon"
                  className="text-sm box-border caret-transparent inline-block h-3.5 leading-[25.375px] outline-[3px] w-3.5 md:text-[15.6667px] md:leading-[28.3958px]"
                />
              </button>
            </div>
            <div className="absolute text-sm bg-white box-border caret-transparent hidden h-[920px] leading-[25.375px] outline-[3px] w-full overflow-auto pb-[184px] left-0 top-20 md:text-[15.6667px] md:leading-[28.3958px]">
              <div className="text-sm box-border caret-transparent leading-[25.375px] max-w-[1440px] outline-[3px] w-full mx-auto px-6 md:text-[15.6667px] md:leading-[28.3958px] md:px-[72px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
