import { IControlSelectorProps } from "@docsvision/webclient/Helpers/ControlSelector/IControlSelectorProps";
import React from "react";
/**
 * @review Компонент для рендеринга контролов разметок. Например, при получении данных контрола с сервера при загрузке разметки.
 *
 * Пример использования:
 *
 *     render() {
 *         var componentInfo = getComponentInfo();
 *
 *         return <ControlSelector
 *             properties={componentInfo.properties}
 *             children={componentInfo.children}
 *             controlTypeName={componentInfo.controlTypeName}
 *             key={componentInfo.properties.name} />
 *     }
 *
 */
export declare class ControlSelector extends React.Component<IControlSelectorProps, any> {
    constructor(props: IControlSelectorProps);
    /** @internal */
    componentWillMount(): void;
    /** @internal */
    componentWillReceiveProps(nextProps: IControlSelectorProps, nextContext: any): void;
    loadControl(controlTypeName: string): Promise<void>;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentDidCatch(error: any, info: any): void;
    /** @internal */
    render(): JSX.Element;
}
