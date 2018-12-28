/**
 * @review
 * Вспомогательный компонент для отрисовки дерева.
 *
 * Пример использования (вместо CustomTreeDefault можно использовать div):
 *
 *     <CustomTreeDefault>
 *         <div className="display-flex align-items-stretch">
 *             <CustomTreeLevelIndent level={0} />
 *             <CustomTreeNodeTogglerDefault expanded visible onClick={() => console.log('Нажат переключатель')} />
 *             <CustomTreeNodeContentDefault tabIndex selected disabled onClick={() => console.log('Первый узел')}>
 *                 <CustomTreeNodeIconDefault />
 *                 <CustomTreeNodeTextDefault>Первый узел</CustomTreeNodeTextDefault>
 *            </CustomTreeNodeContentDefault>
 *         </div>
 *
 *         <div className="display-flex align-items-stretch">
 *             <CustomTreeLevelIndent level={0} />
 *             <CustomTreeNodeTogglerDefault expanded visible onClick={() => console.log('Нажат переключатель')} />
 *             <CustomTreeNodeContentDefault tabIndex selected disabled onClick={() => console.log('Второй узел')}>
 *                 <CustomTreeNodeIconDefault />
 *                 <CustomTreeNodeTextDefault ref={attachTooltip('Подсказка второго узла')}>Второй узел</CustomTreeNodeTextDefault>
 *             </CustomTreeNodeContentDefault>
 *         </div>
 *     </CustomTreeDefault>
 *
 */
export declare const CustomTreeDefault: import("styled-components").StyledComponent<"div", any, {
    className: "custom-tree-helper";
}, "className">;
