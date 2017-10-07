
//
// Copyright © 2017-present Pouya Kary <k@karyfoundation.org>
//

/// <reference path="theory/note.ts" />
/// <reference path="theory/scale.ts" />
/// <reference path="theory/chord.ts" />
/// <reference path="lib/scales/major.ts" />
/// <reference path="lib/scales/minor.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts" />


//
// ─── EXPORT SYSTEM ──────────────────────────────────────────────────────────────
//

    if ( __dirname && module.exports && process.cwd ) {
        module.exports = Tambourine
    } else if ( window ) {
        ( window as any ).Tambourine = Tambourine
    }

// ────────────────────────────────────────────────────────────────────────────────
