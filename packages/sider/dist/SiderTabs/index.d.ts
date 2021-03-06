import '../style/index.less';
import 'antd/dist/antd.css';
import React from 'react';
import { DrawerProps } from 'antd/lib/drawer/index';
import { SiderTabsPane } from '../SiderTabPane';
import { TabBarExtraContent } from './interface';
export interface BaseSiderTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    prefixCls?: string;
    style?: React.CSSProperties;
    size?: string;
    activeKey?: string;
    visible?: boolean;
    defaultVisible?: boolean;
    defaultActiveKey?: string;
    destroyInactiveTabPane?: boolean;
    tabBarStyle?: React.CSSProperties;
    tabBarExtraContent?: TabBarExtraContent;
    onClose?: () => void;
    onChange?: (activeKey: string) => void;
    onTabClick?: (activeKey: string, e: React.MouseEvent | React.KeyboardEvent) => void;
}
export declare type SiderTabsProps = BaseSiderTabsProps & Omit<DrawerProps, 'visible' | 'placement'>;
declare const SiderTabs: React.FC<SiderTabsProps>;
export declare type SiderTabsType = typeof SiderTabs & {
    SiderTabsPane: typeof SiderTabsPane;
};
declare const _default: SiderTabsType;
export default _default;
