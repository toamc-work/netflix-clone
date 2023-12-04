import React from 'react';
import { NavigationText } from '../../../mui/MuiStyledComponents';
import { Notifications, Search } from '@mui/icons-material';
import { useMediaQuery } from 'usehooks-ts';
import DropDownMenu from './dropDownMenu/dropDownMenu';
import { StyledSideMenuItemContainer } from './styledComponents/SideMenuItemContainer';
import './style.css';

interface MenuItem {
    key: string;
    toDisplay: boolean;
    children: React.ReactNode;
}

interface INavigationSideMenuProps {
    items: { name: string }[],
}

const NavigationSideMenu: React.FC<INavigationSideMenuProps> = ({ items = [] }) => {
    const searchIconMinView = useMediaQuery('(min-width: 1000px)')
    const kidsIconMinView = useMediaQuery('(min-width: 900px)')
    const NotificationIconMinView = useMediaQuery('(min-width: 800px)')

    const menuItems: MenuItem[] = [
        {
            key: 'navigation-side-menu-search-item',
            toDisplay: searchIconMinView,
            children: (
                <Search
                    sx={{ color: 'white' }}
                    fontSize={'large'}
                />
            )
        },
        {
            key: 'navigation-side-menu-kids-item',
            toDisplay: kidsIconMinView,
            children: (
                <NavigationText
                    data-text={'Kids'}
                    style={{ fontSize: '16px' }}
                >
                    {'Kids'}
                </NavigationText>
            )
        },
        {
            key: 'navigation-side-menu-notification-item',
            toDisplay: NotificationIconMinView,
            children: (
                <Notifications
                    sx={{ color: 'white' }}
                    fontSize={'large'}
                />
            )
        },
    ]

    return (
        <div id='navigation-side-menu-wrapper'>
            <div id='navigation-side-menu-items-wrapper'>
                <>
                    {
                        menuItems.map(({ children, toDisplay, key }, index) => (
                            <StyledSideMenuItemContainer
                                key={`${key}-${index}`}
                                toDisplay={toDisplay}
                            >
                                {children}
                            </StyledSideMenuItemContainer>

                        ))
                    }
                </>
                <DropDownMenu
                    render={() => (
                        <>
                            {items.map((item, index) => (
                                <div key={`navigation-side-menu-${index}-${item.name}`}>
                                    {item.name}
                                </div>
                            )
                            )}
                        </>
                    )}
                />
            </div>
        </div >
    )

}

export default NavigationSideMenu;