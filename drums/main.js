document.body.addEventListener('keydown', (e) => processKey(e.key.toLocaleLowerCase()));

const keyDrumPair = {
    'a' : 'clap',
    's' : 'hi_hat',
    'd' : 'kick',
    'f' : 'open_hat',
    'g' : 'boom',
    'h' : 'ride',
    'j' : 'snare',
    'k' : 'tom',
    'l' : 'tink'
};

for (const key in keyDrumPair) {
    document.getElementById(keyDrumPair[key]).addEventListener('click', () => processKey(key));
}

for (const key in keyDrumPair) {
    let drumBox = document.getElementById(keyDrumPair[key]);
    drumBox.addEventListener('transitionend', () => { drumBox.classList.remove('playing'); });
}

function processKey(key) {
    let buttonName = keyDrumPair[key];
    if (!buttonName) return;
    let audio = new Audio(`./sounds/${buttonName}.wav`);
    audio.play();
    document.getElementById(buttonName).classList.add('playing');
}
