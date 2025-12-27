import React, { Children } from "react";
import PageTitle from "./PageTitle";

export default function PageHeading({ title, children }) {
  return (
    <div className="text-center max-w-xl my-6 px-4 mx-auto">
      <PageTitle title={title} />
      <p className="font-primary leading-6 text-gray-600 dark:text-lighter">{children}</p>
    </div>
  );
}
