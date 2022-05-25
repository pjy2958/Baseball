// 1팀 리스트
let team1List = [];
let team1Answer = 356;
let team1SB = [];
// 2팀 리스트
let team2List = [];
let team2Answer = 958;
let team2SB = [];
// true면 1팀 false면 2팀
let teamOrder = true;
// 라운드 수를 저장하는 변수
let roundCount = 1;
// 버튼 연결
let inputButton = document.querySelector("#inputButton");
// 버튼 클릭시 addItem함수 호출
inputButton.addEventListener("click", addItem);

// addItem함수
function addItem() {
    // 사용자가 입력한 정답을 item변수에 저장
    let item = document.querySelector("#inputAnswer").value;
    console.log(isDuplicateNumber(item));
    if (isDuplicateNumber(item)) {
        alert("중복된 값입니다.");
        return;
    }
    if (!isThreeDigits(item)) {
        alert("세자리 숫자만 입력가능합니다.");
        return;
    }

    // 정답 인지 판별
    answer(item);
    if (item !== null) {
        if (teamOrder === true) {
            team1List.push(item);
            document.querySelector("#inputAnswer").value = "";
            document.querySelector("#inputAnswer").focus();
            teamOrder = false;
        } else {
            team2List.push(item);
            document.querySelector("#inputAnswer").value = "";
            document.querySelector("#inputAnswer").focus();
            teamOrder = true;
        }
    }
    showList(item);
}

// 리스트를 보여주는 함수
function showList(item) {
    // strike ball out 판별 함수 넣고 반환값을 밑에
    distinctNumber(item);

    if (teamOrder === false) {
        let list = "<ul>"
        for (let i = 0; i < team1List.length; i++) {
            list += "<li>" + "(Round " + (i + 1) + ")  Answer : " + team1List[i] + "     " + team1SB[i] + "</li>";
        }
        list += "</ul>";
        document.querySelector(".test1").innerHTML = list;
    } else {
        let list2 = "<ul>"
        for (let i = 0; i < team2List.length; i++) {
            list2 += "<li>" + "(Round " + (i + 1) + ")  Answer : " + team2List[i] + "     " + team2SB[i] + "</li>";
        }
        list2 += "</ul>";
        document.querySelector(".test2").innerHTML = list2;
    }
}

// strike ball out 판별 함수 -> ex) 1s2b,   0out 식으로 문자열 반환
function distinctNumber(item) {
    let answer;
    if (teamOrder === false) {
        answer = String(team1Answer);
        team1SB[roundCount - 1] = "Strike : " + countStrikes(item, answer) + "  Balls : " + countBalls(item, answer);
    }
    else {
        answer = String(team2Answer);
        team2SB[roundCount - 1] = "Strike : " + countStrikes(item, answer) + "  Balls : " + countBalls(item, answer);
        roundCount++;
    }

}

// 정답임을 판별하는 함수
function answer(item) {
    if (teamOrder === true) {
        if (item == team1Answer) {
            alert("1팀 정답");
        }
    } else {
        if (item == team2Answer) {
            alert("2팀 정답");
        }
    }
}

const isThreeDigits = (number) => {
    return number.length === 3;
};

const isDuplicateNumber = (number) => {
    const digits = number.split('');
    const isVisited = Array(10).fill(false);

    return digits
        .map((digit) => {
            const idx = parseInt(digit);
            if (!isVisited[idx]) {
                isVisited[idx] = true;
            } else {
                return true;
            }
        })
        .includes(true);
};

const countStrikes = (number, answer) => {
    let strikes = 0;
    const digits = number.split('');

    digits.map((digit, idx) => {
        if (digit === answer[idx]) {
            strikes++;
        }
    });
    return strikes;
};

const countBalls = (number, answer) => {
    let balls = 0;
    const digits = number.split('');
    const isVisited = Array(10).fill(false);

    answer.split('').map((digit) => {
        isVisited[parseInt(digit)] = true;
    });

    digits.map((digit, idx) => {
        if (isVisited[parseInt(digit)] && answer[idx] !== digit) {
            balls++;
        }
    });
    return balls;
};
