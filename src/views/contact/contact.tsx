"use client";
import { useRouter } from "next/navigation";

const Contact = () => {
    const router = useRouter();

    const handleSubmit = (event: { preventDefault: () => void; target: any }) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("__form.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            // @ts-ignore
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => router.push("/success"))
            .catch((error) => alert(error));
    };

    return (
      <section className="py-8" id="contact-section">
        <div className="container mx-auto">
          <div className="prose text-center mx-auto my-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Connect With Us
            </h2>
          </div>
          <div>
            <form
              className="flex flex-col gap-4 lg:px-0"
              name="contact"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
              action={"/success"}
              data-netlify="true"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col sm:flex-row w-full gap-4 h-28 sm:h-12">
                <label className="input input-bordered flex items-center gap-2 flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    required
                    type="text"
                    name="name"
                    className="grow"
                    placeholder="Name"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input
                    required
                    type="text"
                    name="email"
                    className="grow"
                    placeholder="Email"
                  />
                </label>
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row w-full gap-4 h-28 sm:h-12">
                <label className="input input-bordered flex items-center gap-2 flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <input
                    required
                    type="date"
                    name="date"
                    className="grow"
                    placeholder="Date"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </svg>
                  <input
                    required
                    type="text"
                    name="location"
                    className="grow"
                    placeholder="City / Town"
                  />
                </label>
              </div>
              <input type="hidden" name="form-name" value="contact" />
              <textarea
                required
                className="textarea textarea-bordered"
                name="message"
                placeholder="Message"
              ></textarea>
              <div data-netlify-recaptcha="true"></div>
              <input
                name="submit"
                type="submit"
                value="Submit"
                className="btn btn-primary w-full max-w-72 mx-auto"
              />
            </form>
          </div>
        </div>
      </section>
    );
};

export default Contact;