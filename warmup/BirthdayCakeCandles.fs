open System

let solve candlesH =
  let max = List.max candlesH
  candlesH |> List.filter (fun h -> h = max) |> List.length


[<EntryPoint>]
let main argv = 
  Console.ReadLine() |> ignore
  Console.ReadLine().Split ' ' 
  |> Array.map int 
  |> List.ofArray 
  |> solve
  |> printfn "%d"
  0