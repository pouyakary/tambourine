
# Tambourine
Tambourine is a framework for writing musical theory software. My main goal is to have a library capable of computing musical theory so that I can write a Hormonizer Engine on top of it. Because this library still doesn't have a the Hormonizer Engine I call it a music theory framework.

# Installing It
You can simply install Tambourine using npm

```
npm install --save tambourine
```

It works with both web and node.js. So you can use it in web like:

```HTML
<script src="node_modules/tambourine/bin/tambourine.js"></script>
```

Or importing it in node.js via any style you like:

```js
import * as Tambourine from 'tambourine'
```

```js
const Tambourine = require('tambourine')
```

Tambourine also comes with TypeScript type declarations. If your compiler can't find the type you can simply include it via:

```ts
/// <reference path="node_modules/tambourine/bin/tambourine.d.ts" />
```

# API
__Tambourine's full documentation can be found at [tambourine.kary.us](http://tambourine.kary.us).__

## Notes
### Creating Notes
```js
import { Note } from 'tambourine'

// Middle C (C5)
const C5 = new Note('C5')

// E#6
const ESharp6 = new Note('E#6')

// Creating a note 4 half steps after C5 which results in creating E5
const E5 = C5.createNewNoteWithIntervalOf( 4 )

// Creating note using MIDI number, For example A5 in midi is 69
const A5 = Note.createNoteByMIDI( 69 )
```

### Note Functions
```js
import { Note } from 'tambourine'

const A5 = new Note('A5')

// Note Attributes
A5.frequency    // returns 440  (number)
A5.fullName     // returns 'A5' (string)
A5.name         // returns 'A'  (string)
A5.octave       // returns 5    (number)
A5.MIDI         // returns 69   (string)

// Note Methods
A5.getDistanceTo( new Note('B5') ) // returns 2 (number) (as half steps)
```

## Scales
### Creating Scales
```js
import { Note, Scale, ScaleCollection } from 'tambourine'

// You can create a new Scale by specifying the first note and then
// distance (intervals) between the notes, For example C major has:
// C, D, E, F, G, A, B. first note is 'C' and then distance between
// C and D is 2 half steps, then D and E is 2 half steps, E and F is
// 1 half step and so on. So the notation to create this scale will be:

const C4 = new Note('C4')
const C4MajorScale = new Scale( C4, 2, 2, 1, 2, 2, 2 )

// However to ease your job we provide a collection for scales
const C5 = new Note('C5')
const C5MajorScale = new ScaleCollection.Major( C5 )

// And Minor scales as well:
const C5minorScale = new ScaleCollection.Minor( C5 )
```

### Working with Scales
```js
import { Note, Scale, ScaleCollection } from 'tambourine'

const E5MajorScale = new ScaleCollection.Major( new Note('E5') )

// Properties
E5MajorScale.noteNames      // returns [ 'E', 'F#', 'G#', 'A', 'B', 'C#', 'D#' ]
                            // (string[ ]) - The name of the notes in string
E5MajorScale.notes          // returns an array of Note class instances (Note[])
E5MajorScale.keySignatures  // returns [ 'F#', 'G#', 'C#', 'D#' ] (string[])
```