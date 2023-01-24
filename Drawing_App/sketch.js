let lines = [];
let penColor;
let bgColor;
let penWidth;
let penShape;



function setup() {
  createCanvas(innerWidth, 600);
  angleMode(DEGREES);

  let options = createDiv().style('display:flex;align-items:center;justify-content:center;');
  options.addClass('select-none');
  let optionsTitles = createDiv().parent(options);

  createP('Pen Color').parent(optionsTitles);
  createP('Background Color').parent(optionsTitles);
  createP('Pen Width').parent(optionsTitles);
  createP('Pen Shape').parent(optionsTitles);

  let optionsValues = createDiv().parent(options).style('margin:10px 40px; width:50px');
  penColor = createColorPicker('#ffffff').parent(optionsValues);
  bgColor = createColorPicker('#1e1e1e').parent(optionsValues).style('margin-top:10px');
  penWidth = createSelect(false).parent(optionsValues).style('margin-top:10px');

  penWidth.option('1');
  penWidth.option('2');
  penWidth.option('4');
  penWidth.option('8');
  penWidth.option('16');
  penWidth.option('32');
  penWidth.option('40');
  penWidth.option('50');
  penWidth.option('64');

  penWidth.selected('8');

  penShape = createSelect(false).parent(optionsValues).style('margin-top:10px;width:50px;height:25px');

  penShape.option('Line');
  penShape.option('Circle');
  penShape.option('Rectangle');
  penShape.option('Triangle');
  penShape.option('Star');

  clearBut = createButton('Clear').parent(options).style('width:100px;margin-top:10px;height:100px;');
  clearBut.addClass('bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full');


}

function draw() {
  background(bgColor.value());
  clearBut.mousePressed(() => {
    lines = [];
  })

  if (mouseIsPressed) {
    let line = new MyLine(penColor.value(), penWidth.value(), penShape.value());
    lines.push(line);
  }

  for (var line of lines) {
    line.show();
  }
}
