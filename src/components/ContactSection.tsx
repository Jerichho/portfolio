import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 px-4 bg-gray-50/80">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          id="contact-heading"
          title="Contact"
          subtitle="Interested in connecting about roles or project work? Send a message below."
        />
        <ContactForm />
      </div>
    </section>
  );
}
