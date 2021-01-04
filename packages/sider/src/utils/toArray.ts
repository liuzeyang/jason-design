import React from 'react';
import { isReactFragment } from './isReactFragment';

export interface Options {
    keepEmpty?: boolean;
}

export default function toArray(
    children: React.ReactNode,
    option: Options = {},
  ): NonNullable<React.ReactElement>[] {
    let ret: React.ReactElement[] = [];
  
    React.Children.forEach(children, (child: any) => {
      if ((child === undefined || child === null) && !option.keepEmpty) {
        return;
      }
  
      if (Array.isArray(child)) {
        ret = ret.concat(toArray(child));
      } else if (isReactFragment(child) && child.props) {
        ret = ret.concat(toArray(child.props.children, option));
      } else {
        ret.push(child);
      }
    });
  
    return ret;
  }