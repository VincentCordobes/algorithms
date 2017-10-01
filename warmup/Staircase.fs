open System

let draw n =
  let toDraw =
    seq { 1 .. n }
    |> Seq.map (fun i ->
      let symbols = List.init i (fun _ -> "#") 
      let spaces = List.init (n-i) (fun _ -> " ")
      spaces @ symbols)

  toDraw 
  |> Seq.map String.Concat
  |> Seq.iter (fun l -> printfn "%s" l)


[<EntryPoint>]
let main argv = 
  let n = Console.ReadLine () |> int
  draw n
  0