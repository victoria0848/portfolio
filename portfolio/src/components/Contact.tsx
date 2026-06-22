import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_zj02ixl",
        "template_fx6mtrh",
        formRef.current,
        "b4sgUMEkv-LYlxBE_"
      )
      .then(
        () => {
          setStatus("Besked sendt!");
          formRef.current?.reset();
        },
        () => {
          setStatus("Noget gik galt. Prøv igen.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-purple-300 dark:bg-black py-20"
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-700 dark:text-white">
          Kontakt mig
        </h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium"
            >
              Navn
            </label>

            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="w-full p-4 rounded-2xl bg-purple-200 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium"
            >
              Besked
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full p-4 rounded-2xl bg-purple-200 text-black resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-4 rounded-2xl"
          >
            Send besked
          </button>

          {status && (
            <p className="text-center font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}