import { IAbsolute, IFlexBox, IFlexContainer, IGridBox, IPadBox } from "./types";
import styled from "styled-components";
import {
  Box,
  Button
} from '@mui/material';

export const FlexBox = styled(Box) <IFlexBox>`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: ${({ showOutlines }) => showOutlines ? `1px solid #ff9900` : ''};
    min-width: fit-content;
`;

export const GridBox = styled(Box) <IGridBox>`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(${(props) => (`${props.columns ?? 0}, 1fr`)});
    grid-template-rows: repeat(${(props) => (`${props.rows ?? 0}, 1fr`)});
    border: ${({ showOutlines }) => showOutlines ? `1px solid #ff9900` : ''};
`;

export const PadBox = styled(Box) <IPadBox>`
    display: 'block';
    height: auto;
    padding: ${({ padding }) => padding * 8 + 'px' ?? 0};
    border: ${({ showOutlines }) => showOutlines ? `1px solid #ff9900` : ''};
    width: fit-content;

`;

export const NetflixLogo = styled.img`
    width: 100%;
    height: auto;
    user-select: none;
    user-drag: none; /* Standard syntax */
    -webkit-user-drag: none; /* Chrome, Safari, newer versions of Opera, and Edge */
    -khtml-user-drag: none; /* Older versions of Safari */
    -moz-user-drag: none; /* Firefox */
    -ms-user-drag: none; /* Internet Explorer/Edge */
`;

export const NavigationText = styled.span`
  position: relative;
  color: white;
  width: fit-content;
  justify-self: center;
  cursor: pointer;
  white-space: nowrap;
  transition: font-size 0.3s ease; /* Transition on font-size */
  user-select: none;
  user-drag: none; /* Standard syntax */
  -webkit-user-drag: none; /* Chrome, Safari, newer versions of Opera, and Edge */
  -khtml-user-drag: none; /* Older versions of Safari */
  -moz-user-drag: none; /* Firefox */
  -ms-user-drag: none; /* Internet Explorer/Edge */

  &:hover, &:active {
    color: transparent;
    &::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      color: white;
      text-decoration: underline;
      font-weight: bold;
      opacity: 1; 
      transition: opacity 0.3s ease; 
    }

  }

  @media (max-width: 1100px) {
    font-size: 0.6rem;
  }

  @media (min-width: 1100px) {
    font-size: 0.6rem;
  }

  @media (min-width: 1250px) {
    font-size: 0.7rem;
  }

  @media (min-width: 1400px) {
    font-size: 1rem;
  }
`;

export const FlexContainer = styled(Box) <IFlexContainer>`
  display: flex;
  align-items: baseline;
  margin: auto;
  flex-wrap: nowrap;
  white-space: nowrap;
  border: ${({ showOutlines }) => showOutlines ? `1px solid #ff9900` : ''};
`;

export const AbsoluteBox = styled(Button) <IAbsolute>`
  position: absolute;
    top: 0;
    width: '5%';
    height: '100%';
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    font-size: '24px';
`;
