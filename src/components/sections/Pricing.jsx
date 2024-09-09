import SectionHeader from "../common/SectionHeader";
import { sections, pricingPlans } from "../../constants/index";
import PricingCard from "../common/PricingCard";

const Pricing = () => {
  const pricingData = sections.find((section) => section.type === "pricing");

  return (
    <section className="section-spacing">
      <div>
        <div className="flex items-center justify-start md:justify-center">
          <SectionHeader title={pricingData.title} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 ">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
