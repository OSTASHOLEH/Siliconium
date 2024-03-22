function FindAtDB(){
    var searchValue = document.getElementById("search_input").value;
    LoadPage(searchValue);
}
function LoadPage(name) {
    localStorage.setItem("imageName", name);
    window.location.href = "template.html";
}
function LoadData() {
    let imageName = localStorage.getItem("imageName");
    if (imageName) {
        var main_image = document.getElementById("Main_IC_Photo");
        var img_name = document.getElementById("Img_Name");
        main_image.src = "images/" + imageName + ".jpg";
        main_image.alt = imageName;
        img_name.innerHTML = imageName.toUpperCase();
    }
    else{
        console.error("not loaded");
    }
}