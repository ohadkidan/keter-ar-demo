export type ProductDetailsAccordionProps = {
  variant: string;
};

export const ProductDetailsAccordion = (
  props: ProductDetailsAccordionProps,
) => {
  const isCompact = props.variant === "compact";

  return (
    <div
      className={`text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px] ${isCompact ? "hidden md:block" : "block md:hidden"}`}
    >
      {!isCompact && (
        <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px] bg-gray-100 text-center overflow-hidden mt-6 px-6 py-8 rounded-[36px] md:mt-0 md:p-12">
          <h2 className="text-[38px] font-bold box-border caret-transparent tracking-[-0.5px] leading-[43.966px] outline-[3px] mb-3 font-recoleta md:text-5xl md:leading-[48px]"></h2>
          <p className="text-base box-border caret-transparent leading-[29px] outline-[3px]"></p>
          <ul className="text-sm box-border caret-transparent gap-x-0 flex flex-wrap justify-center leading-[25.375px] list-none outline-[3px] gap-y-0 mt-10 pl-0 md:text-[15.6667px] md:gap-x-8 md:leading-[28.3958px] md:gap-y-8">
            <li className="text-sm items-center box-border caret-transparent gap-x-2 flex flex-col leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-[33.33%] mb-6 md:text-[15.6667px] md:leading-[28.3958px] md:min-h-0 md:min-w-0 md:w-[100px] md:mb-2">
              <figure className="relative text-sm box-border caret-transparent h-8 leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-8 md:text-[15.6667px] md:h-16 md:leading-[28.3958px] md:min-h-0 md:min-w-0 md:w-16">
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-usp-weather-resistant.png"
                  alt=""
                  className="text-sm box-border caret-transparent inline h-full leading-[25.375px] max-h-full max-w-full outline-[3px] w-full md:text-[15.6667px] md:leading-[28.3958px]"
                />
              </figure>
              <div className="text-xs box-border caret-transparent tracking-[-0.24px] leading-[21.996px] min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[19.992px] md:min-h-0 md:min-w-0">
                All Weather Resistant
              </div>
            </li>
            <li className="text-sm items-center box-border caret-transparent gap-x-2 flex flex-col leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-[33.33%] mb-6 md:text-[15.6667px] md:leading-[28.3958px] md:min-h-0 md:min-w-0 md:w-[100px] md:mb-2">
              <figure className="relative text-sm box-border caret-transparent h-8 leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-8 md:text-[15.6667px] md:h-16 md:leading-[28.3958px] md:min-h-0 md:min-w-0 md:w-16">
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-usp-easy-clean.png"
                  alt=""
                  className="text-sm box-border caret-transparent inline h-full leading-[25.375px] max-h-full max-w-full outline-[3px] w-full md:text-[15.6667px] md:leading-[28.3958px]"
                />
              </figure>
              <div className="text-xs box-border caret-transparent tracking-[-0.24px] leading-[21.996px] min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[19.992px] md:min-h-0 md:min-w-0">
                Easy Clean
              </div>
            </li>
            <li className="text-sm items-center box-border caret-transparent gap-x-2 flex flex-col leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-[33.33%] mb-6 md:text-[15.6667px] md:leading-[28.3958px] md:min-h-0 md:min-w-0 md:w-[100px] md:mb-2">
              <figure className="relative text-sm box-border caret-transparent h-8 leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-8 md:text-[15.6667px] md:h-16 md:leading-[28.3958px] md:min-h-0 md:min-w-0 md:w-16">
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-usp-fade-proof.png"
                  alt=""
                  className="text-sm box-border caret-transparent inline h-full leading-[25.375px] max-h-full max-w-full outline-[3px] w-full md:text-[15.6667px] md:leading-[28.3958px]"
                />
              </figure>
              <div className="text-xs box-border caret-transparent tracking-[-0.24px] leading-[21.996px] min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[19.992px] md:min-h-0 md:min-w-0">
                Does Not Fade
              </div>
            </li>
            <li className="text-sm items-center box-border caret-transparent gap-x-2 flex flex-col leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-[33.33%] mb-6 md:text-[15.6667px] md:leading-[28.3958px] md:min-h-0 md:min-w-0 md:w-[100px] md:mb-2">
              <figure className="relative text-sm box-border caret-transparent h-8 leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-8 md:text-[15.6667px] md:h-16 md:leading-[28.3958px] md:min-h-0 md:min-w-0 md:w-16">
                <img
                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-usp-assembly.png"
                  alt=""
                  className="text-sm box-border caret-transparent inline h-full leading-[25.375px] max-h-full max-w-full outline-[3px] w-full md:text-[15.6667px] md:leading-[28.3958px]"
                />
              </figure>
              <div className="text-xs box-border caret-transparent tracking-[-0.24px] leading-[21.996px] min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[19.992px] md:min-h-0 md:min-w-0">
                Hassle Free Assembly
              </div>
            </li>
            <li className="text-sm items-center box-border caret-transparent gap-x-2 flex flex-col leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-[33.33%] mb-6 md:text-[15.6667px] md:leading-[28.3958px] md:min-h-0 md:min-w-0 md:w-[100px] md:mb-0">
              <img
                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-37.svg"
                alt="Icon"
                className="text-gray-400 text-sm box-border caret-transparent shrink-0 h-8 leading-[25.375px] outline-[3px] w-8 md:text-[15.6667px] md:h-16 md:leading-[28.3958px] md:w-16"
              />
              <div className="text-xs box-border caret-transparent tracking-[-0.24px] leading-[21.996px] min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[19.992px] md:min-h-0 md:min-w-0">
                2 Year Warranty
              </div>
            </li>
          </ul>
        </div>
      )}
      <div
        className={
          isCompact
            ? "text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]"
            : "text-sm box-border caret-transparent flex flex-wrap leading-[25.375px] ml-[-5px] mr-[-5px] outline-[3px] w-[calc(100%_+_10px)] md:text-[15.6667px] md:leading-[28.3958px] md:w-[calc(100%_+_20px)] md:-mx-2.5"
        }
      >
        <div
          className={
            isCompact
              ? "text-sm box-border caret-transparent flex flex-wrap leading-[25.375px] ml-[-5px] mr-[-5px] outline-[3px] w-[calc(100%_+_10px)] md:text-[15.6667px] md:leading-[28.3958px] md:w-[calc(100%_+_20px)] md:-mx-2.5"
              : "text-sm box-border caret-transparent basis-full shrink-0 leading-[25.375px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-[5px] md:text-[15.6667px] md:leading-[28.3958px] md:min-h-0 md:min-w-0 md:px-2.5"
          }
        >
          <div
            className={
              isCompact
                ? "text-sm box-border caret-transparent basis-full shrink-0 leading-[25.375px] max-w-full min-h-0 min-w-0 outline-[3px] px-[5px] md:text-[15.6667px] md:leading-[28.3958px] md:min-h-[auto] md:min-w-[auto] md:px-2.5"
                : "relative text-sm box-border caret-transparent leading-[25.375px] outline-[3px] mb-5 md:text-[15.6667px] md:leading-[28.3958px]"
            }
          >
            <div
              className={
                isCompact
                  ? "relative text-sm box-border caret-transparent leading-[25.375px] outline-[3px] mb-5 md:text-[15.6667px] md:leading-[28.3958px]"
                  : "text-sm border-b-gray-400/20 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent leading-[25.375px] outline-[3px] border-b md:text-[15.6667px] md:leading-[28.3958px]"
              }
            >
              {isCompact && (
                <div className="text-sm border-b-gray-400/20 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent leading-[25.375px] outline-[3px] border-b md:text-[15.6667px] md:leading-[28.3958px]">
                  <span className="text-emerald-900 text-xl box-border caret-transparent hidden tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                    Description
                  </span>
                  <button
                    type="button"
                    className="relative appearance-none text-sm font-normal bg-transparent caret-transparent leading-[25.375px] outline-[3px] align-top w-full px-0 py-6 md:text-[15.6667px] md:leading-[28.3958px]"
                  >
                    <span className="text-emerald-900 text-xl font-medium box-border caret-transparent hidden tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                      Description
                    </span>
                    <span className="text-emerald-900 text-xl font-medium items-center box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                      Description
                      <span className="box-border caret-transparent block fill-emerald-900 min-h-0 min-w-0 outline-[3px] ml-4 md:min-h-[auto] md:min-w-[auto]">
                        <img
                          src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-39.svg"
                          alt="Icon"
                          className="box-border caret-transparent inline-block h-3 outline-[3px] w-5"
                        />
                      </span>
                    </span>
                  </button>
                  <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
                    <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] pb-6 md:text-[15.6667px] md:leading-[28.3958px]">
                      <div className="text-sm box-border caret-transparent tracking-[-0.24px] leading-[19.992px] outline-[3px]">
                        <section className="box-border caret-transparent outline-[3px]">
                          <div className="box-border caret-transparent flow-root outline-[3px] overflow-hidden mb-2">
                            <div className="box-border caret-transparent inline outline-[3px] mb-2">
                              Maximise Your Space with the Velo Storage Unit!
                              Say goodbye to clutter and hello to organisation
                              with the versatile Velo Storage Unit. Perfect for
                              any space, this all‑weather‑resistant and
                              UV‑protected storage solution is ideal for
                              cushions, toys, gardening tools and more.
                              Featuring smooth‑gliding sliding doors for easy
                              access and a sleek, modern design, the Velo
                              Storage Unit combines practicality with style.
                              Assembly is a breeze, taking just 30 minutes to
                              set up, and once in place it becomes your go‑to
                              solution for keeping your space tidy, organised
                              and secure. Organise smarter, live better.
                            </div>
                            <div className="box-border caret-transparent hidden outline-[3px]">
                              <p className="box-border caret-transparent inline outline-[3px] mb-2">
                                Features and Benefits
                              </p>
                              <ul className="text-base box-border caret-transparent inline leading-[22.848px] list-none outline-[3px] my-2 pl-0">
                                <li className="relative text-sm box-border caret-transparent inline leading-[19.992px] outline-[3px] ml-2 pl-4 before:accent-auto before:bg-zinc-800 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-[5px] before:tracking-[-0.24px] before:leading-[19.992px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-[50%] before:border-separate before:left-0 before:top-[7px] before:font-cera_pro">
                                  Optimise your storage and keep your
                                  surroundings tidy, with a flexible stacking
                                  option that lets you add a second unit to
                                  expand vertically (sold separately)
                                </li>
                                <li className="relative text-sm box-border caret-transparent inline leading-[19.992px] outline-[3px] ml-2 mt-2 pl-4 before:accent-auto before:bg-zinc-800 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-[5px] before:tracking-[-0.24px] before:leading-[19.992px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-[50%] before:border-separate before:left-0 before:top-[7px] before:font-cera_pro">
                                  Ideal for organising a wide range of items,
                                  from seasonal cushions to everyday tools,
                                  helping keep your space neat and clutter-free.
                                </li>
                                <li className="relative text-sm box-border caret-transparent inline leading-[19.992px] outline-[3px] ml-2 mt-2 pl-4 before:accent-auto before:bg-zinc-800 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-[5px] before:tracking-[-0.24px] before:leading-[19.992px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-[50%] before:border-separate before:left-0 before:top-[7px] before:font-cera_pro">
                                  Smooth sliding doors provide easy, convenient
                                  access, while the durable, all-weather and
                                  UV-resistant construction ensures reliable use
                                  year-round.
                                </li>
                                <li className="relative text-sm box-border caret-transparent inline leading-[19.992px] outline-[3px] ml-2 mt-2 pl-4 before:accent-auto before:bg-zinc-800 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-[5px] before:tracking-[-0.24px] before:leading-[19.992px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-[50%] before:border-separate before:left-0 before:top-[7px] before:font-cera_pro">
                                  Quick and straightforward to assemble, making
                                  set-up simple and stress-free from start to
                                  finish.
                                </li>
                              </ul>
                              <span className="box-border caret-transparent outline-[3px]">
                                Item number: 271396
                              </span>
                            </div>
                          </div>
                          <div className="box-border caret-transparent flex justify-between outline-[3px]">
                            <button
                              type="button"
                              aria-label="Expand text"
                              className="relative appearance-none items-center bg-transparent caret-transparent flex justify-center tracking-[normal] min-h-0 min-w-0 outline-[3px] text-center align-top p-0 rounded-[100px] md:min-h-[auto] md:min-w-[auto] after:accent-auto after:bg-zinc-800 after:box-border after:caret-transparent after:text-zinc-800 after:block after:text-sm after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[normal] after:leading-[19.992px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:bottom-0 after:font-cera_pro"
                            >
                              <span className="text-base font-bold box-border caret-transparent block leading-[22.848px] min-h-0 min-w-0 outline-[3px] mr-2 md:min-h-[auto] md:min-w-[auto]">
                                Read more
                              </span>
                              <span className="items-center box-border caret-transparent hidden outline-[3px] pointer-events-none">
                                <img
                                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-40.svg"
                                  alt="Icon"
                                  className="text-gray-400 box-border caret-transparent inline-block h-[15px] outline-[3px] w-[15px]"
                                />
                              </span>
                              <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]"></span>
                            </button>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {!isCompact && (
                <>
                  <span className="text-emerald-900 text-xl box-border caret-transparent hidden tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                    Description
                  </span>
                  <button
                    type="button"
                    className="relative appearance-none text-sm font-normal bg-transparent caret-transparent leading-[25.375px] outline-[3px] align-top w-full px-0 py-6 md:text-[15.6667px] md:leading-[28.3958px]"
                  >
                    <span className="text-emerald-900 text-xl font-medium box-border caret-transparent hidden tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                      Description
                    </span>
                    <span className="text-emerald-900 text-xl font-medium items-center box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                      Description
                      <span className="box-border caret-transparent block fill-emerald-900 min-h-[auto] min-w-[auto] outline-[3px] ml-4 md:min-h-0 md:min-w-0">
                        <img
                          src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-39.svg"
                          alt="Icon"
                          className="box-border caret-transparent inline-block h-3 outline-[3px] w-5"
                        />
                      </span>
                    </span>
                  </button>
                  <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
                    <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] pb-6 md:text-[15.6667px] md:leading-[28.3958px]">
                      <div className="text-sm box-border caret-transparent tracking-[-0.24px] leading-[19.992px] outline-[3px]">
                        <section className="box-border caret-transparent outline-[3px]">
                          <div className="box-border caret-transparent flow-root outline-[3px] overflow-hidden mb-2">
                            <div className="box-border caret-transparent inline outline-[3px] mb-2">
                              Maximise Your Space with the Velo Storage Unit!
                              Say goodbye to clutter and hello to organisation
                              with the versatile Velo Storage Unit. Perfect for
                              any space, this all‑weather‑resistant and
                              UV‑protected storage solution is ideal for
                              cushions, toys, gardening tools and more.
                              Featuring smooth‑gliding sliding doors for easy
                              access and a sleek, modern design, the Velo
                              Storage Unit combines practicality with style.
                              Assembly is a breeze, taking just 30 minutes to
                              set up, and once in place it becomes your go‑to
                              solution for keeping your space tidy, organised
                              and secure. Organise smarter, live better.
                            </div>
                            <div className="box-border caret-transparent hidden outline-[3px]">
                              <p className="box-border caret-transparent inline outline-[3px] mb-2">
                                Features and Benefits
                              </p>
                              <ul className="text-base box-border caret-transparent inline leading-[22.848px] list-none outline-[3px] my-2 pl-0">
                                <li className="relative text-sm box-border caret-transparent inline leading-[19.992px] outline-[3px] ml-2 pl-4 before:accent-auto before:bg-zinc-800 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-[5px] before:tracking-[-0.24px] before:leading-[19.992px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-[50%] before:border-separate before:left-0 before:top-[7px] before:font-cera_pro">
                                  Optimise your storage and keep your
                                  surroundings tidy, with a flexible stacking
                                  option that lets you add a second unit to
                                  expand vertically (sold separately)
                                </li>
                                <li className="relative text-sm box-border caret-transparent inline leading-[19.992px] outline-[3px] ml-2 mt-2 pl-4 before:accent-auto before:bg-zinc-800 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-[5px] before:tracking-[-0.24px] before:leading-[19.992px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-[50%] before:border-separate before:left-0 before:top-[7px] before:font-cera_pro">
                                  Ideal for organising a wide range of items,
                                  from seasonal cushions to everyday tools,
                                  helping keep your space neat and clutter-free.
                                </li>
                                <li className="relative text-sm box-border caret-transparent inline leading-[19.992px] outline-[3px] ml-2 mt-2 pl-4 before:accent-auto before:bg-zinc-800 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-[5px] before:tracking-[-0.24px] before:leading-[19.992px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-[50%] before:border-separate before:left-0 before:top-[7px] before:font-cera_pro">
                                  Smooth sliding doors provide easy, convenient
                                  access, while the durable, all-weather and
                                  UV-resistant construction ensures reliable use
                                  year-round.
                                </li>
                                <li className="relative text-sm box-border caret-transparent inline leading-[19.992px] outline-[3px] ml-2 mt-2 pl-4 before:accent-auto before:bg-zinc-800 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-[5px] before:tracking-[-0.24px] before:leading-[19.992px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-[50%] before:border-separate before:left-0 before:top-[7px] before:font-cera_pro">
                                  Quick and straightforward to assemble, making
                                  set-up simple and stress-free from start to
                                  finish.
                                </li>
                              </ul>
                              <span className="box-border caret-transparent outline-[3px]">
                                Item number: 271396
                              </span>
                            </div>
                          </div>
                          <div className="box-border caret-transparent flex justify-between outline-[3px]">
                            <button
                              type="button"
                              aria-label="Expand text"
                              className="relative appearance-none items-center bg-transparent caret-transparent flex justify-center tracking-[normal] min-h-[auto] min-w-[auto] outline-[3px] text-center align-top p-0 rounded-[100px] md:min-h-0 md:min-w-0 after:accent-auto after:bg-zinc-800 after:box-border after:caret-transparent after:text-zinc-800 after:block after:text-sm after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[normal] after:leading-[19.992px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:bottom-0 after:font-cera_pro"
                            >
                              <span className="text-base font-bold box-border caret-transparent block leading-[22.848px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 md:min-h-0 md:min-w-0">
                                Read more
                              </span>
                              <span className="items-center box-border caret-transparent hidden outline-[3px] pointer-events-none">
                                <img
                                  src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-40.svg"
                                  alt="Icon"
                                  className="text-gray-400 box-border caret-transparent inline-block h-[15px] outline-[3px] w-[15px]"
                                />
                              </span>
                              <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0"></span>
                            </button>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="text-sm border-b-gray-400/20 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent leading-[25.375px] outline-[3px] border-b md:text-[15.6667px] md:leading-[28.3958px]">
                <span className="text-emerald-900 text-xl box-border caret-transparent hidden tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                  Specifications
                </span>
                <button
                  type="button"
                  className="relative appearance-none text-sm font-normal bg-transparent caret-transparent leading-[25.375px] outline-[3px] align-top w-full px-0 py-6 md:text-[15.6667px] md:leading-[28.3958px]"
                >
                  <span className="text-emerald-900 text-xl font-medium box-border caret-transparent hidden tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                    Specifications
                  </span>
                  <span className="text-emerald-900 text-xl font-medium items-center box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                    Specifications
                    <span
                      className={
                        isCompact
                          ? "box-border caret-transparent block fill-emerald-900 min-h-0 min-w-0 outline-[3px] ml-4 md:min-h-[auto] md:min-w-[auto]"
                          : "box-border caret-transparent block fill-emerald-900 min-h-[auto] min-w-[auto] outline-[3px] ml-4 md:min-h-0 md:min-w-0"
                      }
                    >
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-41.svg"
                        alt="Icon"
                        className="box-border caret-transparent inline-block h-5 outline-[3px] w-5"
                      />
                    </span>
                  </span>
                </button>
                <div className="text-sm box-border caret-transparent h-0 leading-[25.375px] outline-[3px] invisible overflow-hidden md:text-[15.6667px] md:leading-[28.3958px]">
                  <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] pb-6 md:text-[15.6667px] md:leading-[28.3958px]">
                    <ul
                      role="grid"
                      className="text-base box-border caret-transparent leading-[29px] list-none outline-[3px] pl-0"
                    >
                      <li
                        role="row"
                        className="relative text-sm bg-gray-100 box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2"
                      >
                        <span
                          role="columnheader"
                          className={
                            isCompact
                              ? "text-slate-500 text-lg font-bold box-border caret-transparent block leading-[33.75px] min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[50%] md:w-auto"
                              : "text-slate-500 text-lg font-bold box-border caret-transparent block leading-[33.75px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-[50%] md:w-auto"
                          }
                        >
                          Category
                        </span>
                        <span
                          role="columnheader"
                          className={
                            isCompact
                              ? "text-lg font-bold box-border caret-transparent block leading-[33.75px] min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]"
                              : "text-lg font-bold box-border caret-transparent block leading-[33.75px] min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0"
                          }
                        >
                          Details
                        </span>
                      </li>
                      {[
                        [
                          "Capacity",
                          "113 L",
                          "relative text-sm box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Colour Family",
                          "Graphite",
                          "relative text-sm bg-gray-100 box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "External Depth",
                          "47 cm",
                          "relative text-sm box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "External Height",
                          "62.3 cm",
                          "relative text-sm bg-gray-100 box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "External Width",
                          "62.4 cm",
                          "relative text-sm box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Shipping Weight",
                          "6.61 kg",
                          "relative text-sm bg-gray-100 box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Internal Depth",
                          "43 cm",
                          "relative text-sm box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Internal Height",
                          "43 cm",
                          "relative text-sm bg-gray-100 box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Internal Width",
                          "57 cm",
                          "relative text-sm box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Loading Capacity",
                          "20 kg",
                          "relative text-sm bg-gray-100 box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Lockable",
                          "Yes",
                          "relative text-sm box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Material",
                          "Resin",
                          "relative text-sm bg-gray-100 box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Product Weight",
                          "5.71 kg",
                          "relative text-sm box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Piston Assisted",
                          "No",
                          "relative text-sm bg-gray-100 box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Size",
                          "62.4x47 cm",
                          "relative text-sm box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Texture",
                          "Wood-Look",
                          "relative text-sm bg-gray-100 box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                        [
                          "Weather Resistant",
                          "Yes",
                          "relative text-sm box-border caret-transparent flex flex-wrap tracking-[-0.24px] leading-[19.992px] outline-[3px] px-3 py-2",
                        ],
                      ].map(([label, value, rowClass]) => (
                        <li role="row" className={rowClass} key={label}>
                          <span
                            role="cell"
                            className={
                              isCompact
                                ? "text-slate-500 box-border caret-transparent block min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[50%] md:w-auto"
                                : "text-slate-500 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-[50%] md:w-auto"
                            }
                          >
                            {label}
                          </span>
                          <span
                            role="cell"
                            className={
                              isCompact
                                ? "box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]"
                                : "box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0"
                            }
                          >
                            {value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-sm border-b-gray-400/20 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent leading-[25.375px] outline-[3px] border-b md:text-[15.6667px] md:leading-[28.3958px]">
                <span className="text-emerald-900 text-xl box-border caret-transparent hidden tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                  Measurements
                </span>
                <button
                  type="button"
                  className="relative appearance-none text-sm font-normal bg-transparent caret-transparent leading-[25.375px] outline-[3px] align-top w-full px-0 py-6 md:text-[15.6667px] md:leading-[28.3958px]"
                >
                  <span className="text-emerald-900 text-xl font-medium box-border caret-transparent hidden tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                    Measurements
                  </span>
                  <span className="text-emerald-900 text-xl font-medium items-center box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                    Measurements
                    <span
                      className={
                        isCompact
                          ? "box-border caret-transparent block fill-emerald-900 min-h-0 min-w-0 outline-[3px] ml-4 md:min-h-[auto] md:min-w-[auto]"
                          : "box-border caret-transparent block fill-emerald-900 min-h-[auto] min-w-[auto] outline-[3px] ml-4 md:min-h-0 md:min-w-0"
                      }
                    >
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-41.svg"
                        alt="Icon"
                        className="box-border caret-transparent inline-block h-5 outline-[3px] w-5"
                      />
                    </span>
                  </span>
                </button>
                <div className="text-sm box-border caret-transparent h-0 leading-[25.375px] outline-[3px] invisible overflow-hidden md:text-[15.6667px] md:leading-[28.3958px]">
                  <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] pb-6 md:text-[15.6667px] md:leading-[28.3958px]">
                    <section className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] py-4 md:text-[15.6667px] md:leading-[28.3958px]">
                      {[
                        {
                          title: "External",
                          values: [
                            ["Height", "62.3 cm"],
                            ["Depth", "47 cm"],
                            ["Width", "62.4 cm"],
                          ],
                        },
                        {
                          title: "Internal",
                          values: [
                            ["Height", "43 cm"],
                            ["Depth", "43 cm"],
                            ["Width", "57 cm"],
                          ],
                        },
                      ].map((measurement) => (
                        <div
                          className="text-sm box-border caret-transparent flex justify-start leading-[25.375px] outline-[3px] mb-4 md:text-[15.6667px] md:leading-[28.3958px]"
                          key={measurement.title}
                        >
                          <div
                            className={
                              isCompact
                                ? "text-sm items-center box-border caret-transparent flex h-40 justify-center leading-[25.375px] min-h-0 min-w-0 outline-[3px] w-40 border border-neutral-500/30 mr-6 p-4 rounded-2xl border-solid md:text-[15.6667px] md:leading-[28.3958px] md:min-h-[auto] md:min-w-[auto]"
                                : "text-sm items-center box-border caret-transparent flex h-40 justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-40 border border-neutral-500/30 mr-6 p-4 rounded-2xl border-solid md:text-[15.6667px] md:leading-[28.3958px] md:min-h-0 md:min-w-0"
                            }
                          >
                            <figure
                              className={
                                isCompact
                                  ? "relative text-sm box-border caret-transparent leading-[25.375px] min-h-0 min-w-0 outline-[3px] md:text-[15.6667px] md:leading-[28.3958px] md:min-h-[auto] md:min-w-[auto]"
                                  : "relative text-sm box-border caret-transparent leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px] md:min-h-0 md:min-w-0"
                              }
                            >
                              <img
                                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/130.jpg"
                                alt="Velo 113L Storage Unit - Graphite"
                                className="text-sm box-border caret-transparent inline leading-[25.375px] max-h-full max-w-full opacity-0 outline-[3px] w-full md:text-[15.6667px] md:leading-[28.3958px]"
                              />
                            </figure>
                          </div>
                          <div
                            className={
                              isCompact
                                ? "text-sm box-border caret-transparent leading-[25.375px] min-h-0 min-w-0 outline-[3px] md:text-[15.6667px] md:leading-[28.3958px] md:min-h-[auto] md:min-w-[auto]"
                                : "text-sm box-border caret-transparent leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px] md:min-h-0 md:min-w-0"
                            }
                          >
                            <div className="text-emerald-900 text-base box-border caret-transparent tracking-[-0.24px] leading-6 outline-[3px] mb-2">
                              {measurement.title}
                            </div>
                            <dl className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
                              {measurement.values.map(([label, value]) => (
                                <div
                                  className="text-sm items-center box-border caret-transparent flex leading-[25.375px] outline-[3px] mb-1 md:text-[15.6667px] md:leading-[28.3958px]"
                                  key={`${measurement.title}-${label}`}
                                >
                                  <dt
                                    className={
                                      isCompact
                                        ? "text-sm box-border caret-transparent tracking-[-0.24px] leading-[19.992px] min-h-0 min-w-0 outline-[3px] pr-2 md:min-h-[auto] md:min-w-[auto]"
                                        : "text-sm box-border caret-transparent tracking-[-0.24px] leading-[19.992px] min-h-[auto] min-w-[auto] outline-[3px] pr-2 md:min-h-0 md:min-w-0"
                                    }
                                  >
                                    {label}
                                  </dt>
                                  <dd
                                    className={
                                      isCompact
                                        ? "text-sm box-border caret-transparent tracking-[-0.24px] leading-[19.992px] min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]"
                                        : "text-sm box-border caret-transparent tracking-[-0.24px] leading-[19.992px] min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0"
                                    }
                                  >
                                    {value}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        </div>
                      ))}
                    </section>
                  </div>
                </div>
              </div>
              <div className="text-sm border-b-gray-400/20 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent leading-[25.375px] outline-[3px] border-b md:text-[15.6667px] md:leading-[28.3958px]">
                <span className="text-emerald-900 text-xl box-border caret-transparent hidden tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                  Service
                </span>
                <button
                  type="button"
                  className="relative appearance-none text-sm font-normal bg-transparent caret-transparent leading-[25.375px] outline-[3px] align-top w-full px-0 py-6 md:text-[15.6667px] md:leading-[28.3958px]"
                >
                  <span className="text-emerald-900 text-xl font-medium box-border caret-transparent hidden tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                    Service
                  </span>
                  <span className="text-emerald-900 text-xl font-medium items-center box-border caret-transparent flex justify-between tracking-[-0.24px] leading-[33.34px] outline-[3px]">
                    Service
                    <span
                      className={
                        isCompact
                          ? "box-border caret-transparent block fill-emerald-900 min-h-0 min-w-0 outline-[3px] ml-4 md:min-h-[auto] md:min-w-[auto]"
                          : "box-border caret-transparent block fill-emerald-900 min-h-[auto] min-w-[auto] outline-[3px] ml-4 md:min-h-0 md:min-w-0"
                      }
                    >
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-41.svg"
                        alt="Icon"
                        className="box-border caret-transparent inline-block h-5 outline-[3px] w-5"
                      />
                    </span>
                  </span>
                </button>
                <div className="text-sm box-border caret-transparent h-0 leading-[25.375px] outline-[3px] invisible overflow-hidden md:text-[15.6667px] md:leading-[28.3958px]">
                  <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] pb-6 md:text-[15.6667px] md:leading-[28.3958px]">
                    <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
                      <div className="text-sm box-border caret-transparent tracking-[-0.24px] leading-[19.992px] outline-[3px]">
                        <div className="box-border caret-transparent outline-[3px]">
                          <p className="box-border caret-transparent outline-[3px] mb-10">
                            To register for your warranty please&nbsp;
                            <a
                              href="https://www.keter.com/en-gb/contact-us.html"
                              className="box-border caret-transparent outline-[3px] underline text-ellipsis"
                            >
                              click here
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
