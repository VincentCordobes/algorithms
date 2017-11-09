open System

let swap (a: int []) i j =
  let temp = a.[i]
  a.[i] <- a.[j]
  a.[j] <- temp

let sort (a: int []) =
  let n = Array.length a
  let t = Array.copy a
  let mutable changed = true
  while changed do
    changed <- false
    for j in 0 .. (n-2) do
      let e1 = t.[j]
      let e2 = t.[j+1]
      if e1 > e2 then
        if e1 - e2 > 1 then
          failwith "No"
        else
          swap t j (j+1)
          changed <- true
  t
  
let solve a = 
  try
    sort a |> ignore
    printfn "Yes"
  with
  | Failure _ -> printfn "No"

[<EntryPoint>]
let main argv = 
  let parseInput _ =
    Console.ReadLine() |> ignore 
    Console.ReadLine().Split() |> Array.map int

  let q = Console.ReadLine() |> int
  Seq.initInfinite parseInput
    |> Seq.take q
    |> Seq.iter solve
  0