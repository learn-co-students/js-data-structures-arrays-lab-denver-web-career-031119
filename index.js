// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name) {
  let newDrivers = [...drivers, name]
  return newDrivers
}

function prependDriver(name) {
  let newDrivers = [name, ...drivers]
  return newDrivers
}

function removeLastDriver() {
  return drivers.slice(0, -1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
