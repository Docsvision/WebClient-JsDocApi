import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
/** @internal */
export declare class FileListAttachedElements {
    form: HTMLElement;
    filesContainer: HTMLElement;
    filesInput: HTMLElement;
    filesInputLabel: HTMLElement;
    dropZone: HTMLElement;
    timestampInput: HTMLInputElement;
    allElementsHasAttached: SimpleEvent<any>;
    constructor();
    attachForm(elem: HTMLElement): void;
    attachFilesContainer(elem: HTMLElement): void;
    attachFilesInput(elem: HTMLElement): void;
    attachFilesInputLabel(elem: HTMLElement): void;
    attachDropZone(elem: HTMLElement): void;
    attachTimestampInput(elem: HTMLInputElement): void;
    protected onElemAttached(): void;
    readonly allElementsAttached: boolean;
}
