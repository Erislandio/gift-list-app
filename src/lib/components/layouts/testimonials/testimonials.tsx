import { gql, useQuery } from "@apollo/client";
import { Carousel } from "flowbite-react";

import { ReactElement } from "react";
import ShelfTitle from "../shelf/shlef-title";
import Star from "./star";

const TESTIMONIALS_QUERY = gql`
{
  avaliacoesDosClientes {
    nome
    id
    avaliacao {
      text
    }
  }
}
`;

export default function Testimonials({ id }: { id: string }): ReactElement {

  const { data } = useQuery<{ avaliacoesDosClientes: Array<{ nome: string; id: string; avaliacao: { text: string } }> }>(TESTIMONIALS_QUERY, {
    fetchPolicy: "cache-first"
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
            <ShelfTitle title="Avaliações dos clientes" />
            <div className="h-48">
              <Carousel pauseOnHover slideInterval={10000} translate="yes">
                {data?.avaliacoesDosClientes?.map(testimonial => (
                  <div className="text-center" key={testimonial.id}>
                    <p className="italic text-primary font-medium text-sm">{testimonial.avaliacao.text.slice(0, 150)}...</p>
                    <div className=" elementor-widget elementor-widget-star-rating">
                      <div className="flex justify-center gap-1 items-center mt-9">
                        {[1, 2, 3, 4, 5].map((_, index) => (<Star key={index} />))}
                      </div>
                    </div>
                    <h5 className="text-primary font-bold mt-4">{testimonial.nome}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}