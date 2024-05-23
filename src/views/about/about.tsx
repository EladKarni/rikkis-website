import Image from "next/image";
import Portrait from "/public/images/rikki-portrait.jpg";

const About = () => {
  return (
    <section className="hero min-h-fit bg-base-100 py-10 container mx-auto">
      <div className="hero-content p-0 gap-8 flex-col lg:flex-row justify-between">
        <Image
          src={Portrait}
          alt={"portrait of rikki, owner of three rivers face painting"}
          className="max-w-lg rounded-md"
        />
        <div>
          <h1 className="text-5xl font-bold">About Rikki</h1>
          <p className="py-6 text-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary text-base-100">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default About;
