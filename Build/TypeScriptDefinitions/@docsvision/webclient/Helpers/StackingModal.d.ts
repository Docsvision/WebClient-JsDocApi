import { IModalBackdropProps } from "@docsvision/webclient/Helpers/ModalBackdrop";
import React from "react";
/** Свойства для {@link StackingModal} */
export interface IStackingModalProps {
    /** Видимость. */
    visible: boolean;
    focusTrap?: boolean;
}
/** Состояние для {@link StackingModal} */
export interface IStackingModalState {
    /** zIndex модального окна */
    zIndex: number;
}
/**
 * @internal
 * Создаёт обёртку над модальным окном для показывания последнего созданного модального окна поверх других.
 */
export declare class StackingModal extends React.Component<IStackingModalProps, IStackingModalState> {
    constructor(props: IStackingModalProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IModalBackdropProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
