/** @internal Свойства для {@link HighlightedSimpleSearchResult} */
export interface IHighlightedSimpleSearchResult {
    /** Текст результата поиска. */
    text: string;
    /** Текст поиска, который должен быть подсвечен. */
    searchQuery: string;
    /** Заголовок результата поиска. */
    title?: string;
    /** CSS-класс. */
    className?: string;
}
/**
 * Показывает текст с выделенным в нём результатом поиска.
 *
 * Пример использования:
 *
 *     <HighlightedSimpleSearchResult text={item.name} searchQuery={this.state.searchInput.value}  />
 */
export declare const HighlightedSimpleSearchResult: (props: IHighlightedSimpleSearchResult) => JSX.Element;
