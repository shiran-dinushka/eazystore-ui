import React, { Children } from "react";
import PageTile from "./PageTile";

export default function PageHeading({ title, children }) {
  return (
    <div className="page-heading-container">
      <PageTile title={title} />
      <p className="page-heading-paragraph">{children}</p>
    </div>
  );
}
