/*
  12 - Chainable Options
  -------
  by Anthony Fu (@antfu) #中級 #application

  ### 質問

  JavaScript では、チェイン可能なオプションがよく使われます。しかし、TypeScript に切り替えたとき、正しく型を付けることができますか？

  この課題では、オブジェクトでもクラスでも何でもいいので、 `option(key, value)` と `get()` の 2 つの関数を提供する型を定義してください。`option` では、与えられたキーと値を使って現在の config の型を拡張できます。最終的な結果は `get` で取得することにしましょう。

  例えば

  ```ts
  declare const config: Chainable

  const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

  // expect the type of result to be:
  interface Result {
    foo: number
    name: string
    bar: {
      value: string
    }
  }
  ```

  この問題を解くために js/ts のロジックを書く必要はありません。型レベルのロジックだけを書いてください。

  `key` は `string` のみを受け付け、`value` は任意の型を受け付けると仮定しても構いません。同じ `key` が 2 回渡されることはありません。

  > GitHubで確認する：https://tsch.js.org/12/ja
*/


/* _____________ ここにコードを記入 _____________ */
type Result<K, V> = {
  [key in keyof K]: V
}

type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & { [k in K]: V }>
  get(): { [k in keyof T]: T[k] }
}

const b = a
  .option('foo', 123)
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()
type c = typeof b;

/* _____________ テストケース _____________ */
import { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type cases = [
  Expect<Alike<typeof result, Expected>>
]

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}



/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/12/answer/ja
  > 解答を見る：https://tsch.js.org/12/solutions
  > その他の課題：https://tsch.js.org/ja
*/

