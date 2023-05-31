import "../scss/contact.scss";
// import Button from "../reusable/Button";
import { ChangeEvent, useContext } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import AppContext from "../context/AppContext";
import { ReducerActionTypes } from "../types/ReducerActionTypes";
import Reveal from "./Reveal";
// import WaysPortfolioContext from "../../context/WaysPortContext";

export default function Contact() {
  const { state, dispatch, sendEmail, formRef } = useContext(AppContext);

  return (
    <div id="contact">
      <Reveal divId="Contact">
        <div className="contactHeader">
          <p>How To</p>
          <p>Contact Me</p>
        </div>
      </Reveal>
      <p className="contactIntro">Have a question or want to work together ?</p>
      <Reveal divId="Contact">
        <form onSubmit={sendEmail} ref={formRef}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={state.contactForm.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: ReducerActionTypes.CONTACT_FORM,
                field: e.target.name,
                payload: e.target.value,
              })
            }
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={state.contactForm.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: ReducerActionTypes.CONTACT_FORM,
                field: e.target.name,
                payload: e.target.value,
              })
            }
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={7}
            value={state.contactForm.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              dispatch({
                type: ReducerActionTypes.CONTACT_FORM,
                field: e.target.name,
                payload: e.target.value,
              })
            }
          />
          <button className="contactBtn">SEND</button>
          {state.emailSent && (
            <p className="emailSent">
              <AiFillCheckCircle /> Sent Successfully
            </p>
          )}
        </form>
      </Reveal>
    </div>
  );
}
