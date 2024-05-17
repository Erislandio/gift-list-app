import { ReactElement } from "react";
import { Button } from "../button";

export default function HeroBanner(): ReactElement {
  return (
    <section
      className="bg-no-repeat bg-center bg-cover pb-2"
      data-id="bd64c32"
      data-element_type="section"
      style={{
        backgroundImage: "url(https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/bg-0005.jpg)",
        backgroundPosition: "center center"
      }}
      data-settings='{"background_background":"classic"}'
    >
      <div className="min-h-[100vh] items-end flex-wrap flex relative m-auto justify-center">
        <div
          className="w-100"
          data-id="e4702ca"
          data-element_type="column"
        >
          <div className="pt-5 pl-5 pr-5 pb-20">
            <div
              className="text-center mb-4"
              data-id="f647095"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="leading-[1.4em] m-0 text-primary text-2xl font-sans font-semibold">
                                    A melhor maneira de fazer alguém feliz...
                </h2>
              </div>
            </div>
            <div
              className="mb-2"
            >
              <div className="p-0">
                <p className="font-light text-sm text-primary text-center">
                                    Aqui, transformamos momentos em lembranças inesquecíveis com nossas cestas personalizadas.
                </p>
              </div>
            </div>
            <div
              className="flex items-center justify-center mt-7"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a href="#shelf-home">
                    <Button
                      variant="primary"
                      className="rounded-none"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="text-sm text-white font-sans font-light">ESCOLHER UMA CESTA</span>
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}