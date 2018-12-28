/** Константа равная 00000000-0000-0000-0000-000000000000. Для проверки что GUID является пустым используйте {@link isEmptyGuid}. */
export declare const EMPTY_GUID = "00000000-0000-0000-0000-000000000000";
/** Возвращает true если переданное значение не определено или равно {@link EMPTY_GUID}. */
export declare function isEmptyGuid(guid: string): boolean;
/** Генерирует новый уникальный идентификатор формата GUID. */
export declare function generateGuid(): string;
