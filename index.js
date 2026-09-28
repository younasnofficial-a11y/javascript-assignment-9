function toggleColor() {

    var box = document.querySelector("div");

    if (box.className === "green") {
        box.className = "red";
    }
    else {
        box.className = "green";
    }

}