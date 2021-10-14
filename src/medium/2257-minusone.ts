/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/


/* _____________ Your Code Here _____________ */

// これは再帰の制限にひっかかる
// type Helper<T extends any[], U extends number> = [...T, '']['length'] extends U
//   ? T['length']
//   : Helper<[...T, ''], U>
// type MinusOne<T extends number> = Helper<[], T>

type Make10Array<T extends any[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
]

type Make1Array<T, L extends any[] = []> = `${L['length']}` extends T
  ? L
  : Make1Array<T, [...L, 1]>

type AddEqualArrayLength<T extends string, L extends any[] = []> =
  T extends `${infer U}${infer R}`
    ? AddEqualArrayLength<R, [...Make10Array<L>, ...Make1Array<U>]>
    : L

type Pop<T extends any[]> = T extends [...infer F, number] ? F : never
type MinusOne<T extends number> = Pop<AddEqualArrayLength<`${T}`>>['length']


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/

