import { G, Rect, Svg, SVG } from "@svgdotjs/svg.js"

interface CoreProps {
    el: HTMLElement // 
}



export class MindCore {

    el: HTMLElement
    width: number
    height: number
    elRect: DOMRect
    svg: Svg
    draw: G


    constructor(props: CoreProps) {
        this.el = props.el
        this.elRect = props.el.getBoundingClientRect()
        this.width = this.elRect.width
        this.height = this.elRect.height

        this.svg = SVG().addTo(this.el).size(this.width, this.height)
        this.draw = this.svg.group()
        this.render()

    }

    render() {
        this.draw.rect(100, 50).fill('#1e3556').stroke({ color: '#bdc5c9', dasharray: "none", width: 2 }).transform({
            translateX: this.width / 2,
            translateY: this.height / 2,
        }).radius(10)
        this.draw.text("123123123").fill('#f06').x(10 + this.width / 2).y(10 + this.height / 2).leading(1.3)

    }



}



// <rect width="328.640625" height = "41" fill = "#1e3556" stroke - dasharray="none" stroke - width="2" stroke = "#bdc5c9" rx = "10" ry = "10" > </rect>