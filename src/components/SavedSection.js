import React from "react";
import styled from "styled-components";
import EllipsisBuutton from "../assets/EllipsisButton";

const SavedSection = ({ sectionTitle }) => {
  return (
    <StyledSavedSection>
      <SavedSectionHeading>
        <SavedSectionTitle>{sectionTitle}</SavedSectionTitle>
        <ItemsLeft>3</ItemsLeft>
      </SavedSectionHeading>
      <EllipsisBuutton></EllipsisBuutton>
    </StyledSavedSection>
  );
};

const StyledSavedSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 2.5em;
  margin: auto;
  //border: 1px solid white;
`;

const SavedSectionHeading = styled.div`
  display: flex;

  align-items: center;
  min-width: 30%;
  //border: 1px solid white;
`;

const SavedSectionTitle = styled.h3`
  color: white;
  font-weight: 400;
  // border: 1px solid white;
`;
const ItemsLeft = styled.h4`
  margin-left: 1rem;
  color: whitesmoke;
  font-weight: lighter;

  // border: 1px solid white;
`;

export default SavedSection;
