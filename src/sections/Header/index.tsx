import { PromoBar } from "@/sections/Header/components/PromoBar";
import { MainNavigation } from "@/sections/Header/components/MainNavigation";

export const Header = () => {
  return (
    <header className="relative text-sm box-border caret-transparent leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] w-full z-[900] top-0 md:sticky md:text-[15.6667px] md:leading-[28.3958px]">
      <PromoBar />
      <MainNavigation />
    </header>
  );
};
