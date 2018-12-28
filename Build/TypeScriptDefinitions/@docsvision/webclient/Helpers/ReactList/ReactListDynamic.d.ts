import { ReactList } from "@docsvision/webclient/Helpers/ReactList/ReactList";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import React from "react";
/** @internal */
export interface IReactListDynamicProps {
    /** Ось, по которой скроллится ReactList */
    axis?: string;
    /** Начальный индекс элемента */
    initialIndex?: number;
    /** Длина списка */
    length: number;
    /** Минимальный количество элементов для отрисовки */
    minSize?: number;
    /** Количество пикселей для буффера снизу и сверху списка */
    threshold?: number;
    /** Использовать css-свойство translate3d для скролла (работает чуть быстрее, меньше поддержка браузерами) */
    useTranslate3d?: boolean;
    /** Инлайн-стили для контейнера */
    style?: any;
    /** Название класса для контейнера */
    className?: string;
    /** Название класса для пустого элемента списка */
    emptyItemClassName?: string;
    /** Название класса для загрузки элемента списка */
    loadingItemClassName?: string;
    /** Скрыт ли ReactListDynamic */
    hidden?: boolean;
    /** Пользовательский элемент для контейнера */
    customContainer?: any;
    /** Загружать ли данные при первой инициализации компонента */
    notLoadOnInit?: boolean;
    /** Загрузчик элементов, просящий загрузить и передать в props.items элементы с указанными индексами */
    loadItems: (indexes: number[]) => void;
    /** Задержка перед загрузкой данных после остановки прокрутки */
    fetchThreshold?: number;
    /** Загружать дополнительно n элементов выше и ниже элементов в видимой области */
    itemsThreshold?: number;
    /** Высота элемента (допустимы значения в px, em и т.д.). Не нужна, если вы сами реализуете renderEmptyItem и renderLoadingItem. */
    itemHeight?: number | string;
    /** Элементы списка */
    items: any[];
    /** Рендеринг отдельного элемента списка */
    renderItem: (key: number | string, itemData: any, index: number) => React.ReactNode;
    /** Рендеринг пустого элемента списка */
    renderEmptyItem?: (index: number, key: number | string) => React.ReactNode;
    /** Рендеринг загружаемого элемента списка (когда начали загружать пустой элемент списка) */
    renderLoadingItem?: (index: number, key: number | string, state: LoadingState) => React.ReactNode;
}
export interface IReactListDynamicState {
    /** Информация о загружаемых элементах списка */
    loading: {
        [index: number]: boolean;
    };
}
/**
 * @review
 * ReactList с возможностью динамической подгрузки результатов
 *
 * Если нужно задать высоту контейнера, то её необходимо задать через свойства
 * Если элемент списка не удалось загрузить динамически (к примеру, он отсутствует), то вместо него необходимо вернуть ReactListDynamic.UNDEFINED_ITEM
 *
 * Пример использования:
 *
 *     constructor(props) {
 *         super(props);
 *
 *         this.state = {
 *             items: []
 *         };
 *     }
 *
 *     itemsFetcher = (start: number, end: number) => {
 *         ...
 *     }
 *
 *     loadItems = (indexes: number[]) => {
 *         this.itemsFetcher(indexes).then(items => {
 *             indexes.forEach(index => this.state.items[index] = items[index]);
 *             this.forceUpdate();
 *         }, err => {
 *             indexes.forEach(index => this.state.items[index] = ReactListDynamic.EMPTY_ITEM);
 *             this.forceUpdate();
 *         });
 *     };
 *
 *     renderItem = (key: number, itemData: any) => {
 *         return <div key={key} style={{ height: 30 }}>{itemData.title}</div>;
 *     };
 *
 *     render() {
 *         return <ReactListDynamic style={{ height: 180, overflow: 'auto' }}
 *             itemsThreshold={3} length={50} itemHeight={30}
 *             items={this.state.items} loadItems={this.loadItems} renderItem={this.renderItem} />;
 *     }
 *
 */
export declare class ReactListDynamic extends React.Component<IReactListDynamicProps, IReactListDynamicState> {
    /** Задержка перед загрузкой элемента списка по умолчанию */
    static readonly FETCH_THRESHOLD = 300;
    /** Элемент списка должен быть равен UNDEFINED_ITEM, если его по какой-то причине не удалось загрузить */
    static readonly UNDEFINED_ITEM: {};
    /** Контейнер по умолчанию */
    protected defaultContainer: any;
    /**
     * Экземпляр ReactList
     */
    protected reactList: ReactList;
    /**
     * Задержка перед загрузкой при прокрутке списка
     */
    protected thresholdTimeout: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Загружает список элементов
     */
    loadItems: () => void;
    /**
     * При скролле списка
     */
    protected onScroll: () => void;
    /**
     * Отрисовываем элемент списка
     */
    protected renderItem: (index: number, key: string | number) => {};
    render(): JSX.Element;
}
