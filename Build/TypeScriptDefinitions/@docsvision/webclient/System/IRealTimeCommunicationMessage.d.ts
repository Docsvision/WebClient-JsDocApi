/** Сообщение обмена данными с сервером и между вкладками в режиме реального времени. */
export interface IRealTimeCommunicationMessage<T> {
    /** Данные сообщения. */
    Data?: T;
    /** Уникальный идентификатор типа сообщения. */
    MessageType: string;
    /** Уникальный идентификатор экземпляра сообщения. */
    MessageId?: string;
    /** Идентификаторы вкладок получателей, или null если сообщение адресовано всем вкладкам. */
    TargetTabs?: string[];
    /** Сообщение  направлено к серверу. */
    TargetServer?: boolean;
    /** Идентификатор отправленного события. Если сообщение от сервера, то null. */
    SenderTab?: string;
    /** Временная метка создания сообщения. */
    Timestamp?: Date;
}
