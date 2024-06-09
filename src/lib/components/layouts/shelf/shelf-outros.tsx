/* eslint-disable @next/next/no-img-element */
import { gql, useQuery } from "@apollo/client";
import { ReactElement } from "react";
import { ProductSummaryOutro } from "./product-summary";
import ShelfTitle from "./shlef-title";

const SHELF_QUERY = gql`
{
  outrosProduto {
    nome
    slug
    preco
    imagem(first: 1) {
      url
    }
  }
}
`;

export interface OutrosProduto {
  nome: string;
  slug: string;
  preco: number;
  imagem: Imagem[];
  descricao: string;
}

export interface Imagem {
  url: string;
}

export default function ShelfOutros({ id }: { id: string }): ReactElement {

  const { data, loading } = useQuery<{ outrosProduto: OutrosProduto[] }>(SHELF_QUERY, {
    ssr: true
  });

  return (
    <section
      id={id}
      className="py-10 px-5 pt-0"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4d7f22e"
          data-id="4d7f22e"
          data-element_type="column"
        >
          <div className="m-5">
            <ShelfTitle title="Outros produtos" />
            {!loading ? (
              <div
                className="elementor-element elementor-element-625c38b elementor-widget elementor-widget-shortcode"
                data-id="625c38b"
                data-element_type="widget"
                data-widget_type="shortcode.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-shortcode">
                    <div className="woocommerce ">
                      <ul className="products md:block flex items-center gap-4 justify-center flex-wrap">
                        {data?.outrosProduto?.map(item => <ProductSummaryOutro product={item} key={item.nome} />)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="elementor-element elementor-element-625c38b elementor-widget elementor-widget-shortcode"
                data-id="625c38b"
                data-element_type="widget"
                data-widget_type="shortcode.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-shortcode">
                    <div className="woocommerce ">
                      <ul className="products">
                        {[1, 2, 3].map((_, index) => (
                          <li className="p-3 list-none loading" key={index}>
                            <div className="astra-shop-thumbnail-wrap">
                              <a className="block" href="/cesta-de-cafe-da-manha">
                                <div
                                  className="animate-pulse bg-gray-100"
                                  style={{ color: "transparent", width: "275px", height: "260px" }}
                                />
                                <div className="astra-shop-summary-wrap text-center mt-4 flex justify-center items-center flex-col">
                                  <span className="text-[0.85rem] font-thin font-sans mb-1 block opacity-[0.9] h-2 bg-gray-100 w-11 animate-pulse">
                                  </span>
                                  <div className="ast-loop-product__link">
                                    <h2 className="text-base font-bold font-sans text-primary h-4 bg-gray-100 w-36 animate-pulse">
                                    </h2>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}