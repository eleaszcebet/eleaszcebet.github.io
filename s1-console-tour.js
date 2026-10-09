/* console crib · slide: s1-console · indicator 1 · typed live, one line at a time, in the Console
   of stage-7-0-attach/index.html. Not loaded by any page. The comment after each line is what
   the Console answers. Five minutes, no more — then straight to the page. */

"Little Lemon"                    /* 'Little Lemon'  — a string: text, always in quotes */
10                                /* 10              — a number: no quotes */
11 < 22                           /* true            — a boolean: true or false, nothing else */

typeof "Little Lemon"             /* 'string' */
typeof 10                         /* 'number' */
typeof true                       /* 'boolean' */

const restaurant = "Little Lemon";   /* const: a name for a value that will not change */
restaurant                        /* 'Little Lemon' */
let guests = 4;                   /* let: a name for a value that will change */
guests = guests + 1;              /* 5 */
restaurant = "Big Lemon";         /* TypeError: Assignment to constant variable. — const means it */

4 + 2                             /* 6 */
"4" + 2                           /* '42'  ← the trap: + with text JOINS */
Number("4") + 2                   /* 6     ← convert first */
