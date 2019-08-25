open System

let invert = function
  | '0' -> '1'
  | _ -> '0'

let expend (s:string): string =
  [for c in s -> invert c]
  |> Array.ofList
  |> String 

let generate () =
  let rec aux acc i =
    if String.length acc > 1000 then 
      acc
    else 
      let expended = expend acc
      aux (acc + expended) (i + 1)
  aux "0" 0


let solve (s:string) x =
  Char.GetNumericValue (s.[x]) |> int

[<EntryPoint>]
let main argv = 
  let q = Console.ReadLine() |> int
  let s = generate ()
  Seq.initInfinite (fun _ -> Console.ReadLine () |> int)
  |> Seq.take q 
  |> List.ofSeq
  |> List.map ((solve s) >> printfn "%d")
  |> ignore
  0