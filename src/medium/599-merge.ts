/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #中級 #object

  ### 質問

  2 つの型をマージして新しい型を作ります。2 つ目に指定した型のキーは 1 つ目の型のキーを上書きします。

  > GitHubで確認する：https://tsch.js.org/599/ja
*/


/* _____________ ここにコードを記入 _____________ */

type Merge<F, S> = {
  [key in keyof F | keyof S]: key extends keyof S
  ? S[key]
  : key extends keyof F
    ? F[key]
    : never
}


/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
	a: number;
	b: number;
	c: boolean;
  }>>
]



/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/599/answer/ja
  > 解答を見る：https://tsch.js.org/599/solutions
  > その他の課題：https://tsch.js.org/ja
*/

