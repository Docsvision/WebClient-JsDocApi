import { IBoxWithButtonsButtonInfo } from "@docsvision/webclient/Helpers/BoxWithButtons";
import { ITypeaheadSearchQuery } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchQuery";
import { ITypeaheadSearchResult } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchResult";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
import { Typeahead } from "@docsvision/webclient/Helpers/Typeahead/Typeahead";
import { BasicEvent } from "@docsvision/webclient/System/BasicEvent";
/** @internal */
export interface ITypeaheadProps {
    /** Curreint input value. */
    searchText: string;
    /** Event, that translate input key down events */
    inputKeyDown: BasicEvent<React.KeyboardEvent<any>>;
    /** Function, that send search request to the server. */
    findItems: (query: ITypeaheadSearchQuery) => JQueryDeferred<ITypeaheadSearchResult>;
    /** User selected some variant. */
    onSelected: (selectedVariant: ITypeaheadVariant) => void;
    /** Makes control readonly */
    disabled?: boolean;
    /** Callback function, that should focus input. */
    focusInput?: Function;
    /** How many symbols should user enter, before search request will be sent. Default value: 3 */
    searchIndex?: number;
    /** How often should send search requests, while user entereing text. Time interval in ms. Default value: 500ms. */
    searchTimeout?: number;
    /** Count of items shown, before 'show more' clicked. Default value: 8 */
    firstPageSize?: number;
    /** Count of items, loaded when user clicked 'show more' button. Default value 15 */
    nextPageSize?: number;
    /** Show clear button, or not. Default value: true */
    clearButton?: boolean;
    /** Show 'show variants' button, or not. Default value: false */
    showVariantsButton?: boolean;
    /** Custom class for show variants button. Default value: dv-ico ico-arrow-down */
    showVariantsButtonIconClass?: string;
    /** Special text, that will be sent in search query when requested all available results. Default value: null */
    showAllSearchText?: string;
    /** Should send special text in search query when requested all available results (for example, down arrow keydown). Default value: false */
    showAllEnabled?: boolean;
    /** How loading queries should be performed. Default value: LoadOnlyNewItems */
    paginatorLoadLogic?: PaginatorLoadLogic;
    /** Some extra buttons info, that would be showed at the right side of the control */
    extraButtons?: IBoxWithButtonsButtonInfo[];
    /** Show buttons inside the box with absolute positioning. Defautl value: false */
    buttonsInside?: boolean;
    /** Tooltip */
    title?: string;
    /** Custom class for the control */
    className?: string;
    /** Custom class for the popover panel (wich is outside of the DOM). */
    popoverClassName?: string;
    /** Custom attributes for the popover panel (wich is outside of the DOM). */
    popoverAttributes?: Object;
    /** Control name, for the autotesting purposes */
    name?: string;
    /** External state for autorefresh cached data */
    externalState?: any;
    /** Called on open/close dropdown. */
    onDropdownStateChanged?: (sender: Typeahead) => void;
}
export declare enum PaginatorLoadLogic {
    LoadOnlyNewItems = 0,
    LoadAllItems = 1
}
