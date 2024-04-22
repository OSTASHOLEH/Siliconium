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
        var discription = document.getElementById("frames");
        var dtsheet =document.getElementById("link_d");
        main_image.src = "datasheets/" + imageName + "/"+ imageName + ".png";
        main_image.alt = imageName;
        discription.src = "datasheets/" + imageName + "/"+ imageName + ".txt";
        img_name.innerHTML = imageName.toUpperCase();
        dtsheet.setAttribute("href","datasheets/" + imageName + "/"+ imageName.toUpperCase() + ".PDF");
    }
    else{
        console.error("not loaded");
    }
}