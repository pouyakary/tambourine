
//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../theory/scale.ts" />
/// <reference path="../../theory/note.ts" />

namespace Tambourine {

    //
    // ─── MAJOR SCALES ───────────────────────────────────────────────────────────────
    //

        export class MinorScale extends Scale {

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( base: Note ) {
                    super( base, [ 2, 1, 2, 2, 1, 2 ] )
                }

            //
            // ─── NOTE NAMES ──────────────────────────────────────────────────
            //

                public get Tonic ( ) {
                    return this.getNote( 1 )
                }

                public get Supertonic ( ) {
                    return this.getNote( 2 )
                }

                public get MinorMediant ( ) {
                    return this.getNote( 3 )
                }

                public get Subdominant ( ) {
                    return this.getNote( 4 )
                }

                public get Dominant ( ) {
                    return this.getNote( 5 )
                }

                public get MinorSubmediant ( ) {
                    return this.getNote( 6 )
                }

                public get Subtonic ( ) {
                    return this.getNote( 7 )
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}