import { ModalWindow } from '@docsvision/webclient/Legacy/ModalWindow';
/**
 * @deprecated Вспомогательная функция для совмещения React с WebClient.ModalWindow
 *
 * Внимание! В связи с изменениями в React 16, начиная с Web-клиента 10 функция не возвращает значение. Используйте ref для получения экземпляра.
 */
export declare function renderModalContent(modal: ModalWindow, content: React.ReactNode, showCloseButton?: boolean): void;
