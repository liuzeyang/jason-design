import '../style/index.less';
import 'antd/dist/antd.css';
import React from 'react';
import { AbstractTooltipProps } from 'antd/lib/tooltip';
import { RenderFunction } from '@jason-design/utils/dist/functions/getRenderPropValue';
export interface PopUpProps extends AbstractTooltipProps {
    trigger?: 'click' | 'hover';
    title: React.ReactNode | RenderFunction;
    onVisibleChange?: (visible: boolean, e?: React.MouseEvent | React.KeyboardEvent) => void;
}
export interface PopUpState {
    visible?: boolean;
}
declare const PopUp: React.ForwardRefExoticComponent<PopUpProps & React.RefAttributes<unknown>>;
export default PopUp;
