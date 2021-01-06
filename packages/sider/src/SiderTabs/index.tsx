import '../style/index.less';
import 'antd/dist/antd.css';

import React, { useEffect, useState, useContext } from 'react';
import { Drawer, ConfigProvider } from 'antd';
import { DrawerProps } from 'antd/lib/drawer/index';
import classNames from 'classnames';
import toArray from '../utils/toArray';
import { SiderTabPaneProps, SiderTabsPane } from '../SiderTabPane';
import SiderTabsContext from './context';
import { Tab, TabBarExtraContent } from './interface';
import SiderTabNav from '../SiderTabNav';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
export interface BaseSiderTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    prefixCls?: string;
    style?: React.CSSProperties;
    size?: string;
    activeKey?: string;
    defaultActiveKey?: string;
    destroyInactiveTabPane?: boolean;
    tabBarStyle?: React.CSSProperties;
    tabBarExtraContent?: TabBarExtraContent,
    // renderTabBar?: RenderTabBar;
    onChange?: (activeKey: string) => void;
    onTabClick?: (activeKey: string, e: React.MouseEvent | React.KeyboardEvent) => void;
    // editable?: EditableConfig;
}
const DrawerWrp: React.FC<DrawerProps & {id: string}> = (props) => <Drawer {...props} />;

function parseTabList(children: React.ReactNode): Tab[] {
    return toArray(children)
      .map((node: React.ReactElement<SiderTabPaneProps>) => {
        if (React.isValidElement(node)) {
          const key = node.key !== undefined ? String(node.key) : undefined;
          return {
            key,
            ...node.props,
            node,
          };
        }
  
        return null;
      })
      .filter(tab => tab !== null) as Tab[];
  }
export type SiderTabsProps = BaseSiderTabsProps & Omit<DrawerProps, 'visible' | 'placement'>;

const SiderTabs: React.FC<SiderTabsProps> = (props) => {
    const {
        prefixCls: customizePrefixCls ,
        className,
        style,
        size = 'small',
        activeKey,
        defaultActiveKey,
        tabBarExtraContent,
        onChange,
        onTabClick,
        tabBarStyle,
        width = 300,
        getContainer,
        children,
        destroyInactiveTabPane,
        ...drawerProps
    } = props;
   
    const [visible, setVisible] = useState(false)
    const tabs = parseTabList(children);
    
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

    const prefixCls = getPrefixCls(customizePrefixCls);
    // ====================== Active Key ======================
    const [mergedActiveKey, setMergedActiveKey] = useMergedState<string>(() => tabs[0]?.key, {
        value: activeKey,
        defaultValue: defaultActiveKey,
    });
    const [activeIndex, setActiveIndex] = useState(() =>
        tabs.findIndex(tab => tab.key === mergedActiveKey),
    );
    // Reset active key if not exist anymore
    useEffect(() => {
        let newActiveIndex = tabs.findIndex(tab => tab.key === mergedActiveKey);
        if (newActiveIndex === -1) {
        newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
        setMergedActiveKey(tabs[newActiveIndex]?.key);
        }
        setActiveIndex(newActiveIndex);
    }, [tabs.map(tab => tab.key).join('_'), mergedActiveKey, activeIndex]);
    // =====================处理mask为false时，ant-drawer-content-wrapper的width导致的问题==============
    useEffect(() => {
        if(!drawerProps.mask){
            let dom: HTMLElement | null = document.querySelector('#sider-drawer .ant-drawer-content-wrapper');
            if(dom){
                dom.style.width = `${width}px`;
            }
        }
        return () => {
            
        }
    }, [drawerProps.mask, width])
    
    function onInternalTabClick(key: string, e: React.MouseEvent | React.KeyboardEvent) {
        !visible && setVisible(true) 
        onTabClick?.(key, e);
        setMergedActiveKey(key);
        onChange?.(key);
      }
      
    
    const tabNavBarProps = {
        activeKey: mergedActiveKey,
        onTabClick: onInternalTabClick,
        extra: tabBarExtraContent,
        style: tabBarStyle,
        panes: children,
    };
    
    return (
        <SiderTabsContext.Provider value={{ tabs, prefixCls }}>
            <DrawerWrp
                visible={visible}
                width={width}
                onClose={() => setVisible(false)}
                placement="right"
                getContainer={getContainer}
                {...drawerProps}
                handler={
                    <div className={classNames('sider-drawe', {
                        [`${prefixCls}-sider-${size}`]: size,
                    }, `${prefixCls}-sider`, className)} style={{...style, right: `${width}px`}}>
                        <SiderTabNav {...tabNavBarProps}/>
                    </div>
                }
                style={{
                    zIndex: 999,
                }}
                id='sider-drawer'
            >
                  <div
                    className={classNames(`${prefixCls}-sider-content`, {
                    })}
                >
                    {tabs.map(tab => {
                        return React.cloneElement(tab.node, {
                            key: tab.key,
                            prefixCls,
                            tabKey: tab.key,
                            active: tab.key === mergedActiveKey,
                            destroyInactiveTabPane,
                        });
                    })}
                </div>
            </DrawerWrp>
        </SiderTabsContext.Provider>
    )
}
export type SiderTabsType = typeof SiderTabs & {
    SiderTabsPane: typeof SiderTabsPane
} 
(SiderTabs as SiderTabsType).SiderTabsPane = SiderTabsPane;

export default SiderTabs as SiderTabsType;