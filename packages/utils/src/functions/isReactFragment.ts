import React from 'react';

export const isReactFragment = (child: any) : boolean => {
    try {
      return child.type.toString() === React.Fragment.toString();
    } catch (e) {
      return false;
    }
  };