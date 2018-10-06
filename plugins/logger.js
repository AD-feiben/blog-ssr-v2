let installed = false

function getLocalTime () {
  return new Date().toLocaleTimeString()
}

function logger () {
  if (installed) return
  installed = true
  for (let key in console) {
    try {
      console[key] = console[key].bind(this, `【${getLocalTime()}】`)
    } catch (error) {
    }
  }
}

export default () => {
  logger()
}
