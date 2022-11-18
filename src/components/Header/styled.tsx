import styled from "styled-components";
import { device, size } from "../../lib/breakpoints";
import { colors } from "../../lib/themeColors";

export const HeaderContainer = styled.div`
  background-color: ${colors.blue};
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.mobileL} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 454px;
  }
`;

export const LogoImageSmall = styled.img`
  width: 200px;
  margin-top: 55px;
  @media (min-width: ${size.mobileL}) {
    display: none;
  }
`;

export const LogoImageBigger = styled.img`
  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;

export const ParticipanteImage = styled.img`
  height: 150px;
  z-index: 1;
  @media ${device.mobileL} {
    height: 250px;
    margin-top: 121px;
    align-self: flex-end;
  }
`;
