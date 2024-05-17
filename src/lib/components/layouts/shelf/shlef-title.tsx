import { Fragment, ReactElement } from "react";

export default function ShelfTitle({ title }: { title: string }): ReactElement {
  return (
    <Fragment>
      <div
        className="mb-3"
      >
        <div className="elementor-widget-container">
          <h2 className="text-center font-sans text-2xl font-bold text-primary">
            {title}
          </h2>
        </div>
      </div>
      <div
        className="mb-3 block"
      >
        <div className="pb-5">
          <div className="mb-1 pt-1 text-center">
            <span className="w-[50px] m-auto h-[5px] bg-secondary flex"></span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}