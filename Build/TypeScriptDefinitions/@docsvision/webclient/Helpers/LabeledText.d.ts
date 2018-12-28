import React from "react";
/** @internal */
export interface ILabeledText {
    /** Label to text value */
    label: string;
    /** Text value to show */
    text: React.ReactNode;
    /**
     * If this parameter true and labelText specified, text stub (dashed line) will replace empty text.
     * Default value: false
     */
    showEmpty?: boolean;
    visible?: boolean;
    className?: string;
    /** Click on text element handler */
    onTextClick?: (ev: React.MouseEvent<any> | React.KeyboardEvent<any>) => void;
    /** Ref to text element handler */
    attachText?: (elem: HTMLElement) => void;
    /**
     * Show colon after label or not. If value is AutoDots, then requirement for the colons will be detected automaticly.
     * Default value: AutoDots
     */
    labelDots?: LabelDotsMode;
    /**
     * This param describes how value will be placed if control too narrow for it
     * If param is true, value will go to new line uner a label first
     * Otherwise it will occupy rest of space to the right of a label
     * Default value: true.
     */
    wrapLongTextUnderLabel?: boolean;
    /**
     * If this parameter true, text will be rendered as clickable (blue and with dashed underline)
     * Default value: false
     */
    clickableText?: boolean;
    /** Tooltip */
    title?: string;
    /** Tooltip for value. If not specified, used title value */
    valueTitle?: string;
    /** Tab index for case, when onTextClick specified */
    tabIndex?: number;
    /** Text content aligning. */
    align?: LabeledTextAlign;
    onFocus?: (event: React.FocusEvent<any>) => void;
    onBlur?: (event: React.FocusEvent<any>) => void;
}
/** @internal */
export declare enum LabelDotsMode {
    Dots = 0,
    NoDots = 1,
    AutoDots = 2
}
/** @internal */
export declare enum LabeledTextAlign {
    Top = 0,
    Middle = 1,
    Bottom = 2
}
/** @internal */
export declare const LabeledText: (props: ILabeledText) => JSX.Element;
