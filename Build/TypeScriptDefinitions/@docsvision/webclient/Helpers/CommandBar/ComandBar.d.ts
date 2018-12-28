import { ICommandBarProps } from "@docsvision/webclient/Helpers/CommandBar/IComandBarProps";
import { ICommandBarState } from "@docsvision/webclient/Helpers/CommandBar/IComandBarState";
import React from "react";
/**
 * @internal Представляет собой список элементов, которые могут схлопываться/раскрываться с использованием анимации.
 * Внутренние элементы должны использовать компонент CommandBarItem.
 *
 * Пример использования:
 *
 *     <CommandBar expanded={this.state.commandBarExpanded} >
 *         <CommandBarItem onClick={() => console.info("Command 1 clicked") } >
 *             Комманда 1
 *         </CommandBarItem>
 *         <CommandBarItem onClick={() => console.info("Command 2 clicked")} >
 *             Комманда 2
 *         </CommandBarItem>
 *     </CommandBar>
 *
 * См. также: {@link CommandBarButton}
 */
export declare class CommandBar extends React.Component<ICommandBarProps, ICommandBarState> {
    protected prevWidth: number;
    constructor(props: ICommandBarProps);
    /** @internal */
    componentDidMount(): void;
    /** @internal */
    componentDidUpdate(): void;
    /** @internal */
    componentWillReceiveProps(nextProps: ICommandBarProps, nextContext: any): void;
    protected initializeExpanded: () => void;
    protected getStyle(props?: ICommandBarProps): any;
    /** @internal */
    render(): JSX.Element;
}
