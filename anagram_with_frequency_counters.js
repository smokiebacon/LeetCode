//given two stings, write a function to determine if the second string is an anagram of the first.
//console.log('cat','tac') true
//console.log('anagram', 'nagrama') true
//console.log('asdf','aqwe') false

function isAnagram(string, string2) {
  //loop through first string
  let counter1 = {};
  let counter2 = {};
  for (const element of string) {
    counter1[element] = (counter1[element] || 0) + 1;
    //{
    // {'a' : '1'}
    //
  }
  for (const element of string2) {
    counter2[element] = (counter2[element] || 0) + 1;
  }

  for (const count in counter1) {
    if (counter1[count] !== counter2[count]) return false;
    // { 'a' : 2 } ==== {'a' : 2}
    //
    //
  }
  return true;
}

isAnagram();
