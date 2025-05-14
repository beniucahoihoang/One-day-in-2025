<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image Shuffle Gallery</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.min.js"></script>
  <link rel="stylesheet" href="style.css">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden; /* Prevent double scrolling */
      font-family: sans-serif;
    }

    main {
      padding: 10px;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      gap: 10px;
      height: 60px;
    }

    label, select, button {
      font-size: 1rem;
    }

    #canvasContainer {
      position: absolute;
      top: 60px;
      bottom: 0;
      width: 100vw;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      background: white;
    }

    canvas {
      display: block;
    }
  </style>
</head>
<body>
  <main>
    <label for="imgCount">How many images?</label>
    <select id="imgCount">
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button id="shuffleBtn">Shuffle</button>
  </main>

  <div id="canvasContainer"></div>

  <script src="sketch.js"></script>
</body>
</html>
