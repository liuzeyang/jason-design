import * as React from 'react';
import { Tab } from '../SiderTabs/interface';
export interface TabNodeProps {
    id: string;
    prefixCls?: string;
    tab: Tab;
    active: boolean;
    closable?: boolean;
    onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
    onResize?: (width: number, height: number, left: number, top: number) => void;
    renderWrapper?: (node: React.ReactElement) => React.ReactElement;
    onRemove: () => void;
    onFocus: React.FocusEventHandler;
}
declare const _default: React.ForwardRefExoticComponent<TabNodeProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
