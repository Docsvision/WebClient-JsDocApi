import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import React from "react";
/** @internal */
export interface IDepartmentFilterProps {
    predefinedFilter?: GenModels.DepartmentModel;
    selectedFilterPath: GenModels.DepartmentModel[];
    readonly?: boolean;
    rootLabel: string;
    rootTip?: string;
    onSelectedFilterPathChange: (newPath: GenModels.DepartmentModel[]) => void;
}
export interface IDepartmentFilterState {
}
/** @internal */
export declare class DepartmentFilter extends React.Component<IDepartmentFilterProps, IDepartmentFilterState> {
    protected onFilterItemClick: (item: GenModels.DepartmentModel) => void;
    render(): JSX.Element;
}
export declare function getFilterPath(predefinedFilter: GenModels.DepartmentModel, selectedFilterPath: GenModels.DepartmentModel[]): GenModels.DepartmentModel[];
export declare function getFilterId(predefinedFilter: GenModels.DepartmentModel, selectedFilterPath: GenModels.DepartmentModel[]): string | undefined;
export declare function getFilter(predefinedFilter: GenModels.DepartmentModel, selectedFilterPath: GenModels.DepartmentModel[]): GenModels.DepartmentModel | undefined;
