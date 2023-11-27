export interface IGridBox {
    columns?: number;
    rows?: number;
    gap?: number;
    showOutlines?: boolean;
}

export interface IFlexBox {
    showOutlines?: boolean;
    gap?: number;
}

export interface IPadBox {
    padding: number,
    showOutlines?: boolean;
}

export interface ILink {
    active: boolean
}

export interface IFlexContainer {
    showOutlines?: boolean;
}

export interface IAbsolute {
    showOutlines?: boolean;
}

export interface IArrowIcon {
    direction: 'left' | 'right'
}