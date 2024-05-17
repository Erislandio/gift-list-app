import type { TipoDeCesta } from "#/lib/typings/gift";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";


export default function ProductSummary({ cesta }: { cesta: TipoDeCesta }): ReactElement {
  const [mainImage] = cesta.imagem;

  return (
    <li className="p-3">
      <div className="astra-shop-thumbnail-wrap">
        <Link
          href={`/${cesta.link}`}
          className="block"
        >
          <Image
            loading="lazy"
            decoding="async"
            width={275}
            height={260}
            className="w-full block"
            src={mainImage?.url ? mainImage?.url : `https://placehold.co/500x500?text=${cesta.nome}`}
            alt={cesta.nome}
          />
          <div className="astra-shop-summary-wrap text-center">
            <span className="text-[0.85rem] font-thin font-sans mb-1 block opacity-[0.9]">Cesta Personalizada</span>
            <a
              href="https://websitedemos.net/gift-shop-04/product/adventure-power-dinosaur-toy/"
              className="ast-loop-product__link"
            >
              <h2 className="text-base font-bold font-sans text-primary">
                {cesta.nome}
              </h2>
            </a>
          </div>
        </Link>
      </div>
    </li>
  );
}