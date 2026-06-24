import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ProductHero } from "@/sections/ProductPage/components/ProductHero";
import { BenefitsSection } from "@/sections/ProductPage/components/BenefitsSection";
import { FeaturesSection } from "@/sections/ProductPage/components/FeaturesSection";
import { AssemblySection } from "@/sections/ProductPage/components/AssemblySection";
import { RelatedProductsSection } from "@/sections/ProductPage/components/RelatedProductsSection";
import { BrandValuesSection } from "@/sections/ProductPage/components/BrandValuesSection";
import { SustainabilitySection } from "@/sections/ProductPage/components/SustainabilitySection";

export const ProductPage = () => {
  return (
    <main className="relative text-sm box-border caret-transparent leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
      <Breadcrumbs
        containerVariant="text-sm box-border caret-transparent hidden leading-[25.375px] max-w-[1440px] outline-[3px] w-full mx-auto px-6 md:text-[15.6667px] md:block md:leading-[28.3958px] md:px-[72px]"
        breadcrumbs={[
          {
            label: "Home",
            href: "https://www.keter.com/en-gb/",
            itemClassName:
              "box-border caret-transparent inline opacity-70 outline-[3px]",
            separatorClassName:
              "bg-[url(data:image/svg+xml;utf8,<svg%20viewBox=\\%220%200%206%2010\\%22%20xmlns=\\%22http://www.w3.org/2000/svg\\%22><path%20d=\\%22M0.945215%209.81445C0.745215%209.81445%200.545215%209.71445%200.445215%209.61445C0.145215%209.31445%200.145215%208.81445%200.445215%208.51445L3.94521%205.01445L0.445215%201.51445C0.145215%201.21445%200.145215%200.714453%200.445215%200.414453C0.745215%200.114453%201.24521%200.114453%201.54521%200.414453L5.54521%204.41445C5.84521%204.71445%205.84521%205.21445%205.54521%205.51445L1.54521%209.51445C1.34521%209.71445%201.14521%209.81445%200.945215%209.81445Z\\%22%20fill=\\%22currentColor\\%22/></svg>)] bg-no-repeat bg-contain box-border caret-transparent inline-block h-2.5 mt-[-3px] outline-[3px] w-[5px] mx-4",
          },
          {
            label: "Outdoor Storage",
            href: "https://www.keter.com/en-gb/outdoor-storage/",
            itemClassName:
              "box-border caret-transparent inline opacity-70 outline-[3px]",
            separatorClassName:
              "bg-[url(data:image/svg+xml;utf8,<svg%20viewBox=\\%220%200%206%2010\\%22%20xmlns=\\%22http://www.w3.org/2000/svg\\%22><path%20d=\\%22M0.945215%209.81445C0.745215%209.81445%200.545215%209.71445%200.445215%209.61445C0.145215%209.31445%200.145215%208.81445%200.445215%208.51445L3.94521%205.01445L0.445215%201.51445C0.145215%201.21445%200.145215%200.714453%200.445215%200.414453C0.745215%200.114453%201.24521%200.114453%201.54521%200.414453L5.54521%204.41445C5.84521%204.71445%205.84521%205.21445%205.54521%205.51445L1.54521%209.51445C1.34521%209.71445%201.14521%209.81445%200.945215%209.81445Z\\%22%20fill=\\%22currentColor\\%22/></svg>)] bg-no-repeat bg-contain box-border caret-transparent inline-block h-2.5 mt-[-3px] outline-[3px] w-[5px] mx-4",
          },
          {
            label: "Storage Cabinets",
            href: "https://www.keter.com/en-gb/outdoor-storage/storage-cabinets/",
            itemClassName: "box-border caret-transparent inline outline-[3px]",
            separatorClassName:
              "bg-[url(data:image/svg+xml;utf8,<svg%20viewBox=\\%220%200%206%2010\\%22%20xmlns=\\%22http://www.w3.org/2000/svg\\%22><path%20d=\\%22M0.945215%209.81445C0.745215%209.81445%200.545215%209.71445%200.445215%209.61445C0.145215%209.31445%200.145215%208.81445%200.445215%208.51445L3.94521%205.01445L0.445215%201.51445C0.145215%201.21445%200.145215%200.714453%200.445215%200.414453C0.745215%200.114453%201.24521%200.114453%201.54521%200.414453L5.54521%204.41445C5.84521%204.71445%205.84521%205.21445%205.54521%205.51445L1.54521%209.51445C1.34521%209.71445%201.14521%209.81445%200.945215%209.81445Z\\%22%20fill=\\%22currentColor\\%22/></svg>)] bg-no-repeat bg-contain box-border caret-transparent hidden h-2.5 mt-[-3px] outline-[3px] w-[5px] mx-4",
          },
        ]}
        showInnerWrapper={true}
      />
      <ProductHero />
      <BenefitsSection />
      <FeaturesSection />
      <AssemblySection />
      <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
        <RelatedProductsSection />
        <BrandValuesSection />
        <div className="text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]"></div>
      </div>
      <SustainabilitySection />
    </main>
  );
};
