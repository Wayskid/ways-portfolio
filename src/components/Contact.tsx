import "../scss/contact.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import SecHeader from "./SecHeader";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { motion } from "framer-motion";
import Reveal from "./Reveal Animations/Reveal";

export default function Contact() {
  //Send email
  const [contactVal, setContactVal] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSentRes, setEmailSentRes] = useState({} as EmailJSResponseStatus);
  const [loading, setLoading] = useState(false);

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (Object.values(contactVal).every((val) => val.length > 0)) {
      setLoading(true);
      emailjs
        .send(
          "service_0ho156e",
          "template_idj0jxb",
          {
            ...contactVal,
          },
          "zTkg27Ahp4AaPiT1q"
        )
        .then(
          (result) => {
            setEmailSentRes(result);
            setLoading(false);
            setContactVal({
              name: "",
              email: "",
              message: "",
            });
            setTimeout(() => {
              setEmailSentRes({} as EmailJSResponseStatus);
            }, 4000);
          },
          (error) => {
            console.log(error);
            setLoading(false);
          }
        );
    }
  }

  return (
    <div id="contact">
      <SecHeader secTitle="Get in touch!" />
      <div className="contactBody">
        <div className="contacts">
          <p className="contactIntro">
            Have a question or want to work together ?
          </p>
          <Reveal className="contactFlex">
            <>
              <div>
                <HiLocationMarker />
              </div>
              <div className="contactGrid">
                <p className="contactGridTitle">Location</p>
                <p className="contactGridValue">HULL HU5 2NP, UK</p>
              </div>
            </>
          </Reveal>
          <Reveal className="contactFlex">
            <>
              <div>
                <HiPhone />
              </div>
              <div className="contactGrid">
                <p className="contactGridTitle">Phone</p>
                <p className="contactGridValue">+2348085624058</p>
              </div>
            </>
          </Reveal>
          <Reveal className="contactFlex">
            <>
              <div>
                <GrMail />
              </div>
              <div className="contactGrid">
                <p className="contactGridTitle">Email</p>
                <a
                  href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3A%3Fto%3Dwayskid02%40gmail.com"
                  target="_blank"
                  className="contactGridValue"
                >
                  wayskid02@gmail.com
                </a>
              </div>
            </>
          </Reveal>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={contactVal.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setContactVal({
                ...contactVal,
                name: e.target.value,
              })
            }
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={contactVal.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setContactVal({
                ...contactVal,
                email: e.target.value,
              })
            }
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={7}
            value={contactVal.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setContactVal({
                ...contactVal,
                message: e.target.value,
              })
            }
          />
          <div className="btnFlex">
            {emailSentRes.status && !loading && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="emailSent"
              >
                <AiFillCheckCircle /> Sent Successfully
              </motion.p>
            )}
            <button
              className="contactBtn"
              disabled={
                contactVal.name.length < 1 ||
                contactVal.email.length < 1 ||
                contactVal.message.length < 1 ||
                loading
              }
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
