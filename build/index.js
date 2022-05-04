const engKey = [
  {
    0: { value: '`', extra: '~' },
    1: { value: '1', extra: '!' },
    2: { value: '2', extra: '@' },
    3: { value: '3', extra: '#' },
    4: { value: '4', extra: '$' },
    5: { value: '5', extra: '%' },
    6: { value: '6', extra: '^' },
    7: { value: '7', extra: '&' },
    8: { value: '8', extra: '*' },
    9: { value: '9', extra: '(' },
    10: { value: ')', extra: ')' },
    11: { value: '-', extra: '_' },
    12: { value: '=', extra: '+' },
  },
  {
    0: { value: 'Q', extra: '' },
    1: { value: 'W', extra: '' },
    2: { value: 'E', extra: '' },
    3: { value: 'R', extra: '' },
    4: { value: 'T', extra: '' },
    5: { value: 'Y', extra: '' },
    6: { value: 'U', extra: '' },
    7: { value: 'I', extra: '' },
    8: { value: 'O', extra: '' },
    9: { value: 'P', extra: '' },
    10: { value: '[', extra: '{' },
    11: { value: ']', extra: '}' },
  },
  {
    0: { value: 'A', extra: '' },
    1: { value: 'S', extra: '' },
    2: { value: 'D', extra: '' },
    3: { value: 'F', extra: '' },
    4: { value: 'G', extra: '' },
    5: { value: 'H', extra: '' },
    6: { value: 'J', extra: '' },
    7: { value: 'K', extra: '' },
    8: { value: 'L', extra: '' },
    9: { value: ';', extra: ':' },
    10: { value: '\'', extra: '"' },
  },
  {
    0: { value: '\\', extra: '|' },
    1: { value: 'Z', extra: '' },
    2: { value: 'X', extra: '' },
    3: { value: 'C', extra: '' },
    4: { value: 'V', extra: '' },
    5: { value: 'B', extra: '' },
    6: { value: 'N', extra: '' },
    7: { value: 'M', extra: '' },
    8: { value: ',', extra: '<' },
    9: { value: '.', extra: '>' },
    10: { value: '/', extra: '?' },
    11: { value: '↑', extra: '' },
    13: { value: 'Shift', extra: '' },
  },
  {
    0: { value: 'Ctrl', extra: '' },
    1: { value: 'WIN', extra: '' },
    2: { value: 'Alt', extra: '' },
    3: { value: 'SPACE', extra: '' },
    4: { value: 'Alt', extra: '' },
    5: { value: 'Ctrl', extra: '' },
    6: { value: '←', extra: '' },
    7: { value: '↓', extra: '' },
    8: { value: '→', extra: '' },
  },
];
const rusKey = [
  {
    0: { value: '`', extra: '~' },
    1: { value: '1', extra: '!' },
    2: { value: '2', extra: '@' },
    3: { value: '3', extra: '#' },
    4: { value: '4', extra: '$' },
    5: { value: '5', extra: '%' },
    6: { value: '6', extra: '^' },
    7: { value: '7', extra: '&' },
    8: { value: '8', extra: '*' },
    9: { value: '9', extra: '(' },
    10: { value: ')', extra: ')' },
    11: { value: '-', extra: '_' },
    12: { value: '=', extra: '+' },
  },
  {
    0: { value: 'Й', extra: '' },
    1: { value: 'Ц', extra: '' },
    2: { value: 'У', extra: '' },
    3: { value: 'К', extra: '' },
    4: { value: 'Е', extra: '' },
    5: { value: 'Н', extra: '' },
    6: { value: 'Г', extra: '' },
    7: { value: 'Ш', extra: '' },
    8: { value: 'Щ', extra: '' },
    9: { value: 'З', extra: '' },
    10: { value: 'Х', extra: '' },
    11: { value: 'Ъ', extra: '' },
  },
  {
    0: { value: 'Ф', extra: '' },
    1: { value: 'Ы', extra: '' },
    2: { value: 'В', extra: '' },
    3: { value: 'А', extra: '' },
    4: { value: 'П', extra: '' },
    5: { value: 'Р', extra: '' },
    6: { value: 'О', extra: '' },
    7: { value: 'Л', extra: '' },
    8: { value: 'Д', extra: '' },
    9: { value: 'Ж', extra: '' },
    10: { value: 'Э', extra: '' },
  },
  {
    0: { value: '\\', extra: '|' },
    1: { value: 'Я', extra: '' },
    2: { value: 'Ч', extra: '' },
    3: { value: 'С', extra: '' },
    4: { value: 'М', extra: '' },
    5: { value: 'И', extra: '' },
    6: { value: 'Т', extra: '' },
    7: { value: 'Ь', extra: '' },
    8: { value: 'Б', extra: '' },
    9: { value: 'Ю', extra: '' },
    10: { value: '.', extra: ',' },
    11: { value: '↑', extra: '' },
    13: { value: 'Shift', extra: '' },
  },
  {
    0: { value: 'Ctrl', extra: '' },
    1: { value: 'WIN', extra: '' },
    2: { value: 'Alt', extra: '' },
    3: { value: 'SPACE', extra: '' },
    4: { value: 'Alt', extra: '' },
    5: { value: 'Ctrl', extra: '' },
    6: { value: '←', extra: '' },
    7: { value: '↓', extra: '' },
    8: { value: '→', extra: '' },
  },
];

let lang = 'eng';
let language = engKey;
let caps = false;

// window.addEventListener('beforeunload', () => {
//     localStorage.setItem('lang', lang);
//     localStorage.setItem('caps', caps);
// });
console.log('Клавиатура запоминает состояние языка и состояние caps lock');

window.addEventListener('load', () => {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }
  if (localStorage.getItem('caps')) {
    caps = localStorage.getItem('caps');
  }
});

function writeText(content) {
  document.querySelector('.text').textContent += content.toLowerCase();
}

function setKeyboardOnLoad() {
  if (lang === 'rus') {
    language = rusKey;
  } else {
    language = engKey;
  }
  const divRowsWrapper = document.createElement('div');
  divRowsWrapper.classList.add('keyboard-wrapper');
  document.querySelector('.container').append(divRowsWrapper);
  for (const keys in language) {
    if (keys === '0') {
      const divRow = document.createElement('div');
      divRow.classList.add('row-key', 'row-first');
      divRowsWrapper.append(divRow);

      for (const key in engKey[keys]) {
        const divKey = document.createElement('div');
        divKey.classList.add('key', 'key-short');
        if (language[keys][key].extra.length > 0) {
          const divKeyValueExtra = document.createElement('span');
          divKeyValueExtra.classList.add('extra');
          divKeyValueExtra.textContent = language[keys][key].extra;
          divKey.append(divKeyValueExtra);
        }
        const divKeyValue = document.createElement('span');
        divKeyValue.classList.add('value');
        divKeyValue.textContent = language[keys][key].value;
        divKey.append(divKeyValue);
        divRow.append(divKey);
        if (+key === Object.keys(language[keys]).length - 1) {
          const divKey = document.createElement('div');
          divKey.classList.add('key', 'key-long');
          divKey.textContent = 'backspace';
          divRow.append(divKey);
        }
      }
    }
    if (keys === '1') {
      const divRow = document.createElement('div');
      divRow.classList.add('row-key', 'row-second');
      divRowsWrapper.append(divRow);

      for (const key in language[keys]) {
        if (+key === 0) {
          const divKey = document.createElement('div');
          divKey.classList.add('key', 'key-middle');
          divKey.textContent = 'Tab';
          divRow.append(divKey);
          const divKeyTab = document.createElement('span');
          divKeyTab.classList.add('value');
          divKeyTab.textContent = '   ';
          divKey.append(divKeyTab);
        }
        const divKey = document.createElement('div');
        divKey.classList.add('key', 'key-short');
        if (language[keys][key].extra.length > 0) {
          const divKeyValueExtra = document.createElement('span');
          divKeyValueExtra.classList.add('extra');
          divKeyValueExtra.textContent = language[keys][key].extra;
          divKey.append(divKeyValueExtra);
        }
        const divKeyValue = document.createElement('span');
        divKeyValue.classList.add('value');
        divKeyValue.textContent = language[keys][key].value;
        divKey.append(divKeyValue);
        divRow.append(divKey);
        if (+key === Object.keys(language[keys]).length - 1) {
          const divKey = document.createElement('div');
          divKey.classList.add('key', 'key-middle');
          divKey.textContent = 'del';
          divRow.append(divKey);
        }
      }
    }
    if (keys === '2') {
      const divRow = document.createElement('div');
      divRow.classList.add('row-key', 'row-third');
      divRowsWrapper.append(divRow);

      for (const key in language[keys]) {
        if (+key === 0) {
          const divKey = document.createElement('div');
          divKey.classList.add('key', 'key-long');
          divKey.setAttribute('style', 'width: 94px;');
          divKey.textContent = 'Caps Lock';
          divRow.append(divKey);
          const divCaps = document.createElement('div');
          divCaps.classList.add('green');
          divCaps.setAttribute('style', 'display:none;');
          divKey.append(divCaps);
        }
        const divKey = document.createElement('div');
        divKey.classList.add('key', 'key-short');
        if (language[keys][key].extra.length > 0) {
          const divKeyValueExtra = document.createElement('span');
          divKeyValueExtra.classList.add('extra');
          divKeyValueExtra.textContent = language[keys][key].extra;
          divKey.append(divKeyValueExtra);
        }
        const divKeyValue = document.createElement('span');
        divKeyValue.classList.add('value');
        divKeyValue.textContent = language[keys][key].value;
        divKey.append(divKeyValue);
        divRow.append(divKey);
        if (+key === Object.keys(language[keys]).length - 1) {
          const divKey = document.createElement('div');
          divKey.classList.add('key', 'key-long');
          divKey.setAttribute('style', 'width: 94px;');
          divKey.textContent = 'Enter';
          divRow.append(divKey);
          const divKeyValue = document.createElement('span');
          divKeyValue.classList.add('value');
          divKeyValue.setAttribute('style', 'display:none');
          divKeyValue.textContent = '\n';
          divKey.append(divKeyValue);
        }
      }
    }
    if (keys === '3') {
      const divRow = document.createElement('div');
      divRow.classList.add('row-key', 'row-four');
      divRowsWrapper.append(divRow);

      for (const key in language[keys]) {
        if (+key === 0) {
          const divKey = document.createElement('div');
          divKey.classList.add('key', 'key-long');
          divKey.textContent = 'Shift';
          divRow.append(divKey);
        }
        const divKey = document.createElement('div');
        divKey.classList.add('key', 'key-short');
        if (language[keys][key].extra.length > 0) {
          const divKeyValueExtra = document.createElement('span');
          divKeyValueExtra.classList.add('extra');
          divKeyValueExtra.textContent = language[keys][key].extra;
          divKey.append(divKeyValueExtra);
        }
        const divKeyValue = document.createElement('span');
        divKeyValue.classList.add('value');
        divKeyValue.textContent = language[keys][key].value;
        divKey.append(divKeyValue);
        divRow.append(divKey);
        if (+key === Object.keys(language[keys]).length - 1) {
          const divKey = document.createElement('div');
          divKey.classList.add('key', 'key-short');
          divKey.textContent = 'Shift';
          divRow.append(divKey);
        }
      }
    }
    if (keys === '4') {
      const divRow = document.createElement('div');
      divRow.classList.add('row-key', 'row-five');
      divRowsWrapper.append(divRow);

      for (const key in language[keys]) {
        const divKey = document.createElement('div');
        divKey.classList.add('key', 'key-short');
        divRow.append(divKey);
        if (language[keys][key].extra.length > 0) {
          const divKeyValueExtra = document.createElement('span');
          divKeyValueExtra.classList.add('extra');
          divKeyValueExtra.textContent = language[keys][key].extra;
          divKey.append(divKeyValueExtra);
        }
        const divKeyValue = document.createElement('span');
        divKeyValue.classList.add('value');
        divKeyValue.textContent = language[keys][key].value;
        if (language[keys][key].value === 'SPACE') {
          divKey.setAttribute('style', 'width:296px;');
          divKeyValue.textContent = ' ';
        }
        if (language[keys][key].value === 'Ctrl' && +key === 0) {
          divKey.setAttribute('style', 'width: 84px;');
        }
        divKey.append(divKeyValue);
      }
    }
  }
  document.querySelector('.keyboard-wrapper').addEventListener('click', (e) => {
    if (!e.target.classList.contains('row-key')) {
      e = e.target.closest('.key');
      writeText(e.querySelector('.value').textContent);
    }
  });
}

function setStartContainer() {
  const divContainer = document.createElement('div');
  divContainer.classList.add('container');
  document.querySelector('body').prepend(divContainer);
  const textarea = document.createElement('textarea');
  textarea.classList.add('text');
  divContainer.append(textarea);

  const header = document.createElement('header');
  document.querySelector('body').prepend(header);
  const title = document.createElement('h1');
  title.textContent = 'Virtual Keyboard';
  header.append(title);
  const subTitle = document.createElement('h3');
  subTitle.textContent = 'Switch language: Left Shift + Alt';
  header.append(subTitle);
}

function resetLanguage() {
  document.querySelector('.keyboard-wrapper').remove();
  setKeyboardOnLoad();
}

window.addEventListener('load', () => {
  setStartContainer();
  setKeyboardOnLoad();
});

// KEYDOWN

window.addEventListener('keydown', (e) => {
  console.log(e);
});
