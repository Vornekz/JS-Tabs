"use strict"

let starsFarCry4 = document.querySelectorAll(".starsFarCry4");
let starsFarCry5 = document.querySelectorAll(".starsFarCry5");
let starsFarCry6 = document.querySelectorAll(".starsFarCry6");
let mainBlock = document.querySelectorAll((".info__main"));
let headerBlock = document.querySelectorAll((".iHeader__tab"));

for (let i = 0; i < mainBlock.length; i++) {
    let mainBlockHide = $(mainBlock[i]).css("display")
    if (mainBlockHide === "flex") {
        $(headerBlock[i]).addClass("addWhite")
    }
    $(headerBlock[i]).click(() => {
        headerBlock.forEach((item) => {
            $(item).removeClass("addWhite")
        });
        mainBlock.forEach((item) => {
            $(item).removeClass("iMainShow")
        });
        $(headerBlock[i]).addClass("addWhite");
        $(mainBlock[i]).addClass("iMainShow")
    })

}

let ratign = (blocks) => {
    blocks.forEach((item) => {
        $(item).hover(
            () => {
                $(item).css("fill", "#c3ab3c")
                let i = 0
                while (blocks[i] !== item) {
                    $(blocks[i]).css("fill", "#c3ab3c")
                    i++
                }

                $(item).click(
                    () => {
                        blocks.forEach((item) => {
                            $(item).removeClass("addFill")
                        });
                        for (let i = 0; item !== blocks[i - 1]; i++) {
                            $(blocks[i]).addClass("addFill")
                        }
                    })
            },
            () => {
                $(item).css("fill", "")
                let i = 0
                while (blocks[i] !== item) {
                    $(blocks[i]).css("fill", "")
                    i++
                }
            })
    })
}

ratign(starsFarCry4);
ratign(starsFarCry5);
ratign(starsFarCry6);




