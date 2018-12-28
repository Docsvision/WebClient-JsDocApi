import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface IGroupEmployeeInfoProps {
    className?: string;
    responsibleEmployees?: GenModels.TaskGroupSelectedPerformer[];
    otherEmployees?: GenModels.TaskGroupSelectedPerformer[];
    executionType: GenModels.ExecutionType;
}
/** @internal */
export declare const GroupEmployeeInfo: (props: IGroupEmployeeInfoProps) => JSX.Element;
