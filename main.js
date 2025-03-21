onload = () =>{
    document.body.classList.remove("container");
};

  document.addEventListener("click", function () {
      let audio = document.getElementById("audio");
      if (audio.paused) {
          audio.play().catch(error => console.log("Error al reproducir:", error));
      }
  });