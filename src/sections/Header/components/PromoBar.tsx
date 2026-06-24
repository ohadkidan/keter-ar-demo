export const PromoBar = () => {
  return (
    <div className="text-white text-sm bg-emerald-900 box-border caret-transparent leading-[25.375px] outline-[3px] py-1 md:text-[15.6667px] md:leading-[28.3958px]">
      <div className="text-sm box-border caret-transparent leading-[25.375px] max-w-[1440px] outline-[3px] w-full mx-auto px-6 md:text-[15.6667px] md:leading-[28.3958px] md:px-[72px]">
        <div className="text-sm items-center box-border caret-transparent flex flex-wrap justify-center leading-[18.2px] outline-[3px] md:text-[15.6667px] md:justify-start md:leading-[20.3667px]">
          <span className="text-sm font-semibold items-center box-border caret-transparent flex justify-center leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] text-center py-1 md:text-base md:font-normal md:leading-[20.8px] md:text-start">
            <div className="text-sm font-semibold box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-base md:font-normal md:leading-[20.8px] md:text-start">
              <a
                href="https://www.keter.com/en-gb/home.html#anchor"
                className="text-sm font-semibold box-border caret-transparent leading-[18.2px] outline-[3px] text-center underline text-ellipsis md:text-base md:font-normal md:leading-[20.8px] md:text-start"
              >
                Subscribe to our newsletter
              </a>
              for 10% off your first order!{" "}
              <u className="text-sm font-semibold box-border caret-transparent leading-[18.2px] outline-[3px] text-center underline md:text-base md:font-normal md:leading-[20.8px] md:text-start">
                <a
                  href="https://www.keter.com/en-gb/terms-conditions-sales.html"
                  className="text-sm font-semibold box-border caret-transparent leading-[18.2px] outline-[3px] text-center text-ellipsis md:text-base md:font-normal md:leading-[20.8px] md:text-start"
                >
                  Terms &amp; Conditions
                </a>
              </u>
              apply.
            </div>
          </span>
          <ul className="text-gray-100 text-sm items-center box-border caret-transparent hidden leading-[18.2px] list-none min-h-0 min-w-0 outline-[3px] ml-auto pl-0 py-1 md:text-[15.6667px] md:flex md:leading-[20.3667px] md:min-h-[auto] md:min-w-[auto]">
            <li className="text-sm box-border caret-transparent leading-[18.2px] min-h-0 min-w-0 outline-[3px] ml-8 md:text-[15.6667px] md:leading-[20.3667px] md:min-h-[auto] md:min-w-[auto]">
              <a
                href="https://www.keter.com/en-gb/contact-us.html"
                className="text-sm box-border caret-transparent leading-[18.2px] outline-[3px] text-ellipsis md:text-[15.6667px] md:leading-[20.3667px]"
              >
                Contact us
              </a>
            </li>
            <li className="text-sm box-border caret-transparent leading-[18.2px] min-h-0 min-w-0 outline-[3px] ml-8 md:text-[15.6667px] md:leading-[20.3667px] md:min-h-[auto] md:min-w-[auto]">
              <button
                type="button"
                className="relative appearance-none text-emerald-900 text-sm items-center bg-transparent caret-transparent inline-flex justify-center leading-[18.2px] outline-[3px] text-center align-top p-0 rounded-[100px] md:text-[15.6667px] md:leading-[20.3667px]"
              >
                <span className="text-white text-sm box-border caret-transparent block leading-[18.2px] min-h-0 min-w-0 outline-[3px] mr-4 md:text-[15.6667px] md:leading-[20.3667px] md:min-h-[auto] md:min-w-[auto]">
                  UK
                </span>
                <span className="text-sm items-center box-border caret-transparent flex h-6 leading-[18.2px] min-h-0 min-w-0 outline-[3px] pointer-events-none md:text-[15.6667px] md:leading-[20.3667px] md:min-h-[auto] md:min-w-[auto]">
                  <img
                    src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-6.svg"
                    alt="Icon"
                    className="text-sm box-border caret-transparent h-[18px] leading-[18.2px] outline-[3px] w-[18px] md:text-[15.6667px] md:leading-[20.3667px]"
                  />
                </span>
                <span className="text-sm box-border caret-transparent block leading-[18.2px] min-h-0 min-w-0 outline-[3px] md:text-[15.6667px] md:leading-[20.3667px] md:min-h-[auto] md:min-w-[auto]"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
