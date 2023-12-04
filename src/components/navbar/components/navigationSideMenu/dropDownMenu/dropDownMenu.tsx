import React, { useCallback, useMemo, useState } from "react";
import { StyledDropDownMenuContainer } from "./styledComponents/DropDownMenuContainer";
import { StyledArrowDropDown } from "./styledComponents/ArrowDropDown";
import "./style.css";

interface IDropDownMenu {
    onMenuIconHover?: (mouseEvent: 'enter' | 'leave') => void;
    onMenuHover?: (mouseEvent: 'enter' | 'leave') => void;
    render: () => JSX.Element;
}


const DropDownMenu: React.FC<IDropDownMenu> = ({
    onMenuHover = (_mouseEvent: 'enter' | 'leave'): void => { },
    onMenuIconHover = (_mouseEvent: 'enter' | 'leave'): void => { },
    render,
}) => {

    const [isMenuIconHovered, setMenuIconHovered] = useState<boolean>(false);
    const [isMenuHovered, setMenuHovered] = useState<boolean>(false);


    const handleMenuHover = useCallback((mouseEvent: 'enter' | 'leave'): void => {
        if (mouseEvent === 'enter') {
            setMenuHovered(() => true)
        }

        if (mouseEvent === 'leave') {
            const timeoutID = setTimeout(() => {
                setMenuHovered(() => false);
                clearTimeout(timeoutID)
            }, 200);
        }
        onMenuHover(mouseEvent);

    }, [onMenuHover]);

    const handleMenuIconHover = useCallback((mouseEvent: 'enter' | 'leave'): void => {
        if (mouseEvent === 'enter') {
            setMenuIconHovered(() => true)
        }

        if (mouseEvent === 'leave') {

            const timeoutID = setTimeout(() => {
                setMenuIconHovered(() => false);
                clearTimeout(timeoutID)
            }, 200);
        }
        onMenuIconHover(mouseEvent);

    }, [onMenuIconHover])

    const isMenuOpen: boolean = useMemo(() => (isMenuHovered || isMenuIconHovered) ? true : false, [isMenuIconHovered, isMenuHovered])
    const rotationAngle: number = useMemo(() => isMenuOpen ? 180 : 0, [isMenuIconHovered, isMenuHovered])

    return (
        <div id='navigation-side-menu__dropdown-menu-wrapper'>
            <div
                id="navigation-side-menu__dropdown-menu-icon"
                onMouseEnter={() => handleMenuIconHover('enter')}
                onMouseLeave={() => handleMenuIconHover('leave')}
            />
            <StyledArrowDropDown rotate={rotationAngle} />
            <StyledDropDownMenuContainer
                isVisible={isMenuOpen}
                onMouseEnter={() => handleMenuHover('enter')}
                onMouseLeave={() => handleMenuHover('leave')}
            >
                {isMenuOpen && render()}
            </StyledDropDownMenuContainer>
        </div>
    )
}

export default DropDownMenu;