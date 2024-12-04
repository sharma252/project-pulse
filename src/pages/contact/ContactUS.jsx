import React from "react";

function ContactUs() {
  return (
    <section className="contact-us py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center mb-5">
          Have questions or feedback? We'd love to hear from you! Fill out the
          form below and we'll get back to you soon.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
