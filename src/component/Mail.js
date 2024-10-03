import React, { useRef, useState } from "react";
import "../css/Mail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

function Mail() {
  const [data, setdata] = useState();
  const [disable, setdisable] = useState(false);
  const secrete = process.env.REACT_APP_secreate;
  const inputref = {
    name: useRef(null),
    email_address: useRef(null),
    enquiry_message: useRef(null),
  };

  const handlechange = (event) => {
    setdata({ ...data, [event.target.id]: event.target.value });
 
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setdisable(true);
    try {
      const response = await fetch(
        "https://send-mail-rho.vercel.app/send_mail",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
        if (response.status === 200) {
        toast.success(
          `message received successfully \n i'll contact you soon `,
          {
            theme: "dark",
          }
        );
         setdisable(false);
        inputref.name.current.value = "";
        inputref.email_address.current.value = "";
        inputref.enquiry_message.current.value = "";
        setdata();
      } else {
        toast.error("please try again", {
          theme: "dark",
        });
        setdisable(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("please try again",{
        theme:'dark'
      });
      setdisable(false);

    }
  };
  return (
    <div className="mail_body">
      <div className="hidden">
        <h1>GET IN TOUCH</h1>
      </div>
      <div className="form_data">
        <form action="" onSubmit={handlesubmit}>
          <input
            type="text"
            name=""
            id="name"
            placeholder="Your Name"
            required
            disabled={disable}
            ref={inputref.name}
            onChange={handlechange}
          />
          <input
            type="email"
            name="email_address"
            id="email_address"
            placeholder="Email Address"
            required
            disabled={disable}
            ref={inputref.email_address}
            onChange={handlechange}
          />
          <textarea
            name=""
            id="enquiry_message"
            placeholder="Enter Your Message"
            required
            disabled={disable}
            ref={inputref.enquiry_message}
            onChange={handlechange}
          ></textarea>

          <button className="submit" disabled={disable}>
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
      {disable ? (
        <div className="loader">
          <Loader />
        </div>
      ) : null}
    </div>
  );
}

export default Mail;
