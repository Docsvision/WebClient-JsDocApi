import { ConfigurableMainMenuContainerButtonImpl, ConfigurableMainMenuContainerButtonState } from "@docsvision/webclient/Platform/ConfigurableMainMenuContainerButtonImpl";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { BasicApiEvent } from "@docsvision/webclient/System/ApiEvent";
/**
 * Содержит публичные свойства элемента управления {@link ConfigurableMainMenuContainerButton}.
 */
export declare class ConfigurableMainMenuContainerButtonParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Текст всплывающей подсказки. */
    tip?: string;
    /** Имя CSS класса, в котором определен путь к иконке, отображаемой в кнопке. */
    iconClass?: string;
    /** Открыто меню или нет. */
    menuExpanded?: boolean;
    /** Доступен ли элемент меню "Настроить панель". */
    showBeginConfigurationItem?: boolean;
    /** Доступен ли элемент меню "Вернуть настройки по умолчанию". */
    showRestoreItem?: boolean;
    /** Доступен ли элемент меню "Присоединить папку". */
    showAttachFolderItem?: boolean;
    /** Доступен ли элемент меню "Обновить дерево папок". */
    showRefreshFoldersItem?: boolean;
    /** Активирован элемент меню "Настроить панель". */
    beginConfigurationClicked?: BasicApiEvent<void>;
    /** Активирован элемент меню "Вернуть настройки по умолчанию". */
    restoreClicked?: BasicApiEvent<void>;
    /** Активирован элемент меню "Присоединить папку". */
    attachFolderClicked?: BasicApiEvent<void>;
    /** Активирован элемент меню "Обновить дерево папок". */
    refreshFoldersClicked?: BasicApiEvent<void>;
}
/**
 * Класс элемента управления Кнопка.
 *
 * Добавляет в web-разметку кнопку в виде иконки для вызова произвольной функции из скрипта карточки.
 */
export declare class ConfigurableMainMenuContainerButton extends BaseControl<ConfigurableMainMenuContainerButtonParams, ConfigurableMainMenuContainerButtonState> {
    constructor(props: ConfigurableMainMenuContainerButtonParams);
    /** @internal */
    protected createParams(): ConfigurableMainMenuContainerButtonParams;
    /** @internal */
    protected createImpl(): ConfigurableMainMenuContainerButtonImpl;
}
