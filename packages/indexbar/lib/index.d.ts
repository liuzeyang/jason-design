/// <reference types="react" />
import './IndexBar/index.less';
export declare function attachPropertiesToComponent<C, P extends Record<string, any>>(component: C, properties: P): C & P;
declare const _default: import("react").ForwardRefExoticComponent<import("./IndexBar").IndexBarProps & import("react").RefAttributes<import("./IndexBar").IndexBarRef>> & {
    Panel: import("react").FC<import("./IndexBar/panel").IndexBarAnchorProps>;
};
export default _default;
