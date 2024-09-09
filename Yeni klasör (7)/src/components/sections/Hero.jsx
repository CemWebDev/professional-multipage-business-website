import { sections } from "../../constants";
import CustomButton from "../UI/CustomButton";
import SectionHeader from "../common/SectionHeader";

const Hero = () => {
  const heroData = sections.find((section) => section.type === "hero");

  return (
    <section className="section-spacing">
      <div className="flex flex-col items-start md:items-center">
        <SectionHeader
          title={heroData.title}
          subtitle={heroData.subtitle}
          description={heroData.description}
        />
        <div className="my-8 flex items-center gap-8 flex-wrap">
          <CustomButton className="text-white border border-neutral-500/70 py-4 px-6">
            Get Started for free
          </CustomButton>
          <CustomButton className="text-white bg-gradient-to-r from-fuchsia-600 to-purple-500 py-4 px-6 ">
            Learn More
          </CustomButton>
        </div>
        <img src="/hero-image.jpg" alt="Hero Image" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
