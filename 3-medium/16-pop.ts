/*
  16 - Pop
  -------
  by Anthony Fu (@antfu) #medium #array
  
  ### Question
  
  > TypeScript 4.0 is recommended in this challenge
  
  Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.
  
  For example
  
  ```ts
  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]
  
  type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2> // expected to be [3, 2]
  ```
  
  **Extra**: Similarly, can you implement `Shift`, `Push` and `Unshift` as well?
  
  > View on GitHub: https://tsch.js.org/16
*/

/* _____________ Your Code Here _____________ */

type Pop<T extends any[]> = T extends [...infer R, any] ? R : never;

type Push<V, T extends any[]> = [...T, V];

type Shift<T extends any[]> = T extends [any, ...infer R] ? R : never;

type Unshift<V, T extends any[]> = [V, ...T];

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "../utils";

type cases = [
    Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
    Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>
];

/* _____________ Push _____________ */
/* _____________ Test Cases _____________ */

type cases2 = [
    Expect<Equal<Push<2, [1]>, [1, 2]>>,
    Expect<Equal<Push<"d", ["a", "b", "c"]>, ["a", "b", "c", "d"]>>
];

/* _____________ Shift _____________ */
/* _____________ Test Cases _____________ */

type cases3 = [
    Expect<Equal<Shift<[1, 2, 3, 4]>, [2, 3, 4]>>,
    Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>
];

/* _____________ Unshift _____________ */
/* _____________ Test Cases _____________ */

type cases4 = [
    Expect<Equal<Unshift<10, [1, 2, 3, 4]>, [10, 1, 2, 3, 4]>>,
    Expect<Equal<Unshift<"k", ["a", "b", "c"]>, ["k", "a", "b", "c"]>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/16/answer
  > View solutions: https://tsch.js.org/16/solutions
  > More Challenges: https://tsch.js.org
*/
