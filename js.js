/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
$("body").css("background", "orange");

document.addEventListener("keydown", myFunc);

// $(".hello").on("keydown", myFunc);
function myFunc(e) {
    if (e.code === "Space") {
        $(".hello").addClass("turnWhite");
    }
}

/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
$("h1").on("mouseouver", function () {
    (this).addClass("chgSize");
}).on("mouseout", function () {
    (this).removeClass("chgSize");
});


/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
$("p:first").each(eachFunction);

function eachFunction(index, value) {
    value.addEventListener('click', clickFunction)
}

function clickFunction(e) {
    (this).innerHTML = ".";
}