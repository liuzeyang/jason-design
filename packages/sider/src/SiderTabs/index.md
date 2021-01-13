
## Sider
- getContainer现在存在问题false不能挂在当前组件下（待解决）

Demo:

```tsx
import React, {useState} from 'react';
import { SiderTabs } from '@jason-design/sider';
const SiderTabsPane = SiderTabs.SiderTabsPane;

export default () => {
    const [visible, setVisible] = useState(false);
    return <div id='container' style={{ height:'300px',}}>
    <button onClick={() => setVisible(!visible)}>click me</button>
    <SiderTabs visible={visible} mask={false} getContainer={false} width={500} onClose={() => {
        setVisible(false)
    }}>
        <SiderTabsPane key='1' tab={<div style={{border: '1px soild red'}}>1</div>}>1</SiderTabsPane>
        <SiderTabsPane key='2' tab='ccc'>2</SiderTabsPane>
        <SiderTabsPane key='3' tab='aaa'>3</SiderTabsPane>
        <SiderTabsPane key='4' tab='dda'>4</SiderTabsPane>
    </SiderTabs>
</div>
};
```

