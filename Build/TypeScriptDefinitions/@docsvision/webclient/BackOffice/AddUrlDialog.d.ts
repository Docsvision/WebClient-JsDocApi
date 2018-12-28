import { $LayoutLinksController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IComboBoxVariant } from "@docsvision/webclient/Platform/IComboBoxVariant";
import { IDataChangedEventArgs } from "@docsvision/webclient/System/IDataChangedEventArgs";
import { $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import React from "react";
/** @internal  */
export interface IAddUrlDialogProps {
    onClose: () => void;
    onAdd: (url: string, linkType: string) => void;
    isOpened: boolean;
    linkTypes?: GenModels.LinkTypeModel[];
}
/** @internal */
export interface IAddUrlDialogState {
    isValid: boolean;
    url: string;
    comboBoxVariants: IComboBoxVariant[];
    selectedLinkType: IComboBoxVariant;
    expanded: boolean;
    services: $LayoutLinksController & $EditOperationStore;
}
/**
 * @internal
 * Модальное окно добавления Url
 */
export declare class AddUrlDialog extends React.Component<IAddUrlDialogProps, IAddUrlDialogState> {
    constructor(props: IAddUrlDialogProps);
    /** @internal */
    componentDidMount(): void;
    /** Закрытие модального окна. */
    protected closeModal: () => void;
    protected onLinkAdd: () => void;
    protected onLinkTypeSelect: (variant: IComboBoxVariant) => void;
    protected loadLinkTypes: () => void;
    protected onUrlChanged: (sender: any, e: IDataChangedEventArgs) => void;
    /** @internal */
    render(): JSX.Element;
}
