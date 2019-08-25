open System

let solve numbers =
  let sorted = List.sort numbers
  let min = sorted |> List.rev |> List.tail |> List.sum
  let max = sorted |> List.tail |> List.sum
  (min, max)


[<EntryPoint>]
let main argv = 
  let numbers = 
    Console.ReadLine().Split ' '
    |> Array.map int64
    |> List.ofArray
    |> solve
    |> function min, max -> printfn "%d %d" min max
  0