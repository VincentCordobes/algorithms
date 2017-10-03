open System

[<EntryPoint>]
let main argv = 
  let line1 = Console.ReadLine().Split ' ' |> Array.map (int)
  let s = line1.[0]
  let t = line1.[1]

  let line2 = Console.ReadLine().Split ' ' |> Array.map (int)
  let a = line2.[0]
  let b = line2.[1]

  let line3 = Console.ReadLine().Split ' ' |> Array.map (int)
  let m = line3.[0]
  let n = line3.[1]

  let dApples =
    Console.ReadLine().Split ' ' |> Array.map (int) |> List.ofArray

  let dOranges =
    Console.ReadLine().Split ' ' |> Array.map (int) |> List.ofArray
 
  let isAppleOnHouse a s t d =
    let fruitPosition = a + d
    s <= fruitPosition && fruitPosition <= t
  
  let isOrangeOnHouse b s t d =
    let fruitPosition = b + d
    s <= fruitPosition && fruitPosition <= t
  
  dApples
  |> List.map (isAppleOnHouse a s t)
  |> List.filter (id) 
  |> List.length
  |> printfn "%d"
 
  dOranges 
  |> List.map (isOrangeOnHouse b s t)
  |> List.filter (id) 
  |> List.length
  |> printfn "%d"
  0

