/** Генерирует страницу, уведомляющую пользователя о том что содержимое не может быть отображено из-за ошибки. */
export declare class ServerErrorPage {
    errorMessage: string;
    private readonly MIN_IMAGE_HEIGHT;
    constructor(errorMessage?: string | XMLHttpRequest);
    setErrorMesage(err: any): void;
    /** @internal */
    getFilteredErrorMessage(): string;
    /** Формирует разметку страницы. */
    render(): HTMLElement;
    /** @internal */
    protected handleImageVisibility($imageWrapper: JQuery, $image: JQuery): void;
}
