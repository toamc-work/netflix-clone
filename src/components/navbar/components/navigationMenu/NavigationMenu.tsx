import React from 'react';
import { FlexBox, NavigationText, PadBox } from '../../../mui/MuiStyledComponents'
import { INavbarListItem } from '../../../../pages/home/constants/types';
import { ArrowDropDown } from '@mui/icons-material';

interface INavigationMenuProps {
    isDesktop: boolean,
    items: INavbarListItem[],
}


const NavigationMenu: React.FC<INavigationMenuProps> = ({ isDesktop, items }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = (): void => setOpen(true);

    const handleClose = (): void => setOpen(false);

    return (
        <>
            {isDesktop ? (
                items.map(item => {
                    return (
                        <PadBox
                            showOutlines={true}
                            key={item.name}
                            padding={2}
                        >
                            <NavigationText data-text={item.name}>
                                {item.name}
                            </NavigationText>
                        </PadBox>
                    )
                })
            ) : (
                <FlexBox
                    position={'relative'}
                    justifyContent={'flex-start'}
                    width={'fit-content'}
                    showOutlines={true}
                    onMouseEnter={handleOpen}
                    onMouseLeave={handleClose}
                >
                    <PadBox
                        padding={2}
                    >
                        <NavigationText data-text={'Browse'}>
                            {'Browse'}
                        </NavigationText>
                    </PadBox>
                    <ArrowDropDown sx={{
                        color: 'white',
                        transition: '0.2s linear',
                        transform: open ? `rotate(180deg)` : `0deg`,
                    }} fontSize={'large'} />

                    <FlexBox
                        position={'absolute'}
                        left={-114}
                        top={65}
                        width={'20rem'}
                        height={'auto'}
                        showOutlines={true}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignContent={'baseline'}
                    >
                        {open && items.map((item, index) => {
                            return (
                                <PadBox
                                    showOutlines={true}
                                    key={item.name}
                                    padding={2.5}
                                    width={'100%'}
                                    sx={{
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
                </FlexBox >
            )}
        </>
    )

}

export default NavigationMenu