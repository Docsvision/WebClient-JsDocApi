import { IExtension } from "@docsvision/webclient/System/IExtension";
/** Класс для управления клиентскими расширениями Web-клиента. */
export declare class ExtensionManager {
    private extensions;
    /** Регистрирует расширение. */
    registerExtension(extension: IExtension): void;
    /** Возвращает список зарегистрированных расширений. */
    readonly Extensions: IExtension[];
}
export declare var extensionManager: ExtensionManager;
