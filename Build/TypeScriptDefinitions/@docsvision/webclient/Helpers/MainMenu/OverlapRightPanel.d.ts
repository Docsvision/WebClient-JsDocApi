/** @internal */
export declare enum OverlapPanelLocation {
    Above = 1,
    Below = 2
}
/** @internal */
export declare enum OverlapPanelSize {
    Small = 1,
    Big = 2
}
/** @internal */
export declare enum OverlapPanelSide {
    Left = 1,
    Right = 2
}
/** @internal */
export interface IOverlapPanelProps {
    children?: any;
    location?: OverlapPanelLocation;
    size?: OverlapPanelSize;
    side?: OverlapPanelSide;
}
/** @internal */
export declare const OverlapPanel: (props: IOverlapPanelProps) => JSX.Element;
