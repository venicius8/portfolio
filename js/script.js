let aba = document.querySelector("aside").classList;

function abrirAba() {
    aba.toggle("asideOn");
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        aba.replace("asideOn", "aside");
    }
});
