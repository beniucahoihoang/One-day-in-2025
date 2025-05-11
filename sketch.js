let imagePaths = [
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg"
];

function setup() {
  noCanvas();

  // Attach dropdown to #controls
  const controlsDiv = select('#controls');
  const label = createElement('label', 'How many images?');
  label.parent(controlsDiv);

  const dropdown = createSelect();
  dropdown.id("image-count");
  dropdown.parent(controlsDiv);

  for (let i = 2; i <= 5; i++) {
    dropdown.option(i);
  }

  const button = createButton("Shuffle");
  button.mousePressed(showImages);
  button.parent(controlsDiv);

  showImages(); // Initial call
}

function showImages() {
  const count = parseInt(select("#image-count").value());
  const container = select("#image-container");
  container.html("");

  // Fisher-Yates Shuffle
  let shuffled = [...imagePaths];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  for (let i = 0; i < count; i++) {
    const img = createImg(shuffled[i]);
    img.parent("image-container");
  }
}
