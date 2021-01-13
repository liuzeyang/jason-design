import React from 'react';

export type RenderFunction = () => React.ReactNode;

export const getRenderPropValue = (
    propsValue: React.ReactNode | RenderFunction
): React.ReactNode => {
    if(!propsValue){
        return null;
    }

    const isRenderFunction = typeof propsValue === 'function';
    if(isRenderFunction){
        return (propsValue as RenderFunction)()
    }
    return propsValue;
}