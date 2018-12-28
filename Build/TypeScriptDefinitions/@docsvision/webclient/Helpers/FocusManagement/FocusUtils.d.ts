/** Ищет в дереве элемент, который может получить фокус. */
export declare function findFocusableElement({ container, mode, selectorToFocus }: {
    container: HTMLElement;
    mode: 'first' | 'last';
    selectorToFocus?: string;
}): HTMLElement;
/** Ищет в дереве элементы, которые могут получить фокус. */
export declare function findAllFocusableElements(container: HTMLElement): HTMLElement[];
export declare function isFocusable(el: HTMLElement): boolean;
