import { LayoutControl } from "@docsvision/webclient/System/BaseControl";
import { ControlWrapperMap } from "@docsvision/webclient/System/ControlWrapperMap";
/** Хранилище контролов разметки, обеспечивающее доступ по имени. */
export declare class ControlStore {
    protected controlCollection: ControlWrapperMap;
    protected controlsList: LayoutControl[];
    /** Возвращает словарь контролов, где ключами выступают имена контролов, а значениями их экземпляры. */
    readonly controls: ControlWrapperMap;
    /** Добавляет контрол в словарь. */
    add(nameSrc: string, control: LayoutControl): LayoutControl;
    /** Удаляет контрол из словаря по имени. */
    remove(name: string): void;
    /** Удаляет контрол из словаря. */
    removeControl(control: LayoutControl): void;
    /** Вызывает методы onSaving в контролах. */
    onSaving(): JQueryDeferred<any>;
    /** Вызывает методы onSaved в контролах. */
    onSaved(): JQueryDeferred<any>;
    /** @internal */
    protected collectControlData(func: (control: LayoutControl) => void): void;
    /** @internal */
    protected callSaveCallbacks(beforeSave: boolean): JQueryDeferred<any>;
}
