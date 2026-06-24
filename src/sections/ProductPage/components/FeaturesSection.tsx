import { DesktopFeatures } from "@/sections/ProductPage/components/DesktopFeatures";
import { MobileFeaturesCarousel } from "@/sections/ProductPage/components/MobileFeaturesCarousel";

export const FeaturesSection = () => {
  return (
    <section className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] my-16 md:text-[15.6667px] md:leading-[28.3958px] md:my-24">
      <div className="text-sm box-border caret-transparent leading-[25.375px] max-w-none outline-[3px] w-full mx-auto pl-5 pr-0 md:text-[15.6667px] md:leading-[28.3958px] md:max-w-[1440px] md:px-[72px]">
        <div className="static text-sm box-border caret-transparent basis-full shrink-0 leading-[25.375px] max-w-full outline-[3px] px-[5px] right-auto md:relative md:text-[15.6667px] md:basis-[83.3333%] md:leading-[28.3958px] md:max-w-[83.3333%] md:right-[-8.33333%] md:px-2.5">
          <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.5px] leading-[33.99px] outline-[3px] text-start mb-6 font-recoleta md:text-[83.3333px] md:tracking-[-1px] md:leading-[79.5833px] md:text-center md:mb-20">
            Features
          </h2>
          <DesktopFeatures />
          <MobileFeaturesCarousel />
        </div>
      </div>
    </section>
  );
};
