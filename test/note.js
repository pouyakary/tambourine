

//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    const assert = require('assert')
    const { Note } = require('../bin/tambourine.js')

//
// ─── NOTE ───────────────────────────────────────────────────────────────────────
//

    describe('Note Class', ( ) => {

        //
        // ─── CREATING A NOTE ─────────────────────────────────────────────
        //

            describe('Creating a Note', ( ) => {
                it('Name of the C#5 note must be C5', ( ) => {
                    const C5 = new Note('C#5')
                    assert.equal( C5.name, 'C#')
                })

                it('Octave for the C#5 note must be 5', ( ) => {
                    const C5 = new Note('C#5')
                    assert.equal( C5.octave, 5 )
                })

                it('Creating a note via MIDI number "69" must return A5', ( ) => {
                    const A5 = Note.createNoteByMIDI( 69 )
                    assert.equal( A5.fullName, 'A5' )
                })

                it('Creating a note by 4 half steps from C5 must return E5', ( ) => {
                    const C5 = new Note('C5')
                    const E5 = C5.createNewNoteWithIntervalOf( 4 )
                    assert.equal( E5.fullName, 'E5' )
                })
            })

        //
        // ─── NOTE FUNCTIONALITIES ────────────────────────────────────────
        //

            describe('Note Private Static Functionalities', ( ) => {
                it('Parsing F#3 must return {name: "F#", octave: 3}', ( ) => {
                    const { name, octave } = Note.parseNoteName('F#3')
                    assert.equal( name, 'F#', 'Expected F3 as the name')
                    assert.equal( octave, 3, 'Expected 3 as the octave' )
                })

                it('Name of the MIDI 48 must be C4', ( ) => {
                    const name = Note.getNoteNameByMIDINumber( 48 )
                    assert.equal( name, 'C4' )
                })

                it('Octave of a MIDI 69 must be 5', ( ) => {
                    const octave = Note.getMIDIOctave( 69 )
                    assert.equal( octave, 5 )
                })

                it('NoteNumber of MIDI 69 and Octave 5 must be 9', ( ) => {
                    const noteNumber = Note.getMIDINoteNumber( 69, 5 )
                    assert.equal( noteNumber, 9 )
                })
            })

        //
        // ─── NOTE PUBLIC FUNCTIONALITIES ─────────────────────────────────
        //

            describe('Note Public Static Functionalities', ( ) => {
                it('Acceptable MIDI range must be 0 to 127', ( ) => {
                    assert.equal( Note.isMIDIInRange( -1 ),  false )
                    assert.equal( Note.isMIDIInRange( 0 ),   true  )
                    assert.equal( Note.isMIDIInRange( 127 ), true  )
                    assert.equal( Note.isMIDIInRange( 128 ), false )
                })
            })

        //
        // ─── NOTE ATTRIBUTES ─────────────────────────────────────────────
        //

            describe('Note Attributes', ( ) => {
                it('MIDI number of A5 is 69', ( ) => {
                    const A5 = new Note('A5')
                    assert.equal( A5.MIDI, 69 )
                })

                it('Frequency of A5 must be 440Hz', ( ) => {
                    const A5 = new Note('A5')
                    assert.equal( A5.frequency, 440.0 )
                })
            })

        // ─────────────────────────────────────────────────────────────────

    })

// ────────────────────────────────────────────────────────────────────────────────
