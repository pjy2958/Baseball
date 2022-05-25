// 1팀 리스트
let team1List = [];
let team1Answer = 356;
// 2팀 리스트
let team2List = [];
let team2Answer = 958;
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
    // 정답 인지 판별
    // answer(item);

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
            roundCount++;
        }
    }
    showList(this.item);
}

// 리스트를 보여주는 함수
function showList(item) {
    // strike ball out 판별 함수 넣고 반환값을 밑에 추가해주기
    let distinctStr = distinctNumber(item);

    if (teamOrder === false) {
        let list = "<ul>"
        for (let i = 0; i < team1List.length; i++) {
            list += "<li>" + "Round " + (i + 1) + "  Answer : " + team1List[i] + "</li>";
        }
        list += "</ul>";
        document.querySelector(".test1").innerHTML = list;
    } else {
        let list2 = "<ul>"
        for (let i = 0; i < team1List.length; i++) {
            list2 += "<li>" + "Round " + (i + 1) + "  Answer : " + team2List[i] + "</li>";
        }
        list2 += "</ul>";
        document.querySelector(".test2").innerHTML = list2;
    }
}

// strike ball out 판별 함수 -> ex) 1s2b,   0out 식으로 문자열 반환
function distinctNumber(item) {

}

// 정답임을 판별하는 함수
// function answer(item) {
//     if ()
// }