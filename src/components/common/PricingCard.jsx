import { FaRegCheckCircle } from "react-icons/fa";
import CustomButton from "../UI/CustomButton";

const PricingCard = ({ title, price, description, mostPopular, features }) => {
  return (
    <div className="rounded-lg shadow-md relative border border-neutral-200/80 p-4">
      <div>
        {mostPopular && (
          <p className="absolute py-3 px-8 w-[60%] sm:w-[70%] text-center bg-gradient-to-r from-fuchsia-600 to bg-purple-500 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white rounded-full text-sm font-semibold">
            Most Popular
          </p>
        )}
        <h1 className="text-4xl font-bold tracking-wide my-8">{title}</h1>
        <h1 className="">
          <span className="text-4xl font-bold mr-1">{price}</span>{" "}
          <span className="text-sm font-light text-neutral-400">/month</span>
        </h1>
        <p className="mt-6 text-sm text-slate-gray">
          {description}
        </p>
        <ul className="flex flex-col items-start gap-5 mt-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div>
                <FaRegCheckCircle />
              </div>
              <div>{feature}</div>
            </li>
          ))}
        </ul>
        <CustomButton className="border border-purple-400/50 w-full mt-12 py-4 mb-4 font-bold hover:border-purple-700 hover:shadow-xl shadow-purple-600">
          Get Started
        </CustomButton>
      </div>
    </div>
  );
};

export default PricingCard;
