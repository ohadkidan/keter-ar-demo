export const MainImageCarousel = () => {
  return (
    <section
      role="region"
      aria-label="Product Images Slider"
      className="relative text-sm box-border caret-transparent leading-[25.375px] outline-[3px] w-[calc(100%_+_48px)] -ml-6 mb-1.5 md:text-[15.6667px] md:leading-[28.3958px] md:w-auto md:ml-0 md:mb-6"
    >
      <header className="absolute text-sm [align-items:normal] box-border caret-transparent block leading-[25.375px] outline-[3px] w-full mb-3 px-3 left-0 bottom-0 md:text-[15.6667px] md:items-end md:hidden md:leading-[28.3958px]">
        <div className="text-sm items-center box-border caret-transparent hidden justify-between leading-[25.375px] outline-[3px] ml-auto md:text-[15.6667px] md:leading-[28.3958px]">
          <button
            type="button"
            aria-label="button.previous"
            className="relative appearance-none text-sm items-center bg-white bg-no-repeat shadow-[rgba(0,0,0,0.08)_0px_2px_8px_0px] caret-transparent inline-flex h-10 justify-center leading-[25.375px] outline-[3px] text-center align-top w-10 z-[1] border border-slate-500/20 bg-center p-0 rounded-[100%] inset-0 md:text-[15.6667px] md:h-12 md:leading-[28.3958px] md:w-12 md:bottom-auto"
          >
            <span className="absolute text-sm items-center box-border caret-transparent flex h-4 leading-[25.375px] outline-[3px] pointer-events-none w-4 right-2/4 top-2/4 md:text-[15.6667px] md:leading-[28.3958px]">
              <img
                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-43.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent hidden h-[16.8px] leading-[25.375px] outline-[3px] w-[16.8px] md:text-[15.6667px] md:block md:h-[18.8px] md:leading-[28.3958px] md:w-[18.8px]"
              />
            </span>
            <span className="absolute text-sm items-center box-border caret-transparent flex h-4 leading-[25.375px] outline-[3px] pointer-events-none w-4 right-2/4 top-2/4 md:text-[15.6667px] md:leading-[28.3958px]">
              <img
                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-44.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-[16.8px] leading-[25.375px] outline-[3px] w-[16.8px] md:text-[15.6667px] md:h-[18.8px] md:leading-[28.3958px] md:w-[18.8px]"
              />
            </span>
            <span className="text-sm box-border caret-transparent block leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]"></span>
          </button>
          <div className="text-sm box-border caret-transparent hidden leading-[25.375px] outline-[3px] text-nowrap -mb-px md:text-[15.6667px] md:leading-[28.3958px]">
            <span className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] text-nowrap md:text-[15.6667px] md:leading-[28.3958px]">
              1-3 from
            </span>
          </div>
          <button
            type="button"
            aria-label="button.next"
            className="relative appearance-none text-sm items-center bg-white bg-no-repeat shadow-[rgba(0,0,0,0.08)_0px_2px_8px_0px] caret-transparent inline-flex h-10 justify-center leading-[25.375px] outline-[3px] text-center align-top w-10 z-[1] border border-slate-500/20 bg-center p-0 rounded-[100%] inset-0 md:text-[15.6667px] md:h-12 md:leading-[28.3958px] md:w-12 md:bottom-auto"
          >
            <span className="absolute text-sm items-center box-border caret-transparent flex h-4 leading-[25.375px] outline-[3px] pointer-events-none w-4 right-2/4 top-2/4 md:text-[15.6667px] md:leading-[28.3958px]">
              <img
                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-45.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent hidden h-[16.8px] leading-[25.375px] outline-[3px] w-[16.8px] md:text-[15.6667px] md:block md:h-[18.8px] md:leading-[28.3958px] md:w-[18.8px]"
              />
            </span>
            <span className="absolute text-sm items-center box-border caret-transparent flex h-4 leading-[25.375px] outline-[3px] pointer-events-none w-4 right-2/4 top-2/4 md:text-[15.6667px] md:leading-[28.3958px]">
              <img
                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-46.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-[16.8px] leading-[25.375px] outline-[3px] w-[16.8px] md:text-[15.6667px] md:h-[18.8px] md:leading-[28.3958px] md:w-[18.8px]"
              />
            </span>
            <span className="text-sm box-border caret-transparent block leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]"></span>
          </button>
        </div>
      </header>
      <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
        <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
          <div className="relative text-sm items-start box-border caret-transparent flex leading-[25.375px] outline-[3px] z-0 overflow-hidden md:text-[15.6667px] md:leading-[28.3958px]">
            <div
              role="presentation"
              className="text-sm box-border caret-transparent flex h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] translate-x-[-750px] w-full md:text-[15.6667px] md:leading-[28.3958px] md:translate-x-[-1318.66px]"
            >
              <div
                role="tabpanel"
                aria-label="6 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:text-[15.6667px] md:leading-[28.3958px] md:mr-[5px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/122.jpg"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                aria-label="7 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:text-[15.6667px] md:leading-[28.3958px] md:mr-[5px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/112.jpg"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                aria-label="1 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:text-[15.6667px] md:leading-[28.3958px] md:mr-[5px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/115.png"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                aria-label="2 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:text-[15.6667px] md:leading-[28.3958px] md:mr-[5px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/139.png"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                aria-label="3 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:text-[15.6667px] md:leading-[28.3958px] md:mr-[5px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/137.png"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                aria-label="4 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:text-[15.6667px] md:leading-[28.3958px] md:mr-[5px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/119.jpg"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                aria-label="5 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:text-[15.6667px] md:leading-[28.3958px] md:mr-[5px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/120.jpg"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                aria-label="6 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:text-[15.6667px] md:leading-[28.3958px] md:mr-[5px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/122.jpg"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                aria-label="7 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:text-[15.6667px] md:leading-[28.3958px] md:mr-[5px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/112.jpg"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                aria-label="1 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:text-[15.6667px] md:leading-[28.3958px] md:mr-[5px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/115.png"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                aria-label="2 of 7"
                className="relative text-sm items-center box-border caret-transparent flex shrink-0 leading-[25.375px] list-none min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[15.6667px] md:leading-[28.3958px]"
              >
                <div className="relative text-sm bg-zinc-100 box-border caret-transparent flex flex-col h-[250px] justify-center leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-visible rounded-none md:text-[15.6667px] md:bg-gray-100 md:h-[470px] md:leading-[28.3958px] md:overflow-hidden md:rounded-[36px]">
                  <figure className="relative text-sm bg-no-repeat bg-cover box-border caret-transparent h-full leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-[15.6667px] md:leading-[28.3958px]">
                    <img
                      src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/139.png"
                      alt="Velo 113L Storage Unit - Graphite"
                      className="text-sm box-border caret-transparent inline h-full leading-[25.375px] object-cover outline-[3px] align-bottom w-full md:text-[15.6667px] md:leading-[28.3958px]"
                    />
                  </figure>
                  <button
                    aria-label="Open modal"
                    className="absolute appearance-none text-sm bg-white shadow-[rgba(0,0,0,0.3)_0px_2px_10px_0px] caret-transparent hidden h-[46px] leading-[25.375px] outline-[3px] text-center align-top w-2 z-[2] p-0 rounded-[46px] right-4 bottom-4 md:text-[15.6667px] md:leading-[28.3958px] md:w-[46px] md:right-8 md:bottom-8"
                  >
                    <span className="absolute text-xl items-center box-border caret-transparent flex h-full justify-center leading-[36.25px] outline-[3px] w-full z-[2] left-2/4 top-[calc(50%_+_1px)]">
                      <img
                        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-6 outline-[3px] w-6"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ul
            role="tablist"
            aria-label="Select a slide to show"
            className="static text-sm items-center bg-zinc-100 box-border caret-transparent flex flex-wrap justify-center leading-[25.375px] outline-[3px] pointer-events-none z-[1] pl-0 py-3.5 bottom-8 inset-x-0 md:absolute md:text-[15.6667px] md:hidden md:leading-[28.3958px]"
          >
            <li
              role="presentation"
              className="text-sm box-border caret-transparent flex justify-center leading-[0px] list-none min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto mx-[6.01504px] md:text-[15.6667px] md:inline-flex md:min-h-0 md:min-w-0"
            >
              <button
                type="button"
                role="tab"
                aria-label="Go to slide 1"
                title="Image"
                className="relative appearance-none text-sm bg-zinc-800 caret-transparent block h-1 min-h-[auto] min-w-[auto] outline-[3px] text-center align-top w-4 z-[1] p-0 rounded-lg scale-[1.6] md:text-[15.6667px] md:min-h-0 md:min-w-0 md:transform-none"
              ></button>
            </li>
            <li
              role="presentation"
              className="text-sm box-border caret-transparent flex justify-center leading-[0px] list-none min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto mx-[6.01504px] md:text-[15.6667px] md:inline-flex md:min-h-0 md:min-w-0"
            >
              <button
                type="button"
                role="tab"
                aria-label="Go to slide 2"
                title="Image"
                className="relative appearance-none text-sm bg-slate-500/50 caret-transparent block h-1 min-h-[auto] min-w-[auto] outline-[3px] text-center align-top w-1 p-0 rounded-[50%] md:text-[15.6667px] md:min-h-0 md:min-w-0"
              ></button>
            </li>
            <li
              role="presentation"
              className="text-sm box-border caret-transparent flex justify-center leading-[0px] list-none min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto mx-[6.01504px] md:text-[15.6667px] md:inline-flex md:min-h-0 md:min-w-0"
            >
              <button
                type="button"
                role="tab"
                aria-label="Go to slide 3"
                title="Image"
                className="relative appearance-none text-sm bg-slate-500/50 caret-transparent block h-1 min-h-[auto] min-w-[auto] outline-[3px] text-center align-top w-1 p-0 rounded-[50%] md:text-[15.6667px] md:min-h-0 md:min-w-0"
              ></button>
            </li>
            <li
              role="presentation"
              className="text-sm box-border caret-transparent flex justify-center leading-[0px] list-none min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto mx-[6.01504px] md:text-[15.6667px] md:inline-flex md:min-h-0 md:min-w-0"
            >
              <button
                type="button"
                role="tab"
                aria-label="Go to slide 4"
                title="Image"
                className="relative appearance-none text-sm bg-slate-500/50 caret-transparent block h-1 min-h-[auto] min-w-[auto] outline-[3px] text-center align-top w-1 p-0 rounded-[50%] md:text-[15.6667px] md:min-h-0 md:min-w-0"
              ></button>
            </li>
            <li
              role="presentation"
              className="text-sm box-border caret-transparent flex justify-center leading-[0px] list-none min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto mx-[6.01504px] md:text-[15.6667px] md:inline-flex md:min-h-0 md:min-w-0"
            >
              <button
                type="button"
                role="tab"
                aria-label="Go to slide 5"
                title="Image"
                className="relative appearance-none text-sm bg-slate-500/50 caret-transparent block h-1 min-h-[auto] min-w-[auto] outline-[3px] text-center align-top w-1 p-0 rounded-[50%] md:text-[15.6667px] md:min-h-0 md:min-w-0"
              ></button>
            </li>
            <li
              role="presentation"
              className="text-sm box-border caret-transparent flex justify-center leading-[0px] list-none min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto mx-[6.01504px] md:text-[15.6667px] md:inline-flex md:min-h-0 md:min-w-0"
            >
              <button
                type="button"
                role="tab"
                aria-label="Go to slide 6"
                title="Image"
                className="relative appearance-none text-sm bg-slate-500/50 caret-transparent block h-1 min-h-[auto] min-w-[auto] outline-[3px] text-center align-top w-1 p-0 rounded-[50%] md:text-[15.6667px] md:min-h-0 md:min-w-0"
              ></button>
            </li>
            <li
              role="presentation"
              className="text-sm box-border caret-transparent flex justify-center leading-[0px] list-none min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto mx-[6.01504px] md:text-[15.6667px] md:inline-flex md:min-h-0 md:min-w-0"
            >
              <button
                type="button"
                role="tab"
                aria-label="Go to slide 7"
                title="Image"
                className="relative appearance-none text-sm bg-slate-500/50 caret-transparent block h-1 min-h-[auto] min-w-[auto] outline-[3px] text-center align-top w-1 p-0 rounded-[50%] md:text-[15.6667px] md:min-h-0 md:min-w-0"
              ></button>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-sm box-border caret-transparent leading-[25.375px] max-w-[1440px] outline-[3px] w-full mx-auto md:text-[15.6667px] md:leading-[28.3958px]">
        <div className="relative text-sm bg-gray-100 box-border caret-transparent hidden h-0.5 leading-[25.375px] outline-[3px] w-full mt-10 md:text-[15.6667px] md:leading-[28.3958px]">
          <div className="absolute text-sm bg-emerald-900 box-border caret-transparent h-0.5 leading-[25.375px] outline-[3px] w-0 top-0 md:text-[15.6667px] md:leading-[28.3958px]"></div>
        </div>
      </div>
    </section>
  );
};
