open System


let gcd x y =
  let rec aux x = function
  | 0 -> x
  | y -> aux y (x % y)
  if x > y then aux x y  else aux y x


let solve () = 0

let naive A B =
  let mutable maxSum = 0 
  let mutable maxGCD = 0
  for x in A do
    for y in B do
      let tempGCD = gcd x y
      let tempSum = x + y 
      if tempGCD = maxGCD && tempSum > maxSum then
        maxSum <- tempSum

      if tempGCD > maxGCD then
        maxSum <- tempSum
        maxGCD <- tempGCD
  maxSum


[<EntryPoint>]
let main argv = 
  Console.ReadLine() |> ignore
  let A = Console.ReadLine().Split ' ' |> Array.map int |> List.ofArray
  let B = Console.ReadLine().Split ' ' |> Array.map int |> List.ofArray
  naive A B |> printfn "%d"
  0

