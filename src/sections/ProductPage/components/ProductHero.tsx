import { ProductInfo } from "@/sections/ProductPage/components/ProductInfo";
import { ProductMediaGallery } from "@/sections/ProductPage/components/ProductMediaGallery";

export const ProductHero = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-[25.375px] max-w-[1440px] outline-[3px] w-full mb-16 mx-auto px-6 md:text-[15.6667px] md:leading-[28.3958px] md:mb-24 md:px-[72px]">
      <div className="text-sm box-border caret-transparent flex flex-wrap leading-[25.375px] ml-[-5px] mr-[-5px] outline-[3px] w-[calc(100%_+_10px)] md:text-[15.6667px] md:leading-[28.3958px] md:w-[calc(100%_+_20px)] md:-mx-2.5">
        <div className="text-sm box-border caret-transparent block basis-full shrink-0 leading-[25.375px] max-w-full min-h-[auto] min-w-[auto] order-2 outline-[3px] px-[5px] md:text-[15.6667px] md:hidden md:basis-[41.6667%] md:leading-[28.3958px] md:max-w-[41.6667%] md:min-h-0 md:min-w-0 md:px-2.5">
          <nav
            aria-label="Breadcrumb Navigation"
            className="text-sm box-border caret-transparent tracking-[-0.24px] leading-[19.992px] outline-[3px] py-4"
          >
            <ol className="box-border caret-transparent list-none outline-[3px] pl-0">
              <li className="box-border caret-transparent inline opacity-70 outline-[3px]">
                <a
                  href="https://www.keter.com/en-gb/"
                  className="box-border caret-transparent inline-block outline-[3px] text-ellipsis"
                >
                  Home
                </a>
                <span className="bg-[url(data:image/svg+xml;utf8,<svg%20viewBox=\\%220%200%206%2010\\%22%20xmlns=\\%22http://www.w3.org/2000/svg\\%22><path%20d=\\%22M0.945215%209.81445C0.745215%209.81445%200.545215%209.71445%200.445215%209.61445C0.145215%209.31445%200.145215%208.81445%200.445215%208.51445L3.94521%205.01445L0.445215%201.51445C0.145215%201.21445%200.145215%200.714453%200.445215%200.414453C0.745215%200.114453%201.24521%200.114453%201.54521%200.414453L5.54521%204.41445C5.84521%204.71445%205.84521%205.21445%205.54521%205.51445L1.54521%209.51445C1.34521%209.71445%201.14521%209.81445%200.945215%209.81445Z\\%22%20fill=\\%22currentColor\\%22/></svg>)] bg-no-repeat bg-contain box-border caret-transparent inline-block h-2.5 mt-[-3px] outline-[3px] w-[5px] mx-4"></span>
              </li>
              <li className="box-border caret-transparent inline opacity-70 outline-[3px]">
                <a
                  href="https://www.keter.com/en-gb/outdoor-storage/"
                  className="box-border caret-transparent inline-block outline-[3px] text-ellipsis"
                >
                  Outdoor Storage
                </a>
                <span className="bg-[url(data:image/svg+xml;utf8,<svg%20viewBox=\\%220%200%206%2010\\%22%20xmlns=\\%22http://www.w3.org/2000/svg\\%22><path%20d=\\%22M0.945215%209.81445C0.745215%209.81445%200.545215%209.71445%200.445215%209.61445C0.145215%209.31445%200.145215%208.81445%200.445215%208.51445L3.94521%205.01445L0.445215%201.51445C0.145215%201.21445%200.145215%200.714453%200.445215%200.414453C0.745215%200.114453%201.24521%200.114453%201.54521%200.414453L5.54521%204.41445C5.84521%204.71445%205.84521%205.21445%205.54521%205.51445L1.54521%209.51445C1.34521%209.71445%201.14521%209.81445%200.945215%209.81445Z\\%22%20fill=\\%22currentColor\\%22/></svg>)] bg-no-repeat bg-contain box-border caret-transparent inline-block h-2.5 mt-[-3px] outline-[3px] w-[5px] mx-4"></span>
              </li>
              <li className="box-border caret-transparent inline outline-[3px]">
                <a
                  href="https://www.keter.com/en-gb/outdoor-storage/storage-cabinets/"
                  className="box-border caret-transparent inline-block outline-[3px] text-ellipsis"
                >
                  Storage Cabinets
                </a>
                <span className="bg-[url(data:image/svg+xml;utf8,<svg%20viewBox=\\%220%200%206%2010\\%22%20xmlns=\\%22http://www.w3.org/2000/svg\\%22><path%20d=\\%22M0.945215%209.81445C0.745215%209.81445%200.545215%209.71445%200.445215%209.61445C0.145215%209.31445%200.145215%208.81445%200.445215%208.51445L3.94521%205.01445L0.445215%201.51445C0.145215%201.21445%200.145215%200.714453%200.445215%200.414453C0.745215%200.114453%201.24521%200.114453%201.54521%200.414453L5.54521%204.41445C5.84521%204.71445%205.84521%205.21445%205.54521%205.51445L1.54521%209.51445C1.34521%209.71445%201.14521%209.81445%200.945215%209.81445Z\\%22%20fill=\\%22currentColor\\%22/></svg>)] bg-no-repeat bg-contain box-border caret-transparent hidden h-2.5 mt-[-3px] outline-[3px] w-[5px] mx-4"></span>
              </li>
            </ol>
          </nav>
          <p className="text-[26px] font-bold box-border caret-transparent tracking-[-0.5px] leading-[29.978px] outline-[3px] mb-3 font-recoleta md:text-[32.6667px] md:leading-[40.3433px]">
            Velo 113L Storage Unit - Graphite
          </p>
        </div>
        <ProductInfo />
        <ProductMediaGallery />
      </div>
      <div
        role="alert"
        className="fixed text-base bg-red-400 box-border caret-transparent hidden leading-[29px] outline-[3px] w-full z-[1002] px-8 py-6 left-0 top-0"
      >
        <div className="box-border caret-transparent flex outline-[3px] before:accent-auto before:bg-[url('https://www.keter.com/on/demandware.static/Sites-keter-GB-Site/-/en_GB/v1782280984178/images/alert-icons/alert-aubergine.svg')] before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:flex before:text-base before:not-italic before:normal-nums before:font-medium before:h-5 before:tracking-[normal] before:leading-[29px] before:list-outside before:list-disc before:min-w-5 before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:mr-4 before:border-separate before:font-cera_pro"></div>
        <button
          type="button"
          aria-label="Close alert"
          className="absolute appearance-none bg-transparent caret-transparent flex outline-[3px] text-center align-top p-0 right-8 top-2/4"
        >
          <img
            src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-50.svg"
            alt="Icon"
            className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
          />
        </button>
      </div>
    </div>
  );
};
