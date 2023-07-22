const piano = document.querySelectorAll('.piano-keys .key')
const volumeSlider = document.querySelectorAll('.volume-slider input')
const keysCheckbox = document.querySelector('.keys-checkbox input')

let allKeys = []

let audio = new Audio('tunes/a.wav')

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key=${key}]`)
    clickedKey.classList.add('active')
    setTimeout(() => {
        clickedKey.classList.remove('active')
    }, 80)
}

const showHideKeys = () => {
    piano.forEach(key => key.classList.toggle('hide'))
}

const handleVolume = (e) => {
    const volume = parseFloat(e.target.value);
    if (!isNaN(volume) && isFinite(volume)) {
        audio.volume = volume;
    }
}

piano.forEach(key => {
    allKeys.push(key.dataset.key)
    key.addEventListener('click', ()=> playTune(key.dataset.key))
})

const pressedKey = (e) => {
    if (allKeys.includes(e.key.toLowerCase())) playTune(e.key)
}

keysCheckbox.addEventListener('click', showHideKeys)
document.addEventListener('keydown', pressedKey)
document.addEventListener('input', handleVolume)