/** @internal Свойства для {@link HighlightedSearchResult} */
export interface IHighlightedSearchResultProps {
    /** Текст результата поиска. */
    text: string;
    /** Текст поиска, который должен быть подсвечен. */
    searchQuery: string;
    /** Заголовок результата поиска. */
    title?: string;
    /** CSS-класс. */
    className?: string;
    /** Ключ для React. */
    key?: any;
    /** Обрезать длинный текст с помощью многоточия или нет. По умолчанию: true. */
    useEllipsis?: boolean;
}
/**
 * @internal Показывает текст с выделенным в нём результатом поиска.
 *
 * Пример использования:
 *
 *     <HighlightedSearchResult text={item.name} searchQuery={this.state.searchInput.value}  />
 */
export declare const HighlightedSearchResult: (props: IHighlightedSearchResultProps) => JSX.Element;
