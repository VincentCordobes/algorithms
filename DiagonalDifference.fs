open System

let solveDiag length (matrix: int [][]) =
  let sum1 = 
    [for i in 0 .. length-1 -> matrix.[i].[i]]
    |> List.reduce (+)

  let sum2 = 
    [for i in 0 .. length-1 -> matrix.[i].[length-1-i]]
    |> List.reduce (+)

  abs (sum1 - sum2)

[<EntryPoint>]
let main argv = 
  let length = Console.ReadLine () |> int
  Seq.initInfinite (fun _ -> Console.ReadLine ())
  |> Seq.take length
  |> Seq.map (fun l -> l.Split [|' '|] |> Array.map int)
  |> Array.ofSeq
  |> solveDiag length
  |> printfn "%d"
  0