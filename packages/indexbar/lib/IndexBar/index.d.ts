import React from 'react';
export declare type IndexBarRef = {
    scrollTo: (index: string) => void;
};
export declare type IndexBarProps = {
    sticky?: boolean;
    children?: React.ReactNode;
};
export declare const IndexBar: React.ForwardRefExoticComponent<IndexBarProps & React.RefAttributes<IndexBarRef>>;
