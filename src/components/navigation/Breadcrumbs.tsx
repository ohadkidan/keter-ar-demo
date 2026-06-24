export type BreadcrumbItem = {
  label: string;
  href: string;
  itemClassName: string;
  separatorClassName: string;
};

export type BreadcrumbsProps = {
  containerVariant: string;
  breadcrumbs: BreadcrumbItem[];
  showInnerWrapper: boolean;
  currentPageLabel?: string;
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const navigation = (
    <nav
      aria-label="Breadcrumb Navigation"
      className="text-sm box-border caret-transparent tracking-[-0.24px] leading-[19.992px] outline-[3px] py-4"
    >
      <ol className="box-border caret-transparent list-none outline-[3px] pl-0">
        {props.breadcrumbs.map((breadcrumb) => (
          <li
            key={`${breadcrumb.href}-${breadcrumb.label}`}
            className={breadcrumb.itemClassName}
          >
            <a
              href={breadcrumb.href}
              className="box-border caret-transparent inline-block outline-[3px] text-ellipsis"
            >
              {breadcrumb.label}
            </a>
            <span className={breadcrumb.separatorClassName}></span>
          </li>
        ))}
      </ol>
    </nav>
  );

  return (
    <div
      className={`text-sm box-border caret-transparent leading-[25.375px] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px] ${props.containerVariant}`}
    >
      {props.showInnerWrapper ? (
        <div className="text-sm box-border caret-transparent flex flex-wrap leading-[25.375px] ml-[-5px] mr-[-5px] outline-[3px] w-[calc(100%_+_10px)] md:text-[15.6667px] md:leading-[28.3958px] md:w-[calc(100%_+_20px)] md:-mx-2.5">
          <div className="text-sm box-border caret-transparent basis-full shrink-0 leading-[25.375px] max-w-full min-h-0 min-w-0 outline-[3px] px-[5px] md:text-[15.6667px] md:leading-[28.3958px] md:min-h-[auto] md:min-w-[auto] md:px-2.5">
            {navigation}
          </div>
        </div>
      ) : (
        navigation
      )}
      {props.currentPageLabel ? (
        <p className="text-[26px] font-bold box-border caret-transparent tracking-[-0.5px] leading-[29.978px] outline-[3px] mb-3 font-recoleta md:text-[32.6667px] md:leading-[40.3433px]">
          {props.currentPageLabel}
        </p>
      ) : null}
    </div>
  );
};
