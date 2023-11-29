import React, { useEffect, useMemo, useRef, useState } from "react";
import { AbsoluteBox, FlexContainer } from '../../../mui/MuiStyledComponents';
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import _ from 'lodash'


interface IImageSliderSmoothList {
    items: any[]
    chunks: number
    render: (items: any[]) => JSX.Element
}

const ImageSliderSmoothList: React.FC<IImageSliderSmoothList> = ({ chunks, render, items }) => {
    const [products, setProducts] = useState<any[]>(items);
    const [carousel, setCarousel] = useState<{ currentStep: number; status: 'pending' | 'ready'; }>({ currentStep: 0, status: 'pending' })
    const carouselMemoState = useMemo(() => {
        const state = {
            steps: 0,
            maxItems: 0,
            minItems: 0,
        }

        const productsChunks = _.chunk(products, chunks)
        state.maxItems = productsChunks[0].length;
        state.minItems = productsChunks[productsChunks.length - 1].length;
        state.steps = productsChunks.length - parseFloat(`0.${100 / state.maxItems * state.minItems}`) - 1;

        return state;
    }, [products]);

    const handleCaruselSteps = (action: 'increase' | 'deacrese') => {
        if (action === 'increase') {
            if (carousel.currentStep === carouselMemoState.steps) {
                setCarousel({
                    status: 'ready',
                    currentStep: 0
                })
            } else if (carousel.currentStep === Math.round(carouselMemoState.steps - 0.5)) {
                setCarousel({
                    status: 'ready',
                    currentStep: carousel.currentStep += carouselMemoState.steps % 1
                })
            }
            else {
                setCarousel({
                    status: 'ready',
                    currentStep: carousel.currentStep += 1
                })
            }
        }

        if (action === 'deacrese') {
            if (carousel.currentStep === 0) {
                setCarousel({
                    status: 'ready',
                    currentStep: carouselMemoState.steps
                })
            }
            else if (Math.round(carousel.currentStep - 0.5) === 0) {
                setCarousel({
                    status: 'ready',
                    currentStep: carousel.currentStep -= carouselMemoState.steps % 1
                })
            }
            else {
                setCarousel({
                    status: 'ready',
                    currentStep: carousel.currentStep -= 1
                })
            }
        }
    }

    return (
        <FlexContainer width={'100%'} showOutlines={true} overflow={'hidden'} position={'relative'}>
            <FlexContainer width={'90%'} showOutlines={true} sx={{
                '> *': {
                    flex: `0 0 ${100 / chunks + '%'}`,
                    maxWidth: `${100 / chunks + '%'}`,
                    minWidth: `${100 / chunks + '%'}`,
                    padding: 1,
                },
                transform: `translateX(-${carousel.currentStep * 100}%)`,
                transition: '0.3s',
                justifyContent: 'space-between'
            }}>
                {render(products)}
            </FlexContainer>
            <AbsoluteBox
                onClick={() => handleCaruselSteps('deacrese')}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '5%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '24px',
                }}
            >
                <KeyboardArrowLeft sx={{
                    fontSize: '150px',
                    color: 'gray',
                    transition: '0.1s ease',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    '&:active, &:hover': {
                        transform: `scale(1.3)`,

                    },
                }} /></AbsoluteBox>
            <AbsoluteBox
                onClick={() => handleCaruselSteps('increase')}
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '5%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}

            ><KeyboardArrowRight sx={{
                fontSize: '150px',
                color: 'gray',
                transition: '0.1s ease',
                width: '100%',
                height: '100%',
                position: 'relative',
                '&:active, &:hover': {
                    transform: `scale(1.3)`,
                },

            }} /></AbsoluteBox>
        </FlexContainer>
    )
}

export default ImageSliderSmoothList;