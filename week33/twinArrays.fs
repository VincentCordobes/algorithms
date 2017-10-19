open System


[<EntryPoint>]
let main _ = 
  Console.ReadLine() |> ignore
  let A = Console.ReadLine().Split ' ' |> Array.map int |> List.ofArray
  let B = Console.ReadLine().Split ' ' |> Array.map int |> List.ofArray

  let sortedA = List.sort A
  let sortedB = List.sort B

  let a = List.item 0 sortedA
  let a1 = List.item 1 sortedA
  let b = List.item 0 sortedB
  let b1 = List.item 1 sortedB

  let indexHeadA = List.findIndex (fun e -> e=a) A
  let indexHeadB = List.findIndex (fun e -> e=b) B
  let res = 
    if (indexHeadA = indexHeadB) then
      if (a+b1 > a1 + b) then a1+b else a+b1
    else
      a+b
  
  res |> printfn "%d"

  0
