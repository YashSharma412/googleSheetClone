const selectFFamily = document.getElementById('fontFamilySelect');
const selectFSize = document.getElementById('fontSizeSelect');

const fontFamArray = 
                    [
                        "Times New Roman", "Arial","Verdana","Courier New","Georgia", 
                        "Trebuchet MS","Comic Sans MS","Calibri", "Arial Narrow","Helvetica Neue",
                        "Tahoma","Lucida Sans","Palatino Linotype","Century Gothic", "Garamond",
                        "Bookman","Franklin Gothic Medium","Impact","Lucida Console","Monospace",
                        "Copperplate","Baskerville","Didot","Futura","Optima","Rockwell","Symbol",
                        "Webdings","Wingdings","Segoe UI","Consolas","Courier","Book Antiqua",
                        "Candara","Segoe Print","Arial Black"
                    ];
// const test = document.getElementById('A3');
// console.log(window.getComputedStyle(test).fontSize);

function populateSelect(){
    for(let i=12; i<=64; i+=2){
        const option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        selectFSize.appendChild(option);
    }
    
    for(let i=0; i<fontFamArray.length; i++){
        const option = document.createElement('option');
        option.value = fontFamArray[i];
        option.innerText = fontFamArray[i];
        selectFFamily.appendChild(option);
    }
    selectFFamily.value = 'Times New Roman'
    selectFSize.value = 16;
}
