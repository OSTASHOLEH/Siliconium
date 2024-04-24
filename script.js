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
        main_image.src = "datasheets/" + imageName.toLowerCase() + "/"+ imageName.toLowerCase() + ".png";
        main_image.alt = imageName;
        discription.src = "datasheets/" + imageName.toLowerCase() + "/"+ imageName.toLowerCase() + ".txt";
        img_name.innerHTML = imageName.toUpperCase();
        dtsheet.setAttribute("href","datasheets/" + imageName.toLowerCase() + "/"+ imageName.toUpperCase() + ".PDF");
        if(!main_image){
            console.error("wrong");
            window.alert("Error occuped. Try to use other name of IC");
        }
    }
    else{
        window.location.href="index.html";
        window.alert("incorect data");
        console.error("not loaded");
    }
}
function MailTo(){
    var email = 'siliconiumweb@gmail.com';
    var subject = 'Propositions'; 
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);
    window.location.href = mailtoLink;
}
function Instagram(){
    window.location.href="https://www.instagram.com/siliconiumki?igsh=bGNtanE5c2Q0NDJw&utm_source=qr";
}
function Facebook(){
    window.location.href="https://www.facebook.com/profile.php?id=61558570901258&mibextid=rS40aB7S9Ucbxw6v";
}