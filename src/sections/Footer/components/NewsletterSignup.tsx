export const NewsletterSignup = () => {
  return (
    <div className="static box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-[5px] right-auto md:relative md:basis-[41.6667%] md:max-w-[41.6667%] md:right-[-8.33333%] md:px-2.5">
      <div className="text-[26px] font-bold box-border caret-transparent tracking-[-0.5px] leading-[29.458px] outline-[3px] mt-6 font-recoleta md:leading-[28.73px] md:mt-0">
        Sign up &amp; save 10% on your first order!
      </div>
      <form
        name="newsletter-form"
        className="box-border caret-transparent max-w-none outline-[3px] my-6 md:max-w-[440px]"
      >
        <div className="relative box-border caret-transparent flex flex-col outline-[3px]">
          <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-2">
            <div className="relative box-border caret-transparent outline-[3px]">
              <label className="text-base font-semibold box-border caret-transparent block leading-[22.848px] outline-[3px] mb-2">
                Email address
                <span className="text-zinc-800 box-border caret-transparent hidden outline-[3px]">
                  *
                </span>
              </label>
              <input
                type="email"
                name="dwfrm_newsletter_email"
                placeholder="Email address"
                aria-label="Email address"
                className="appearance-none text-base bg-transparent shadow-[rgb(161,193,185)_0px_0px_0px_1px_inset] box-border caret-transparent block h-[52px] tracking-[normal] leading-[29px] outline-[3px] w-full px-6 py-2 rounded-[30px] md:pr-[181px]"
              />
              <span className="box-border caret-transparent outline-[3px]"></span>
            </div>
            <div className="text-red-600 text-xs box-border caret-transparent hidden leading-[21.996px] outline-[3px] mt-2"></div>
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="box-border caret-transparent outline-[3px] mt-8 mb-2 md:mt-0">
              <div className="box-border caret-transparent outline-[3px]">
                <label
                  role="button"
                  className="relative text-gray-400 box-border caret-transparent block outline-[3px] pl-6 py-1 after:accent-auto after:shadow-[rgb(161,193,185)_0px_0px_0px_1px_inset] after:box-border after:caret-transparent after:text-gray-400 after:block after:text-sm after:not-italic after:normal-nums after:font-medium after:h-4 after:tracking-[-0.24px] after:leading-[19.992px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-4 after:rounded-bl after:rounded-br after:rounded-tl after:rounded-tr after:border-separate after:left-0 after:top-1.5 after:font-cera_pro"
                >
                  <span className="box-border caret-transparent outline-[3px]">
                    By selecting this option you agree with our{" "}
                    <a
                      href="https://www.keter.com/en-gb/privacy-policy.html"
                      className="box-border caret-transparent inline-block outline-[3px] underline text-ellipsis"
                    >
                      Privacy Policy
                    </a>
                    &amp;{" "}
                    <a
                      href="https://www.keter.com/en-gb/terms-conditions.html"
                      className="box-border caret-transparent inline-block outline-[3px] underline text-ellipsis"
                    >
                      Website Terms &amp; Conditions
                    </a>
                  </span>
                </label>
              </div>
              <div className="text-red-600 text-xs box-border caret-transparent hidden leading-[21.996px] outline-[3px]">
                 
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="relative appearance-none text-zinc-800 items-center bg-orange-300 caret-transparent flex justify-center tracking-[normal] min-h-[auto] min-w-[auto] outline-[3px] text-center align-top w-full px-6 py-2 rounded-[100px] right-auto top-auto md:absolute md:min-h-0 md:min-w-0 md:w-[165px] md:right-2 md:top-[39px]"
          >
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] mr-4">
              Subscribe
            </span>
            <span className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none">
              <img
                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-81.svg"
                alt="Icon"
                className="box-border caret-transparent h-[15px] outline-[3px] w-[38px]"
              />
            </span>
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]"></span>
          </button>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-2">
            <div className="box-border caret-transparent outline-[3px]"></div>
            <div className="text-red-600 text-xs box-border caret-transparent hidden leading-[21.996px] outline-[3px] mt-2"></div>
          </div>
        </div>
        <div
          role="alert"
          className="relative text-zinc-800 text-base bg-orange-200 box-border caret-transparent hidden leading-[22.848px] outline-[3px] w-full z-[2] px-8 py-6 rounded-[30px] left-0 top-0"
        >
          <div className="box-border caret-transparent flex outline-[3px] before:accent-auto before:bg-[url('https://www.keter.com/on/demandware.static/Sites-keter-GB-Site/-/en_GB/v1782280984178/images/alert-icons/info-aubergine.svg')] before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:flex before:text-base before:not-italic before:normal-nums before:font-medium before:h-5 before:tracking-[-0.24px] before:leading-[22.848px] before:list-outside before:list-disc before:min-w-5 before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:mr-4 before:border-separate before:font-cera_pro"></div>
          <button
            type="button"
            aria-label="Close alert"
            className="absolute appearance-none bg-transparent caret-transparent flex tracking-[normal] outline-[3px] text-center align-top p-0 right-8 top-2/4"
          >
            <img
              src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-50.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
            />
          </button>
        </div>
      </form>
    </div>
  );
};
