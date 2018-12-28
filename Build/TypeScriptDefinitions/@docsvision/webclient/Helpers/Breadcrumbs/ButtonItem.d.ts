import React from "react";
/** @review Свойства для {@link ButtonItem}  */
export interface IBreadcrumbsItemProps {
    /** Дополнительный класс */
    className?: string;
    style?: React.CSSProperties;
    /** TabIndex элемента */
    tabIndex?: number;
    /** Содержимое */
    children?: React.ReactNode;
    /** При выборе элемента */
    onClick?: () => void;
    disabled?: boolean;
    /** Called on button focus */
    onFocus?: (ev?: any) => void;
    /** Called on button blur */
    onBlur?: (ev?: any) => void;
}
/**
 * @review Элемент хлебных крошек с произвольным обработчиком клика.
 *
 * Пример использования:
 *
 *     let Item = Breadcrumbs.ButtonItem;
 *     let ItemView = Breadcrumbs.LinkItemView;
 *     let Separator = Breadcrumbs.LinkSeparator;
 *
 *      <div className="padding-v-7">
 *           <Item onClick={() => console.log('Выбран Север')}>
 *               <ItemView>Север</ItemView>
 *           </Item>
 *           <Separator />
 *           <Item onClick={() => console.log('Выбрана Северная верфь')}>
 *               <ItemView>Северная верфь</ItemView>
 *           </Item>
 *      </div>
 *
 * Пример использования в случае, когда элементы заданы в виде массива:
 *
 *     let Item = Breadrcumbs.ButtonItem;
 *     let ItemView = Breadrcumbs.LinkItemView;
 *     let Separator = Breadcrumbs.LinkSeparator;
 *
 *     <div className="padding-v-7">
 *         {["Север", "Северная гавань"].map((item, index) =>
 *             <Item onClick={() => console.log('Выбран ' + item)} key={index}>
 *                 {index > 0 && < Separator />}
 *                 <ItemView>{item}</ItemView>
 *             </Item>
 *         )}
 *     </div>
 *
 */
export declare const ButtonItem: (props: IBreadcrumbsItemProps) => JSX.Element;
