// import "../scss/about.scss";
// import MyImage from "../assets/img/myImg.png";
// import RevealAnimation, { RevealChild } from "./Reveal Animations/Reveal";
// import SecHeader from "./SecHeader";
// import { useInView } from "framer-motion";
// import { useRef, useContext, useEffect } from "react";
// import AppContext from "../context/AppContext";
// import { ReducerActionTypes } from "../types/ReducerActionTypes";

// export default function About() {
//   const divRefAbout = useRef(null);
//   const isInView = useInView(divRefAbout, { once: false, amount: "some" });
//   const { dispatch } = useContext(AppContext);

//   useEffect(() => {
//     if (isInView) {
//       dispatch({ type: ReducerActionTypes.ACTIVE_NAV, payload: "about" });
//       console.log("Hello");
//     }
//   }, [isInView]);

//   return (
//     <div className="aboutMe" id="about" ref={divRefAbout}>
//       <RevealAnimation>
//         <RevealChild>
//           <SecHeader secIntro="Get to Know" secTitle="ABOUT ME" />
//         </RevealChild>
//       </RevealAnimation>
//       <div className="aboutFlex">
//         <RevealAnimation>
//           <RevealChild>
//             <div className="imageDiv">
//               <img src={MyImage} alt="Me" className="myImg" />
//               <div className="imageBack"></div>
//             </div>
//           </RevealChild>
//         </RevealAnimation>
//         <div className={`aboutDetails`}>
//           <RevealAnimation>
//             <RevealChild>
//               <div className="aboutWriteUps">
//                 <p>
//                   Hi, I'm Irinyemi Richard, an ever-improving Frontend developer
//                   based in Hull, UK.{" "}
//                 </p>
//                 <p>
//                   "Ever since I typed my first lines of code, I knew the next
//                   one would be the best one."
//                 </p>
//                 <p>
//                   A loyal, problem solving employee with high attention to
//                   details, whose mission is focused on crafting artistic,
//                   eye-catching and scalable frontend products, while writing
//                   clean codes.
//                 </p>
//               </div>
//             </RevealChild>
//           </RevealAnimation>
//           <RevealAnimation>
//             <RevealChild>
//               <a href="#contact" className="aboutBtn">
//                 Let's Talk
//               </a>
//             </RevealChild>
//           </RevealAnimation>
//         </div>
//       </div>
//     </div>
//   );
// }
