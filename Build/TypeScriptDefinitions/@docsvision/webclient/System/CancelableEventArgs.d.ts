import { CancelableEventState } from "@docsvision/webclient/System/CancelableEventState";
import { ICancelableEventArgs } from "@docsvision/webclient/System/ICancelableEventArgs";
/**
 * Представляет собой событие для действий, подписчики которого могут его отменить.
 * Заметка: подписчики события могут выполнять долговременные асинхронные операции перед продолжением или отменой действий событий.
 * Пример использования:
 *
 *    this.cardOpening = CancelableEvent.Create(this.state.wrapper);
 *    ...
 *    this.cardOpening.trigger({
 *      cardModel: model
 *    })
 *    .canceled(this.back)
 *    .accepted(() => callback(model));
 *
 * Заметка: подписчики события должны использовать только интерфейс ICancelableEventArgs<T> публичного API,
 * поскольку интерфейс CancelableEventArgs<T> только для внутреннего использования инициаторов событий.
 */
export declare class CancelableEventArgs<T> implements ICancelableEventArgs<T> {
    private dataField?;
    private deferredObj;
    private autoAcceptSetting;
    /**
     * Создаёт экземпляр CancelableEventArgs<T>
     * @param data данные события
     * @param callbackAccepted смотрите метод {@link accepted}
     * @param callbackCanceled смотрите метод {@link canceled}
     */
    constructor(data?: T, callbackAccepted?: (data?: T) => void, callbackCanceled?: (data?: T) => void);
    /**
     * Коллбэк, который будет вызван, если подписчики события разрешили продолжить выполнение действий
     */
    accepted(callback: (data?: T) => void): CancelableEventArgs<T>;
    /**
     * Коллбэк, который будет вызван, если подписчики события отменили выполнение действий
     */
    canceled(callback: (data?: T) => void): CancelableEventArgs<T>;
    /**
     * См. {@link ICancelableEventArgs<T>.cancel}
     */
    cancel(): void;
    /**
     * См. {@link ICancelableEventArgs<T>.accept}
     */
    accept(): void;
    /**
     * См. {@link ICancelableEventArgs<T>.wait}
     */
    wait(): void;
    /**
     * См. {@link ICancelableEventArgs<T>.data}
     */
    readonly data: T | undefined;
    /**
     * См. {@link ICancelableEventArgs<T>.autoAcceptEnabled}
     */
    /**
    * См. {@link ICancelableEventArgs<T>.autoAcceptEnabled}
    */
    autoAcceptEnabled: boolean;
    /**
     * Возвращает текущее состояние объекта события.
     * Состояние может изменяться вызовом методов accept() или cancel() (они обычно используются подписчиками событий)
     * См. также: autoAcceptEnabled
     */
    readonly state: CancelableEventState;
    readonly deferred: JQueryDeferred<T | undefined>;
    /** @deprecated */
    private readonly deffered;
}
