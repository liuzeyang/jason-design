import React from 'react';

type AnyObject = Record<any, any>;

export type RenderProps = undefined | AnyObject | ((props: AnyObject) => AnyObject);

export const replaceElement = (element: React.ReactNode, replaceElement: React.ReactNode, props: RenderProps) => {
    if(!React.isValidElement(element)){
        return replaceElement;
    }
    return React.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}

export const cloneElement = (element: React.ReactNode, props?: RenderProps): React.ReactNode => {
    return replaceElement(element, element, props);
}