import { IComboBoxElement } from "@docsvision/webclient/Helpers/ComboBox/Data/ClientModels/IComboBoxElement";
/** @internal Информация о сброшенном элементе. См. {@link ComboBoxHelper} */
export interface IResetedElement {
    wasReset: boolean;
    element: IComboBoxElement;
}
/**
 * @internal Хелпер со вспомогательными функциями для пользователских реализаций комбобокса
 */
export declare class ComboBoxHelper {
    /**
     * Сбрасывает элемент, если он не существует в списке элементов
     * @param element Текущий элемент
     * @param elements Список элементов
     * @param allowEmpty Разрешить ли выбирать пустой элемент
     * @param emptyElement Пустой элемент для значения null
     */
    static resetElementIfNotExists(element: IComboBoxElement, elements: IComboBoxElement[], allowEmpty?: boolean, emptyElement?: IComboBoxElement): IResetedElement;
    /**
     * Возвращает элемент по умолчанию для сброса значения
     * @param elements Список элементов
     * @param allowEmpty Разрешить ли выбирать пустой элемент
     * @param emptyElement Пустой элемент для значения null
     */
    static resetElement(elements: IComboBoxElement[], allowEmpty?: boolean, emptyElement?: IComboBoxElement): IComboBoxElement;
    /**
     * Создаёт пустой элемент для значения null
     * @param defaultTitle Заголовок по умолчанию
     */
    static createEmptyElement: (defaultTitle?: string) => IComboBoxElement;
}
