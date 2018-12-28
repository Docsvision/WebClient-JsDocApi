/** Стандартный сервис для взаимодействия с родительским модальным окном. */
export interface IDialogManagement {
    /** Закрыть диалог без сохранения данных. */
    close(): JQueryDeferred<void> | Promise<void>;
    /** Применить изменения и закрыть диалог. */
    accept?<T>(data?: T): JQueryDeferred<void> | Promise<void>;
}
export declare type $DialogManagement = {
    dialogManagement: IDialogManagement;
};
