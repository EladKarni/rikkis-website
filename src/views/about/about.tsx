import Image from "next/image";
import Portrait from "/public/images/rikki-portrait.jpg";

const About = () => {
  return (
    <section className="hero min-h-fit bg-base-100 py-10">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={Portrait}
          alt={"portrait of rikki, owner of three rivers face painting"}
          className="max-w-96 rounded-md"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default About;
