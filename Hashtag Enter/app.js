let input = document.querySelector('#type-text')
let hashtags = document.querySelector('.hashtags')



input.addEventListener("keyup", function (e) {
    if(e.keyCode == 13){
        checkInput()
    }
});


let checkInput = () => {
    if (input.value == '') {
        alert('Please Enter Your Hashtag')
    } else {
        addHashtag()
    }
}

let addHashtag = () => {
    let newHashTag = document.createElement("LI");
    let hashTagText = document.createTextNode('#' +input.value);
    newHashTag.appendChild(hashTagText);
    document.getElementById("hashtagList").appendChild(newHashTag);
    input.value = ''
}