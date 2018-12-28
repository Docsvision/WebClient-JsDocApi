/** Формирует страницу, информирующую пользователя о том что ресурс не найден. */
export declare class NotFoundPage {
    private readonly MIN_IMAGE_HEIGHT;
    /** Сформировать html-разметку страницы. */
    render(): HTMLElement;
    /** @internal */
    protected handleImageVisibility($imageWrapper: JQuery, $image: JQuery): void;
}
