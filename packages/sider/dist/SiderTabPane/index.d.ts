import React from 'react';
export interface SiderTabPaneProps {
    tab?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    children?: React.ReactNode;
    forceRender?: boolean;
    closable?: boolean;
    closeIcon?: React.ReactNode;
    prefixCls?: string;
    tabKey?: string;
    id?: string;
    animated?: boolean;
    active?: boolean;
    destroyInactiveTabPane?: boolean;
}
export declare const SiderTabsPane: React.FC<SiderTabPaneProps>;
