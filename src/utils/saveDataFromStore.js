const saveDataFromStore = (store) =>
  (seletorObj) =>
    () => {
      const state = store.getState()
      const keys = Object.keys(seletorObj)
      keys.forEach(key => {
        const seletor = seletorObj[key]
        const jsonData = JSON.stringify(seletor(state))
        localStorage.setItem(key, jsonData)
      });
    }

export default saveDataFromStore