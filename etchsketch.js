document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("div")

  const numberInput = document.querySelector("#numberInput")
  let number = -1

  numberInput.addEventListener("input", () => {
    const numberValue = parseInt(numberInput.value, 10);
    console.log(numberValue);

    if (!isNaN(numberValue)) {
      number = numberValue;
    }

  });

  const draw = document.querySelector("button")

  draw.addEventListener("click", () => drawBoard(number));

  function drawBoard(number) {
    if (number > 100) {
      number = 100
    }

    container.innerHTML = "";

    for (let i = 0; i <= number; i++) {
      const row = document.createElement("div")
      row.setAttribute("style", "display: flex; justify-content: center")
      container.appendChild(row)
      for (let i = 0; i <= number; i++) {
        const box = document.createElement("div")
        box.setAttribute("style", "flex-shrink: 1; background-color: yellow; padding:15px; hover:bg-color:white;")
        row.appendChild(box)

        box.addEventListener("mouseenter", () => {
          box.style.backgroundColor = "white";
        })
      }
    }  
  } 
})




