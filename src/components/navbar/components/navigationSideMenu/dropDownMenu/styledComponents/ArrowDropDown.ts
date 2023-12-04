import { ArrowDropDown } from "@mui/icons-material";
import styled from "styled-components";

interface IStyledArrowDropDownProps {
    rotate: number;
}

export const StyledArrowDropDown = styled(ArrowDropDown).attrs({
    id: 'navigation-side-menu__arrow-dropdown-menu',
}) <IStyledArrowDropDownProps>`
    transform: ${({ rotate }) => `rotate(${rotate}deg)`};
    transition: transform 0.2s linear !important;
`;