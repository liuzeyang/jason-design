import { SiderTabPaneProps } from '../SiderTabPane';

export interface Tab extends SiderTabPaneProps {
    key: string;
    node: React.ReactElement;
  }

  export type TabBarExtraPosition = 'left' | 'right';
  
  export type TabBarExtraMap = Partial<Record<TabBarExtraPosition, React.ReactNode>>;

  export type TabBarExtraContent = React.ReactNode | TabBarExtraMap;