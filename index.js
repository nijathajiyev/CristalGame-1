$(document).ready(function () {
    let compNum = $("#compNum"),
        userNum = $("#userNum"),
        img = $("img"),
        winCount = $("#winCount"),
        lostCount = $("#lostCount");

    let compNums = 0,
        userNums = 0,
        num,
        bn = 0,
        gn = 0,
        rn = 0,
        yn = 0,
        win = 0,
        lost = 0;

    function randomNum() {
        compNums = Math.ceil(Math.random() * 100);
        bn = Math.ceil(Math.random() * 11);
        gn = Math.ceil(Math.random() * 11);
        rn = Math.ceil(Math.random() * 11);
        yn = Math.ceil(Math.random() * 11);
        compNum.html(compNums);
    }
    randomNum();


    function UI() {
        userNum.html(userNums);
        compare();
        winCount.html(win);
        lostCount.html(lost);
    }

    function reset(){
        userNums = 0;
        userNum.html(userNums);
        randomNum();
    }

    img.on("click", (e) => {
        num = e.target.id;
        if (num == "imgB") {
            userNums += bn;
        } else if (num == "imgG") {
            userNums += gn;
        } else if (num == "imgR") {
            userNums += rn;
        } else {
            userNums += yn;
        }
        UI();
    })

    function compare(){
        if(userNums == compNums){
            alert("you win");
            win++;
            reset()
        }else if(compNums < userNums){
            alert("you lost")
            lost++
            reset();
        }
    }

})