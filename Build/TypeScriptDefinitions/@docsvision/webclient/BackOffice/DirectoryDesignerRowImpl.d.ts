import { DirectoryDesignerRow, DirectoryDesignerRowParams } from "@docsvision/webclient/BackOffice/DirectoryDesignerRow";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { ITypeaheadSearchQuery } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchQuery";
import { ITypeaheadSearchResult } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchResult";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
import { Typeahead } from "@docsvision/webclient/Helpers/Typeahead/Typeahead";
import { ModalWindow } from "@docsvision/webclient/Legacy/ModalWindow";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
import React from "react";
/** @internal */
export interface DirectoryDesignerRowState extends DirectoryDesignerRowParams, InputBasedControlState<GenModels.DirectoryDesignerRowModel> {
    binding: IBindingResult<GenModels.DirectoryDesignerRowModel>;
    dialog: ModalWindow;
    requestHelper: RequestHelper;
    inputKeyDown: SimpleEvent<React.KeyboardEvent<any>>;
}
/** @internal */
export declare type DirectoryDesignerRowImplState = DirectoryDesignerRowState;
/** @internal */
export declare class DirectoryDesignerRowImpl extends InputBasedControlImpl<GenModels.DirectoryDesignerRowModel, DirectoryDesignerRowParams, DirectoryDesignerRowState> {
    static FirstPageSize: number;
    static NextPageSize: number;
    private typeahead;
    constructor(props: DirectoryDesignerRowParams, state: DirectoryDesignerRowState);
    protected getTextValue(): string;
    protected renderInto(props: DirectoryDesignerRowParams, container: HTMLElement): void;
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<DirectoryDesignerRow>;
    protected findItems(typeaheadQuery: ITypeaheadSearchQuery): JQueryDeferred<ITypeaheadSearchResult>;
    protected onSelected(variant: ITypeaheadVariant): void;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    readonly isDictionaryShown: boolean;
    protected attachTypeahead(t: Typeahead): void;
    showDictionary(): void;
    protected renderInputWithPlaceholder(): React.ReactNode;
    canShowDictionary(): boolean;
    hideDictionary(): void;
    protected onInputChange(event: any): void;
}
