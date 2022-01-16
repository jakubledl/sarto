/**
 * Gregorian mode of the psalm and corresponding antiphon.
 */
export type PsalmMode =
    "1D" | "1D2" | "1f" | "1g" | "1g2" | "1g3" | "1a" | "1a2" | "1a3"
  | "2D" | "2A"
  | "3b" | "3a" | "3a2" | "3g" | "3g2"
  | "4g" | "4E" | "4c" | "4A" | "4A*"
  | "5a"
  | "6F" | "6C"
  | "7a" | "7b" | "7c" | "7c2" | "7d"
  | "8G" | "8G*" | "8c"
  | "pereg"

/**
 * Specifies whether a psalm ends with Glória Patri, Réquiem ætérnam
 * or doesn't have an ending.
 */
export type PsalmEnding =
  "gloria" | "requiem" | "no-ending"

/**
 * Represents a psalm (or a canticle, or the Quicúmque).
 */
export interface Psalm {
  code: string
  title: string

  mode: PsalmMode
  ending: PsalmEnding

  antiphon: Antiphon | null
}

/**
 * Represents a psalm antiphon.
 */
export interface Antiphon {
  code: string
  doubled : boolean
}
