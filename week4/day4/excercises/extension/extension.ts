// Check out the folder. There's a work file and a test file.

//  -  Run the tests, all 10 should be green (passing).
//  -  The implementations though are not quite good.
//  -  Create tests that'll fail, and will show how the implementations are wrong(You can assume that the implementation of join and split are good)
//  -  After creating the tests, fix the implementations
//  -  Check again, if you can create failing tests
//  -  Implement if needed

'use strict';

export function add(a: number, b: number): number {
    return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
    if (a > b) {
        if (a > c) {
            return a;
        }
        else {
            return c;
        }
    } else {
        if (b > c) {
            return b;
        }
        else {
            return c;
        }
    }
};

export function median(pool: number[]): number {
    pool = pool.sort((a, b) => a - b);
    if (pool.length % 2 == 1) {
        return pool[(pool.length - 1) / 2]
    }
    else {
        return (pool[pool.length / 2] + pool[pool.length / 2 - 1]) / 2;
    }
}

export function isVowel(character: string): boolean {
    return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character.toLowerCase());
}

export function translate(hungarian: string): string {
    let teve = hungarian;
    let length = teve.length;

    for (let i = 0; i < length; i++) {
        let c = teve[i];
        if (isVowel(c)) {
            teve = teve.slice(0, i) + `${c}v${c}` + teve.slice(i + 1, length);
            i += 2;
            length += 2;
        }
    }
    return teve;
}