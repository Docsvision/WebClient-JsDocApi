import { EmployeeVisualizer } from "@docsvision/webclient/BackOffice/EmployeeVisualizer";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface HistoryRecordViewProps {
    record: GenModels.HistoryRecord;
    employeeVisualiser: EmployeeVisualizer;
    eventSearch?: string;
    columnsWidth?: string[];
    mobile: boolean;
}
/** @internal */
export declare const HistoryRecordView: (props: HistoryRecordViewProps) => JSX.Element;
