import React, { useRef } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
import "./Contact.css";
import { send } from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xby3v7n",
      "template_rr42qp7",
      form.current,
      "cet_Vgm2x-YOSgDhg"
    );
    e.target.reset();
  };
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title underline">Get in Touch</h2>

      <span className="section__subtitle"></span>
      <div className="contact_container container grid">
        <div className="contact_content">
          <div className="contact_title">Talk to me</div>
          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">
                rajeshpandi257@gmail.com
              </span>
              <a
                href="mailto:rajeshpandi257@gmail.com"
                className="contact_button"
              >
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="uil uil-whatsapp contact_card-icon"></i>
              <h3 className="contact_card-title">whatsapp</h3>
              <span className="contact_card-data">8098011587</span>
              <a href="http://wa.link/xwwfba" className="contact_button">
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="  uil uil-instagram contact_card-icon"></i>
              <h3 className="contact_card-title">Instagram</h3>
              <span className="contact_card-data"></span>
              <a
                href="https://instagram.com/rkp_dev?igshid=ZGUzMzM3NWJiOQ=="
                className="contact_button"
              >
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact_content">
          <h3 className="contact_title">Write Your Thoughts</h3>
          <form
            action=""
            className="contact_form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="contact_form-div">
              <label htmlFor="" className="contact_form-tag">
                Name{" "}
              </label>

              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="contact_form-div">
              <label htmlFor="" name="email" className="contact_form-tag">
                email{" "}
              </label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="contact_form-div">
              <label htmlFor="" className="contact_form-tag">
                {" "}
                Thoughts{" "}
              </label>

              <textarea
                name="thoughts"
                id=""
                cols="30"
                rows="10"
                className="contact_form-input contact_form-area"
                placeholder="enter your thoughts"
              ></textarea>
            </div>

            <button
              type="submit"
              className="button button_flex button__flex "
              name="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
