import { IDisclosureBodyProps } from "@docsvision/webclient/Helpers/Disclosure/DisclosureBody/IDisclosureBodyProps";
import { IDisclosureBodyState } from "@docsvision/webclient/Helpers/Disclosure/DisclosureBody/IDisclosureBodyState";
import React from "react";
/** @review Содержимое сворачиваемой области. См. также {@link DisclosureHead}. */
export declare class DisclosureBody extends React.Component<IDisclosureBodyProps, IDisclosureBodyState> {
    protected refItems: HTMLElement;
    constructor(props: IDisclosureBodyProps);
    componentWillReceiveProps(nextProps: IDisclosureBodyProps, nextContext: any): void;
    toggleCollapsed(duration?: number, easing?: string, animate?: boolean): void;
    render(): JSX.Element;
}
