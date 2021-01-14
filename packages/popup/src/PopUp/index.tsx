import '../style/index.less';
import 'antd/dist/antd.css';

import React, { useEffect, useState } from 'react';
import KeyCode from 'rc-util/lib/KeyCode';
import { AbstractTooltipProps } from 'antd/lib/tooltip';
import { Tooltip } from 'antd';
import { getRenderPropValue, cloneElement } from '@jason-design/utils';
import { RenderFunction } from '@jason-design/utils/dist/functions/getRenderPropValue';
import { ConfigContext } from 'antd/lib/config-provider';
import classNames from 'classnames';

export interface PopUpProps extends AbstractTooltipProps{
    trigger: 'trigger' | 'hover';
    title: React.ReactNode | RenderFunction;
    onVisibleChange?: (
        visible: boolean,
        e?: React.MouseEvent | React.KeyboardEvent
    ) => void;
}

export interface PopUpState {
    visible?: boolean;
  }

const PopUp = React.forwardRef<unknown, PopUpProps>((props: PopUpProps, ref) => {
    const [visible, setVisible] = useState<boolean | undefined>(props.visible || false);
    
    useEffect(() => {
        if ('visible' in props) {
            setVisible(props.visible);
        }
    }, [props.visible])

    useEffect(() => {
        if ('defaultVisible' in props) {
          setVisible(props.defaultVisible);
        }
      }, [props.defaultVisible]);

    const settingVisible = (
        value: boolean,
        e?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>,
    ) => {
        if (!('visible' in props)) {
            setVisible(value);
        }
    
        if (props.onVisibleChange) {
            props.onVisibleChange(value, e);
        }
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.keyCode === KeyCode.ESC && visible) {
        settingVisible(false, e);
        }
    };
    const onVisibleChange = (value: boolean) => {
        settingVisible(value);
    };

    const renderOverlay = (prefixCls: string,) => {
        const {  title } = props;
        return (
            <div className={`${prefixCls}-inner-content`}>
                <div className={`${prefixCls}-message-title`}>{getRenderPropValue(title)}</div>
            </div>
        );
        };

    const { getPrefixCls } = React.useContext(ConfigContext);

    const {
        prefixCls: customizePrefixCls,
        placement,
        children,
        overlayClassName,
        ...restProps
      } = props;

    const prefixCls = getPrefixCls('popover', customizePrefixCls);
    const prefixClsConfirm = getPrefixCls('popconfirm', customizePrefixCls);
    const overlayClassNames = classNames(prefixClsConfirm, overlayClassName);
    
    return <Tooltip 
        {...restProps}
        prefixCls={prefixCls}
        placement={placement}
        onVisibleChange={onVisibleChange}
        visible={visible}
        overlay={renderOverlay(prefixCls)}
        overlayClassName={overlayClassNames}
        ref={ref as any}
    >
        {cloneElement(children, {
            onKeyDown: (e: React.KeyboardEvent<any>) => {
            if (React.isValidElement(children)) {
                children?.props.onKeyDown?.(e);
            }
            onKeyDown(e);
            },
        })}
    </Tooltip>
});
PopUp.defaultProps = {
    transitionName: 'zoom-big',
    placement: 'top' as PopUpProps['placement'],
    trigger: 'click' as PopUpProps['trigger'],
  };

export default PopUp;