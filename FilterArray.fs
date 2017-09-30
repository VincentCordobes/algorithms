open System

let inputList ()=
  Seq.initInfinite (fun _ -> Console.ReadLine ())
  |> Seq.takeWhile (not << isNull) 
  |> Seq.map int
  |> Seq.toList

let filter (limit: int) (list: int list): int list =
  List.fold (fun acc e -> if e < limit then e::acc else acc) [] list

[<EntryPoint>]
let main argv = 
  let upperLimit = Console.ReadLine() |> int
  let list = inputList ()
  List.rev (filter upperLimit list)
  |> List.iter (printfn "%d")
  0