import { $BaseName, $CurrentEmployeeId } from "@docsvision/webclient/StandardServices";
import { ILocalStorage } from "@docsvision/webclient/System/$LocalStorage";
/** Сервис для работы с localStorage. */
export declare class LocalStorage implements ILocalStorage {
    private services;
    private supportsLocalStorageCache;
    constructor(services: $BaseName & $CurrentEmployeeId);
    /** @deprecated Use service $LocalStorage */
    static SupportsLocalStorage(): boolean;
    /** @deprecated Use service $LocalStorage */
    static SaveData(id: string, obj: any): boolean;
    /** @deprecated Use service $LocalStorage */
    static LoadData(id: string): any;
    /** Поддерживает ли браузер localStorage. */
    supportsLocalStorage(): any;
    /**
     * Сериализует из записывает значение в localStorage.
     *
     * Внимание, к ключу добавляется имя базы и идентификатор пользователя!
     * Для чтения значения используйте {@link getData}.
     */
    setData<T>(id: string, obj: T): boolean;
    /**
     * Получает данные из localStorage и десериализует их.
     *
     * Внимание, к ключу добавляется имя базы и идентификатор пользователя!
     * Для записи значения используйте {@link getData}.
     */
    getData<T>(id: string): T;
    /**
     * Записывает значение в localStorage.
     *
     * Внимание, к ключу добавляется имя базы и идентификатор пользователя!
     * Для чтения значения используйте {@link getItem}.
     */
    setItem(id: string, data: string): boolean;
    /**
     * Возвращает значение из localStorage.
     *
     * Внимание, к ключу добавляется имя базы и идентификатор пользователя!
     * Для записи значения используйте {@link setItem}.
     */
    getItem(id: string): string;
    /**
     * Удаляет значение из localStorage.
     *
     * Внимание, к ключу добавляется имя базы и идентификатор пользователя!
     * Для записи значения используйте {@link setItem}.
     */
    removeItem(id: string): void;
    /**
     * Преобразует ключ, добавляя к нему имя базы и идентификатор пользователя.
     *
     * Используется остальными методами сервиса. Необходим для исключения
     * конфликтов при одновременной работе с разными базами и разными пользователями.
     */
    transformId(id: string): string;
}
