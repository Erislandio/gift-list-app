import HeroBanner from "#/lib/components/atoms/HeroBanner";
import Shelf from "#/lib/components/layouts/shelf/shelf";
import Testimonials from "#/lib/components/layouts/testimonials/testimonials";
import { Fragment, ReactElement } from "react";

export default function HomePage(): ReactElement {
  return (
    (
      <Fragment>
        <HeroBanner />
        <Shelf id="shelf-home" />
        <Testimonials id="testimonials" />
      </Fragment>
    )
  );
}