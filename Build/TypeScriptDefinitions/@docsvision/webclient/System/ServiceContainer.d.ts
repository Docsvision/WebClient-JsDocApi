import { FieldSpec } from "@docsvision/webclient/System/GetFieldName";
/** Служебный тип, используемый в {@link ServiceContainer}. */
export declare type ServiceGetter<T = any> = (services: any) => T;
/** Служебный тип, используемый в {@link ServiceContainer}. */
export declare type ServiceSetter<T = any> = (instance: T, services: any) => void;
/** Информация о сервисе, используемая в {@link ServiceContainer} */
export interface ServiceDescriptor<T = any> {
    name: string;
    factory?: (services: any) => T;
    meta: object;
    instance?: T;
    get?: ServiceGetter<T>;
    set?: ServiceSetter<T>;
}
/** Служебный тип, используемый в {@link ServiceContainer}. */
export declare type ServiceContainerFluentNext<T> = (services: T) => void;
/** Служебный тип, используемый в {@link ServiceContainer}. */
export declare type ServiceContainerFluent<T> = {
    then: (next: ServiceContainerFluentNext<T>) => void;
};
/** Помечает, что сервис необязателен для работы. */
export declare type Optional<T> = Partial<T>;
/** Служебный тип, используемый в {@link ServiceContainer}. */
export declare type Factories<$T> = {
    [P in keyof $T]: (services: any) => $T[P];
};
/**
 * Вспомогательный класс, позволяющий объявлять сервисные контейнеры с lazy-инициализацией свойств и хранением мета-информации о сервисах.
 *
 * Подробнее о сервисных контейнерах см. [статью в нашем блоге](https://habrahabr.ru/company/docsvision/blog/350398/).
 */
export declare class ServiceContainer {
    protected services: {
        [serviceName: string]: ServiceDescriptor;
    };
    /**
     * Добавляет новый сервис
     * @param name Имя сервиса (имя переменной), по которому к нему будут обращаться.
     * @param service Экземпляр сервиса
     * @param T Тип сервиса
     */
    registerService<T>(name: FieldSpec<any, T>, service: T, meta?: object): void;
    /**
     * Добавляет сервисы из контейнера
     * @param name Имя сервиса (имя переменной), по которому к нему будут обращаться.
     * @param service Экземпляр сервиса
     * @param T Тип сервиса
     */
    addFluent<$T>(container: $T, meta?: object): ServiceContainerFluent<this & $T>;
    /**
     * Добавляет сервисы из контейнера
     * @param name Имя сервиса (имя переменной), по которому к нему будут обращаться.
     * @param service Экземпляр сервиса
     * @param T Тип сервиса
     */
    addService<$T>(container: $T, meta?: object): this & $T;
    /**
     * Добавляет сервисы из контейнера
     * @param container Объект, в котором ключи - имена сервисов, значения - фабричные методы сервисов.
     * @param service Экземпляр сервиса
     * @param T Тип сервиса
     */
    addServiceFactory<$T>(container: Factories<$T>, meta?: object): this & $T;
    /**
     * Добавляет новый сервис, экземпляр которого создается при первом обращении
     * @param name Имя сервиса (имя переменной), по которому к нему будут обращаться.
     * @param service Метод, который принимает параметром текущий контейнер и возвращает экземпляр сервиса.
     * @param T Тип сервиса
     */
    registerServiceFactory<T>(name: FieldSpec<any, T>, serviceFactory: (services: any) => T, meta?: object): void;
    /**
     * Добавляет новый сервис, доступ к экземпляру которого осуществляется через специальные методы.
     * @param name Имя сервиса (имя переменной), по которому к нему будут обращаться.
     * @param get Метод, возвращающий экземпляр сервиса
     * @param set Метод, устаналивающий новый экземпляр сервиса
     * @param T Тип сервиса
     */
    registerServiceAccessors<T, I = any>(name: FieldSpec<T, I>, get: ServiceGetter<I>, set?: ServiceSetter<I>, meta?: object): void;
    /**
     * Добавляет новый сервис
     * @param serviceDescriptor Информация о сервисе
     * @param T Тип сервиса
     */
    registerServiceDesciptor<T>(serviceDescriptor: ServiceDescriptor): void;
    /**
     * Отменяет регистрацию севриса
     * @param name Имя сервиса (имя переменной), по которому к нему обращаются.
     */
    unregisterService<T>(name: FieldSpec<any, T>): void;
    /**
     * Вспомогательный метод, позволяющий сообщить TypeScript, что сервис был ранее зарегистрирован через вызов {@link registerService}.
     * @param T Тип контейнера, содержащего необходимый сервис. Например, {@link $LayoutController}.
     * @returns this
     *
     * Пример использования:
     *
     *     export type $MyService = { myService: MyService };
     *     serviceContainer.register("myService", () => new MyService());
     *     serviceContainer.with<$MyService>().myService.doSomething();
     */
    with<T>(): this & T;
    /**
     * Вспомогательный метод, позволяющий сообщить TypeScript, что сервис был ранее зарегистрирован через вызов {@link registerService}.
     * @param T Тип контейнера, содержащего необходимый сервис. Например, {@link $LayoutController}.
     * @returns this
     *
     * Пример использования:
     *
     *     export type $MyService1 = { myService1: MyService1 };
     *     export type $MyService2 = { myService2: MyService2 };
     *     function foo(service: $MyService1 & $MyService2) {}
     *
     *     let myService1 = serviceContainer.addService<$MyService1>({ myService1: new MyService1()});
     *     let myService2 = serviceContainer.addService<$MyService2>({ myService2: new MyService2()});
     *     foo(serviceContainer.withAll(myService1, myService2));
     */
    withAll<T>(c: T): this & T;
    withAll<T1, T2>(c1: T1, c2: T2): this & T1 & T2;
    withAll<T1, T2, T3>(c1: T1, c2: T2, c3: T3): this & T1 & T2 & T3;
    withAll<T1, T2, T3, T4>(c1: T1, c2: T2, c3: T3, c4: T4): this & T1 & T2 & T3 & T4;
    /**
     * Получение зарегистрированного сервиса по имени.
     * Вместо использования этого метода можно обращаться напрямую к свойству контейнера (`container[name]`).
     * @param name Имя сервиса (имя переменной), по которому к нему обращаются.
     * @returns Экземпляр сервиса
     */
    getService<T>(name: FieldSpec<any, T>): any;
    /**
     * Получение зарегистрированного сервиса по имени.
     * Вместо использования этого метода можно обращаться напрямую к свойству контейнера (`container[name]`).
     * @param name Имя сервиса (имя переменной), по которому к нему обращаются.
     * @returns Экземпляр сервиса
     */
    getServiceDescriptor<T>(name: FieldSpec<any, T>): ServiceDescriptor<T>;
    /**
     * Замена сервиса на указанный экземпляр.
     * @param name Имя сервиса (имя переменной), по которому к нему будут обращаться.
     * @param service Новый экземпляр сервиса.
     */
    setService<T>(name: FieldSpec<any, T>, service: T): void;
    /**
     * Копирует информацию о сервисах в указанный контейнер.
     */
    copyTo(container: ServiceContainer): void;
    /**
     * Создает копию текущего контейнера, со всеми зарегистрированными сервисами.
     */
    clone(): this;
    /**
     * Возвращает информацию о сервисах, удовлетворяющих некоторому условию.
     * @param predicat Условие отбора сервисов.
     */
    findDescriptors(predicat: (descriptor: ServiceDescriptor) => boolean): ServiceDescriptor[];
    /**
     * Освобождает экземпляры сервисов зарегистрированных через {@link registerServiceFactory}, удовлетворяющих условию.
     * При следующем обращении сервисы будут созданы заново.
     * Функция принимает параметром метаданные сервиса, и возвращает true если сервис нужно освободить, и false иначе.
     *
     * @param predicat Условие отбора сервисов на основе метаданных сервисов.
     */
    reinitializeFactoryServices<MetaT>(predicat: (metaKey: MetaT) => boolean): void;
    /**
     * Освобождает экземпляры сервисов и дублирует описания сервисов, удовлетворяющих условию.
     * При следующем обращении сервисы будут созданы заново.
     * Функция принимает параметром метаданные сервиса, и возвращает true если сервис нужно освободить, и false иначе.
     *
     * @param predicat Условие отбора сервисов на основе метаданных сервисов.
     */
    reinitializeServices<MetaT>(predicat: (metaKey: MetaT) => boolean): void;
}
