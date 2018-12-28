import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface ICommandMenuProps {
    createKinds: GenModels.CreateKindDataModel[];
    isVisible: boolean;
    createTask: (item: GenModels.CreateKindDataModel) => void;
}
