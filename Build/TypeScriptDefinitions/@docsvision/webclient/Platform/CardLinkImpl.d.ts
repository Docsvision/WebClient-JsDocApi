import { ExistingCardLinkDialog } from "@docsvision/webclient/BackOffice/ExistingCardLinkDialog";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { CardLinkParams } from "@docsvision/webclient/Platform/CardLink";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
import React from "react";
/** @internal */
export interface CardLinkState extends BaseControlState, CardLinkParams {
    addExistingCardLinkDialog: ExistingCardLinkDialog;
    saveHelper: RequestHelper;
    validationMessage: string;
    bindingInfo: IBindingResult<GenModels.CardLinkDataModel>;
}
/** @deprecated */
export declare type CardLinkImplState = CardLinkState;
/** @deprecated */
export declare type ControlImplProps = CardLinkState;
/** @internal */
export declare class CardLinkImpl extends BaseControlImpl<CardLinkParams, CardLinkState> {
    constructor(props: CardLinkParams, state: CardLinkState);
    setValue(value: GenModels.CardLinkDataModel, forceUpdate?: boolean): JQueryDeferred<any>;
    value: GenModels.CardLinkDataModel;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected onDocumentClick: (e: MouseEvent) => void;
    getLinkUrl(cardId: string): string;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
    openLinkedCard: () => void;
    openFilePreview: () => void;
    openSelectCardDialog: () => void;
    deleteLinkedCard: () => void;
    onOpenLinkedCardMenuClick: () => void;
    onViewFileMenuClick: () => void;
    onOpenSelectCardDialogMenuClick: () => void;
    onDeleteLinkedCardMenuClick: () => void;
    onTextClick: () => void;
    onMenuClick: () => void;
    readonly hasValue: boolean;
    readonly isLoading: boolean;
    readonly isMenuAvailable: boolean;
    readonly cardViewAllowed: boolean;
    readonly mainFileReadAllowed: boolean;
    readonly isTextClickable: boolean;
    validate(params: any): IValidationResult;
    protected renderValidationMessage(): JSX.Element;
    protected getCssClass(): string;
    protected getTextTabIndex(): 0 | -1;
    protected onTextKeyDown: (event: React.KeyboardEvent<any>) => void;
    protected onMenuKeyDown: (event: React.KeyboardEvent<any>) => void;
    protected renderLabel(): JSX.Element;
    /**
     * Renders settings menu and its icon to open menu
     */
    protected renderSettingsMenu(): JSX.Element;
    /**
     * Renders label value
     */
    protected renderValue(): JSX.Element;
    renderControl(): JSX.Element;
}
