const getFromLocalstorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (error) {
    return false
  }
}
export default getFromLocalstorage 