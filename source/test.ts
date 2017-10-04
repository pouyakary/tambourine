
/// <reference path="theory/scale.ts" />
/// <reference path="theory/note.ts" />
/// <reference path="lib/scales/major.ts" />
/// <reference path="lib/scales/minor.ts" />

const C =
    new Tambourine.Note('C')

const CMajor =
    new Tambourine.MajorScale( C )

// Writing a chord with style
const MajorTriad =
    [ CMajor.Tonic, CMajor.Mediant, CMajor.Dominant ]

const CMinor =
    new Tambourine.MinorScale( C )

const FavoriteBluesScaleForPouya =
    new Tambourine.Scale( C, [ 3, 1, 1, 1, 1, 3 ] )

console.log( FavoriteBluesScaleForPouya.getNotes( ) )


