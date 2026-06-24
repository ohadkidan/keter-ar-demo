import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";
import { NewsletterSignup } from "@/sections/Footer/components/NewsletterSignup";

export const FooterLinks = () => {
  return (
    <div className="relative bg-emerald-900 box-border caret-transparent outline-[3px] z-0 pt-0 pb-12 md:pt-20 md:pb-10">
      <div className="relative box-border caret-transparent outline-[3px] mb-5 md:mb-0">
        <div className="box-border caret-transparent max-w-[1440px] outline-[3px] w-full mx-auto px-6 md:px-[72px]">
          <div className="box-border caret-transparent flex flex-wrap ml-[-5px] mr-[-5px] outline-[3px] w-[calc(100%_+_10px)] md:w-[calc(100%_+_20px)] md:-mx-2.5">
            <FooterColumn
              title="Categories"
              containerClassName="border-b-gray-400/20 box-border caret-transparent outline-[3px] border-t-white border-x-white border-b md:border-b-white md:border-b-0"
              links={[
                { label: "Sheds", href: "https://www.keter.com/en-gb/sheds/" },
                {
                  label: "Outdoor Storage",
                  href: "https://www.keter.com/en-gb/outdoor-storage/",
                },
                {
                  label: "Outdoor Furniture",
                  href: "https://www.keter.com/en-gb/outdoor-furniture/",
                },
                {
                  label: "Outdoor Entertainment",
                  href: "https://www.keter.com/en-gb/outdoor-entertainment/",
                },
                {
                  label: "Garden Accessories",
                  href: "https://www.keter.com/en-gb/gardening/",
                },
                {
                  label: "Spaces",
                  href: "https://www.keter.com/en-gb/spaces/?pd=true",
                },
                {
                  label: "Inspiration",
                  href: "https://www.keter.com/en-gb/inspiration/?pd=true",
                },
              ]}
            />
            <FooterColumn
              title="Help & Support"
              containerClassName="border-b-gray-400/20 box-border caret-transparent outline-[3px] border-t-white border-x-white border-b md:border-b-white md:border-b-0"
              links={[
                {
                  label: "Contact Us",
                  href: "https://www.keter.com/en-gb/contact-us.html",
                },
                {
                  label: "Spare Parts",
                  href: "https://www.keter.com/en-gb/sheds-spare-parts/",
                },
                {
                  label: "Frequent Questions",
                  href: "https://www.keter.com/en-gb/faq.html",
                },
                {
                  label: "Warranty Registration",
                  href: "https://www.keter.com/en-gb/warranty.html",
                },
                {
                  label: "Terms & Conditions of Sale",
                  href: "https://www.keter.com/en-gb/terms-conditions-sales.html",
                },
                {
                  label: "Delivery Information",
                  href: "https://www.keter.com/en-gb/shipping-info.html",
                },
                {
                  label: "Return & Cancellation",
                  href: "https://www.keter.com/en-gb/returns.html",
                },
              ]}
            />
            <FooterColumn
              title="Company"
              containerClassName="box-border caret-transparent outline-[3px]"
              links={[
                {
                  label: "About",
                  href: "https://www.keter.com/en-gb/about-us.html",
                },
                {
                  label: "Sustainability",
                  href: "https://www.keter.com/en-gb/sustainability.html",
                },
              ]}
            />
            <SocialLinks />
            <NewsletterSignup />
          </div>
        </div>
      </div>
      <img
        src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-82.svg"
        alt="Icon"
        className="absolute box-border caret-transparent h-[67px] outline-[3px] w-[290px] z-[-1] -right-2 -bottom-2 md:h-[143px] md:w-[620px] md:-right-6 md:-bottom-4"
      />
    </div>
  );
};
