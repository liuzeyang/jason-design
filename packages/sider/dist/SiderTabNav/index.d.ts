import * as React from 'react';
import { TabBarExtraContent } from '../SiderTabs/interface';
export interface TabNavListProps {
    id?: string;
    activeKey: string;
    panes: React.ReactNode;
    extra?: TabBarExtraContent;
    tabBarGutter?: number;
    className?: string;
    style?: React.CSSProperties;
    onTabClick: (activeKey: string, e: React.MouseEvent | React.KeyboardEvent) => void;
    children?: (node: React.ReactElement) => React.ReactElement;
}
declare const _default: React.ForwardRefExoticComponent<TabNavListProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
