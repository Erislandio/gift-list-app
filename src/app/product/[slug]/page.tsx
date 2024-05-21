/* eslint-disable max-len */
"use client";

import { Button } from "#/lib/components/atoms/button";
import { MaterialDaCesta, Produto, TipoDeCesta } from "#/lib/typings/gift";
import { gql, useQuery } from "@apollo/client";
import { Carousel, Checkbox, Label, Radio, Textarea } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";

export const PRODUCT_BY_SLUG_QUERY = gql`
query tipoDeCestasBySlug($slug: String!){
  tipoDeCesta(where: { link: $slug }) {
    id
    link
    nome
    imagem {
      url
    }
    descricao {
      html
    }
    produtos {
      id
      nome
      preco
      imagem {
        url
      }
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
}`;

function formatarParaBRL(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

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
  const [items, setItems] = useState<MaterialDaCesta>({
    preco: 0,
    id: "",
    imagem: { url: "" },
    nome: ""
  });
  const [extras, setExtras] = useState<Produto[]>([]);
  const [texto, setTexto] = useState("");
  const { data, loading } = useQuery<{ tipoDeCesta: TipoDeCesta }>(PRODUCT_BY_SLUG_QUERY, {
    variables: {
      slug: params.slug
    },
    ssr: true
  });

  useEffect(() => {
    if (data?.tipoDeCesta) {
      setItems(data.tipoDeCesta.materialDaCestas[0]);
    }
  }, [data]);

  if (loading || !data) {
    return <></>;
  }

  const { tipoDeCesta } = data;

  const totalItens = extras.reduce((acc, current) => acc + current.preco, items.preco);

  return <main>
    <section className="mt-16">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pb-10">
        <Carousel rightControl={<RightControll />} leftControl={<LeftControl />} slideInterval={100000000000} theme={{
          indicators: {
            wrapper: "gap-2 flex items-center justify-center",
            active: {
              on: "bg-primary",
              off: "bg-gray-300"
            }
          }
        }}>
          {tipoDeCesta.imagem?.map(image => (
            <div key={image.url}>
              <Image title={tipoDeCesta.nome} src={image.url} alt={tipoDeCesta.nome} width={375} height={375} loading="eager" />
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
            {tipoDeCesta.nome}
          </span>
        </nav>

        <h1 title={tipoDeCesta.nome} className="font-light text-primary text-2xl mt-1">{tipoDeCesta.nome}</h1>
        <div className="pb-6">
          <h2 className="text-lg mb-4 text-primary">Itens: </h2>
          <p className="font-light text-sm text-gray-600" dangerouslySetInnerHTML={{
            __html: tipoDeCesta.descricao.html
          }}>
          </p>
        </div>

        <div className="pb-6">
          <h2 className="text-lg mb-4 text-primary">Material da Cesta</h2>
          <fieldset className="flex max-w-md flex-col gap-4">
            {tipoDeCesta.materialDaCestas.map(mat => (
              <div className="flex items-center gap-2" key={mat.id}>
                <Radio checked={mat.id === items.id} onChange={() => {
                  setItems(mat);
                }} id={mat.nome} name="material" value={mat.nome} defaultChecked />
                <Label className="font-light text-sm text-gray-500" htmlFor={mat.nome}>
                  <Image title={mat.nome} src={mat.imagem.url} alt={mat.nome} width={50} height={50} />
                  {mat.nome}
                  <b className="font-bold text-sm text-primary inline-block ml-2">{formatarParaBRL(mat.preco)}</b>
                </Label>
              </div>
            ))}
          </fieldset>
        </div>

        <div className="pb-6">
          <h2 className="text-lg mb-4 text-primary">Itens extras: </h2>
          <div className="flex max-w-md flex-col gap-4" id="checkbox">
            {tipoDeCesta.produtos.map(product => (
              <div className="flex items-center gap-2" key={product.id}>
                <Checkbox onChange={() => {
                  if (extras.find(extra => extra.id === product.id)) {
                    setExtras([
                      ...extras.filter(item => item.id !== product.id)
                    ]);
                  } else {
                    setExtras([
                      ...extras,
                      product
                    ]);
                  }
                }} id={product.nome} theme={{
                  root: {
                    base: "bg-primary"
                  }
                }} />
                <Label className="font-light text-sm text-gray-500" htmlFor={product.nome}>{product.nome}
                  <b className="font-bold text-sm text-primary inline-block ml-2">{formatarParaBRL(product.preco)}</b>
                </Label>
              </div>
            ))}
          </div>
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
        <Button variant="primary" className="rounded-none w-full bg-secondary">
                    FAZER PEDIDO
        </Button>
      </div>
    </section>
  </main>;
}