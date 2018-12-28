/** @internal Query data, that would be sent by typeahead */
export interface ITypeaheadSearchQuery {
    /** Search text, entered by user in quick search field */
    searchText?: string;
    /** Count of items to skip (paginator logic) */
    skipCount: number;
    /** Max items count in the result */
    maxCount: number;
}
