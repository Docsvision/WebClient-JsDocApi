import { IComboBoxElement } from "@docsvision/webclient/Helpers/ComboBox/Data/ClientModels/IComboBoxElement";
import React from "react";
/** @review Свойства для {@link CommonComboBox}  */
export interface ICommonComboBoxProps {
    /** Список элементов (вариантов выбора в выпадающем списке) */
    elements: IComboBoxElement[];
    /** ИД выбранного элемента */
    selectedID?: string;
    /** Заголовок по умолчанию */
    defaultTitle?: string;
    /** Разрешить ли выбирать пустой элемент */
    allowEmpty?: boolean;
    strictMode?: boolean;
    /** Выключен ли комбобокс */
    disabled?: boolean;
    /** Раскрыто ли выпадающее меню по умолчанию */
    expanded?: boolean;
    /** Включен ли TabIndex у комбобокса */
    tabIndex?: boolean;
    /** Дополнительный класс */
    className?: string;
    /** При выборе нового элемента */
    onChange?: (element: IComboBoxElement) => void;
    /** Пользователская функция, позволяющая отрендерить обёртку */
    renderWrapper?: (title: React.ReactNode, body: React.ReactNode) => React.ReactNode;
    /** Пользователская функция, позволяющая отрендерить заголовок */
    renderTitle?: (element: IComboBoxElement) => React.ReactNode;
    /** Пользователская функция, позволяющая отрендерить список элементов */
    renderElementList?: (elements: React.ReactNode[], isOpen: boolean) => React.ReactNode | React.ReactNode[];
    /** Пользователская функция, позволяющая отрендерить элемент списка */
    renderElement?: (element: IComboBoxElement, selected: boolean) => React.ReactNode;
}
/** @internal */
export interface ICommonComboBoxState {
    /** Раскрыт ли выпадающий список элементов или нет */
    expanded: boolean;
}
/**
 * @review Хелпер для создания комбобокса (позволяет выбирать значение из выпадающего списка)
 *
 * Пример использования:
 *
 *     constructor() {
 *         this.state.elements = [
 *             { id: '1', title: 'Первый элемент' },
 *             { id: '2', title: 'Второй элемент' },
 *             { id: '3', title: 'Третий элемент', disabled: true },
 *             { id: '4', title: 'Четвёртый элемент' }
 *         ];
 *         this.state.selectedID = '2';
 *     }
 *
 *     render() {
 *         return <CommonComboBox elements={this.state.elements}
 *             allowEmpty={true}
 *             tabIndex
 *             selectedID={this.state.selectedID}
 *             defaultTitle="Выберите элемент из списка"
 *             onChange={(selectedElement: IComboBoxElement) => {
 *                 this.setState({ selectedID: selectedElement.id });
 *             }} />
 *     }
 *
 */
export declare class CommonComboBox extends React.Component<ICommonComboBoxProps, ICommonComboBoxState> {
    /**
     * Корневой узел combobox
     */
    el: HTMLElement;
    /**
     * Текущий сфокусированный элемент списка
     */
    focusedElement: IComboBoxElement;
    constructor(props: ICommonComboBoxProps);
    /** @internal */
    componentWillMount(): void;
    /** @internal */
    componentWillReceiveProps(nextProps: ICommonComboBoxProps): void;
    /**
     * При выборе элемента в выпадающем списке
     * @param selectedID ИД выбранного элемента
     */
    protected onElementSelected: (selectedID: string) => void;
    /**
     * Ищет элемент списка по его ИД
     * @param id ИД элемента
     * @param disableFallbackToEmptyElement Не создавать пустой элемент, если элемент не найден по ИД
     * @param props Пользовательские props
     */
    protected getElementByID: (id: string, disableFallbackToEmptyElement?: boolean, props?: ICommonComboBoxProps) => IComboBoxElement;
    /**
     * При фокусе элемента списка
     * @param element Текущий элемент
     */
    protected onFocusElement: (element: IComboBoxElement) => IComboBoxElement;
    /**
     * При снятии фокуса у элемента списка
     * @param element Текущий элемент
     */
    protected onBlurElement: (element: IComboBoxElement) => any;
    /**
     * При фокусе соседнего элемента в списке (навигация по стрелочкам)
     * @param element Текущий элемент
     * @param mode Какой из соседних элементов должен получить фокус (предыдущий или следующий)
     */
    protected onFocusSiblingElement: (element: IComboBoxElement, mode: "prev" | "next") => void;
    /**
     * Создаёт список элементов
     */
    protected createElementList(): React.ReactNode[];
    /**
     * Рендерит заголовок комбобокса
     */
    protected renderTitle(): JSX.Element;
    /**
     * Рендерит тело комбобокса
     */
    protected renderBody(): JSX.Element;
    /** @internal */
    render(): JSX.Element;
}
