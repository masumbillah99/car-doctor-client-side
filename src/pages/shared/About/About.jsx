import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <>
      <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row gap-28 lg:gap-16">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-5 top-1/2 border-8 border-r-0 border-b-0 border-white rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5">
            <h4 className="text-xl font-bold text-orange-500 mb-5">About Us</h4>
            <h1 className="text-5xl font-bold pb-3">
              We are qualified &amp; of experience in this field
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&lsquo;t look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don&lsquo;t look even slightly
              believable.
            </p>
            <button className="border-0 p-3 bg-red-500 text-white rounded-lg">
              Get More info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
