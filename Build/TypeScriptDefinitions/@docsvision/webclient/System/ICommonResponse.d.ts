/**
 * Стандартная модель ответа сервера.
 * @param ResponseModelT тип возвращаемых данных
 */
export interface ICommonResponse<ResponseModelT> {
    /**
     * Успешно ли завершился запрос.
     */
    success: boolean;
    /**
     * Временная метка карточки.
     */
    timestamp: number;
    /**
     * Идентификатор карточки, для которой возвращен {@link timestamp}
     */
    timestampCardId: string;
    /**
     * Сообщение об ошибке или предупреждение.
     */
    message: string;
    /**
     * Данные.
     */
    data: ResponseModelT;
}
