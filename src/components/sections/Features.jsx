import { sections, features } from "../../constants";
import FeatureCard from "../UI/FeatureCard";
import SectionHeader from "../common/SectionHeader";

const Features = () => {
  const featureData = sections.find((section) => section.type === "features");

  return (
    <section className="section-spacing">
      <div className="flex items-start md:items-center flex-col">
        <SectionHeader
          title={featureData.title}
          subtitle={featureData.subtitle}
          description={featureData.description}
        />
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
