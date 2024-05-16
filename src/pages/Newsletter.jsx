import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form } from "react-router-dom";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);

    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5qqyev9", "template_cdud4i2", form.current, {
        publicKey: "Z9s1xy_4-AQKEHjF9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <Form ref={form} onSubmit={sendEmail}>
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>Contact</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          name="to_name"
          id="name"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="from_name"
          className="form-input"
          id="email"
          defaultValue="test@test.com"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          type="message"
          name="message"
          className="form-input"
          id="message"
          rows="6"
          required
        />
      </div>

      <button
        type="submit"
        value="Send"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        Send
      </button>
    </Form>
  );
};
export default Newsletter;
