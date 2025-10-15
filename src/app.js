import {translatePigLatin} from "./index.js"
import chalk from "chalk"

const randomIndexA = Math.floor(Math.random() * 256)
const randomIndexB = Math.floor(Math.random() * 256)
const randomIndexC = Math.floor(Math.random() * 256)


console.log(randomIndexA, randomIndexB, randomIndexC)
const logTranslation = (str) => {
    let text = translatePigLatin(str).toUpperCase()
    let colorChange= chalk.rgb(randomIndexA, randomIndexB, randomIndexC)(text)
    console.log(colorChange)
}

logTranslation("What")