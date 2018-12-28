/** @internal */
export interface IServerErrorResponse {
    ExceptionMessage?: string;
    ExceptionType?: string;
    Message?: string;
    StackTrace?: string;
}
/**
 * Стандартная серверная ошибка
 */
export declare class ServerError {
    message: string;
    type: string;
    stack: string;
    constructor(message: string, type: string, stack: string);
    static fromResponse(data: IServerErrorResponse): ServerError;
}
