import { IFileSignInfo } from "@docsvision/webclient/Legacy/IFileSingInfo";
/** @internal */
export interface IFileSignOldInteractionModel {
    documentId: string;
    getTimestamp: () => number;
    setTimestamp: (timestamp: number) => void;
    getFiles: () => IFileSignInfo[];
    signButton: HTMLElement;
    viewSignButton: HTMLElement;
    beforeSignCallback: () => JQueryDeferred<any>;
    beforeViewSignCallback: () => JQueryDeferred<any>;
    afterSignCallback: Function;
    afterViewSignCallback: Function;
}
