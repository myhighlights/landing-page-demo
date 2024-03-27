import React from "react";
import styled from "styled-components";

const StyledBreadCrumbContainer = styled.div`
  margin-top: 2rem !important;
  display: flex;
  align-items: center;
`;

const StyledBreadCrumbOption = styled.a`
  margin-right: 0.5rem;
  font-family: Onest;
  font-size: 14px;
  font-weight: 500;
  line-height: 21.67px;
  text-align: left;
  color: ${({ selectedCrumb }) => (selectedCrumb ? "#ff003d" : "white")};
  text-decoration: none;
`;

const BreadCrumb = ({ pageNumber }) => {
  const generateBreadCrumbs = (pageNumber) => {
    let breadCrumbs = [];

    if (pageNumber >= 2) {
      breadCrumbs.push(
        <>
          <StyledBreadCrumbOption href={"/demo/games"}>
            Games
          </StyledBreadCrumbOption>
          <StyledBreadCrumbOption>/</StyledBreadCrumbOption>
          <StyledBreadCrumbOption selectedCrumb={pageNumber === 2} href={pageNumber !== 2 && '/demo/games/4'}>
            Match
          </StyledBreadCrumbOption>
        </>
      );
    }

    if (pageNumber === 3) {
      breadCrumbs.push(
        <StyledBreadCrumbOption>/</StyledBreadCrumbOption>,
        <StyledBreadCrumbOption selectedCrumb={pageNumber === 3}>
          Highlight
        </StyledBreadCrumbOption>
      );
    }

    return breadCrumbs;
  };

  return (
    <StyledBreadCrumbContainer>
      {generateBreadCrumbs(pageNumber)}
    </StyledBreadCrumbContainer>
  );
};

export default BreadCrumb;
