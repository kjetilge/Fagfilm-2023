const IMAGESERVER = 'https://d1j2lkoxx8uycr.cloudfront.net/'

export const ToSMPTEu = function (secs: string) {
  return ToSMPTE(secs).split(':').join('_')
}
// returnerer vanlig: 00:12:12:05
const ToSMPTE = function (secs: string) {
  const secNum = parseInt(secs, 10)
  const hours = Math.floor(secNum / 3600) % 24
  const minutes = Math.floor(secNum / 60) % 60
  const seconds = secNum % 60
  const SMPTEu3 = [hours, minutes, seconds]
    .map(v => v < 10 ? '0' + v : v)
    .join(':')
  let tenths = parseFloat((parseFloat(secs) % 1).toFixed(2))
  tenths = tenths >= 0.96 ? 0.96 : tenths
  let framesNum = parseInt((tenths * 25).toFixed(0))
  const frames = framesNum < 10 ? '00' : framesNum.toString()
  const SMPTE = SMPTEu3 + ':' + String(frames)
  return SMPTE
}

export const secondsToMMSS = (secs: string) => {
  const mmss = ToSMPTE(secs).split(':')
  return `${mmss[1]}:${mmss[2]}`
}

export const thumb = (fileName:String, time: number, width: string) => {
  const SMTPu = ToSMPTEu(time.toString())
  const imageUrl = IMAGESERVER + 'SMPTE_' + SMTPu + ',w_' + width + '/' + fileName + '.jpg'
  return imageUrl
}