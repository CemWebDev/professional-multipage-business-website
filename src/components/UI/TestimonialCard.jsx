const TestimonialCard = ({ name, role, content, image }) => {
  return (
    <div className="border border-neutral-600/80 px-5 rounded-lg flex flex-col gap-y-4 shadow-2xl">
      <div className="flex items-center justify-between mt-2 flex-wrap">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-700">
          <img src={image} alt="" className="w-full object-cover h-full" />
        </div>
        <div className="flex items-end justify-end flex-col">
          <h1 className="capitalize">{name}</h1>
          <span className="text-sm italic text-neutral-400">{role}</span>
        </div>
      </div>
      <p className="my-4 text-sm text-neutral-100">{content}</p>
    </div>
  );
};

export default TestimonialCard;
