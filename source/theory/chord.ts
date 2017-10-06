
//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

/// <reference path="note.ts" />
/// <reference path="scale.ts" />


namespace Tambourine {

    //
    // ─── CHORD CLASS ────────────────────────────────────────────────────────────────
    //

        export class Chord {

            //
            // ─── STORAGE ─────────────────────────────────────────────────────
            //

                private notes: Note[ ]

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( ...notes: Note[ ] ) {
                    this.notes = notes
                }

            //
            // ─── GET INTERVALS ───────────────────────────────────────────────
            //

                public get intervals ( ) {
                    const intervals = new Array<number>( )
                    let lastNote = this.notes[ 0 ]

                    for ( let index = 1; index < this.notes.length; index++ ) {
                        const currentNote = this.notes[ index ]
                        intervals.push( lastNote.getDistanceTo( currentNote ) )
                        lastNote = currentNote
                    }

                    return intervals
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}
