const IMAGESERVER = 'https://d1j2lkoxx8uycr.cloudfront.net/'

export const ToSMPTEu = function (secs) {
  return ToSMPTE(secs).split(':').join('_')
}
// returnerer vanlig: 00:12:12:05
const ToSMPTE = function (secs) {
  const secNum = parseInt(secs, 10)
  const hours = Math.floor(secNum / 3600) % 24
  const minutes = Math.floor(secNum / 60) % 60
  const seconds = secNum % 60
  const SMPTEu3 = [hours, minutes, seconds]
    .map(v => v < 10 ? '0' + v : v)
    .join(':')
  let tenths = (parseFloat(secs) % 1).toFixed(2)
  tenths = tenths >= 0.96 ? 0.96 : tenths
  let frames = parseInt((tenths * 25).toFixed(0))
  frames = frames < 10 ? '00' : frames
  const SMPTE = SMPTEu3 + ':' + String(frames)
  return SMPTE
}

export const secondsToMMSS = (secs) => {
  const mmss = ToSMPTE(secs).split(':')
  return `${mmss[1]}:${mmss[2]}`
}

export const thumb = (fileName, time, width) => {
  const SMTPu = ToSMPTEu(time)
  const imageUrl = IMAGESERVER + 'SMPTE_' + SMTPu + ',w_' + width + '/' + fileName + '.jpg'
  return imageUrl
}