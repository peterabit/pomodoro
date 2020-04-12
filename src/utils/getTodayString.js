const getTodayString = () => {
  const dateIns = new Date()
  const date = dateIns.getDate()
  const month = dateIns.getMonth() + 1
  const fullYear = dateIns.getFullYear()
  return `${date}-${month}-${fullYear}`
}

export default getTodayString