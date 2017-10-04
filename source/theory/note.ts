
//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

namespace Tambourine {

    //
    // ─── TYPES ──────────────────────────────────────────────────────────────────────
    //

        type NoteName =
            'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B' |
            'c' | 'c#' | 'd' | 'd#' | 'e' | 'f' | 'f#' | 'g' | 'g#' | 'a' | 'a#' | 'b'
        type MIDINoteNumber =
            0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
        type OctaveNumber =
            1 | 2 | 3 | 4 | 5 | 6 | 7

    //
    // ─── NOTES ──────────────────────────────────────────────────────────────────────
    //

        const ListOfNoteNames =
            [ 'C' , 'C#' , 'D' , 'D#' , 'E' , 'F' , 'F#' , 'G' , 'G#' , 'A', 'A#' , 'B' ]

    //
    // ─── NOTE CLASS ─────────────────────────────────────────────────────────────────
    //

        export class Note {

            //
            // ─── STORAGE ─────────────────────────────────────────────────────
            //

                private name: NoteName
                private octave: OctaveNumber

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( name: NoteName, octave: OctaveNumber = 4 ) {
                    this.setOctave( octave )
                    this.setName( name )
                }

            //
            // ─── GET NOTE NAME FROM NUMBER ───────────────────────────────────
            //

                /** Returns the __Note Name__ based on __MIDI Note Number__ */
                public static getNoteNameByMIDINumber ( midiNote: number ) {
                    const octave =
                        Note.getMIDIOctave( midiNote )
                    const noteNumber =
                        Note.getMIDINoteNumber( midiNote, octave )

                    return ListOfNoteNames[ noteNumber ] as NoteName
                }

            //
            // ─── GET MIDI OCTAVE ─────────────────────────────────────────────
            //

                private static getMIDIOctave ( midiNote: number ) {
                    return Math.floor( midiNote / 12 ) as OctaveNumber
                }

            //
            // ─── GET MIDI NOTE NUMBER ────────────────────────────────────────
            //

                private static getMIDINoteNumber ( midiNote: number,  octave: number ) {
                    return midiNote - octave * 12 as MIDINoteNumber
                }

            //
            // ─── GET NOTE FROM MIDI ──────────────────────────────────────────
            //

                /** Creates a `Note` from a _midi_ note number */
                public static createNoteByMIDI ( midiNote: number ) {
                    const octave =
                        Note.getMIDIOctave( midiNote )
                    const noteNumber =
                        Note.getMIDINoteNumber( midiNote, octave )

                    return new Note( noteNumber, octave )
                }

            //
            // ─── IS MIDI IN RANGE ────────────────────────────────────────────
            //

                /**
                 * Checks if the given __MIDI Note Number__ is in the range of
                 * possible MIDI numbers (`0` &mdash; `127`)
                 */
                public static isMIDIInRange ( midiNote: number ) {
                    return -1 < midiNote && midiNote < 128
                }

            //
            // ─── CHANGE OCTAVE ───────────────────────────────────────────────
            //

                /** Moves the __Octave__ of the current note */
                public setOctave ( octave: number ) {
                    if ( Math.floor( octave ) === octave && 0 <= octave && octave < 8 )
                        this.octave = Math.floor( octave ) as OctaveNumber
                    else
                        throw `Given octave number "${ octave }" is out of range.`
                }

            //
            // ─── CHANGE NAME ─────────────────────────────────────────────────
            //

                public setName ( name: NoteName ) {
                    const upperNoteName = name.toUpperCase( )
                    if ( upperNoteName in ListOfNoteNames )
                        this.name = upperNoteName as NoteName
                    else
                        throw "name is not supported"
                }

            //
            // ─── GET MIDI OF THE NOTE ────────────────────────────────────────
            //

                /** Returns the __MIDI Note Number__ of the current note */
                public toMIDI ( ) {
                    const currentNoteNumber =
                        ListOfNoteNames.indexOf( this.name )
                    const currentNoteMIDI =
                        ( this.octave * 12 ) + currentNoteNumber

                    return currentNoteMIDI
                }

            //
            // ─── CREATE A NOTE BY INTERVAL DIFFERENCE ────────────────────────
            //

                /**
                 * Creates a new `Note` with a given __interval__ of
                 * current `Note`
                 */
                public createNewNoteWithIntervalOf ( interval: number ) {
                    const newNoteMIDI =
                        this.toMIDI( ) + interval

                    if ( !Note.isMIDIInRange( newNoteMIDI ) )
                        throw `New note is not in MIDI range (New MIDI was ${ newNoteMIDI })`

                    return Note.createNoteByMIDI( newNoteMIDI )
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}