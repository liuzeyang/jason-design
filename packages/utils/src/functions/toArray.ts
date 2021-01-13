import React from 'react';
import { isReactFragment } from './isReactFragment';
export interface Options {
    keepEmpty?: boolean;
}

export function toArray(
    children: React.ReactNode,
    options: Options = {}
): React.ReactElement[]{
    let ret: React.ReactElement[] = [];
    React.Children.forEach(children, (child: any) => {
        if((child === undefined || child === null) && !options.keepEmpty){
            return;
        }
        if(Array.isArray(child)){
            ret = ret.concat(toArray(child))
        } else if (isReactFragment(child) && child.props) {
            ret = ret.concat(toArray(child.props.children, options));
          } else {
            ret.push(child);
          }
    })
    return ret;
}