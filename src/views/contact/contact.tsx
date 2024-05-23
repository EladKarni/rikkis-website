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
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold m-2">
                        Connect With Us
                    </h2>
                </div>
                <div>
                    <form
                        className="flex flex-col gap-4 px-4 lg:px-0"
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
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70"
                                >
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
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
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70"
                                >
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
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