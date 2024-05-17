import Link from "next/link";
import { ReactElement } from "react";

export default function Header(): ReactElement {
  return (
    <header
      id="ast-mobile-header"
      className="block absolute left-0 top-0 mb-6 z-10 w-full"
    >
      <div className="relative">
        <div
          className="border-none px-5 py-5 bg-none"
        >
          <div className="grid items-center grid-cols-2 gap-5" style={{
            gridTemplateColumns: "auto auto"
          }}>
            <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
              <div
                className="ast-builder-layout-element ast-flex site-header-focus-item"
                data-section="title_tagline"
              >
                <div
                  className="flex"
                >
                  <span className="pr-4">
                    <Link
                      href="/"
                      className="flex flex-col text-left"
                      rel="home"
                      aria-current="page"
                    >
                      <h2 className="text-primary font-sans font-extrabold text-2xl leading-4">
                        BENDITABOX
                      </h2>
                      <small className="text-primary font-light text-sm leading-normal" style={{
                        fontSize: "9px"
                      }}>CESTAS PERSONALIZADAS</small>
                    </Link>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div
                className="ast-builder-layout-element ast-flex site-header-focus-item"
                data-section="section-header-mobile-trigger"
              >
                <div className="ast-button-wrap">
                  <button
                    type="button"
                    className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal"
                    aria-expanded="false"
                    data-index={0}
                  >
                    <span className="screen-reader-text"></span>
                    <span className="mobile-menu-toggle-icon">
                      <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="text-primary"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

}