
//生成从minNum到maxNum的随机数
export function randomNum(min: number, max: number) {
    switch (arguments.length) {
        case 1:
            return Math.random() * min + 1
        case 2:
            return Math.random() * (max - min + 1)
        default:
            return 0;
    }
}


export const randomColor = () => {
    const colors = [
        'amber',
        'blue',
        'cyan',
        'green',
        'grey',
        'indigo',
        'light-blue',
        'light-green',
        'lime',
        'orange',
        'pink',
        'purple',
        'red',
        'teal',
        'violet',
        'yellow',
        'white',
    ]

    const num = randomNum(1, colors.length)
    return colors[num]
}