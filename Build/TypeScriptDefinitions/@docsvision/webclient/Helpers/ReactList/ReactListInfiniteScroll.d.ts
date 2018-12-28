import { LoadingState } from "@docsvision/webclient/System/LodingState";
import React from "react";
/** @internal */
export interface IReactListInfiniteScrollProps {
    axis?: string;
    initialIndex?: number;
    itemRenderer?: any;
    itemSizeEstimator?: any;
    itemSizeGetter?: any;
    minSize?: number;
    pageSize?: number;
    scrollParentGetter?: any;
    type: string;
    useStaticSize?: boolean;
    useTranslate3d?: boolean;
    /** Инлайн-стили для контейнера */
    style?: any;
    /** Название класса для контейнера */
    className?: string;
    /** Пользовательский элемент для контейнера (может быть обычный компонент или styledComponent) */
    customContainer?: any;
    /** Элементы списка */
    items: any[];
    /** Дополнительный отступ снизу списка, доскролля до которого произойдёт загрузка следующей страницы */
    gap?: number;
    /** fillPage работает так - если высота начальных данных меньше высоты окна с бесконечным списком, то грузим данные, пока она не заполнится */
    notFillPage?: boolean;
    /** Загружать ли данные при первой инициализации компонента */
    notLoadOnInit?: boolean;
    /** Номер стартовой страницы, начиная с которой начнётся первая загрузка элементов */
    initialPage?: number;
    /** Загружает новую страницу и возвращает информацию о том, существуют ли ещё результаты или нет */
    loadPage: (pageNumber: number) => JQueryDeferred<{}>;
    /** Есть ли еще незагруженные данные. */
    nextPageExists: boolean;
}
/**
 * @review
 * ReactList с возможностью бесконечного скролла
 *
 * Если нужно задать высоту контейнера, то её необходимо задать через свойства
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
 *     getPage = (pageNumber: number) => {
 *         ...
 *     }
 *
 *     loadPage = (pageNumber: number) => {
 *         this.getPage(pageNumber).then(itemsPart => {
 *             this.setState(prevState => ({ items: prevState.items.concat(itemsPart) }));
 *         });
 *     };
 *
 *     renderItem = (index: number, key: number) => {
 *         return <div key={key}>{this.state.items[index].title}</div>;
 *     };
 *
 *     render() {
 *         return <ReactListInfiniteScroll customContainer={CustomTreeDefault} items={this.state.items}
 *             loadPage={this.loadPage} type={ReactListVirtualization.variable} itemRenderer={this.renderItem} />
 *     }
 *
 */
export declare class ReactListInfiniteScroll extends React.Component<IReactListInfiniteScrollProps, undefined> {
    static readonly DEFAULT_GAP = 20;
    static readonly DEFAULT_CONTAINER: import("styled-components").StyledComponent<"div", any, {}, never>;
    /** Номер страницы */
    protected page: number;
    /** Текущий контейнер */
    protected container: any;
    /** Информация о загрузке */
    protected loading: LoadingState;
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IReactListInfiniteScrollProps): void;
    protected attachContainer: (elem: any) => void;
    /**
     * Загружает список элементов
     */
    loadNextPage: () => void;
    /**
     * Подгружает результаты, пока видимая часть страницы полностью не заполнится
     */
    protected fillPage: () => void;
    protected onScroll: (e: React.SyntheticEvent<any>) => void;
    render(): JSX.Element;
}
