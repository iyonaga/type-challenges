/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #初級

  ### 質問

  タプルを受け取り、その各値のkey/valueを持つオブジェクトの型に変換する型を実装します。

  例えば

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  const result: TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > GitHubで確認する：https://tsch.js.org/11/ja
*/


/* _____________ ここにコードを記入 _____________ */

type TupleToObject<T extends readonly any[]> = { [K in T[number]] : K }

/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]



/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/11/answer/ja
  > 解答を見る：https://tsch.js.org/11/solutions
  > その他の課題：https://tsch.js.org/ja
*/

