import { EmployeeVisualizer } from "@docsvision/webclient/BackOffice/EmployeeVisualizer";
import { IPartnerFilterChangeEventArgs } from "@docsvision/webclient/BackOffice/IPartnerFilterChangeEventArgs";
import { Partner, PartnerParams } from "@docsvision/webclient/BackOffice/Partner";
import { PartnerDirectoryItemVisualiser } from "@docsvision/webclient/BackOffice/PartnerDirectoryItemVisualiser";
import { PartnerSelectDialog } from "@docsvision/webclient/BackOffice/PartnerSelectDialog";
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
export interface PartnerState extends PartnerParams, InputBasedControlState<GenModels.EmployeeDataModel> {
    binding: IBindingResult<GenModels.EmployeeDataModel>;
    requestHelper: RequestHelper;
    directoryDialogOpen: boolean;
    directoryDialogSelectedValue: GenModels.EmployeeDataModel;
    inputKeyDown: SimpleEvent<React.KeyboardEvent<any>>;
    employeeVisualiser: EmployeeVisualizer;
    itemVisualiser: PartnerDirectoryItemVisualiser;
    typeahead: Typeahead;
    beforeModalSelectedFilterPath: GenModels.DepartmentModel[];
    /** Путь для элемента из поиска, отличается от selectedFilterPath тем, что применяется только при закрытии PartnerSelectDialog */
    searchFilterPath: GenModels.DepartmentModel[];
}
/** @internal */
export declare type PartnerImplProps = PartnerParams;
/** @internal */
export declare type PartnerImplState = PartnerState;
/** @internal */
export declare class PartnerImpl extends InputBasedControlImpl<GenModels.EmployeeDataModel, PartnerImplProps, PartnerState> {
    static FirstPageSize: number;
    static NextPageSize: number;
    static SearchTimeout: number;
    private readonly EmptySelectedPath;
    constructor(props: PartnerImplProps, state: PartnerState);
    protected getTextValue(): string;
    protected getValueTitle(): string;
    protected getInputTitle(): string;
    protected renderInto(props: PartnerParams, container: HTMLElement): void;
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<Partner>;
    readonly currentFilterPath: GenModels.DepartmentModel[];
    readonly currentFilter: string | undefined;
    readonly currentFilterName: string | undefined;
    protected attachTypeahead(typeahead: Typeahead): void;
    protected findItems(typeaheadQuery: ITypeaheadSearchQuery): JQueryDeferred<ITypeaheadSearchResult>;
    protected onTypeaheadSelected(variant: ITypeaheadVariant): void;
    protected onDropdownStateChanged(): void;
    attachDialogComponent: (dialog: PartnerSelectDialog) => void;
    showDictionary(): void;
    hideDictionary(): void;
    protected cancelModal: () => void;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected onDirectoryDialogNodeSelected(node: GenModels.EmployeeDataModel): void;
    protected onDirectoryDialogSelectButtonClick(): Promise<void>;
    protected onFilterSelected: (items: GenModels.DepartmentModel[]) => void;
    protected onSelectedFilterPathChange: (newSelected: GenModels.DepartmentModel[]) => void;
    protected onDialogSelectedFilterPathChange: (newSelected: GenModels.DepartmentModel[]) => void;
    setSelectedFilterPath(newValue: GenModels.DepartmentModel[]): JQueryDeferred<IPartnerFilterChangeEventArgs>;
    setSearchFilterPath: (newValue: GenModels.DepartmentModel[]) => void;
    setPredefinedFilter(newValue: GenModels.DepartmentModel): JQueryDeferred<IPartnerFilterChangeEventArgs>;
    protected onInputChange(event: any): void;
    readonly isDictionaryShown: boolean;
    partnerTipMode: GenModels.PartnerTipModeItems;
    partnerViewMode: GenModels.EmployeeViewMode;
    protected renderFilter(): React.ReactNode;
    protected renderPlaceholder(): JSX.Element;
    protected renderInputWithPlaceholder(): React.ReactNode;
}
