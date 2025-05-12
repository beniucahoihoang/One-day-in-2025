let imgs = [];
let imagePaths = [
  "media/1.png",
  "media/2.png",
  "media/3.png",
  "media/4.png",
  "media/5.png",
]; // update this with your actual filenames

let selectedCount = 2;
let dropdown, button;

function preload() {
  for (let path of imagePaths) {
    let img = loadImage(path, (img) => {
      img.resize(200, 0); // Resize once loaded
    });
    imgs.push(img);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  dropdown = createSelect();
  dropdown.position(10, 10);
  for (let i = 1; i <= imagePaths.length; i++) {
    dropdown.option(i);
  }
  dropdown.changed(() => {
    selectedCount = int(dropdown.value());
    shuffleAndDisplay();
  });

  button = createButton("Shuffle");
  button.position(150, 10);
  button.mousePressed(shuffleAndDisplay);

  shuffleAndDisplay();
}

function shuffleAndDisplay() {
  clear();
  background(255);

  let shuffled = shuffle([...imgs]);
  let w = width / selectedCount;

  for (let i = 0; i < selectedCount; i++) {
    let img = shuffled[i];

    if (!img) continue;

    let aspect = img.width / img.height;
    let h = w / aspect;

    if (!aspect || !isFinite(aspect)) {
      h = width / selectedCount;
    }

    let y = (height - h) / 2;
    image(img, i * w, y, w, h);
  }
}
