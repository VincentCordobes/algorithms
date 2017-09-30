open System

[<EntryPoint>]
let main argv = 
    Console.ReadLine() |> ignore
    let line = Console.ReadLine()
    let array = line.Split[|' '|] |> Array.map (int)
    let sum = Array.reduce (+) array
    printfn "%d" sum
    0
