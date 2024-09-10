const AuthHeader = ({ children, subtitle }) => {
  return (
    <div className="max-w-full sm:max-w-3xl lg:max-5xl mx-auto text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        {children}
      </h1>
      {subtitle && <p className="text-neutral-400 mt-5">{subtitle}</p>}
    </div>
  );
};

export default AuthHeader;
