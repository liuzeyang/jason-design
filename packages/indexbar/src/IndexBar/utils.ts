export const mergeProps = <A, B>(a: A, b: B) => {
  return { ...a, ...b }
}