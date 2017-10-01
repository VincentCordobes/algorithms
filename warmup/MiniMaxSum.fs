open System


let solve numbers =
  let sum = List.sum numbers
  List.fold (fun (min, max) e ->
    let tempSum = sum - e
    let tempMin = if tempSum < min then tempSum else min
    let tempMax = if tempSum > max then tempSum else max 
    (tempMin, tempMax)
  ) (Int64.MaxValue, Int64.MinValue) numbers

[<EntryPoint>]
let main argv = 
  let numbers = 
    Console.ReadLine().Split ' '
    |> Array.map int64
    |> List.ofArray
    |> solve
    |> function min, max -> printfn "%d %d" min max
  0

solve [1L; 2L; 3L; 4L; 5L]