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
    <div className="flex justify-center m-6">
      <Form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg p-6 rounded-lg shadow-md"
      >
        <h4
          className="text-stone-300"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Contact
        </h4>
        <div className="">
          <div className=" text-stone-200">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              className="w-full p-2 mt-1 rounded"
              name="to_name"
              id="name"
              required
            />
          </div>
          <div className="mt-6">
            <label htmlFor="email" className="text-stone-200 font-xl">
              Email
            </label>
            <input
              type="email"
              name="from_name"
              className="w-full p-2 mt-1 rounded"
              id="email"
              defaultValue="test@test.com"
              required
            />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="text-stone-200">
              Message
            </label>
            <textarea
              name="message"
              className=" w-full p-2 mt-1 rounded"
              id="message"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            value="Send"
            className="mt-4 bg-orange-500 text-white py-1 px-4 text-sm rounded"
          >
            Send
          </button>
        </div>
      </Form>
    </div>
  );
};


export default Newsletter;
