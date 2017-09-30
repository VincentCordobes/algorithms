open System

let solve numbers =
  let l = float (List.length numbers)
  List.fold (fun (p, n, z) c -> 
    if c > 0 then (p+1, n, z)
    elif c = 0 then  (p, n, z+1)
    else (p, n+1, z)
  ) (0, 0, 0) numbers
  |> fun (p, n, z) -> ((float p)/l, (float n)/l, (float z)/l)


[<EntryPoint>]
let main argv = 
  Console.ReadLine() |> ignore
  let (positives, negatives, zeros) = 
    Console.ReadLine().Split ' ' 
    |> Array.map int 
    |> List.ofArray 
    |> solve
  printfn "%f" positives
  printfn "%f" negatives
  printfn "%f" zeros
  0