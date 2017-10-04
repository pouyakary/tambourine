
//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../theory/scale.ts" />
/// <reference path="../../theory/note.ts" />

namespace Tambourine {

    //
    // ─── MAJOR SCALES ───────────────────────────────────────────────────────────────
    //

        export class MajorScale extends Scale {

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( base: Note ) {
                    super( base, [ 2, 2, 1, 2, 2, 2 ] )
                }

            //
            // ─── NAMED NOTES ─────────────────────────────────────────────────
            //

                public get Tonic ( ) {
                    return this.getNote( 1 )
                }

                public get Supertonic ( ) {
                    return this.getNote( 2 )
                }

                public get Mediant ( ) {
                    return this.getNote( 3 )
                }

                public get Subdominant ( ) {
                    return this.getNote( 4 )
                }

                public get Dominant ( ) {
                    return this.getNote( 5 )
                }

                public get Submediant ( ) {
                    return this.getNote( 6 )
                }

                public get LeadingTone ( ) {
                    return this.getNote( 7 )
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}