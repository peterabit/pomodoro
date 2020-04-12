export default function transSecondToMinute(secondsTime) {
  let minutes = Math.floor(secondsTime / 60)
  minutes = minutes < 10 ? '0' + minutes : minutes
  let seconds = secondsTime % 60
  seconds = seconds < 10 ? '0' + seconds : seconds
  return [minutes, seconds]
}