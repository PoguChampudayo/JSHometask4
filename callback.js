
const readline = require('node:readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let answer = Math.round(Math.random() * 1000)
let attempts = 1
rl.setPrompt('Назовите число: ')
rl.prompt()
rl.on('line', function(check) {
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
    }
    attempts ++
    rl.prompt()
})

