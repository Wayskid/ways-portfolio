import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import { ReducerActionTypes } from "../types/ReducerActionTypes";

export default function Reveal({
  children,
  divId,
}: {
  children?: React.JSX.Element;
  divId?: String;
}) {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: true });
  const navInView = useInView(divRef);
  const mainControls = useAnimation();
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
    if (navInView) {
      dispatch({ type: ReducerActionTypes.ACTIVE_NAV, payload: divId });
    }
  }, [isInView, navInView]);

  return (
    <div
      ref={divRef}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          display: "grid",
        }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
