import { Department, DepartmentParams } from "@docsvision/webclient/BackOffice/Department";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { ITypeaheadSearchQuery } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchQuery";
import { ITypeaheadSearchResult } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchResult";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
import { Typeahead } from "@docsvision/webclient/Helpers/Typeahead/Typeahead";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
import React from "react";
/** @internal */
export interface DepartmentState extends DepartmentParams, InputBasedControlState<GenModels.DepartmentModel> {
    binding: IBindingResult<GenModels.DepartmentModel>;
    requestHelper: RequestHelper;
    directoryDialogOpen: boolean;
    directoryDialogSelectedValue: GenModels.DepartmentModel;
    inputKeyDown: SimpleEvent<React.KeyboardEvent<any>>;
}
/** @internal */
export declare type DepartmentImplState = DepartmentState;
/** @internal */
export declare class DepartmentImpl extends InputBasedControlImpl<GenModels.DepartmentModel, DepartmentParams, DepartmentState> {
    static FirstPageSize: number;
    static NextPageSize: number;
    private typeahead;
    constructor(props: DepartmentParams, state: DepartmentState);
    protected readonly source: GenModels.DepartmentDataSource;
    protected getTextValue(): string;
    protected getValueTitle(): string;
    protected getInputTitle(): string;
    protected renderInto(props: DepartmentParams, container: HTMLElement): void;
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<Department>;
    protected readonly itemTypes: GenModels.SearchDepartmentType;
    protected findItems(typeaheadQuery: ITypeaheadSearchQuery): JQueryDeferred<ITypeaheadSearchResult>;
    protected onSelected(variant: ITypeaheadVariant): void;
    showDictionary(): void;
    hideDictionary(): void;
    protected attachTypeahed(t: Typeahead): void;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected onDirectoryDialogNodeSelected(node: GenModels.DepartmentModel): void;
    protected onDirectoryDialogNodeAccepted(node: GenModels.DepartmentModel): void;
    protected onDirectoryDialogSelectButtonClick(): void;
    protected onInputChange(event: any): void;
    readonly isDictionaryShown: boolean;
    protected renderInputWithPlaceholder(): React.ReactNode;
}
