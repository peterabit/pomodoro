class LocalStorager {
  constructor(name) {
    this._name = name
    this._data = ''
  }

  get name() { return this._name }
  set name(name) { this._name = name }

  save(data) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(this._name, jsonData)
    return this
  }

  get() {
    return JSON.parse(localStorage.getItem(this._name))
  }
}

export default LocalStorager