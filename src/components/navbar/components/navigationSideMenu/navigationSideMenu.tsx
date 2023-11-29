import React from 'react';
import { FlexBox, NavigationText, PadBox } from '../../../mui/MuiStyledComponents';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import { useMediaQuery } from 'usehooks-ts';

interface INavigationSideMenuProps {
    isDesktop: boolean
}

const NavigationSideMenu: React.FC<INavigationSideMenuProps> = ({ isDesktop }) => {
    const searchIconMaxView = useMediaQuery('(max-width: 1000px)')
    const kidsIconMaxView = useMediaQuery('(max-width: 900px)')
    const NotificationIconMaxView = useMediaQuery('(max-width: 800px)')

    return (
        <FlexBox
            showOutlines={true}
            justifyContent={'flex-end'}
            padding={isDesktop ? 1 : 0}

        >
            <FlexBox
                showOutlines={true}
                gap={2}
                justifyContent={'center'}
                paddingRight={isDesktop ? 10 : 0}
                width={'fit-content'}
            >
                {!searchIconMaxView && (
                    <PadBox
                        height={'100%'}
                        showOutlines={true}
                        padding={2}
                    >
                        <Search sx={{ color: 'white' }} fontSize={'large'} />
                    </PadBox>
                )}
                {!kidsIconMaxView && (
                    <PadBox
                        height={'100%'}
                        showOutlines={true}
                        padding={2}
                    >
                        <NavigationText data-text={'Kids'}>
                            {'Kids'}
                        </NavigationText>
                    </PadBox>
                )}
                {!NotificationIconMaxView && (
                    <PadBox
                        height={'100%'}
                        showOutlines={true}
                        padding={2}
                    >
                        <Notifications sx={{ color: 'white' }} fontSize={'large'} />
                    </PadBox>
                )}
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
    )

}

export default NavigationSideMenu;