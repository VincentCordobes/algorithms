open System

let solve n list =

  let rec loop acc curr list =
    match list with
    | [] -> acc
    | [_] -> acc
    | h::tail ->
      let b = curr - h
      if b < 5 then
        loop (acc+(n-b)) n tail
      else
        loop acc b tail
  loop 0 n list
  
[<EntryPoint>]
let main argv = 
  let line1 = Console.ReadLine().Split ' '
  let n = line1.[0] |> int
  let _ = line1.[1] |> int
  let list = Console.ReadLine().Split ' ' |> List.ofArray |> List.map int
  solve n list |> printfn "%d"
  0