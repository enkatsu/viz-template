import * as d3 from 'd3';

window.addEventListener('load', () => {
    const svg = d3.select('svg')
        .attr('width', 640)
        .attr('height', 480);
    const ellipse = svg.append('ellipse')
        .attr('cx', 100)
        .attr('cy', 100)
        .attr('rx', 50)
        .attr('ry', 50)
        .attr('fill', '#11ddff');
});
