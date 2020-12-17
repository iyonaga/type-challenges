/*
  8 - Readonly 2
  -------
  by Anthony Fu (@antfu) #中級 #readonly #object-keys

  ### 質問

  2つの型引数`T`と`K`を取る`MyReadonly2<T, K>`を実装します。

  `K`が指定されている場合は、`T`の中の`K`のプロパティのみを読み取り専用にします。`K`が指定されていない場合は、通常の`Readonly<T>`と同様に、すべてのプロパティを読み取り専用にします。

  例えば

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  ```

  > GitHubで確認する：https://tsch.js.org/8/ja
*/


/* _____________ ここにコードを記入 _____________ */

// type MyReadonly2<T extends object, K extends keyof T> = K extends keyof T ? { readonly [P in K]: T[P] } : any
// type MyReadonly2<T, K extends keyof T = null> =  K extends null ? Readonly<T> : { readonly [P in K]: T[P] }
// type MyReadonly2<T extends object, K extends keyof T = null> =  K extends null ? Readonly<T> : { readonly [P in K]: T[K] } & { [P in Exclude<keyof T, K>]: T[P]}
// type MyReadonly2<T extends object, K extends keyof T  = null> =  K extends null ? Readonly<T> : T extends { [P in K]: infer E} ? { readonly [P in K]: E} :  {};
// type MyReadonly2<T extends object, K extends keyof T  = null> =  K extends null ? Readonly<T> : { readonly [P in K]: T[P]}
type MyReadonly2<T extends object, K extends keyof T = keyof T> =  T & { readonly [P in K]: T[P]}
type a = MyReadonly2<Todo1>
type b = MyReadonly2<Todo1, 'title' | 'description'>

/* _____________ テストケース _____________ */
import { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}



/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/8/answer/ja
  > 解答を見る：https://tsch.js.org/8/solutions
  > その他の課題：https://tsch.js.org/ja
*/

