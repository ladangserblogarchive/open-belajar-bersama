/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case

*/

/*
    Mengecek string tidak berulang
    Apa => false (mengulang 'a')
    Aku => true ('tidak mengulang apapun')
*/

function isIsogram(iso) {

    // ubah ukuran
    iso = iso.toLowerCase();
    
    // explode
    let isox = iso.split('');

    for (let i = 0; i < isox.length; i++) {
        let point = 0;
        for (let j = i + 1; j < isox.length; j++) {
            if (isox[point] === isox[j]) {
                console.log("Ada");
                return false;
            } else {
                point = point + 1;
            }
        }
    }

    console.log("Aman");
    return true;

}

// isIsogram("ipaa");

// isIsogram("Dermatoglyphics");
// isIsogram("isogram");
isIsogram("moose");
// isIsogram("abca");
// isIsogram("isIsogram");
// isIsogram("");
