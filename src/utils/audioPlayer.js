export default class AudioPlayer {
  constructor(src) {
    this._src = src
    this._loadPromise = null
    this._timeOut = null
    this._status = 'pause'
    this._audio = new Audio(src)
    this._audio.loop = true
    this._audio.addEventListener('loadstart', e => {
      this._status = 'loading'
    })
    this._audio.addEventListener('playing', e => {
      this._status = 'playing'
    })
  }
  play() {
    this._loadPromise = this._audio.play()
    return this
  }
  async pause() {
    await this._loadPromise
    this._audio.pause()
    this._status = 'pause'
    return this
  }
  async pauseAfterTimes(time) {
    await this._loadPromise
    return new Promise((resolve, reject) => {
      this._timeOut = setTimeout(() => {
        this._audio.pause()
        resolve()
      }, time)
    })
  }
}