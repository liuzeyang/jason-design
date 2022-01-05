import classNames from 'classnames';
import React, { forwardRef, useRef, ReactElement, useState, useImperativeHandle } from 'react';
import { Panel } from './panel';
import { Sidebar } from './sidebar';
import { mergeProps } from './utils';
import { useThrottleFn } from 'ahooks'

const classPrefix = `jason-index-bar`

export type IndexBarRef = {
  scrollTo: (index: string) => void;
}

export type IndexBarProps = {
  sticky?: boolean;
  children?: React.ReactNode;
}

const defaultProps = {
  sticky: true,
}

export const IndexBar = forwardRef<IndexBarRef, IndexBarProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)
  const bodyRef = useRef<HTMLDivElement>(null)

  const indexes: string[] = []
  const panels: ReactElement[] = []

  React.Children.forEach(props.children, child => {
    if (!React.isValidElement(child)) {
      return
    }
    if (child.type !== Panel) {
      console.error('The children of `IndexBar` must be `IndexBar.Panel` components.')
      return
    }
    indexes.push(child.props.index)
    panels.push(<div
      key={child.props.index}
      data-index={child.props.index}
      className={`${classPrefix}-anchor`}
    >
      <div className={`${classPrefix}-anchor-title`}>
        {child.props.title || child.props.index}
      </div>
      {child.props.children}
    </div>)
  })

  const [activeIndex, setActiveIndex] = useState(indexes[0])

  useImperativeHandle(ref, () => ({ scrollTo }))

  function scrollTo(index: string) {
    const body = bodyRef.current
    if (!body) return

    const children = body.children
    for (let i = 0; i < children.length; i++) {
      const panel = children.item(i) as HTMLElement
      if (!panel) continue
      const panelIndex = panel.dataset['index']
      if (panelIndex === index) {
        body.scrollTop = panel.offsetTop
        setActiveIndex(index)
        return
      }
    }
  }


  const { run: checkActiveIndex } = useThrottleFn(
    () => {
      const body = bodyRef.current
      if (!body) return
      const scrollTop = body.scrollTop

      const elements = body.getElementsByClassName(`${classPrefix}-anchor`)
      for (let i = 0; i < elements.length; i++) {
        const panel = elements.item(i) as HTMLElement
        if (!panel) continue
        const panelIndex = panel.dataset['index']
        if (!panelIndex) continue
        if (panel.offsetTop + panel.clientHeight - 35 > scrollTop) {
          setActiveIndex(panelIndex)
          return
        }
      }
    },
    { wait: 50, trailing: true, leading: true }
  )

  return <div
    className={classNames(`${classPrefix}`, {
      [`${classPrefix}-sticky`]: props.sticky,
    })}
  >
    <Sidebar
      indexes={indexes}
      activeIndex={activeIndex}
      onActive={index => {
        scrollTo(index)
      }}
    />
    <div
      className={`${classPrefix}-body`}
      ref={bodyRef}
      onScroll={checkActiveIndex}
    >
      {panels}
    </div>
  </div>
})