import { QuickSearchLogic } from "@docsvision/webclient/Helpers/QuickSearchLogic";
import React from "react";
/** @internal Свойства для {@link SearchBar} */
export interface ISearchBarProps {
    /** Дополнительный класс */
    className?: string;
    /** Значение инпута */
    value?: string;
    /** Плейсхолдер */
    placeholder?: string;
    /** Минимальное количество символов для начала поиска */
    searchIndex?: number;
    /** Временная задержка перед вызовом props.onSearch, позволяет не вызывать props.onSearch после каждого быстрого изменения содержимого инпута */
    searchTimeout?: number;
    /** При изменении значения */
    onChange?: (value: string) => void;
    /** При изменении значения с учётом props.searchIndex и props.searchTimeout */
    onSearch?: (value: string) => void;
    /** При нажатии клавиши */
    onKeyDown?: (e: React.KeyboardEvent<any>) => void;
}
/**
 * @review
 * @internal Хелпер для создания блока с поиском.
 *
 * Пример использования:
 *
 *     <Focusable>
 *         <SearchBar value="Значение"
 *             placeholder="Введите значение"
 *             searchIndex={3}
 *             searchTimeout={2000}
 *             onChange={value => console.log(value)}
 *             onSearch={value => console.log(value)} />
 *     </Focusable>
 */
export declare class SearchBar extends React.Component<ISearchBarProps, undefined> {
    protected quickSearchLogic: QuickSearchLogic;
    constructor(props: ISearchBarProps);
    /** @internal */
    componentWillReceiveProps(nextProps: ISearchBarProps): void;
    /**
     * Сбрасывает и заново инициализирует логику для поиска
     */
    protected resetSearchLogic: () => void;
    protected onChange: (value: string) => void;
    /** @internal */
    render(): JSX.Element;
}
