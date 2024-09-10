import { Fragment } from "react";

const SectionHeader = ({ title, subtitle, description }) => {
  return (
    <Fragment>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl lg:max-w-5xl my-6 text-start lg:text-center">
        {title}
        {subtitle && (
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-500">
            {" "}
            {subtitle}
          </span>
        )}
      </h1>
      {description && (
        <p className="text-slate-400 text-lg md:text-xl lg:text-2xl mb-6 text-start lg:text-center">
          {description}
        </p>
      )}
    </Fragment>
  );
};

export default SectionHeader;
