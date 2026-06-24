export type FooterColumnLink = {
  label: string;
  href: string;
};

export type FooterColumnProps = {
  title: string;
  containerClassName: string;
  links: FooterColumnLink[];
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-[5px] md:basis-[16.6667%] md:max-w-[16.6667%] md:px-2.5">
      <div className={props.containerClassName}>
        <div className="text-[26px] font-bold box-border caret-transparent hidden tracking-[-0.5px] leading-[29.458px] outline-[3px] font-recoleta md:block md:leading-[28.73px]">
          {props.title}
        </div>
        <button
          type="button"
          className="relative appearance-none font-normal bg-transparent caret-transparent inline-block tracking-[normal] outline-[3px] align-top w-full px-0 py-6 md:hidden"
        >
          <span className="items-center box-border caret-transparent flex justify-between outline-[3px]">
            <span className="text-[26px] font-bold box-border caret-transparent block tracking-[-0.5px] leading-[29.458px] min-h-[auto] min-w-[auto] outline-[3px] font-recoleta md:leading-[28.73px] md:min-h-0 md:min-w-0">
              {props.title}
            </span>
            <span className="box-border caret-transparent block fill-white min-h-[auto] min-w-[auto] outline-[3px] ml-4 md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-76.svg"
                alt="Icon"
                className="text-gray-400 box-border caret-transparent inline-block h-3 outline-[3px] w-5"
              />
            </span>
          </span>
        </button>
        <div className="box-border caret-transparent h-0 outline-[3px] invisible overflow-hidden md:h-auto md:visible md:overflow-visible">
          <div className="box-border caret-transparent outline-[3px] invisible pb-6 md:visible md:pb-0">
            {props.links.map((link) => (
              <div
                key={link.href}
                className="box-border caret-transparent outline-[3px] invisible mt-3 md:visible"
              >
                <a
                  href={link.href}
                  className="box-border caret-transparent outline-[3px] text-ellipsis invisible md:visible"
                >
                  <span className="text-base box-border caret-transparent leading-[22.848px] outline-[3px] invisible md:visible">
                    {link.label}
                  </span>
                  <span className="box-border caret-transparent outline-[3px] invisible md:visible"></span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
