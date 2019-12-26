let symmetry;
let angle = 360 / symmetry;
let saveButton;
let clearButton;
let slider;
let slider2;
let xoff = 0;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    background(127);
    saveButton = createButton('Save');
    saveButton.mousePressed(saveSnowflake);
    clearButton = createButton('Clear');
    clearButton.mousePressed(clearCanvas);
    slider = createSlider(1, 32, 4, 0.1);
    slider2 = createSlider(3, 36, 6, 1);
    // colorMode(HSB);
}

function saveSnowflake() {
    save('snowflake.png');
}

function clearCanvas() {
    background(127);
}

function draw() {
    translate(width / 2, height / 2);
    
    symmetry = slider2.value();

    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let mx = mouseX - width / 2;
        let my = mouseY - height / 2;
        let pmx = pmouseX - width / 2;
        let pmy = pmouseY - width / 2;

        if (mouseIsPressed) {
            let hu = map(sin(xoff), -1, 1, 0, 255);
            xoff += 1;
            stroke(hu, 100);
            let angle = 360 / symmetry;
            for (let i = 0; i < symmetry; i++) {
                rotate(angle);
                // let d = dist(mx, my, pmx, pmy);
                // let sw = map(d, 0, 16, 16, 2);
                let sw = slider.value();
                strokeWeight(sw);
                line(mx, my, pmx, pmy);
                push();
                scale(1, -1);
                line(mx, my, pmx, pmy);
                pop();
            }
        }
    }
}

