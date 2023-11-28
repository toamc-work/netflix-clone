import { AbsoluteBox } from "./MuiStyledComponents"
import { SxProps } from "@mui/material"
import { KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp } from "@mui/icons-material"
import { IArrowIcon } from "./types"
import { CSSProp } from "styled-components"

export const ArrowIcon = ({ direction, ...sxProps }: IArrowIcon & SxProps) => {
    const defaultStyles: CSSProp = {
        color: 'white',
        transition: '0.1s ease',
        width: '100%',
        height: '100%',
        position: 'relative',
        '&:active, &:hover': {
            transform: `scale(1.3)`,

        },
    }

    switch (direction) {
        case 'left':
            return <KeyboardArrowLeft sx={{ ...defaultStyles, ...sxProps }} />
        case 'right':
            return <KeyboardArrowRight sx={{ ...defaultStyles, ...sxProps }} />
        case 'up':
            return <KeyboardArrowUp sx={{ ...defaultStyles, ...sxProps }} />
        case 'down':
            return <KeyboardArrowDown sx={{ ...defaultStyles, ...sxProps }} />
    }

    return direction === 'left' ? <KeyboardArrowLeft sx={sxProps} /> : <KeyboardArrowRight />
}
