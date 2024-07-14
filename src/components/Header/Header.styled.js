import styled from "styled-components";

export const StyledHeader = styled.header`
  height: ${({dropdown}) =>{
    return dropdown ? 124 +"px": 75 +"px";
  }};
  max-width: ${({ width }) => {
    if (width > 1920) {
      return 1536 + "px";
    } else if (width <= 768) {
      return 100 + "%";
    } else {
      return 80 + "%";
    }
  }};
  margin: 0 auto;
  border-bottom: ${({ dropdown }) => {
    if (dropdown) {
      return "none";
    } else {
      return "1px white solid";
    }
  }};
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 14px;
  height: 100%;
`;
