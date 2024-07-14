import { Form, redirect, useActionData } from "react-router-dom";

import "./contact.scss";

const Contact = () => {
  const data = useActionData();
  return (
    <div className="contact-section">
      <div className="contact-header">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <Form method="post" action="/">
            {data && data.error && <p>{data.error}</p>}
            <input
              name="name"
              className="name"
              type="text"
              placeholder="Name"
            />
            <div className="input-wrapper">
              <input
                name="email"
                className="email"
                type="email"
                placeholder="Email"
              />
              <input
                name="subject"
                className="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <textarea
              name="message"
              className="message"
              type="text"
              placeholder="Your message"
            />
            <button>Send Message</button>
          </Form>
        </div>
        <div className="contact-details"></div>
      </div>
    </div>
  );
};

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    name: data.get("name"),
    email: data.get("email"),
    subject: data.get("subject"),
    message: data.get("message"),
  };

  if (submission.message.length < 10) {
    return { error: "Message should be longer than 10 chars" };
  }

  return redirect("/");
};

export default Contact;
