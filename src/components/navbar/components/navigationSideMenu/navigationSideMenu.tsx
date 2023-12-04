import React, { useRef, useState } from 'react';
import { FlexBox, NavigationText, PadBox } from '../../../mui/MuiStyledComponents';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import { useMediaQuery } from 'usehooks-ts';

interface INavigationSideMenuProps {
    isDesktop: boolean,
    items: { name: string }[],
}

const NavigationSideMenu: React.FC<INavigationSideMenuProps> = ({ isDesktop, items }) => {
    const searchIconMaxView = useMediaQuery('(max-width: 1000px)')
    const kidsIconMaxView = useMediaQuery('(max-width: 900px)')
    const NotificationIconMaxView = useMediaQuery('(max-width: 800px)')

    const [isHoverOnMenuIcon, setIsHoverOnMenuIcon] = useState(false);
    const [isHoverOnMenu, setIsHoverOnMenu] = useState(false);


    const handleIsHoverOnMenuIcon = (mouse: 'enter' | 'leave') => {
        if (mouse === 'enter') {
            setIsHoverOnMenuIcon(true)
        }

        if (mouse === 'leave') {

            const timeoutID = setTimeout(() => {
                setIsHoverOnMenuIcon(() => false);
                clearTimeout(timeoutID)
            }, 200);
        }

    }

    const handleIsHoverOnMenu = (mouse: 'enter' | 'leave') => {
        if (mouse === 'enter') {
            setIsHoverOnMenu(true)
        }

        if (mouse === 'leave') {
            const timeoutID = setTimeout(() => {
                setIsHoverOnMenu(() => false);
                clearTimeout(timeoutID)
            }, 200);
        }

    }

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
                        padding={3}
                    >
                        <NavigationText data-text={'Kids'}
                            style={{
                                fontSize: '16px'
                            }}
                        >
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
                <FlexBox
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{
                        position: 'relative',
                    }}
                >
                    <PadBox
                        showOutlines={true}
                        padding={2}
                        sx={{
                            backgroundColor: 'white',
                            height: '3rem',
                            width: '3rem',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '5px',
                        }}
                        onMouseEnter={() => handleIsHoverOnMenuIcon('enter')}
                        onMouseLeave={() => handleIsHoverOnMenuIcon('leave')}

                    />

                    <ArrowDropDown sx={{
                        color: 'white',
                        transition: '0.2s linear',
                        width: '1.5rem',
                        height: '1.5rem',
                        transform: `rotate(${isHoverOnMenuIcon || isHoverOnMenu ? '180deg' : '0deg'})`,
                    }} fontSize={'large'} />
                    <FlexBox
                        position={'absolute'}
                        right={0}
                        top={60}
                        width={'15rem'}
                        height={'auto'}
                        showOutlines={true}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignContent={'baseline'}
                        onMouseEnter={() => handleIsHoverOnMenu('enter')}
                        onMouseLeave={() => handleIsHoverOnMenu('leave')}
                    >
                        {(isHoverOnMenuIcon || isHoverOnMenu) && items.map((item, index) => {
                            return (
                                <PadBox
                                    // showOutlines={true}
                                    key={item.name}
                                    padding={1.5}
                                    width={'100%'}
                                    sx={{
                                        backgroundColor: 'black',
                                        transition: '0.2s',
                                        '&:hover': {
                                            backgroundColor: 'lightgray'
                                        }
                                    }}
                                >
                                    <NavigationText data-text={item.name}>
                                        {item.name}
                                    </NavigationText>
                                </PadBox>
                            )
                        })}
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </FlexBox >
    )

}

export default NavigationSideMenu;