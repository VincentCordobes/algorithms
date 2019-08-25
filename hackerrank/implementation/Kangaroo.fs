open System

[<EntryPoint>]
let main argv = 
  let line = Console.ReadLine().Split ' ' |> Array.map (int)
  let x1 = line.[0]
  let v1 = line.[1]
  let x2 = line.[2]
  let v2 = line.[3]

  let rec canMeet x1 v1 x2 v2 =
    if x1 = x2 then printfn "YES" 
    elif (x1 > x2 && v1 < v2) || (x1 < x2 && v1 > v2) then
      canMeet (x1 + v1) v1 (x2 + v2) v2
    else
      printfn "NO"
  
  canMeet x1 v1 x2 v2
  0
