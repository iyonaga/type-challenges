/*
  110 - Capitalize
  -------
  by Anthony Fu (@antfu) #中級 #template-literal

  ### 質問

  文字列の最初の文字を大文字に変換し、それ以外はそのままにする `Capitalize<T>` を実装します。

  例えば

  ```ts
  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
  ```

  > GitHubで確認する：https://tsch.js.org/110/ja
*/


/* _____________ ここにコードを記入 _____________ */


// type Capitalize<S extends string> = S extends `f${infer R}` ? `F${R}` : S
type Capitalize<S extends string> = S extends `${infer x}${infer tail}` ? `${Uppercase<x>}${tail}` : S;


/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Capitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<Capitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<Capitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<Capitalize<''>, ''>>,
]



/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/110/answer/ja
  > 解答を見る：https://tsch.js.org/110/solutions
  > その他の課題：https://tsch.js.org/ja
*/

