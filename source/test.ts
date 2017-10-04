
//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

/// <reference path="theory/note.ts" />
/// <reference path="theory/scale.ts" />
/// <reference path="theory/chord.ts" />
/// <reference path="lib/scales/major.ts" />
/// <reference path="lib/scales/minor.ts" />

//
// ─── NOTES ──────────────────────────────────────────────────────────────────────
//

    const C = new Tambourine.Note( 'C' )
    const E = new Tambourine.Note( 'E' )

    console.log( 'MIDI note number of 4th C is:', C.MIDI )

//
// ─── INTERVALS ──────────────────────────────────────────────────────────────────
//

    console.log( 'Interval between C and E is:', C.getIntervalTo( E ), 'half steps.' )

//
// ─── SCALES ─────────────────────────────────────────────────────────────────────
//

    const CMajor =
        new Tambourine.MajorScale( C )

    const CMinor =
        new Tambourine.MinorScale( C )

    const FavoriteBluesScaleForPouya =
        new Tambourine.Scale( C, 3, 1, 1, 1, 1, 3 )

    console.log( 'C Major has:', CMajor.noteNames )
    console.log( 'C minor has:', CMinor.noteNames )
    console.log( "Pouya's favorite Blues Scale has:", FavoriteBluesScaleForPouya.noteNames )

//
// ─── CHORDS ─────────────────────────────────────────────────────────────────────
//

    const MajorTriad =
        new Tambourine.Chord( CMajor.Tonic, CMajor.Mediant, CMajor.Dominant )

    console.log( "Intervals of a major triad are:", MajorTriad.intervals )

// ────────────────────────────────────────────────────────────────────────────────

