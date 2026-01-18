"use client";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone_number: form.phone_number.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        form.reset();
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section
      id="contact"
      className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Get In Touch</span>
                <h2>
                  Let’s Collaborate On Your <span>Creative Projects</span>
                </h2>
                <p>
                  I design visual experiences that connect brands with their
                  audience. Get in touch to discuss your next project!
                </p>
              </div>
              <ul className="list-style-two">
                <li>3+ Years of Graphic Design Experience</li>
                <li>Brand Identity & Logo Design</li>
                <li>Social Media & Digital Creatives</li>
                <li>Custom Visual Solutions</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                className="contactForm"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Samir valimbe"
                        required
                      />
                      <label htmlFor="name" className="for-icon">
                        <i className="far fa-user" />
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="support@gmail.com"
                        required
                      />
                      <label htmlFor="email" className="for-icon">
                        <i className="far fa-envelope" />
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        placeholder="+91 xxxxx xxxxx"
                        required
                      />
                      <label htmlFor="phone_number" className="for-icon">
                        <i className="far fa-phone" />
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                      <label htmlFor="subject" className="for-icon">
                        <i className="far fa-text" />
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write message"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        Send Us Message <i className="far fa-angle-right" />
                      </button>

                      {/* STATUS MESSAGE */}
                      {status && (
                        <p style={{ marginTop: "12px" }}>{status}</p>
                      )}
                    </div>
                  </div>
                </div>
              </form>

              {/* SOCIAL LINKS UNCHANGED */}
              <div className="social-flow mt-5">
                <h4>Follow :</h4>
                <div className="social-style-one">
                  <a
                    href="https://www.instagram.com/art_lover_sam111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/samir-valimbe-5a4275213"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-lines">
        {[...Array(10)].map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
