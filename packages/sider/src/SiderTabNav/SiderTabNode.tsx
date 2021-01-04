import * as React from 'react';
import classNames from 'classnames';
import KeyCode from 'rc-util/lib/KeyCode';
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

function TabNode(
  {
    prefixCls,
    id,
    active,
    tab: { key, tab, disabled, closeIcon },
    renderWrapper,
    onClick,
    onRemove,
    onFocus,
  }: TabNodeProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const tabPrefix = `${prefixCls}-sider-tab`;

  React.useEffect(() => onRemove, []);

  const nodeStyle: React.CSSProperties = {};
  


  function onInternalClick(e: React.MouseEvent | React.KeyboardEvent) {
    if (disabled) return;
    onClick && onClick(e);
  }


  let node: React.ReactElement = (
    <div
      key={key}
      ref={ref}
      className={classNames(tabPrefix, {
        [`${tabPrefix}-active`]: active,
        [`${tabPrefix}-disabled`]: disabled,
      })}
      style={nodeStyle}
      onClick={onInternalClick}
    >
      {/* Primary Tab Button */}
      <div
        role="tab"
        aria-selected={active}
        id={id && `${id}-sider-tab-${key}`}
        className={`${tabPrefix}-btn`}
        aria-controls={id && `${id}-panel-${key}`}
        aria-disabled={disabled}
        onClick={e => {
          e.stopPropagation();
          onInternalClick(e);
        }}
        onKeyDown={e => {
          if ([KeyCode.SPACE, KeyCode.ENTER].includes(e.which)) {
            e.preventDefault();
            onInternalClick(e);
          }
        }}
        onFocus={onFocus}
      >
        {tab}
      </div>
    </div>
  );

  if (renderWrapper) {
    node = renderWrapper(node);
  }

  return node;
}

export default React.forwardRef(TabNode);