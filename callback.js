
const readline = require('node:readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let answer = Math.round(Math.random() * 1000)
let attempts = 0
rl.setPrompt('Назовите число: ')
rl.prompt()
rl.on('line', function(check) {
    attempts ++
    switch (true) {
        case check > answer:
            console.log('Нужно меньше!')
            rl.prompt()
            break
        case check < answer:
            console.log('Нужно больше!')
            rl.prompt()
            break
        default:
            console.log('Правильно!')
            console.log(`Всего потрачено попыток: ${attempts}`)
            rl.close()
            break
    }
    
})

