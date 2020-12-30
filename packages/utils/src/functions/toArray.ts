import React from 'react';

export interface Options{
    keepEmpty?: boolean;
}

export function toArray(
    children: React.ReactNode,
    options: Options = {}
): React.ReactElement[]{
    let ret: React.ReactElement[] = [];
    React.Children.forEach(children, (child: unknown) => {
        if((child === undefined || child === null) && !options.keepEmpty){
            return;
        }
        if(Array.isArray(child)){
            ret = ret.concat(toArray(child))
        } else if (child) {

        }
    })
    return ret;
}