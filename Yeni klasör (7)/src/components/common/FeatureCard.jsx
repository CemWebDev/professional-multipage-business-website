const FeatureCard = ({ icon, title, content }) => {
  return (
    <div className="rounded-lg border border-neutral-600/80 shadow-md overflow-hidden p-2 flex flex-col items-start gap-4 sm:gap-3">
      <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-600 to-purple-500 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-md text-slate-300 my-2">{content}</p>
    </div>
  );
};

export default FeatureCard;
