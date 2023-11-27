import React, { } from "react";
import { useMediaQuery } from 'usehooks-ts'
import {
    FlexBox, PadBox, NetflixLogo, NavigationText,
} from '../mui/MuiStyledComponents';

import NetflixLogoSrc from '../../assets/NetflixLogo.svg'
import { NavbarList } from '../../pages/home/constants/navbarList'
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import NavigationMenu from './components/navigationMenu/NavigationMenu';


const Navbar: React.FC = () => {
    const isDesktopView = useMediaQuery('(min-width: 800px)')
    const isWideScreen = useMediaQuery('(min-width: 1000px)')
    return (

        <FlexBox
            justifyContent={'center'}
            alignItems={'center'}
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
                <FlexBox
                    showOutlines={true}
                    justifyContent={'flex-end'}
                    padding={isWideScreen ? 1 : 0}

                >
                    <FlexBox
                        showOutlines={true}
                        gap={2}
                        justifyContent={'center'}
                        paddingRight={isDesktopView ? 10 : 0}
                        width={'fit-content'}
                    >
                        <PadBox
                            height={'100%'}
                            showOutlines={true}
                            padding={2}
                        >
                            <Search sx={{ color: 'white' }} fontSize={'large'} />
                        </PadBox>
                        <PadBox
                            height={'100%'}
                            showOutlines={true}
                            padding={2}
                        >
                            <NavigationText data-text={'Kids'}>
                                {'Kids'}
                            </NavigationText>
                        </PadBox>
                        <PadBox
                            height={'100%'}
                            showOutlines={true}
                            padding={2}
                        >
                            <Notifications sx={{ color: 'white' }} fontSize={'large'} />
                        </PadBox>
                        <PadBox
                            height={'3rem'}
                            width={'3rem'}
                            showOutlines={true}
                            padding={2}
                            sx={{
                                backgroundColor: 'white'
                            }}
                        >
                        </PadBox>
                        <ArrowDropDown sx={{
                            color: 'white', transition: '0.2s linear',
                            '&:hover': {
                                transform: `rotate(180deg)`
                            }
                        }} fontSize={'large'} />
                    </FlexBox>
                </FlexBox>
            </FlexBox >
        </FlexBox>
    )

}

export default Navbar;