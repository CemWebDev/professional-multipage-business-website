import CustomButton from "../UI/CustomButton";

const Contact = () => {
  return (
    <section className="section-spacing">
      <div className="w-full rounded-md flex-col sm:flex-row flex gap-8 items-center justify-between px-4 py-8 bg-gradient-to-r from-fuchsia-600 to-purple-500">
        <div>
          <h1 className="text-xl md:text-3xl font-bold">
            Get in Touch With Us
          </h1>
          <p className="text-md md:text-lg text-neutral-200">
            Have questions or need help? Fill out the form, and we will get back
            to you soon.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-end w-full sm:w-auto">
          <input
            type="text"
            placeholder="Enter your mail here..."
            className="px-10 bg-transparent w-full rounded-sm py-2 border placeholder:text-white border-neutral-300 focus:border-white outline-none text-white"
          />
          <CustomButton className="bg-neutral-300 w-full hover:bg-white text-purple-600 py-2 px-4 border border-transparent">
            Subscribe
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
