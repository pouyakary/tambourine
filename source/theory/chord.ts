
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

                constructor ( notes: Note[ ] ) {
                    this.notes = notes
                }

            //
            // ─── GET INTERVALS ───────────────────────────────────────────────
            //

                public get intervals ( ) {
                    const intervals = new Array<number>( )
                    let lastNoteMIDI =
                        this.notes[ 0 ].MIDI

                    for ( let index = 1; index < this.notes.length; index++ ) {
                        const currentMIDI =
                            this.notes[ index ].MIDI
                        this.intervals.push( currentMIDI - lastNoteMIDI )
                        lastNoteMIDI = currentMIDI
                    }

                    return intervals
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}