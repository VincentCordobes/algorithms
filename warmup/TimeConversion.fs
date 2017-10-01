open System

[<EntryPoint>]
let main argv = 
  let line = Console.ReadLine().Split(':')
  let hh = line.[0]
  let mm = line.[1]
  let ssXM = line.[2]
  let ss = ssXM.[0..1]
  let XM = ssXM.[2..3]

  match XM, hh with
  | "AM", "12" -> printfn "%s:%s:%s" "00" mm ss
  | "AM", _ -> printfn "%s:%s:%s" hh mm ss
  | "PM", "12" -> printfn "%s:%s:%s" "12" mm ss
  | _, hh -> 
    printfn "%s:%s:%s" (string (int hh + 12)) mm ss
  0
