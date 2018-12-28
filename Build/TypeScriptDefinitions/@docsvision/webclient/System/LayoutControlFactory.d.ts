import { ILayoutControlFactory } from "@docsvision/webclient/System/$LayoutControlFactory";
import { IControlMap } from "@docsvision/webclient/System/IControlMap";
import { LayoutControlType } from "@docsvision/webclient/System/LayoutControlType";
/** Хранит ссылки на классы контролов с доступом по имени типа. */
export declare class LayoutControlFactory implements ILayoutControlFactory {
    private readonly matchPattern;
    /** Словарь контролов. */
    protected controlMap: IControlMap;
    /**
     * Регистрирует контрол в словаре.
     * @param name Имя типа контрола (controlTypeName).
     * @param createFunction Функция, возвращающая ссылку на конструктор класса контрола.
     * @param replaceExisting Следует ли разрешить перерегистрацию контролов (по умолчанию false).
     */
    register(name: string, createFunction: () => any, replaceExisting?: boolean): void;
    /** Возвращает зарегистрированный ранее контрол по имени типа. */
    get(name: string): LayoutControlType;
}
export declare var controlFactory: LayoutControlFactory;
