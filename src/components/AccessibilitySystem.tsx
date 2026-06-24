export const AccessibilitySystem = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-[25.375px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.6667px] md:leading-[28.3958px]">
      <div className="text-black text-base font-normal box-border caret-transparent leading-[normal] outline-[3px] font-times_new_roman">
        <div>
          <div role="alert">
            Please note: This website includes an accessibility system. Press
            Control-F11 to adjust the website to people with visual disabilities
            who are using a screen reader; Press Control-F10 to open an
            accessibility menu.
          </div>
          <div></div>
          <div>
            <div role="dialog">
              <div role="heading">Popup heading</div>
              <div></div>
              <button>Close</button>
            </div>
          </div>
          <div></div>
          <div>
            <button>
              <img
                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-1.svg"
                alt="Icon"
                className="inline-block align-top"
              />
              <img
                src="https://c.animaapp.com/mqrr1r05l3oFgF/assets/icon-2.svg"
                alt="Icon"
                className="align-top"
              />
              <span>Accessibility</span>
            </button>
          </div>
          <div>
            <ul>
              <li>
                <button>
                  Press enter for Accessibility for blind people
                  <span> who use screen readers</span>
                </button>
              </li>
              <li>
                <button>Press enter for Keyboard Navigation</button>
              </li>
              <li>
                <button>Press enter for Accessibility menu</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
