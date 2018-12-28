import React from "react";
/** @internal Свойства для {@link ComboBoxWrapper} */
export interface IComboBoxWrapperProps {
    /** Дополнительный класс */
    className?: string;
    /** Выключен ли комбобокс */
    disabled?: boolean;
}
/**
 * @review
 * Обёртка для комбобокса (для комбобоксов существует готовая реализация для общих случаев - {@link CommonComboBox}).
 *
 * Пример использования:
 *
 *     constructor() {
 *         this.defaultTitle = 'Выберите элемент';
 *         this.el = null;
 *         this.emptyElement = {id: null, title: this.defaultTitle};
 *         this.focusedElement = null;
 *
 *         this.state.disabled = false;
 *         this.state.expanded = false;
 *         this.state.selectedElement = '2222';
 *         this.state.emptyAllowed = true;
 *         this.state.elements = [{id: '1111', title: 'Один'}, {id: '2222', title: 'Два'}];
 *     }
 *
 *
 *     protected onFocusElement = (element) => this.focusedElement = element;
 *
 *     protected onBlurElement = (element) => (this.focusedElement && this.focusedElement.id == element.id) && (this.focusedElement = null);
 *
 *     // навигация по стрелочкам
 *     protected onFocusSiblingElement = (element, mode: 'prev' | 'next') => {
 *         let elementPosition = this.state.elements.findIndex(el => el.id == element.id);
 *         if (elementPosition == -1 && !(this.state.emptyAllowed && element.id == null)) {
 *             return;
 *         }
 *
 *         elementPosition += (mode == 'prev') ? -1 : 1;
 *
 *         const siblingElement = (this.state.emptyAllowed && elementPosition == -1) ?
 *             this.emptyElement :
 *             this.state.elements[elementPosition];
 *
 *         if (siblingElement && (!this.focusedElement || this.focusedElement.id != siblingElement.id)) {
 *             this.focusedElement = siblingElement;
 *             this.forceUpdate();
 *         }
 *     }
 *
 *     render() {
 *         const title = <ComboBoxTitle disabled={this.state.disabled}
 *             expanded={this.state.expanded}
 *             tabIndex
 *             onClick={() => this.setState(prevState => ({ expanded: !prevState.expanded }))}>
 *             <ComboBoxTitleContent>
 *                 {this.state.elements[this.state.selectedElement] ? this.state.elements[this.state.selectedElement].title : this.defaultTitle}
 *             </ComboBoxTitleContent>
 *         </ComboBoxTitle>;
 *
 *         const body = <ComboBoxBody disabled={this.state.disabled}
 *             expanded={this.state.expanded}
 *             onClose={() => this.setState({ expanded: false })}
 *             boundaryTarget={this.el}>
 *             <Focusable selectorToFocus='.combobox-element-helper-selected'>
 *                 <ComboBoxBodyContent>
 *                     {this.state.emptyAllowed && <ComboBoxElement tabIndex
 *                         selected={this.state.selectedElement == null}
 *                         focused={this.focusedElement && this.focusedElement.id == null}
 *                         onSelect={() => this.setState({ selectedElement: null, expanded: false })}
 *                         onFocus={() => this.onFocusElement(this.emptyElement)}
 *                         onBlur={() => this.onBlurElement(this.emptyElement)}
 *                         onFocusNext={() => this.onFocusSiblingElement(this.emptyElement, 'next')}
 *                         onFocusPrev={() => this.onFocusSiblingElement(this.emptyElement, 'prev')}>
 *                             <ComboBoxElementContent>{this.defaultTitle}</ComboBoxElementContent>
 *                     </ComboBoxElement>}
 *
 *                     {this.state.elements.map((element) => {
 *                         return <ComboBoxElement key={element.id}
 *                             tabIndex
 *                             selected={element.id == this.state.selectedElement}
 *                             focused={this.focusedElement && this.focusedElement.id == element.id}
 *                             onSelect={() => this.setState({ selectedElement: element.id, expanded: false })}
 *                             onFocus={() => this.onFocusElement(element)}
 *                             onBlur={() => this.onBlurElement(element)}
 *                             onFocusNext={() => this.onFocusSiblingElement(element, 'next')}
 *                             onFocusPrev={() => this.onFocusSiblingElement(element, 'prev')}>
 *                                 <ComboBoxElementContent>{element.title}</ComboBoxElementContent>
 *                         </ComboBoxElement>;
 *                     })}
 *                 </ComboBoxBodyContent>
 *             </Focusable>
 *         </ComboBoxBody>;
 *
 *         return <div ref={el => this.el = el}>
 *             <ComboBoxWrapper disabled={this.state.disabled}>
 *                 <ComboBoxWrapperContent title={title} body={body}>
 *             </ComboBoxWrapper>
 *         </div>
 *     }
 *
 */
export declare class ComboBoxWrapper extends React.Component<IComboBoxWrapperProps, undefined> {
    /** @internal */
    render(): JSX.Element;
}
