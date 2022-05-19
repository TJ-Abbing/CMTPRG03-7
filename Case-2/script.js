const [counter, setCounter] = useState()

setCounter(10)
console.log(counter)
console.log(counter())
setCounter((oldCounter) => oldCounter +1)
console.log(counter)
console.log(counter())