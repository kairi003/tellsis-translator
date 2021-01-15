(async () => {
  const proms = ['data/translate.json', 'data/proper-noun.json'].map(url => fetch(url).then(r => r.json()));
  proms.push(new Promise(resolve => window.addEventListener('DOMContentLoaded', resolve)));
  const [translate, properNounData] = await Promise.all(proms);
  const tamil = document.getElementById('tamil');
  const properNoun = document.getElementById('properNoun');
  properNoun.value = properNounData.join('\n');
  const inputTextarea = document.querySelectorAll('textarea.input');
  inputTextarea.forEach(elm => elm.addEventListener('input', event => {
    const input_str = event.currentTarget.value;
    inputTextarea.forEach(elm => elm.value = input_str);
    const properNounSet = new Set(properNoun.value.match(/\w+/g));
    tamil.value = input_str.replace(/\w+/g, word =>
      properNounSet.has(word) ? word : word.replace(/[A-Za-z]/g, c => translate[c]));
  }));
})();