
//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../theory/scale.ts" />
/// <reference path="../../theory/note.ts" />

namespace Tambourine.ScaleCollection {

    //
    // ─── MAJOR SCALES ───────────────────────────────────────────────────────────────
    //

        export class Minor extends Scale {

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( base: Note ) {
                    super( base, 2, 1, 2, 2, 1, 2 )
                }

            //
            // ─── NOTE NAMES ──────────────────────────────────────────────────
            //

                public get Tonic ( ) {
                    return this.getNoteAt( 1 )
                }

                public get Supertonic ( ) {
                    return this.getNoteAt( 2 )
                }

                public get MinorMediant ( ) {
                    return this.getNoteAt( 3 )
                }

                public get Subdominant ( ) {
                    return this.getNoteAt( 4 )
                }

                public get Dominant ( ) {
                    return this.getNoteAt( 5 )
                }

                public get MinorSubmediant ( ) {
                    return this.getNoteAt( 6 )
                }

                public get Subtonic ( ) {
                    return this.getNoteAt( 7 )
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}