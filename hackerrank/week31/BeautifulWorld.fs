open System

let t = ['a'; 'e'; 'i'; 'o'; 'u'; 'y'];

let rec isBeautiful = function 
  | a::b::tail -> if a=b || (List.contains a t && List.contains b t) then 
                    false
                  else
                    isBeautiful (b::tail)
  | _-> true

let toChars (s:string) = [for c in s -> c]

let solve word =
  match isBeautiful word with
  | true -> "Yes"
  | false -> "No"
  
[<EntryPoint>]
let main argv = 
  Console.ReadLine()
    |> toChars
    |> (solve >> printfn "%s")
  0