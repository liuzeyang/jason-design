import './index.less';

import React, { useEffect } from 'react';
// import { Drawer } from 'antd';
import { toArray } from '@jason-design/utils';

export interface SiderTabs {
    prefixCls?: string;
    style?: React.CSSProperties;
    size?: string;
    activeKey?: string;
    defaultActiveKey?: string;
    // renderTabBar?: RenderTabBar;
    onChange?: (activeKey: string) => void;
    onTabClick?: (activeKey: string, e: React.KeyboardEvent) => void;
    // editable?: EditableConfig;
    // locale?: TabsLocale;
}
export interface SiderTab {

}

function parseTabList(children: React.ReactNode){
    return toArray(children)
}

export const SiderTabs: React.FC<SiderTabs> = (props) => {
    const {
        children
    } = props;
    parseTabList(children)
    return (
        <div>

        </div>
    )
}