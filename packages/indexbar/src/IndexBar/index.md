
## Test

Demo:

```tsx
import React from 'react';
import IndexBar from '@jason-design/indexbar';

const getRandomList = (min: number, max: number): string[] => {
  return new Array(Math.floor(Math.random() * (max - min) + min)).fill('')
}

const charCodeOfA = 'A'.charCodeAt(0)
const groups = Array(26)
  .fill('')
  .map((_, i) => ({
    title: String.fromCharCode(charCodeOfA + i),
    items: getRandomList(3, 10).map(() => 'dd'),
  }))

export default () =>     
<div style={{ height: window.innerHeight }}>
      <IndexBar>
        {groups.map(group => {
          const { title, items } = group
          return (
            <IndexBar.Panel
              index={title}
              title={`标题${title}`}
              key={`标题${title}`}
            >
              <div>
                {items.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>;
```

