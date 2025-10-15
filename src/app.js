import {translatePigLatin} from "./index.js"
import chalk from "chalk"

let testWord = translatePigLatin("Car")

console.log(chalk.yellow(testWord.toUpperCase())) 