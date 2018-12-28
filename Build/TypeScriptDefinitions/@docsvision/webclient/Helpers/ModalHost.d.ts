/**
 * Предоставляет контейнер для отрисовки модального окна. Позволяет отображать диалоговое окно вне react-компонент.
 *
 * Пример использования:
 *
 *     let host = new ModalHost("time-dialog", () => {
 *          return (
 *              <ModalBackdrop visible={true}>
 *                  <ModalDialog isOpen={true}>
 *                      <ModalDialogCloseButton onClick={() => host.unmount()} />
 *                      <ModalDialogHeader>Текущее время</ModalDialogHeader>
 *                      <div>Текущее время: {(new Date()).toTimeString()}</div>
 *                  </ModalDialog>
 *              </ModalBackdrop>
 *          );
 *      });
 *      host.mount();
 *      setInterval(() => host.forceUpdate(), 1000);
 *
 */
export declare class ModalHost {
    private mId;
    private mContainer;
    private mRenderFunction;
    private static mModalDialogHostContainerProvider;
    private static getModalDialogHostContaier;
    /**
     * Инициализирует объект ModalDialogHost
     * @param className Класс, который будет задан элементу-контейнеру в DOM
     * @param render Функция, выполняющая отрисовку модального окна
     */
    constructor(className: string, render: () => React.ReactNode | React.ReactNode[]);
    /**
     * Иницирует перерисовку модального окна. При этом вызывается функция render, переданная в конструктор.
     */
    forceUpdate(callback?: Function): JQueryDeferred<void>;
    /**
     * Создает в DOM элемент-контейнер, и запускает отрисовку модального окна.
     */
    mount(callback?: Function): JQueryDeferred<void>;
    /**
     * Удаляет все созданные элементы из DOM.
     */
    unmount(timeoutMs?: number): JQueryDeferred<any>;
    private render;
}
