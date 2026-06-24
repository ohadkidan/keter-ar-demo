import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="relative text-white text-sm box-border caret-transparent tracking-[-0.24px] leading-[19.992px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mt-auto mb-[90px] md:mb-[74px]">
      <FooterLinks />
      <FooterBottom />
    </footer>
  );
};
