
//
// Copyright 2017-present by Pouya Kary. All Rights Reserved
//

//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    const assert = require('assert')
    const { Note, Scale, ScaleCollection } = require('../bin/tambourine.js')

//
// ─── NOTE ───────────────────────────────────────────────────────────────────────
//

    describe('Scale Class', ( ) => {

        //
        // ─── CREATING SCALES ─────────────────────────────────────────────
        //

            describe('Creating Custom Scales', ( ) => {
                it("Pouya's favorite Blues scale must have [ 'C', 'D#', 'E', 'F', 'F#', 'G', 'A#' ]", ( ) => {
                    const C5 = new Note('C5')
                    const pouyasFavoriteBluesScale = new Scale( C5, 3, 1, 1, 1, 1, 3 )
                    assert.deepEqual( pouyasFavoriteBluesScale.noteNames, [ 'C', 'D#', 'E', 'F', 'F#', 'G', 'A#' ] )
                })

                it("CMajor Scale has [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ]", ( ) => {
                    const C5 = new Note('C5')
                    const CMajorScale = new ScaleCollection.Major( C5 )
                    assert.deepEqual( CMajorScale.noteNames, [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ] )
                })

                it("CMinor Scale has [ 'C', 'D', 'D#', 'F', 'G', 'G#', 'A#' ]", ( ) => {
                    const C5 = new Note('C5')
                    const CMinorScale = new ScaleCollection.Minor( C5 )
                    assert.deepEqual( CMinorScale.noteNames, [ 'C', 'D', 'D#', 'F', 'G', 'G#', 'A#' ] )
                })

                it("Debussy's Pentatonic Scale has [ 'D#', 'F#', 'G#', 'A#', 'D#' ]", ( ) => {
                    const DSharp = new Note('D#5')
                    const DebussyScale = new Scale( DSharp, 3, 2, 2, 5 )
                    assert.deepEqual( DebussyScale.noteNames, [ 'D#', 'F#', 'G#', 'A#', 'D#' ] )
                })
            })

        //
        // ─── SCALE FUNCTIONALITIES ───────────────────────────────────────
        //

            describe('Scale Attributes', ( ) => {
                it("EMajor's Key Signatures are: [ 'F#', 'G#', 'C#', 'D#' ]", ( ) => {
                    const E5 = new Note('E5')
                    const EMajorScale = new ScaleCollection.Major( E5 )
                    assert.deepEqual( EMajorScale.keySignatures, [ 'F#', 'G#', 'C#', 'D#' ] )
                })
            })

        // ─────────────────────────────────────────────────────────────────

    })

// ────────────────────────────────────────────────────────────────────────────────
