import { G, Rect, Svg, SVG } from "@svgdotjs/svg.js"


interface CoreProps {
    el: HTMLElement
    width: number
    height: number
}


export class Core {

    el: HTMLElement
    width: number
    height: number
    // elRect: DOMRect
    svg: Svg
    draw: G

    constructor(props: CoreProps) {
        this.el = props.el
        // this.elRect = props.el.getBoundingClientRect()

        // this.width = this.elRect.width
        // this.height = this.elRect.height

        this.width = props.width
        this.height = props.height

        this.svg = SVG().addTo(this.el).size(this.width, this.height)
        this.draw = this.svg.group()
        // this.render()

    }

    // render() {
    //     this.draw.rect(100, 50).fill('#1e3556').stroke({ color: '#bdc5c9', dasharray: "none", width: 2 }).transform({
    //         translateX: this.width / 2,
    //         translateY: this.height / 2,
    //     }).radius(10)

    // }

    addText(text: string) {
        console.log(text)
        // const res = genDragNode(genText(text))
        // this.draw.dom(res)

        this.draw.text(text).fill('#f06').x(10 + this.width / 2).y(10 + this.height / 2).leading(1.3)


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



