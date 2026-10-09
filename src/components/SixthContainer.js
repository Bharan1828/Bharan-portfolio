import { useRef } from "react";

const SixthContainer = () => {
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${name.current.value}`;

    const body = `Name: ${name.current.value}
Email: ${email.current.value}

Message:
${message.current.value}`;

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
    );
  };

  return (
    <section
      id="Contact"
      className="min-h-screen bg-sky-200 px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-950">
            Get In Touch
          </p>

          <h1 className="text-4xl font-extrabold text-blue-950 sm:text-5xl md:text-6xl">
            Let's Connect
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-950/75 sm:text-lg">
            Have an opportunity, a project idea, or just want to connect? I'd
            love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-between rounded-3xl bg-blue-950 p-6 text-white shadow-xl sm:p-10">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Let's build something great together.
              </h2>

              <p className="mt-5 leading-7 text-blue-100">
                I'm interested in software development opportunities and
                collaborations where I can learn, contribute, and build useful
                applications.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:bharankommula18@example.com"
                  className="flex items-center gap-4 rounded-xl border border-white/15 p-4 transition hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl">
                    ✉
                  </span>

                  <div>
                    <p className="text-sm text-blue-200">Email Me</p>
                    <p className="break-all font-medium">
                      bharankommula18@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/bharankommula/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-white/15 p-4 transition hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl font-bold">
                    in
                  </span>

                  <div>
                    <p className="text-sm text-blue-200">LinkedIn</p>
                    <p className="font-medium">Connect professionally</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Bharan1828"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-white/15 p-4 transition hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                    &lt;/&gt;
                  </span>

                  <div>
                    <p className="text-sm text-blue-200">GitHub</p>
                    <p className="font-medium">Explore my projects</p>
                  </div>
                </a>
              </div>
            </div>

            <a
              href="/Bharan_Resume%20(2).pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-sky-200 px-6 py-3 font-semibold text-blue-950 transition hover:bg-white"
            >
              View Resume <span>↗</span>
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">
            <h2 className="text-2xl font-bold text-blue-950 sm:text-3xl">
              Send Me a Message
            </h2>

            <p className="mt-3 text-gray-500">
              Fill in the details below to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-blue-950"
                >
                  Your Name
                </label>

                <input
                  ref={name}
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-950 focus:ring-2 focus:ring-blue-950/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-blue-950"
                >
                  Your Email
                </label>

                <input
                  ref={email}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-950 focus:ring-2 focus:ring-blue-950/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-blue-950"
                >
                  Your Message
                </label>

                <textarea
                  ref={message}
                  id="message"
                  placeholder="Write your message here..."
                  rows="5"
                  required
                  className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-950 focus:ring-2 focus:ring-blue-950/10"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-950 px-6 py-4 font-semibold text-white transition hover:bg-blue-900"
              >
                Send Message <span>→</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-950/15 pt-6 text-center text-sm text-blue-950/70">
          Designed & Built by Bharan © {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
};

export default SixthContainer;
