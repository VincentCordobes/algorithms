open System

[<EntryPoint>]
let main argv = 
  let line = Console.ReadLine().Split ' '
  let hit = line.[1] |> int64
  let t = line.[2] |> int64

  let monsters = 
    Console.ReadLine().Split ' '
    |> Array.map int64
    |> Array.sort
    |> List.ofArray
  
  let rec hitAndFilter i m =
    match (i, m) with
    | i, h::tail when i > 0L -> 
        let nbHits = if h/hit > 0L then h/hit else 1L
        let left = h - (hit*nbHits)
        if left <= 0L then 
          hitAndFilter (i-nbHits) tail
        else 
          hitAndFilter (i-nbHits) (left::tail)

    | _, list -> list
  
  (List.length monsters) - (List.length (hitAndFilter t monsters))
  |> printfn "%d"
  0