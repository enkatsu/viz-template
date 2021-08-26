import p5 from 'p5';

window.addEventListener('load', () => {
    const sketch = (p: p5) => {
        p.setup = () => {
            p.createCanvas(640, 480);
        };

        p.draw = () => {
            p.background(245);
            p.fill('#11ddff');
            p.noStroke();
            p.ellipse(100, 100, 50, 50);
        };
    };

    new p5(sketch, document.getElementById('p5sketch'));
});
