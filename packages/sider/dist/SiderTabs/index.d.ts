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
    defaultActiveKey?: string;
    destroyInactiveTabPane?: boolean;
    tabBarStyle?: React.CSSProperties;
    tabBarExtraContent?: TabBarExtraContent;
    onChange?: (activeKey: string) => void;
    onTabClick?: (activeKey: string, e: React.MouseEvent | React.KeyboardEvent) => void;
}
export declare type SiderTabsProps = {
    SiderTabsPane: typeof SiderTabsPane;
} & BaseSiderTabsProps & Omit<DrawerProps, 'visible' | 'placement'>;
export declare const SiderTabs: React.FC<SiderTabsProps>;
