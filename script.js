const tellsis = document.getElementById('tellsis');
const roman = document.getElementById('roman');
const tamil = document.getElementById('tamil');
const properNoun = new Set([
  'Gilbert',
  'Bougainvillea',
  'Violet',
  'Evergarden',
  'Leidenscftlich',
  'Leiden',
  'Claudia',
  'Hotchins',
]);
const trans = {
  "a": "u",
  "b": "b",
  "c": "y",
  "d": "d",
  "e": "o",
  "f": "f",
  "g": "v",
  "h": "t",
  "i": "i",
  "j": "s",
  "k": "r",
  "l": "q",
  "m": "p",
  "n": "n",
  "o": "e",
  "p": "m",
  "q": "l",
  "r": "k",
  "s": "j",
  "t": "h",
  "u": "a",
  "v": "g",
  "w": "w",
  "x": "x",
  "y": "c",
  "z": "z",
  "A": "U",
  "B": "B",
  "C": "Y",
  "D": "D",
  "E": "O",
  "F": "F",
  "G": "V",
  "H": "T",
  "I": "I",
  "J": "S",
  "K": "R",
  "L": "Q",
  "M": "P",
  "N": "N",
  "O": "E",
  "P": "M",
  "Q": "L",
  "R": "K",
  "S": "J",
  "T": "H",
  "U": "A",
  "V": "G",
  "W": "W",
  "X": "X",
  "Y": "C",
  "Z": "Z"
};
const input_event = event => {
  const input_str = event.currentTarget.value;
  tellsis.value = input_str;
  roman.value = input_str;
  tamil.value = input_str.replace(/\w+/g, word => {
    if (!properNoun.has(word)) {
      return word.replace(/[A-Za-z]/g, char => trans[char]);
    } else {
      return word;
    }
  });
}
tellsis.addEventListener('input', input_event);
roman.addEventListener('input', input_event);

