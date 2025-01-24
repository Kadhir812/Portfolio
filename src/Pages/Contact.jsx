import AnimationWrapper from "../Components/AnimationWrapper";

function Contact() {
  return (
    <AnimationWrapper>
      <section className="contact">
        <h2>Contact Me</h2>
        <form
          action="https://formsubmit.co/your-email@example.com" // Replace with your email
          method="POST"
          className="contact-form"
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </AnimationWrapper>
  );
}

export default Contact;
