import styled from "styled-components";
import { device } from "../../lib/breakpoints";
import { colors } from "../../lib/themeColors";

export const CardContainer = styled.div`
  background-color: ${colors.cream};
  min-height: calc(100vh - 384px + 23px);
  margin-top: -23px;
  border-radius: 48px 48px 0px 0px;
  border: 1px solid #000000;

  @media ${device.tablet} {
    min-height: calc(100vh - 454px + 29px);
    margin-top: -29px;
    border-radius: 64px 64px 0px 0px;
    border: 2px solid #000000;
  }
`;
