import { IEditOperation } from "@docsvision/webclient/System/IEditOperation";
import { IEditOperationMap } from "@docsvision/webclient/System/IEditOperationMap";
import { IEditOperationStore } from "@docsvision/webclient/System/IEditOperationStore";
/** @internal */
export declare class EditOperationStore implements IEditOperationStore {
    protected editOperations: IEditOperationMap;
    protected builtInEditOperations: IEditOperationMap;
    protected emptyGuidValue: string;
    add(editOpeation: IEditOperation): void;
    addRange(editOpeations: IEditOperation[]): void;
    remove(id: string): void;
    available(operation: string): boolean;
    availableBuiltIn(builtInOperationId: string): boolean;
    get(id: string): IEditOperation;
    getAll(): IEditOperation[];
    resolve(editOperation: string): IEditOperation;
    protected prepareId(id: string): string;
}
