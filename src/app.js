import {translatePigLatin} from "./index.js"
import chalk from "chalk"
import PromptSync from "prompt-sync"

const prompt = PromptSync()

const inputText = prompt("Enter a word: ")


const logTranslation = (str) => {
    const randomIndexA = Math.floor(Math.random() * 256)
    const randomIndexB = Math.floor(Math.random() * 256)
    const randomIndexC = Math.floor(Math.random() * 256)

    let text = translatePigLatin(str).toUpperCase()
    let colorChange= chalk.rgb(randomIndexA, randomIndexB, randomIndexC)(text)
    console.log(colorChange)
}

logTranslation(inputText)