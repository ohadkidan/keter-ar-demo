import { AccessibilitySystem } from "@/components/AccessibilitySystem";
import { Header } from "@/sections/Header";
import { ProductPage } from "@/sections/ProductPage";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-zinc-800 text-sm not-italic normal-nums font-medium accent-auto box-border caret-transparent flex flex-col tracking-[normal] leading-[25.375px] list-outside list-disc min-h-[1000px] min-w-80 outline-[3px] overflow-x-hidden overflow-y-scroll pointer-events-auto text-start indent-[0px] normal-case visible w-full border-separate font-cera_pro md:text-[15.6667px] md:leading-[28.3958px]">
      <AccessibilitySystem />
      <input
        type="hidden"
        name="enableADL"
        value="true"
        className="appearance-none text-sm bg-transparent box-border caret-transparent hidden leading-[normal] outline-[3px] p-0 md:text-[15.6667px]"
      />
      <input
        type="hidden"
        name="csrf_token"
        value="psHNh32EBOeTo1hrCg7oq1JOiVwqtSfJW1Jw_cjBjznj8c3YVigY3szWonZ0gz294AFLRX3RsqJ0mEBL4GyF_RkRLKsh5weLj3oNVfbSy-m3Di2w6AOYrkOURtGoY853z-Rjjneg58d97Z0W6FXU_qfgYMZ-ViQGATvrl58repA8Bz5OwIk="
        className="appearance-none text-sm bg-transparent box-border caret-transparent hidden leading-[normal] outline-[3px] p-0 md:text-[15.6667px]"
      />
      <Header />
      <iframe
        src="https://a5340463188672512.cdn.optimizely.com/client_storage/a5340463188672512.html"
        title="Optimizely Internal Frame"
        className="text-sm box-border caret-transparent hidden h-0 leading-[25.375px] outline-[3px] align-baseline w-0 md:text-[15.6667px] md:leading-[28.3958px]"
      ></iframe>
      <ProductPage />
      <div className="text-sm box-border caret-transparent hidden leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]"></div>
      <Footer />
      <span className="text-sm box-border caret-transparent hidden leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]"></span>
      <div className="text-sm box-border caret-transparent leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]"></div>
      <iframe
        title="IND - Default Props"
        className="text-sm box-border caret-transparent hidden leading-[25.375px] outline-[3px] align-baseline md:text-[15.6667px] md:leading-[28.3958px]"
      ></iframe>
      <iframe
        src="about://blank"
        title="Lucky Orange"
        className="text-sm box-border caret-transparent hidden leading-[25.375px] outline-[3px] align-baseline md:text-[15.6667px] md:leading-[28.3958px]"
      ></iframe>
      <div className="text-sm box-border caret-transparent block leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
        <div className="text-sm caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]"></div>
      </div>
      <iframe
        src="https://insight.adsrvr.org/track/cei?advertiser_id=v0swnk5&cookie_sync=1&upv=3.0.0&upid=zwe9g4l&ref=https%3A%2F%2Fwww.keter.com%2Fen-gb%2Foutdoor-storage%2Fstorage-cabinets%2Fvelo-113l-storage-unit---grey-graphite-271396.html"
        title="TTD Universal Pixel"
        className="text-sm box-border caret-transparent hidden h-0 leading-[25.375px] outline-[3px] align-baseline w-0 md:text-[15.6667px] md:leading-[28.3958px]"
      ></iframe>
    </body>
  );
};
