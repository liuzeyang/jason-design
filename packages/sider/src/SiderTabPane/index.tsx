import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

export interface SiderTabPaneProps {
    tab?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    children?: React.ReactNode;
    forceRender?: boolean;
    closable?: boolean;
    closeIcon?: React.ReactNode;
    title?: React.ReactNode;
    // Pass by TabPaneList
    prefixCls?: string;
    tabKey?: string;
    id?: string;
    animated?: boolean;
    active?: boolean;
    destroyInactiveTabPane?: boolean;
}


export const SiderTabsPane: React.FC<SiderTabPaneProps> = (props) => {
    const {
        prefixCls,
        forceRender,
        className,
        style,
        id,
        active,
        animated,
        destroyInactiveTabPane,
        tabKey,
        children,
    } = props;

    const [visited, setVisited] = useState(forceRender);
    
    useEffect(() => {
        if (active) {
            setVisited(true)
        }else if (destroyInactiveTabPane) {
            setVisited(false)
        }
    }, [active, destroyInactiveTabPane]);

    const mergedStyle: React.CSSProperties = {};
    if (!active) {
        if (animated) {
            mergedStyle.visibility = 'hidden';
            mergedStyle.height = 0;
            mergedStyle.overflowY = 'hidden';
        } else {
            mergedStyle.display = 'none';
        }
    }

    return (
        <div 
            id={id && `${id}-panel-${tabKey}`}
            role="tabpanel"
            tabIndex={active ? 0 : -1}
            aria-labelledby={id && `${id}-tab-${tabKey}`}
            aria-hidden={!active}
            style={{ ...mergedStyle, ...style }}
            className={classNames(
                `${prefixCls}-sider-tabpane`,
                active && `${prefixCls}-sider-tabpane-active`,
                className,
            )}>
            {(active || visited || forceRender) && children}
        </div>
    )
}