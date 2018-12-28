/** Аргументы события изменения состояния карточки. */
export interface ICardStateChangingEventArgs {
    operationId: string;
    additionalInfo?: {
        comment?: string;
    };
}
