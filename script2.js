const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

// Define the heart shape
ctx.beginPath();
ctx.moveTo(75, 40);
ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.fillStyle = "red";
ctx.fill();

// Add an event listener to the canvas element
canvas.addEventListener("click", function(event) {
  // Get the position of the mouse click relative to the canvas element
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Check if the click occurred inside the heart's bounding box
  const heartWidth = 130;
  const heartHeight = 95;
  const heartX = 20;
  const heartY = 25;
  if (mouseX >= heartX && mouseX <= heartX + heartWidth &&
      mouseY >= heartY && mouseY <= heartY + heartHeight) {
    // The heart was clicked
    console.log("Heart clicked!");
  }
});