const message = document.querySelector("#message");
    const bulb = document.querySelector("#bulb");
    const onBtn = document.querySelector("#onBtn");
    const offBtn = document.querySelector("#offBtn");
    onBtn.addEventListener("click", () => {
      message.style.display = "block";
      message.innerText = "The bulb has been switched on!";
      bulb.style.color = "yellow";
      bulb.style.shadow
      // document.querySelector("body").style.backgroundColor = "yellow";
    });
    offBtn.addEventListener("click", () => {
      bulb.style.color = "#eee";
      message.innerText = "The bulb has been switched off!";
      message.style.display = "block";
      // document.querySelector("body").style.backgroundColor = "#fff";
    });