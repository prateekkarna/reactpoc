import React , {useRef, useEffect} from 'react'
import {select, arc, pie} from 'd3'

const data = [1.00 , 0.5]

function Gauge() {
    const svgRef = useRef<SVGSVGElement >(null);
    const wrapperRef = useRef();

    const arcGenerator = arc().innerRadius(75).outerRadius(100)

    const pieGenerator = pie().startAngle(-0.5 * Math.PI).endAngle(0.5 * Math.PI);

    const instructions = pieGenerator(data)

    useEffect(() => {
        console.log(svgRef)
        const svg = select(svgRef.current)
        // svg.selectAll('circle').data(data).join(
        //     enter => enter.append('circle'),
        //     update => update.attr('class', 'updated'),
        //     exit => exit.remove()
        // )
        svg.selectAll('.slice').data(instructions).join('path').attr('class', 'slice')
        .attr('stroke','black')
        .attr('fill','none')
        .style(
            "transform",
            `translate(150px, 150px)`
          )
        .attr('d', instruction => arcGenerator(instruction as any))
        }, [])
    
    return <svg ref = {svgRef}></svg>
    

    
}

export default Gauge;