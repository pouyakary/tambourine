
//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

/// <reference path="theory/note.ts" />
/// <reference path="theory/scale.ts" />
/// <reference path="theory/chord.ts" />
/// <reference path="lib/scales/major.ts" />
/// <reference path="lib/scales/minor.ts" />

//
// ─── TITLE ──────────────────────────────────────────────────────────────────────
//

    const put = ( ...args: any[ ] ) =>
        console.log( '>', ...args )

//
// ─── PARSING NOTE NAME ──────────────────────────────────────────────────────────
//

    put( 'Parsing G#6 note name:', Tambourine.Note.parseNoteName( 'G#6' ) )

//
// ─── NOTES ──────────────────────────────────────────────────────────────────────
//

    const C5 = new Tambourine.Note( 'C5' )
    const E5 = new Tambourine.Note( 'E5' )
    const A5 = new Tambourine.Note( 'A5' )

    put( 'MIDI note number of middle A (A5) is', A5.MIDI )
    put( 'Frequency of standard middle A (A5) is', A5.frequency )

//
// ─── INTERVALS ──────────────────────────────────────────────────────────────────
//

    put( 'Interval between C and E is', C5.getIntervalTo( E5 ), 'half steps.' )

//
// ─── SCALES ─────────────────────────────────────────────────────────────────────
//

    const CMajor =
        new Tambourine.MajorScale( C5 )

    const CMinor =
        new Tambourine.MinorScale( C5 )

    const FavoriteBluesScaleForPouya =
        new Tambourine.Scale( C5, 3, 1, 1, 1, 1, 3 )

    put( 'C Major has', CMajor.noteNames )
    put( 'C minor has', CMinor.noteNames )
    put( "Pouya's favorite Blues Scale has", FavoriteBluesScaleForPouya.noteNames )

//
// ─── CHORDS ─────────────────────────────────────────────────────────────────────
//

    const MajorTriad =
        new Tambourine.Chord( CMajor.Tonic, CMajor.Mediant, CMajor.Dominant )

    put( "Intervals of a major triad are", MajorTriad.intervals )

// ────────────────────────────────────────────────────────────────────────────────

