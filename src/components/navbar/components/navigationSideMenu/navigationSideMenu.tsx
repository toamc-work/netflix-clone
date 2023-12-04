import React from 'react';
import { FlexBox, NavigationText, PadBox } from '../../../mui/MuiStyledComponents';
import { Notifications, Search } from '@mui/icons-material';
import { useMediaQuery } from 'usehooks-ts';
import DropDownMenu from './dropDownMenu/dropDownMenu';


interface INavigationSideMenuProps {
    isDesktop: boolean,
    items: { name: string }[],
}

const NavigationSideMenu: React.FC<INavigationSideMenuProps> = ({ isDesktop, items }) => {
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
                <DropDownMenu
                    render={() => (
                        <>
                            {items.map((item) => {
                                return (
                                    <PadBox
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
                        </>
                    )}
                />
            </FlexBox>
        </FlexBox >
    )

}

export default NavigationSideMenu;