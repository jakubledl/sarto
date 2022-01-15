type PsalmMode =
    "1D" | "1D2" | "1f" | "1g" | "1g2" | "1g3" | "1a" | "1a2" | "1a3"
  | "2D" | "2A"
  | "3b" | "3a" | "3a2" | "3g" | "3g2"
  | "4g" | "4E" | "4c" | "4A" | "4A*"
  | "5a"
  | "6F" | "6C"
  | "7a" | "7b" | "7c" | "7c2" | "7d"
  | "8G" | "8G*" | "8c"
  | "pereg"

export interface Psalm {
  mode : PsalmMode
  code : string
  title : string
}
