import Image from "next/image";
import Portrait from "../../../public/images/rikki-portrait.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="hero min-h-fit bg-base-100 py-10 container mx-auto scroll-mt-[100px]"
    >
      <div className="hero-content w-full p-0 gap-8 flex-col lg:flex-row justify-between">
        <Image
          src={Portrait}
          alt={"portrait of rikki, owner of three rivers face painting"}
          className="lg:max-w-lg rounded-md"
        />
        <div>
          <h1 className="text-5xl font-bold">About Rikki</h1>
          <p className="py-6 text-xl">
            Rikki started face painting after a friend suggested, &quot;Hey, you
            might like face painting at birthday parties.&quot; Guess what, she
            was right! Rikki is bright, friendly, enthusiastic, and great with
            kids. She&apos;s painted at innumerable birthday parties, and makes
            holiday events special from Easter to Eid al-Fitr. The kids love
            choosing their own paint colors and picking out gems from her
            impressive array to personalize the artwork. Rikki prides herself on
            great customer service and would love to be a part of your special
            event, whether that&apos;s a baseball game, birthday celebration, or
            the finishing touch on a great costume!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
