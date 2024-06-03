/* eslint-disable max-len */
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
          </div>
        </div>
      </div>
    </header>
  );

}