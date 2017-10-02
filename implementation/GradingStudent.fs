open System

let nextMultiple n = n + (5 - (n % 5))

let solve grades =
  let round grade =
    if grade < 38 then grade 
    else
      let nextMult = nextMultiple grade
      if nextMult - grade < 3 then 
        nextMult
      else 
        grade
  List.map round grades

[<EntryPoint>]
let main argv = 
  let n = Console.ReadLine() |> int
  let input =
    Seq.initInfinite (fun _ -> Console.ReadLine() |> int)
    |> Seq.take n |> List.ofSeq
    |> solve
    |> List.iter (fun g -> printfn "%d" g)
  0
