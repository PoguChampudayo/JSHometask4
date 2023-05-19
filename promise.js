const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface(input, output);
let answer = Math.round(Math.random() * 1000)
let attempts = 0

function makePromise (request) {
    return new Promise ((resolve, reject) => {
        rl.question(request, (data) => {
            resolve(data)
        })
    })
}

async function checking() {
    while(true) {
        attempts ++
        const check = await makePromise('Введите число: ')
        switch (true) {
            case check > answer:
                console.log('Нужно меньше!')
                break
            case check < answer:
                console.log('Нужно больше!')
                break
            default:
                console.log('Правильно!')
                console.log(`Всего потрачено попыток: ${attempts}`)
                rl.close()
                return
        }   
    }
}

checking()