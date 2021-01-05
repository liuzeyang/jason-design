import React from 'react';
export interface Options {
    keepEmpty?: boolean;
}
export default function toArray(children: React.ReactNode, option?: Options): NonNullable<React.ReactElement>[];
