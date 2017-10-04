
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
                private notes: Note[ ]

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( base: Note, halfStepIntervals: number[ ] ) {
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
                    this.notes = notes
                }

            //
            // ─── GET NOTES ───────────────────────────────────────────────────
            //

                public getNotes( ) {
                    return this.notes
                }

            //
            // ─── GET NOTE ────────────────────────────────────────────────────
            //

                /** Starting from 1 as natural note numbers */
                public getNote ( no: number ) {
                    return this.notes[ no - 1 ]
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}