open System

let solve line = 

  let explode (s:string) = [for c in s -> c]

  let rec aux acc counting list =
    match counting, list with
    | _, [] -> acc
    | true, '1'::tail -> aux (acc+1) false ('1'::tail)
    | true, '0'::tail -> aux (acc) true (tail)
    | _, '1'::'0'::tail -> aux (acc) true (tail)
    | _, _::tail -> aux (acc) false (tail)
  aux 0 false (explode line)


[<EntryPoint>]
let main argv = 
  let q = Console.ReadLine() |> int
  Seq.initInfinite (fun _ -> Console.ReadLine ())
  |> Seq.take q 
  |> List.ofSeq
  |> List.map (solve >> printfn "%d")
  |> ignore
  0