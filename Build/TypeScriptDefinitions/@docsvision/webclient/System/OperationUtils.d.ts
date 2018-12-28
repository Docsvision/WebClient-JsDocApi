import { $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/** Проверяет, что операция редактирования доступна. */
export declare function editOperationAvailable(store: $EditOperationStore, binding: IBindingResult<any>): boolean;
/** Проверяет, что встроенная операция редактирования доступна. */
export declare function builtinEditOperationAvailable(store: $EditOperationStore, builtinOperationId: string): boolean;
