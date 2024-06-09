import HeroBanner from "#/lib/components/atoms/HeroBanner";
import Shelf from "#/lib/components/layouts/shelf/shelf";
import ShelfOutros from "#/lib/components/layouts/shelf/shelf-outros";
import Testimonials from "#/lib/components/layouts/testimonials/testimonials";
import { Fragment, ReactElement } from "react";

export default function HomePage(): ReactElement {
  return (
    (
      <Fragment>
        <HeroBanner className="md:flex hidden" imageUrl="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/bg-0005.jpg" />
        <HeroBanner className="md:hidden flex" imageUrl="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/box-01.jpg" />

        <Shelf id="shelf-home" />
        <ShelfOutros id="shelf-outros" />
        <Testimonials id="testimonials" />
      </Fragment>
    )
  );
}