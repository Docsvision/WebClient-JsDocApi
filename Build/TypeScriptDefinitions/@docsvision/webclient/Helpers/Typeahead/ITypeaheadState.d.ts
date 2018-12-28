import { ITypeaheadSearchResult } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchResult";
import { TypeaheadItem } from "@docsvision/webclient/Helpers/Typeahead/Models/TypeaheadItem";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
/** @internal */
export interface ITypeaheadState {
    requestHelper: RequestHelper;
    variantsDropdownOpen: boolean;
    variants: TypeaheadItem[];
    hasMore: boolean;
    page: number;
    searchTimerHandle: any;
    loadingNextPage: boolean;
    focusedItem: TypeaheadItem;
    focusedShowMore: boolean;
    dropdownElem: HTMLElement;
    lastKeyDownProcessed: boolean;
    mounted: boolean;
    lastSearchPage: number;
    lastSearchText: string;
    lastExternalState: any;
    lastSearchResult: ITypeaheadSearchResult;
}
