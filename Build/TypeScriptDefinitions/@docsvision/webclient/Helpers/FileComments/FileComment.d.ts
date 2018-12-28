/** @internal Свойства для {@link FileComment} */
export interface IFileCommentProps {
    /** Идентификатор комментария. */
    id: string;
    /** Автор комментария. */
    author: string;
    /** Дата комментария. */
    date: string;
    /** Текст комментария. */
    comment: string;
    /** Можно ли изменять комментарий. */
    canEdit?: boolean;
    /** Можно ли удалять комментарий. */
    canDelete?: boolean;
    /** При вызова изменения комментария. */
    onEdit?: () => void;
    /** При вызова удаления комментария. */
    onDelete?: () => void;
}
/**
 * Отображает содержимое комментария.
 */
export declare const FileComment: (props: IFileCommentProps) => JSX.Element;
