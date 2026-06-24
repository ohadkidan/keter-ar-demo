export const MobileMenu = () => {
  return (
    <div className="fixed text-sm bg-white box-border caret-transparent flex flex-col h-full leading-[25.375px] outline-[3px] translate-x-[-100.0%] w-full z-[900] overflow-hidden left-0 top-0 md:text-[15.6667px] md:hidden md:leading-[28.3958px] md:transform-none">
      <nav className="text-sm box-border caret-transparent grow leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] z-10 overflow-auto md:text-[15.6667px] md:leading-[28.3958px] md:min-h-0 md:min-w-0">
        <div className="text-sm box-border caret-transparent block leading-[25.375px] max-w-[1440px] outline-[3px] w-full mx-auto px-6 md:text-[15.6667px] md:hidden md:leading-[28.3958px] md:px-[72px]">
          <div className="text-emerald-900 text-[26px] font-bold items-center border-b-zinc-100 border-l-emerald-900 border-r-emerald-900 border-t-emerald-900 box-border caret-transparent flex h-20 justify-between tracking-[-0.5px] leading-[29.978px] outline-[3px] border-b font-recoleta md:text-[32.6667px] md:leading-[40.3433px]">
            Menu
            <button
              type="button"
              aria-label="Close menu"
              className="relative appearance-none text-[26px] bg-transparent caret-transparent block tracking-[normal] leading-[29.978px] min-h-[auto] min-w-[auto] outline-[3px] text-center align-top p-0 md:text-[32.6667px] md:leading-[40.3433px] md:min-h-0 md:min-w-0"
            >
              <img
                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-8.svg"
                alt="Icon"
                className="text-[26px] box-border caret-transparent inline-block h-3.5 leading-[29.978px] outline-[3px] w-3.5 md:text-[32.6667px] md:leading-[40.3433px]"
              />
            </button>
          </div>
        </div>
        <div
          aria-label="Main menu"
          role="navigation"
          className="text-sm box-border caret-transparent hidden flex-row h-full leading-[25.375px] outline-[3px] md:text-[15.6667px] md:flex md:flex-col md:leading-[28.3958px]"
        >
          <ul className="text-sm box-border caret-transparent flex flex-col grow leading-[25.375px] list-none outline-[3px] px-6 md:text-[15.6667px] md:leading-[28.3958px] md:px-[72px]">
            <li className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] p-0 md:text-[15.6667px] md:leading-[28.3958px] md:p-2">
              <a
                href="/en-gb/sheds/"
                role="button"
                className="relative text-emerald-900 text-lg items-center border-b-zinc-100 border-l-emerald-900 border-r-emerald-900 border-t-emerald-900 box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.75px] outline-[3px] text-ellipsis text-nowrap py-4 border-b after:accent-auto after:bg-emerald-900 after:box-border after:caret-transparent after:text-emerald-900 after:block after:text-lg after:not-italic after:normal-nums after:font-medium after:h-1 after:tracking-[-0.24px] after:leading-[33.75px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:w-[calc(100%_-_24px)] after:border-separate after:left-3 after:-bottom-2 after:font-cera_pro"
              >
                Sheds
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-17.svg"
                  alt="Icon"
                  className="box-border caret-transparent block h-5 outline-[3px] text-nowrap w-5 md:hidden"
                />
              </a>
            </li>
            <li className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] p-0 md:text-[15.6667px] md:leading-[28.3958px] md:p-2">
              <a
                href="/en-gb/outdoor-storage/"
                role="button"
                className="relative text-emerald-900 text-lg items-center border-b-zinc-100 border-l-emerald-900 border-r-emerald-900 border-t-emerald-900 box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.75px] outline-[3px] text-ellipsis text-nowrap py-4 border-b after:accent-auto after:bg-emerald-900 after:box-border after:caret-transparent after:text-emerald-900 after:block after:text-lg after:not-italic after:normal-nums after:font-medium after:h-1 after:tracking-[-0.24px] after:leading-[33.75px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:w-[calc(100%_-_24px)] after:border-separate after:left-3 after:-bottom-2 after:font-cera_pro"
              >
                Outdoor Storage
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-17.svg"
                  alt="Icon"
                  className="box-border caret-transparent block h-5 outline-[3px] text-nowrap w-5 md:hidden"
                />
              </a>
            </li>
            <li className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] p-0 md:text-[15.6667px] md:leading-[28.3958px] md:p-2">
              <a
                href="/en-gb/outdoor-furniture/"
                role="button"
                className="relative text-emerald-900 text-lg items-center border-b-zinc-100 border-l-emerald-900 border-r-emerald-900 border-t-emerald-900 box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.75px] outline-[3px] text-ellipsis text-nowrap py-4 border-b after:accent-auto after:bg-emerald-900 after:box-border after:caret-transparent after:text-emerald-900 after:block after:text-lg after:not-italic after:normal-nums after:font-medium after:h-1 after:tracking-[-0.24px] after:leading-[33.75px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:w-[calc(100%_-_24px)] after:border-separate after:left-3 after:-bottom-2 after:font-cera_pro"
              >
                Outdoor Furniture
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-17.svg"
                  alt="Icon"
                  className="box-border caret-transparent block h-5 outline-[3px] text-nowrap w-5 md:hidden"
                />
              </a>
            </li>
            <li className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] p-0 md:text-[15.6667px] md:leading-[28.3958px] md:p-2">
              <a
                href="/en-gb/gardening/"
                role="button"
                className="relative text-emerald-900 text-lg items-center border-b-zinc-100 border-l-emerald-900 border-r-emerald-900 border-t-emerald-900 box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.75px] outline-[3px] text-ellipsis text-nowrap py-4 border-b after:accent-auto after:bg-emerald-900 after:box-border after:caret-transparent after:text-emerald-900 after:block after:text-lg after:not-italic after:normal-nums after:font-medium after:h-1 after:tracking-[-0.24px] after:leading-[33.75px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:w-[calc(100%_-_24px)] after:border-separate after:left-3 after:-bottom-2 after:font-cera_pro"
              >
                Gardening
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-17.svg"
                  alt="Icon"
                  className="box-border caret-transparent block h-5 outline-[3px] text-nowrap w-5 md:hidden"
                />
              </a>
            </li>
            <li className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] p-0 md:text-[15.6667px] md:leading-[28.3958px] md:p-2">
              <a
                href="/en-gb/fences/"
                className="relative text-emerald-900 text-lg items-center border-b-zinc-100 border-l-emerald-900 border-r-emerald-900 border-t-emerald-900 box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.75px] outline-[3px] text-ellipsis text-nowrap py-4 border-b after:accent-auto after:bg-emerald-900 after:box-border after:caret-transparent after:text-emerald-900 after:block after:text-lg after:not-italic after:normal-nums after:font-medium after:h-1 after:tracking-[-0.24px] after:leading-[33.75px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:w-[calc(100%_-_24px)] after:border-separate after:left-3 after:-bottom-2 after:font-cera_pro"
              >
                Fences
              </a>
            </li>
            <li className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] p-0 md:text-[15.6667px] md:leading-[28.3958px] md:p-2">
              <a
                href="/en-gb/garage-storage/?pd=true"
                className="relative text-emerald-900 text-lg items-center border-b-zinc-100 border-l-emerald-900 border-r-emerald-900 border-t-emerald-900 box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.75px] outline-[3px] text-ellipsis text-nowrap py-4 border-b after:accent-auto after:bg-emerald-900 after:box-border after:caret-transparent after:text-emerald-900 after:block after:text-lg after:not-italic after:normal-nums after:font-medium after:h-1 after:tracking-[-0.24px] after:leading-[33.75px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:w-[calc(100%_-_24px)] after:border-separate after:left-3 after:-bottom-2 after:font-cera_pro"
              >
                Garage Storage
              </a>
            </li>
          </ul>
          <div className="text-white text-sm bg-emerald-900 box-border caret-transparent block leading-[25.375px] outline-[3px] pb-4 px-6 md:text-[15.6667px] md:hidden md:leading-[28.3958px] md:px-[72px]">
            <ul className="text-sm items-center box-border caret-transparent leading-[25.375px] list-none outline-[3px] pl-0 md:text-[15.6667px] md:leading-[28.3958px]">
              <li className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] mt-6 pl-4 md:text-[15.6667px] md:leading-[28.3958px]">
                <a
                  href="/en-gb/login/"
                  className="relative text-sm items-center box-border caret-transparent flex leading-[25.375px] outline-[3px] text-ellipsis md:text-[15.6667px] md:leading-[28.3958px]"
                >
                  <span className="text-sm box-border caret-transparent block leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
                    Sign in
                  </span>
                </a>
              </li>
              <li className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] mt-6 pl-4 md:text-[15.6667px] md:leading-[28.3958px]">
                <a
                  href="https://www.keter.com/en-gb/contact-us.html"
                  className="relative text-sm box-border caret-transparent block leading-[25.375px] outline-[3px] text-ellipsis md:text-[15.6667px] md:leading-[28.3958px]"
                >
                  Contact us
                </a>
              </li>
              <li className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] mt-6 pl-4 md:text-[15.6667px] md:leading-[28.3958px]"></li>
            </ul>
          </div>
          <div className="absolute text-sm bg-neutral-900/20 box-border caret-transparent hidden h-0 leading-[25.375px] outline-[3px] w-screen z-[1] left-full top-full md:text-[15.6667px] md:leading-[28.3958px]"></div>
        </div>
      </nav>
    </div>
  );
};
