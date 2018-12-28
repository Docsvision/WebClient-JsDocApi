import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface IDepartmentFilterViewProps {
    predefinedFilter?: GenModels.DepartmentModel;
    selectedFilterPath: GenModels.DepartmentModel[];
    readonly?: boolean;
    rootLabel: string;
    rootTip?: string;
    /** При выборе элемента */
    onFilterItemClick?: (item: GenModels.DepartmentModel | null) => void;
}
/** @internal */
export declare const DepartmentFilterView: (props: IDepartmentFilterViewProps) => JSX.Element;
