
//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

/// <reference path="note.ts" />


namespace Tambourine {

    //
    // ─── SCALE CLASS ────────────────────────────────────────────────────────────────
    //

        export class Scale {

            //
            // ─── STORAGE ─────────────────────────────────────────────────────
            //

                private baseNote: Note
                private halfStepIntervals: number[ ]
                private internalNoteStorage: Note[ ]

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( base: Note, ...halfStepIntervals: number[ ] ) {
                    this.baseNote = base
                    this.halfStepIntervals = halfStepIntervals
                    this.setNotesBasedOnHalfSteps( )
                }

            //
            // ─── PROVIDE THE SCALE NOTES ─────────────────────────────────────
            //

                private setNotesBasedOnHalfSteps ( ) {
                    let intervalSums = 0
                    let notes = [ this.baseNote ]
                    for ( const interval of this.halfStepIntervals ) {
                        intervalSums += interval
                        notes.push( this.baseNote.createNewNoteWithIntervalOf( intervalSums ) )
                    }
                    this.internalNoteStorage = notes
                }

            //
            // ─── GET NOTES ───────────────────────────────────────────────────
            //

                public get notes( ) {
                    return this.internalNoteStorage
                }

            //
            // ─── GET NOTE ────────────────────────────────────────────────────
            //

                /** Starting from 1 as natural note numbers */
                public getNoteAt ( no: number ) {
                    return this.internalNoteStorage[ no - 1 ]
                }

            //
            // ─── GET NOTE NAMES ──────────────────────────────────────────────
            //

                public get noteNames ( ) {
                    return this.notes.map( x => x.name )
                }

            //
            // ─── KEY SIGNATURE ───────────────────────────────────────────────
            //

                public get keySignatures ( ) {
                    return this.noteNames.filter( name => name.endsWith( '#' ) )
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}