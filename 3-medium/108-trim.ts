/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.
  
  For example
  
  ```ts
  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
  ```
  
  > View on GitHub: https://tsch.js.org/108
*/

/* _____________ Your Code Here _____________ */

type FilterEmptyValues = " " | "\n" | "\t";

type Trim<S extends string> = S extends `${FilterEmptyValues}${infer Right}`
    ? Trim<Right>
    : S extends `${infer Left}${FilterEmptyValues}`
    ? Trim<Left>
    : S;

// Alternative
/*
type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}`
    ? TrimLeft<R>
    : S;
type TrimRight<S extends string> = S extends `${infer R}${" " | "\n" | "\t"}`
    ? TrimRight<R>
    : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "../utils";

type cases = [
    Expect<Equal<Trim<"str">, "str">>,
    Expect<Equal<Trim<" str">, "str">>,
    Expect<Equal<Trim<"     str">, "str">>,
    Expect<Equal<Trim<"str   ">, "str">>,
    Expect<Equal<Trim<"     str     ">, "str">>,
    Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/108/answer
  > View solutions: https://tsch.js.org/108/solutions
  > More Challenges: https://tsch.js.org
*/
