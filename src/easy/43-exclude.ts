/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #初級 #built-in

  ### 質問

  組み込みの型ユーティリティ`Exclude <T、U>`を使用せず、`U`に割り当て可能な型を`T`から除外する型を実装します。

  > GitHubで確認する：https://tsch.js.org/43/ja
*/


/* _____________ ここにコードを記入 _____________ */

type MyExclude<T, U> = T extends U ? never : T;


/* _____________ テストケース _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, Exclude<"a" | "b" | "c", "a" | "b">>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]



/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/43/answer/ja
  > 解答を見る：https://tsch.js.org/43/solutions
  > その他の課題：https://tsch.js.org/ja
*/

