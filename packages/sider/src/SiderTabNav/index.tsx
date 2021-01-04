import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import TabNode from './SiderTabNode';

import SiderTabContext from '../SiderTabs/context';
import { TabBarExtraContent, TabBarExtraPosition, TabBarExtraMap } from '../SiderTabs/interface';
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


interface ExtraContentProps {
  position: TabBarExtraPosition;
  prefixCls?: string;
  extra?: TabBarExtraContent;
}

const ExtraContent = ({ position, prefixCls, extra }: ExtraContentProps) => {
  if (!extra) return null;

  let content: React.ReactNode;

  const assertExtra = extra as TabBarExtraMap;

  if (position === 'right') {
    content = assertExtra.right || (!assertExtra.left && assertExtra) || null;
  }

  if (position === 'left') {
    content = assertExtra.left || null;
  }

  return content ? <div className={`${prefixCls}-sider-extra-content`}>{content}</div> : null;
};

function SiderTabNav(props: TabNavListProps, ref: React.Ref<HTMLDivElement>) {
  const { prefixCls, tabs } = React.useContext(SiderTabContext);
  const {
    className,
    style,
    id,
    activeKey,
    extra,
    children,
    onTabClick,
  } = props;
  const tabListRef = useRef<HTMLDivElement>();

  const tabNodes: React.ReactElement[] = tabs ? tabs.map(tab => {
    const { key } = tab;
    return (
      <TabNode
        id={id || key}
        prefixCls={prefixCls}
        key={key}
        tab={tab}
        closable={tab.closable}
        active={key === activeKey}
        renderWrapper={children}
        onClick={(e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
          onTabClick(key, e);
        }}
        onRemove={() => {
            
        }}
        onFocus={() => {
          
        }}
      />
    );
  }) : [];

  /* eslint-disable jsx-a11y/interactive-supports-focus */
  return (
    <div
        ref={ref}
        role="tablist"
        className={classNames(`${prefixCls}-nav`, className)}
        style={style}
        onKeyDown={() => {
            // No need animation when use keyboard
        }}
    >
        <ExtraContent position="left" extra={extra} prefixCls={prefixCls} />
        <div
            className={`${prefixCls}-sider-nav-list`}
        >
            {tabNodes}
        </div>
        <ExtraContent position="right" extra={extra} prefixCls={prefixCls} />
    </div>
  );
  /* eslint-enable */
}

export default React.forwardRef(SiderTabNav);