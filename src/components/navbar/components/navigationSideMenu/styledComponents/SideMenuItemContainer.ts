import styled from "styled-components";

interface ISideMenuItemContainer {
    toDisplay: boolean
}

export const StyledSideMenuItemContainer = styled.div.attrs({
    className: 'navigation-side-menu__item-container',
}) <ISideMenuItemContainer>`
    display: ${(props) => props.toDisplay ? 'auto' : 'none'};
`;