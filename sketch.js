let imagePaths = [
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg"
];

function setup() {
  noCanvas(); // We don’t use p5 canvas for this layout

  const dropdown = createSelect();
  dropdown.id("image-count");
  dropdown.parent("controls");

  for (let i = 2; i <= 5; i++) {
    dropdown.option(i);
  }

  const button = createButton("Shuffle");
  button.mousePressed(showImages);
  button.parent("controls");

  showImages(); // Load initial images
}

function showImages() {
  const count = parseInt(select("#image-count").value());
  const container = select("#image-container");
  container.html(""); // Clear previous

  // Shuffle images using Fisher-Yates
  let shuffled = [...imagePaths];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Display selected number of images
  for (let i = 0; i < count; i++) {
    const imgElement = createImg(shuffled[i]);
    imgElement.parent("image-container");
  }
}
