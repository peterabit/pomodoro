const getDateString = (date) => {
  const dateIns = date ? new Date(date) : new Date()
  const day = dateIns.getDate()
  const month = dateIns.getMonth() + 1
  const fullYear = dateIns.getFullYear()
  return `${day}-${month}-${fullYear}`
}

export default getDateString