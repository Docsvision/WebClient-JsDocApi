/** Результат валидации контрола. */
export interface IValidationResult {
    /** Валидация была успешно пройдена. */
    Passed: boolean;
    /** Сообщение об ошибке. */
    Message: string;
}
