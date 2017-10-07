
//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../theory/scale.ts" />
/// <reference path="../../theory/note.ts" />

namespace Tambourine.ScaleCollection {

    //
    // ─── MAJOR SCALES ───────────────────────────────────────────────────────────────
    //

        export class Major extends Scale {

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( base: Note ) {
                    super( base, 2, 2, 1, 2, 2, 2 )
                }

            //
            // ─── NAMED NOTES ─────────────────────────────────────────────────
            //

                public get Tonic ( ) {
                    return this.getNoteAt( 1 )
                }

                public get Supertonic ( ) {
                    return this.getNoteAt( 2 )
                }

                public get Mediant ( ) {
                    return this.getNoteAt( 3 )
                }

                public get Subdominant ( ) {
                    return this.getNoteAt( 4 )
                }

                public get Dominant ( ) {
                    return this.getNoteAt( 5 )
                }

                public get Submediant ( ) {
                    return this.getNoteAt( 6 )
                }

                public get LeadingTone ( ) {
                    return this.getNoteAt( 7 )
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}