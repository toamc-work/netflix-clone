import React, { } from "react";
import { useMediaQuery } from 'usehooks-ts'
import {
    FlexBox,
    PadBox,
    NetflixLogo,
} from '../mui/MuiStyledComponents';

import NetflixLogoSrc from '../../assets/NetflixLogo.svg'
import { NavbarList } from '../../pages/home/constants/navbarList'
import NavigationMenu from './components/navigationMenu/NavigationMenu';
import NavigationSideMenu from "./components/navigationSideMenu/navigationSideMenu";
import { NavbarSideDropDownMenu } from "../../pages/home/constants/dropDownMenuLists";

const Navbar: React.FC = () => {
    const isDesktopView = useMediaQuery('(min-width: 800px)')
    return (

        <FlexBox
            justifyContent={'center'}
            alignItems={'start'}
            height={'100px'}
        >
            <FlexBox
                sx={{
                    position: 'fixed',
                    zIndex: 999,
                }}
                showOutlines={true}
            >
                <FlexBox
                    showOutlines={true}

                >
                    <PadBox
                        showOutlines={true}
                        padding={2}
                    >
                        <NetflixLogo src={NetflixLogoSrc} />
                    </PadBox>
                    <FlexBox
                        showOutlines={true}
                    >
                        <NavigationMenu isDesktop={isDesktopView} items={NavbarList} />
                    </FlexBox>
                </FlexBox>
                <NavigationSideMenu items={NavbarSideDropDownMenu} />
            </FlexBox >
        </FlexBox>
    )
}

export default Navbar;