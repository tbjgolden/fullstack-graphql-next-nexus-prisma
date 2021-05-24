import { Maybe } from './generated/graphql';

export const filterMaybe = <T extends Maybe<unknown>>(arr: T[]): Array<NonNullable<T>> => {
  const newArr: Array<NonNullable<T>> = []
  for (const item of arr) {
    if (item !== null && item !== undefined) {
      newArr.push(item as NonNullable<T>)
    }
  }
  return newArr
}