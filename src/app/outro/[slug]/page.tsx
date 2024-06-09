/* eslint-disable max-len */
"use client";

import { Button } from "#/lib/components/atoms/button";
import { OutrosProduto } from "#/lib/components/layouts/shelf/shelf-outros";
import { formatarParaBRL } from "#/lib/utils/f";
import { gql, useQuery } from "@apollo/client";
import { Carousel, Textarea } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useState } from "react";

const PRODUCT_BY_SLUG_QUERY = gql`
query outrosProduto($slug: String!) {
  outrosProdutos(where: { slug: $slug}) {
    nome
    slug
    preco
    descricao
    imagem {
      url
    }
  }
}  
`;

function RightControll(): ReactElement {
  return (
    <button
      className="group"
      data-testid="carousel-right-control"
      type="button"
      aria-label="Next slide"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary sm:h-10 sm:w-10">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </button>

  );
}

function LeftControl(): ReactElement {
  return (
    <button
      className="group"
      data-testid="carousel-left-control"
      type="button"
      aria-label="Previous slide"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary sm:h-10 sm:w-10">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </span>
    </button>
  );
}

export default function PDP({ params }: { params: { slug: string } }): ReactElement {
  const [texto, setTexto] = useState("");
  const { data, loading } = useQuery<{ outrosProdutos: OutrosProduto }>(PRODUCT_BY_SLUG_QUERY, {
    variables: {
      slug: params.slug
    },
    ssr: true
  });

  if (loading || !data?.outrosProdutos) {
    return <></>;
  }

  const { outrosProdutos: { preco, imagem, nome, descricao } } = data;

  const totalItens = preco;

  return <main>
    <section className="mt-16">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pb-10">
        <Carousel rightControl={<RightControll />} leftControl={<LeftControl />} slideInterval={100000000000} theme={{
          indicators: {
            wrapper: "gap-2 flex items-center justify-center relative -top-8",
            active: {
              on: "bg-primary",
              off: "bg-gray-300"
            }
          }
        }}>
          {imagem?.map(image => (
            <div key={image.url}>
              <Image title={nome} src={image.url} alt={nome} width={375} height={375} loading="eager" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="px-5">
        <nav className="font-light text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/">Home</Link>&nbsp;/&nbsp;
          <span>
                        Cestas &nbsp;/&nbsp;
          </span>
          <span>
            {nome}
          </span>
        </nav>

        <h1 title={nome} className="font-light text-primary text-2xl mt-1">{nome}</h1>
        <h3 className="text-xl mb-4 text-secondary font-bold">
          {formatarParaBRL(preco)}
        </h3>
        <div className="pb-6">
          <h2 className="text-lg mb-4 text-primary">Descrição: </h2>
          <p className="font-light text-sm text-gray-600" dangerouslySetInnerHTML={{
            __html: descricao
          }}>
          </p>
        </div>

        <div className="pb-6">
          <h2 className="text-lg mb-4 text-primary">Observações</h2>
          <div className="max-w-md">
            <Textarea value={texto} onChange={e => setTexto(e.target.value)} className="outline-none p-2" id="comment" placeholder="Gostaria que..." rows={4} />
          </div>
        </div>
        <div className="pb-6">
          <h2 className="text-lg mb-4 text-primary">
                Total
          </h2>
          <h3 className="text-2xl font-bold">{formatarParaBRL(totalItens)}</h3>
        </div>
        <Button variant="primary" className="rounded-none w-full bg-secondary" onClick={() => {
          const phoneNumber = "5511992559017";

          const message = `Olá! :-)
gostaria de saber mais sobre a *${nome}!*:
- Preço: ${formatarParaBRL(totalItens)}.
- Produto: ${window.location.href}.
- Obs: ${texto ? texto : "Sem Observações"}
          `;

          const encodedMessage = encodeURIComponent(message);

          const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

          window.open(whatsappLink);
        }}>
            FAZER PEDIDO
        </Button>
      </div>
    </section>
  </main>;
}