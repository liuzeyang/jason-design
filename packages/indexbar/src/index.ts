import './IndexBar/index.less'
import { IndexBar } from './IndexBar';
import { Panel } from './IndexBar/panel'

export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P {
  const ret = component as any
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key]
    }
  }
  return ret
}

export default attachPropertiesToComponent(IndexBar, {
  Panel
})