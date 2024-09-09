import SectionHeader from "../common/SectionHeader";
import { sections, testimonials } from "../../constants";
import TestimonialCard from "../common/TestimonialCard";

const Testimonials = () => {
  const testimonialsData = sections.find(
    (section) => section.type === "testimonials"
  );

  return (
    <section className="section-spacing">
      <div className="flex flex-col items-center justify-start md:justify-center">
        <SectionHeader title={testimonialsData.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
