import { BodyContainerProvider } from "@docsvision/webclient/Helpers/BodyContainerProvider";
import React from "react";
/**
 * Предоставляет статические методы для отображения простых модальных окон.
 */
export declare class MessageBox {
    private static mMessageBoxContainerProvider;
    static lastError?: HTMLElement;
    static getMessageBoxContainer(): BodyContainerProvider;
    /**
     * Показывает модальное окно с сообщением об ошибке.
     *
     * @param content Текст сообщения обо ошибке
     * @param customCaptionText Заголовок диалога
     * @returns JQueryDeferred объект, который перейдет в состояние "resolved" после закрытия диалога.
     *
     * Пример использования:
     *
     *    MessageBox.ShowError("Неправильное имя файла!").done(() => {
     *        console.info("Диалог закрыт");
     *    });
     *
     */
    static ShowError(content: React.ReactNode, customCaptionText?: React.ReactNode): JQueryDeferred<any>;
    /**
     * Показывает модальное окно с информационным сообщением.
     *
     * @param content Текст сообщения
     * @param customCaptionText Заголовок диалога
     * @returns JQueryDeferred объект, который перейдет в состояние "resolved" после закрытия диалога.
     *
     * Пример использования:
     *
     *    MessageBox.ShowInfo("Операция успешно выполнена!").done(() => {
     *        console.info("Диалог закрыт");
     *    });
     *
     */
    static ShowInfo(content: React.ReactNode, customCaptionText?: React.ReactNode): JQueryDeferred<any>;
    /**
     * Показывает модальное окно с предупреждением.
     *
     * @param content Текст предупреждения
     * @param customCaptionText Заголовок диалога
     * @returns JQueryDeferred объект, который перейдет в состояние "resolved" после закрытия диалога.
     *
     * Пример использования:
     *
     *    MessageBox.ShowWarning("Не все файлы были загружены!").done(() => {
     *        console.info("Диалог закрыт");
     *    });
     *
     */
    static ShowWarning(content: React.ReactNode, customCaptionText?: React.ReactNode): JQueryDeferred<any>;
    /**
     * Показывает модальное окно с запросом подтвердить какое-либо действие.
     *
     * @param content Текст запроса
     * @param customCaptionText Заголовок диалога
     * @returns JQueryDeferred объект, который перейдет в состояние "resolved" при согласии, и "rejected" при отказе.
     *
     * Пример использования:
     *
     *    MessageBox.ShowConfirmation("Вы действительно хотите удалить файл?").done(() => {
     *        this.removeFile();
     *    }).fail(() => {
     *        // Пользователь отменил удаление
     *    });
     *
     */
    static ShowConfirmation(content: React.ReactNode, customCaptionText?: React.ReactNode): JQueryDeferred<any>;
    /**
     * Показывает модальное окно с информацией об исключении
     *
     * @param exception Исключение
     * @returns JQueryDeferred объект, который перейдет в состояние "resolved" при согласии, и "rejected" при отказе.
     *
     * Пример использования:
     *
     *    try {
     *        throw new Error("Произошла неизвестная ошибка");
     *    } catch (e) {
     *        MessageBox.ShowException(e).done(() => {
     *            console.info("Диалог закрыт");
     *        });
     *    }
     * @internal
     */
    private static Show;
    private static renderModalHeader;
}
