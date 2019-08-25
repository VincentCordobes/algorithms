open System

let solveTriplet (line1: string) (line2: string) =
  let list1 = line1.Split[|' '|] |> Array.map int|> Array.toList
  let list2 = line2.Split[|' '|] |> Array.map int |> Array.toList

  let rec aux scores line1 line2 =
    match (line1, line2) with
    | ([], []) -> scores
    | (a::tail1, b::tail2) ->
      let (scoreA, scoreB) = scores
      let newScores = if (a > b) then (scoreA+1, scoreB) 
                      elif (a < b) then (scoreA, scoreB+1)
                      else (scoreA, scoreB)
      aux newScores tail1 tail2
    | (_, _) -> scores
  aux (0, 0) list1 list2

[<EntryPoint>]
let main argv = 
    let line1 = Console.ReadLine()
    let line2 = Console.ReadLine()
    let res = solveTriplet line1 line2
    match res with
    | (a, b) -> printfn "%d %d" a b
    0