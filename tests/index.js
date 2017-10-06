

//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    const { Note, Chord, Scale, ScaleCollection } = require('../bin/tambourine.js')

//
// ─── TITLE ──────────────────────────────────────────────────────────────────────
//

    const put = ( ...args ) => console.log( '>', ...args )

//
// ─── PARSING NOTE NAME ──────────────────────────────────────────────────────────
//

    put( 'Parsing G#6 note name:', Note.parseNoteName( 'G#6' ) )

//
// ─── NOTES ──────────────────────────────────────────────────────────────────────
//

    const C5 = new Note( 'C5' )
    const E5 = new Note( 'E5' )
    const A5 = new Note( 'A5' )

    put( 'MIDI note number of middle A (A5) is', A5.MIDI )
    put( 'Frequency of standard middle A (A5) is', A5.frequency )

//
// ─── INTERVALS ──────────────────────────────────────────────────────────────────
//

    put( 'Interval between C and E is', C5.getDistanceTo( E5 ), 'half steps.' )

//
// ─── SCALES ─────────────────────────────────────────────────────────────────────
//

    const CMajor = new ScaleCollection.Major( C5 )
    const CMinor = new ScaleCollection.Minor( C5 )
    const FavoriteBluesScaleForPouya = new Scale( C5, 3, 1, 1, 1, 1, 3 )

    put( 'C Major has', CMajor.noteNames )
    put( 'C minor has', CMinor.noteNames )
    put( "Pouya's favorite Blues Scale has", FavoriteBluesScaleForPouya.noteNames )

//
// ─── SIGNATURES ─────────────────────────────────────────────────────────────────
//

    put( 'Key Signatures of E major Are',
        new ScaleCollection.Major( new Note('E') ).keySignatures )

//
// ─── CHORDS ─────────────────────────────────────────────────────────────────────
//

    const MajorTriad = new Chord( CMajor.Tonic, CMajor.Mediant, CMajor.Dominant )

    put( "Intervals of a major triad are", MajorTriad.intervals )

// ────────────────────────────────────────────────────────────────────────────────



