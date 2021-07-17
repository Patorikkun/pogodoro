import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const AddTimeIcon = ({ addTimeSeconds, showCounter, isOpen }) => {
  return (
    <StyledAddTimeIcon
      onClick={addTimeSeconds}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      initial={{ x: 10 }}
      animate={showCounter ? { opacity: 1, x: 0 } : { opacity: 0 }}
      transition={{ duration: 0.2 }}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M18.905 8.43776H18.9062H11.5624V1.10785C11.5624 0.504596 11.074 0.000205994 10.4707 0.000205994H9.53106C8.92797 0.000205994 8.4374 0.504596 8.4374 1.10785V8.43776H1.09382C0.490894 8.43776 0 8.92557 0 9.52898V10.474C0 11.0769 0.490732 11.5626 1.09382 11.5626H8.43756V18.9191C8.43756 19.522 8.92797 20 9.53122 20H10.4709C11.0741 20 11.5626 19.5218 11.5626 18.9191V11.5626H18.905C19.5083 11.5626 20 11.0768 20 10.474V9.52898C20 8.92557 19.5083 8.43776 18.905 8.43776Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </StyledAddTimeIcon>
  );
};

const StyledAddTimeIcon = styled(motion.svg)`
  cursor: pointer;
  transform: scale(0.8);
`;

export default AddTimeIcon;
