/**
 * Позволяет создавать контейнеры в <body> и хранить свои html-узлы в них.
 */
export declare class BodyContainerProvider {
    /** Активные контейнеры */
    static ActiveContainers: HTMLElement[];
    /** Текущий контейнер */
    private mContainer;
    constructor(id: string);
    /**
     * Возвращает контейнер по его идентификатору.
     *
     * Если контейнер не был создан, то в начале тега <body> создаётся новый контейнер с указанным идентификатором.
     *
     * @param id Идентификатор контейнера
     */
    private getContainer;
    /**
     * Уничтожает контейнер.
     */
    dispose(): void;
    /**
     * Создаёт элемент с указанным классом и присоединяет его в конец контейнера.
     * @param className Название класса
     */
    createElement(className?: string): HTMLElement;
    /**
     * Убирает указанный элемент из DOM.
     * @param elem Убираемый элемент
     */
    freeElement(elem: HTMLElement): JQueryDeferred<any>;
}
