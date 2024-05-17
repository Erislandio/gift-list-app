import { TipoDeCesta } from "#/lib/typings/gift";
import { gql, useQuery } from "@apollo/client";
import { ReactElement } from "react";
import ProductSummary from "./product-summary";
import ShelfTitle from "./shlef-title";

const SHELF_QUERY = gql`
{
  tipoDeCestas {
    id
    link
    nome
    imagem {
      url
    }
    descricao {
      html
    }
    materialDaCestas {
      id
      nome
      preco
      imagem {
        url
      }
    }
  }
}
`;

export default function Shelf({ id }: {id: string}): ReactElement {

  const { data, loading, error } = useQuery<{ tipoDeCestas: TipoDeCesta[]}>(SHELF_QUERY, {
    fetchPolicy: "cache-first"
  });

  if (loading) {
    return <></>;
  }

  if (error) {
    return <></>;
  }

  return (
    <section
      id={id}
      className="py-10 px-5"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4d7f22e"
          data-id="4d7f22e"
          data-element_type="column"
        >
          <div className="m-5">
            <ShelfTitle title="cestas" />
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
                      {data?.tipoDeCestas?.map(item => <ProductSummary cesta={item} key={item.id} />)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}