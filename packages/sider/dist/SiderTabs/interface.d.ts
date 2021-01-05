/// <reference types="react" />
import { SiderTabPaneProps } from '../SiderTabPane';
export interface Tab extends SiderTabPaneProps {
    key: string;
    node: React.ReactElement;
}
export declare type TabBarExtraPosition = 'left' | 'right';
export declare type TabBarExtraMap = Partial<Record<TabBarExtraPosition, React.ReactNode>>;
export declare type TabBarExtraContent = React.ReactNode | TabBarExtraMap;
