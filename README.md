# 🐷 Pig Latin Translator

A simple and extendable **Pig Latin Translator** built in JavaScript.  
This project starts small — with a single function — and is designed to **scale up** into a fully featured open-source translation tool.

---

## ✨ Overview

Pig Latin is a fun way to transform English words by following a few simple rules:
- If a word **begins with a vowel**, just add **“way”** to the end.  
  - Example: `apple → appleway`
- If a word **begins with a consonant or consonant cluster**, move that cluster to the end and add **“ay”**.  
  - Example: `glove → oveglay`

This project aims to:
- Create a clean, testable translation function.
- Support phrases and punctuation.
- Build an interactive web app and CLI tool in future versions.

---

## 🧠 Current Implementation

```js
function translatePigLatin(str) {
  const beginWithCons = /^([b-df-hj-np-tv-z]+)(.*)/gi;
  const beginWithVowel = /^[aeiou]+/gi;

  if (beginWithVowel.test(str)) {
    return str + "way";
  }

  if (beginWithCons.test(str)) {
    // TODO: Move consonant cluster to the end and add "ay"
    return str.replace(beginWithCons, "");
  }
}
```
## Example usage

```js 
console.log(translatePigLatin("apple")); // "appleway"
console.log(translatePigLatin("glove")); // "oveglay"
```

## Getting Started
1. Clone this repository.
```bash
git clone https://github.com/yourusername/pig-latin-translator.git
cd pig-latin-translator
```
2. Install dependencies.
```bash
npm install
```
3. Run the project.
```bash
node index.js
``` 