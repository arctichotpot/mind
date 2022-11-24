import { G, Rect, Svg, SVG } from "@svgdotjs/svg.js"
import "@svgdotjs/svg.draggable.js"

interface CoreProps {
    el: HTMLElement
    width: number
    height: number
}


export class Core {

    el: HTMLElement
    width: number
    height: number
    svg: Svg

    constructor(props: CoreProps) {
        this.el = props.el

        this.width = props.width
        this.height = props.height

        this.svg = SVG().addTo(this.el).size(this.width, this.height)

    }

    addText(text: string) {
        const draw = this.svg.text(text).fill('#f06').x(10 + this.width / 2).y(10 + this.height / 2).leading(1.3)
        draw.draggable()
    }

    addCard(target: Element) {

    }


}






// let draw: Svg | null = null

// export function Render(el: HTMLElement): Svg | null {

//     if (el) {
//         const height = el.parentElement?.offsetHeight
//         const width = el.parentElement?.offsetWidth
//         draw = SVG().addTo(el).size(width, height)
//         // draw.rect(100, 100).attr({ fill: '#f06' })
//     }
//     return draw
// }


// export const addText = (text: string) => {

// }



