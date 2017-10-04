open System

let reverse list =
  let rec aux acc = function
  | [] -> acc
  | h::tail -> aux (h::acc) tail
  aux [] list

[<EntryPoint>]
let main argv = 
  let input =
    Seq.initInfinite (fun _ -> Console.ReadLine())
    |> Seq.takeWhile (not << isNull)
    |> Seq.map int
    |> List.ofSeq
    |> reverse
    |> List.iter (printfn "%d")
  0