const engKey = [
  {
    0: { value: '`', extra: '~', class: 'Backquote' },
    1: { value: '1', extra: '!', class: 'Digit1' },
    2: { value: '2', extra: '@', class: 'Digit2' },
    3: { value: '3', extra: '#', class: 'Digit3' },
    4: { value: '4', extra: '$', class: 'Digit4' },
    5: { value: '5', extra: '%', class: 'Digit5' },
    6: { value: '6', extra: '^', class: 'Digit6' },
    7: { value: '7', extra: '&', class: 'Digit7' },
    8: { value: '8', extra: '*', class: 'Digit8' },
    9: { value: '9', extra: '(', class: 'Digit9' },
    10: { value: '0', extra: ')', class: 'Digit0' },
    11: { value: '-', extra: '_', class: 'Minus' },
    12: { value: '=', extra: '+', class: 'Equal' },
  },
  {
    0: { value: 'Q', extra: '', class: 'KeyQ' },
    1: { value: 'W', extra: '', class: 'KeyW' },
    2: { value: 'E', extra: '', class: 'KeyE' },
    3: { value: 'R', extra: '', class: 'KeyR' },
    4: { value: 'T', extra: '', class: 'KeyT' },
    5: { value: 'Y', extra: '', class: 'KeyY' },
    6: { value: 'U', extra: '', class: 'KeyU' },
    7: { value: 'I', extra: '', class: 'KeyI' },
    8: { value: 'O', extra: '', class: 'KeyO' },
    9: { value: 'P', extra: '', class: 'KeyP' },
    10: { value: '[', extra: '{', class: 'BracketLeft' },
    11: { value: ']', extra: '}', class: 'BracketRight' },
  },
  {
    0: { value: 'A', extra: '', class: 'KeyA' },
    1: { value: 'S', extra: '', class: 'KeyS' },
    2: { value: 'D', extra: '', class: 'KeyD' },
    3: { value: 'F', extra: '', class: 'KeyF' },
    4: { value: 'G', extra: '', class: 'KeyG' },
    5: { value: 'H', extra: '', class: 'KeyH' },
    6: { value: 'J', extra: '', class: 'KeyJ' },
    7: { value: 'K', extra: '', class: 'KeyK' },
    8: { value: 'L', extra: '', class: 'KeyL' },
    9: { value: ';', extra: ':', class: 'Semicolon' },
    10: { value: '\'', extra: '"', class: 'Quote' },
  },
  {
    0: { value: '\\', extra: '|', class: 'Backslash' },
    1: { value: 'Z', extra: '', class: 'KeyZ' },
    2: { value: 'X', extra: '', class: 'KeyX' },
    3: { value: 'C', extra: '', class: 'KeyC' },
    4: { value: 'V', extra: '', class: 'KeyV' },
    5: { value: 'B', extra: '', class: 'KeyB' },
    6: { value: 'N', extra: '', class: 'KeyN' },
    7: { value: 'M', extra: '', class: 'KeyM' },
    8: { value: ',', extra: '<', class: 'Comma' },
    9: { value: '.', extra: '>', class: 'Period' },
    10: { value: '/', extra: '?', class: 'Slash' },
    11: { value: '↑', extra: '', class: 'ArrowUp' },
    13: { value: 'Shift', extra: '', class: 'ShiftRight' },
  },
  {
    0: { value: 'Ctrl', extra: '', class: 'ControlLeft' },
    1: { value: 'WIN', extra: '', class: 'MetaLeft' },
    2: { value: 'Alt', extra: '', class: 'AltLeft' },
    3: { value: 'SPACE', extra: '', class: 'Space' },
    4: { value: 'Alt', extra: '', class: 'AltRight' },
    5: { value: 'Ctrl', extra: '', class: 'ControlRight' },
    6: { value: '←', extra: '', class: 'ArrowLeft' },
    7: { value: '↓', extra: '', class: 'ArrowDown' },
    8: { value: '→', extra: '', class: 'ArrowRight' },
  },
];
const rusKey = [
  {
    0: { value: 'Ё', extra: '', class: 'Backquote' },
    1: { value: '1', extra: '!', class: 'Digit1' },
    2: { value: '2', extra: '@', class: 'Digit2' },
    3: { value: '3', extra: '#', class: 'Digit3' },
    4: { value: '4', extra: '$', class: 'Digit4' },
    5: { value: '5', extra: '%', class: 'Digit5' },
    6: { value: '6', extra: '^', class: 'Digit6' },
    7: { value: '7', extra: '&', class: 'Digit7' },
    8: { value: '8', extra: '*', class: 'Digit8' },
    9: { value: '9', extra: '(', class: 'Digit9' },
    10: { value: '0', extra: ')', class: 'Digit0' },
    11: { value: '-', extra: '_', class: 'Minus' },
    12: { value: '=', extra: '+', class: 'Equal' },
  },
  {
    0: { value: 'Й', extra: '', class: 'KeyQ' },
    1: { value: 'Ц', extra: '', class: 'KeyW' },
    2: { value: 'У', extra: '', class: 'KeyE' },
    3: { value: 'К', extra: '', class: 'KeyR' },
    4: { value: 'Е', extra: '', class: 'KeyT' },
    5: { value: 'Н', extra: '', class: 'KeyY' },
    6: { value: 'Г', extra: '', class: 'KeyU' },
    7: { value: 'Ш', extra: '', class: 'KeyI' },
    8: { value: 'Щ', extra: '', class: 'KeyO' },
    9: { value: 'З', extra: '', class: 'KeyP' },
    10: { value: 'Х', extra: '', class: 'BracketLeft' },
    11: { value: 'Ъ', extra: '', class: 'BracketRight' },
  },
  {
    0: { value: 'Ф', extra: '', class: 'KeyA' },
    1: { value: 'Ы', extra: '', class: 'KeyS' },
    2: { value: 'В', extra: '', class: 'KeyD' },
    3: { value: 'А', extra: '', class: 'KeyF' },
    4: { value: 'П', extra: '', class: 'KeyG' },
    5: { value: 'Р', extra: '', class: 'KeyH' },
    6: { value: 'О', extra: '', class: 'KeyJ' },
    7: { value: 'Л', extra: '', class: 'KeyK' },
    8: { value: 'Д', extra: '', class: 'KeyL' },
    9: { value: 'Ж', extra: '', class: 'Semicolon' },
    10: { value: 'Э', extra: '', class: 'Quote' },
  },
  {
    0: { value: '\\', extra: '|', class: 'Backslash' },
    1: { value: 'Я', extra: '', class: 'KeyZ' },
    2: { value: 'Ч', extra: '', class: 'KeyX' },
    3: { value: 'С', extra: '', class: 'KeyC' },
    4: { value: 'М', extra: '', class: 'KeyV' },
    5: { value: 'И', extra: '', class: 'KeyB' },
    6: { value: 'Т', extra: '', class: 'KeyN' },
    7: { value: 'Ь', extra: '', class: 'KeyM' },
    8: { value: 'Б', extra: '', class: 'Comma' },
    9: { value: 'Ю', extra: '', class: 'Period' },
    10: { value: '.', extra: ',', class: 'Slash' },
    11: { value: '↑', extra: '', class: 'ArrowUp' },
    13: { value: 'Shift', extra: '', class: 'ShiftRight' },
  },
  {
    0: { value: 'Ctrl', extra: '', class: 'ControlLeft' },
    1: { value: 'WIN', extra: '', class: 'MetaLeft' },
    2: { value: 'Alt', extra: '', class: 'AltLeft' },
    3: { value: 'SPACE', extra: '', class: 'Space' },
    4: { value: 'Alt', extra: '', class: 'AltRight' },
    5: { value: 'Ctrl', extra: '', class: 'ControlRight' },
    6: { value: '←', extra: '', class: 'ArrowLeft' },
    7: { value: '↓', extra: '', class: 'ArrowDown' },
    8: { value: '→', extra: '', class: 'ArrowRight' },
  },
];
const codeSet = {
  ShiftLeft: false,
  AltLeft: false,
};

let lang = 'eng';
let language = engKey;
let caps = false;
let capsSwitch = false;
const shift = false; // добавить это, либо он не нужен юзать капс?
let intervalSwitchLang;
let switchedLanguage = false;

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

function toUpToLow() {
  if (!caps) {
    document.querySelectorAll('.value').forEach((el, index) => {
      index++;
      if (index < 51) {
        el.textContent = el.textContent.toLowerCase();
      }
    });
  } else {
    document.querySelectorAll('.value').forEach((el, index) => {
      index++;
      if (index < 51) {
        el.textContent = el.textContent.toUpperCase();
      }
    });
  }
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
        divKey.classList.add('key', 'key-short', `${language[keys][key].class}`);
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
          divKey.classList.add('key', 'key-long', 'Backspace');
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
          divKey.classList.add('key', 'key-middle', 'Tab');
          divKey.textContent = 'Tab';
          divRow.append(divKey);
          const divKeyTab = document.createElement('span');
          divKeyTab.classList.add('value');
          divKeyTab.textContent = '   ';
          divKey.append(divKeyTab);
        }
        const divKey = document.createElement('div');
        divKey.classList.add('key', 'key-short', `${language[keys][key].class}`);
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
          divKey.classList.add('key', 'key-middle', 'Delete');
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
          divKey.classList.add('key', 'key-long', 'CapsLock');
          divKey.setAttribute('style', 'width: 94px;');
          divKey.textContent = 'Caps Lock';
          divRow.append(divKey);
          const divCaps = document.createElement('div');
          divCaps.classList.add('green');
          if (!caps) {
            divCaps.setAttribute('style', 'display:none;');
          }
          divKey.append(divCaps);
        }
        const divKey = document.createElement('div');
        divKey.classList.add('key', 'key-short', `${language[keys][key].class}`);
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
        divKey.append(divKeyValue);
        if (+key === Object.keys(language[keys]).length - 1) {
          const divKey = document.createElement('div');
          divKey.classList.add('key', 'key-long', 'Enter');
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
          divKey.classList.add('key', 'key-long', 'ShiftLeft');
          divKey.textContent = 'Shift';
          divRow.append(divKey);
        }
        const divKey = document.createElement('div');
        divKey.classList.add('key', 'key-short', `${language[keys][key].class}`);
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
        divKey.append(divKeyValue);
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
        divKey.classList.add('key', 'key-short', `${language[keys][key].class}`);
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
  toUpToLow();
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
  const headerRight = document.createElement('div');
  header.append(headerRight);
  const subTitle = document.createElement('h3');
  subTitle.textContent = 'Switch language: Left Shift + Alt';
  headerRight.append(subTitle);
  const textInfo = document.createElement('h5');
  textInfo.textContent = 'Клавиатура создана в операционной системе Windows';
  headerRight.append(textInfo);
}

function resetKeyboard() {
  document.querySelector('.keyboard-wrapper').remove();
  setKeyboardOnLoad();
}

window.addEventListener('load', () => {
  setStartContainer();
  setKeyboardOnLoad();
});

function switchLang() {
  if (codeSet.ShiftLeft && codeSet.AltLeft) {
    if (!switchedLanguage) {
      switchedLanguage = true;
      clearInterval(intervalSwitchLang);
      if (lang === 'eng') {
        lang = 'rus';
        language = rusKey;
      } else {
        lang = 'eng';
        language = engKey;
      }
      resetKeyboard();
    }
  }
}

// KEYDOWN and KEYUP

window.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (document.querySelector(`.${e.code}`) !== null) {
    document.querySelector(`.${e.code}`).closest('.key').classList.add('press');
  }
  if (e.code === 'CapsLock' && !capsSwitch) {
    if (!caps) {
      caps = true;
      capsSwitch = true;
      document.querySelector('.green').removeAttribute('style');
    } else {
      caps = false;
      capsSwitch = true;
      document.querySelector('.green').setAttribute('style', 'display:none;');
    }
  }
  if (e.code in codeSet) {
    codeSet[e.code] = true;
    intervalSwitchLang = setInterval(switchLang, 10);
  }
  toUpToLow();
});

window.addEventListener('keyup', (e) => {
  if (document.querySelector(`.${e.code}`) !== null) {
    document.querySelector(`.${e.code}`).classList.remove('press');
  }
  if (e.code in codeSet) {
    codeSet[e.code] = false;
  }
  if (e.code === 'CapsLock') {
    capsSwitch = false;
  }
  switchedLanguage = false;
  toUpToLow();
});
