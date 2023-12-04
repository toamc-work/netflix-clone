import styled from "styled-components";

interface IStyledDropDownMenuContainerProps {
    isVisible: boolean;
}

export const StyledDropDownMenuContainer = styled.div.attrs({
    id: 'navigation-side-menu__dropdown-menu-container',
}) <IStyledDropDownMenuContainerProps>`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 0.2s linear;
`;