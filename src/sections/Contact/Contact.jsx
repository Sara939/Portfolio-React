import styles from "../Contact/Contact.module.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [emailsent, setEmailsent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r7nzy5f",
        "template_lgfvku2",
        e.target,
        "o5D3GVoTcvrgOyQl-"
      )
      .then(
        (result) => {
          setEmailsent(true);
          // window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  if (emailsent) {
    return (
      <section className={styles.container}>
        <p>The message was sent successfully!</p>
        <h1 className="sectionTaitle">Thank you!</h1>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTaitle">Contact</h1>
      <form onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="send" />
      </form>
    </section>
  );
}

export default Contact;
