import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const SubtractIcon = ({ subtractTime, showCounter, isOpen }) => {
  return (
    <StyledSubtractIcon
      onClick={subtractTime}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      initial={{ x: -10 }}
      animate={showCounter ? { opacity: 1, x: 0 } : { opacity: 0 }}
      transition={{ duration: 0.2 }}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.19995 12.4004H18.7999C19.4627 12.4004 20 11.8632 20 11.2001C20 10.5373 19.4629 10 18.7999 10H1.19995C0.537252 10.0002 0 10.5374 0 11.2003C0 11.8632 0.537252 12.4004 1.19995 12.4004Z"
        fill="white"
      />
    </StyledSubtractIcon>
  );
};

const StyledSubtractIcon = styled(motion.svg)`
  cursor: pointer;
`;

export default SubtractIcon;
