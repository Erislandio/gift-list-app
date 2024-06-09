import { formatarParaBRL } from "#/app/product/[slug]/page";
import type { TipoDeCesta } from "#/lib/typings/gift";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { OutrosProduto } from "./shelf-outros";


export default function ProductSummary({ cesta }: { cesta: TipoDeCesta }): ReactElement {
  const [mainImage] = cesta.imagem;

  return (
    <li className="p-3">
      <div className="astra-shop-thumbnail-wrap">
        <Link
          href={`/product/${cesta.link}`}
          className="block"
        >
          <Image
            loading="lazy"
            decoding="async"
            width={250}
            height={250}
            className="w-full block w-64 h-64 object-none mb-3"
            src={mainImage?.url ? mainImage?.url : `https://placehold.co/500x500?text=${cesta.nome}`}
            alt={cesta.nome}
          />
          <div className="astra-shop-summary-wrap text-center">
            <span className="text-[0.85rem] font-thin font-sans mb-1 block opacity-[0.9]">Cesta Personalizada</span>
            <div
              className="ast-loop-product__link"
            >
              <h2 className="text-base font-bold font-sans text-primary">
                {cesta.nome}
              </h2>
              <h5 className="text-lg font-bold font-sans text-secondary">{formatarParaBRL(cesta?.preco ?? 0)}</h5>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
}


export  function ProductSummaryOutro({ product }: { product: OutrosProduto }): ReactElement {
  const [mainImage] = product.imagem;

  return (
    <li className="p-3">
      <div className="astra-shop-thumbnail-wrap">
        <Link
          href={`/outro/${product.slug}`}
          className="block"
        >
          <Image
            loading="lazy"
            decoding="async"
            width={250}
            height={250}
            className="w-full block w-64 h-64 object-none mb-3"
            src={mainImage?.url ? mainImage?.url : `https://placehold.co/500x500?text=${product.nome}`}
            alt={product.nome}
          />
          <div className="astra-shop-summary-wrap text-center">
            <span className="text-[0.85rem] font-thin font-sans mb-1 block opacity-[0.9]">Produto Personalizado</span>
            <div
              className="ast-loop-product__link"
            >
              <h2 className="text-base font-bold font-sans text-primary">
                {product.nome}
              </h2>
              <h5 className="text-lg font-bold font-sans text-secondary">{formatarParaBRL(product?.preco ?? 0)}</h5>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
}