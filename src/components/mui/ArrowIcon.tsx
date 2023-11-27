import { AbsoluteBox } from "./MuiStyledComponents"
import { SxProps } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { IArrowIcon } from "./types"

export const ArrowIcon = ({ direction, ...sxProps }: IArrowIcon & SxProps) => (

    <AbsoluteBox>
        {direction === 'left' ? <KeyboardArrowLeft sx={sxProps} /> : <KeyboardArrowRight sx={sxProps} />}
    </AbsoluteBox>
)