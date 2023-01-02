let num = 1;
let q = {
  1: {"title": "조별과제 포지션을 정해볼까요?", "type": "EI", "A" : "저는 발표가 좋아요!", "B": "저는 발표빼고 다 좋아요"},
  2: {"title": "아무 자리나 앉으세요", "type": "EI", "A" : "(중앙에 앉는다)", "B": "(구석에 앉는다)"},
  3: {"title": "주중 내내 출근했으니 주말에는", "type": "EI", "A": "밖에 놀러 가야지!", "B": "집에서 쉬어야지..."},
  4: {"title": "서비스로 귤 드릴게요~", "type": "SN", "A": "오예 귤이다", "B": "사장님이 제주도 분이신가? 오늘 기념일인가?"},
  5: {"title": "달이 예뻐서 연락했어", "type": "SN", "A": "그게 무슨 상관이야...?", "B": "맞아 오늘 달이 너무 예쁘더라"},
  6: {"title": "오늘의 일기을 작성해볼까요?", "type": "SN", "A": "오늘은 치과를 갔다가 빵집에 들려서 소금빵을 사먹었다. 맛있었다...", "B": "사람의 인연이란 뭘까? 수많은 사람들 중에서 나는 어떤 사람을..."},
  7: {"title": "아프다고? 아프면 병원을 가", "type": "TF", "A": "오키 병원 고", "B": "내 말 듣기 싫구나..."},
  8: {"title": "나 시험에서 떨어졌어", "type": "TF", "A": "무슨 시험? 왜 떨어졌는데?", "B": "어떡해 너무 속상하겠다ㅠㅠ"},
  9: {"title": "진짜 잘했다! 너 별로 열심히 안하던데 완전 재능있나 보다!", "type": "TF", "A": "아 ㅋ 내가 좀 재능충이지 ㅋ", "B": "니가 뭔데 내 노력을 평가해?"},
  10: {"title": "너 지금 뭐해? 일 없으면 당장 나와!", "type": "JP", "A": "지금 당장? 갑자기? 좀 그런데", "B": "어엉? 그래~~"},
  11: {"title": "반복되는 일상 지겹지 않냐..", "type": "JP", "A": "그런가? 난 편해서 좋아", "B": "완전 재미없음..."},
  12: {"title": "시험 일주일 남았는데 공부 좀 했어?", "type": "JP", "A": "평소에 좀 해놔서 괜찮아", "B": "공부는 3일 전부터 아니냐?"}
}
let result = {
  "ISTJ": {"mbti": "현실주의자 ISTJ", "explain": "사실을 중시하는 믿음직한 현실주의자입니다.", "img": "img/ISTJ.svg"},
  "ISFJ": {"mbti": "수호자 ISFJ", "explain": "주변 사람을 보호할 준비가 되어 있는 헌식적이고 따뜻한 수호자입니다.", "img": "img/ISFJ.svg"},
  "INFJ": {"mbti": "옹호자 INFJ", "explain": "차분하고 신비한 분위기를 풍기는 성격으로, 다른 사람에게 의욕을 불어넣는 이상주의자입니다.", "img": "img/INFJ.svg"},
  "INTJ": {"mbti": "전략가 INTJ", "explain": "모든 일에 대해 계획을 세우며 상상력이 풍부한 전략가입니다.", "img": "img/INTJ.svg"},
  "ISTP": {"mbti": "장인 ISTP", "explain": "대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인입니다.", "img": "img/ISTP.svg"},
  "ISFP": {"mbti": "모험가 ISFP", "explain": "항상 새로운 경험을 추구하는 유연하고 매력 넘치는 예술가입니다.", "img": "img/ISFP.svg"},
  "INFP": {"mbti": "중재자 INFP", "explain": "항상 선을 행할 준비가 되어 있는 부드럽고 친절한 이타주의자입니다.", "img": "img/INFP.svg"},
  "INTP": {"mbti": "논리술사 INTP", "explain": "지식을 끝없이 갈망하는 혁신적인 발명가입니다.", "img": "img/INTP.svg"},
  "ESTP": {"mbti": "사업가 ESTP", "explain": "위험을 기꺼이 감수하는 성격으로, 영리하고 에너지 넘치며 관찰력이 뛰어난 사업가입니다.", "img": "img/ESTP.svg"},
  "ESFP": {"mbti": "연예인 ESFP", "explain": "즉흥적이고 넘치는 에너지와 열정으로 주변 사람을 즐겁게 하는 연예인입니다.", "img": "img/ESFP.svg"},
  "ENFP": {"mbti": "활동가 ENFP", "explain": "열정적이고 창의적인 성격으로, 긍정적으로 삶을 바라보는 사교적이면서도 자유로운 영혼입니다.", "img": "img/ENFP.svg"},
  "ENTP": {"mbti": "변론가 ENTP", "explain": "지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다.", "img": "img/ENTP.svg"},
  "ESTJ": {"mbti": "경영자 ESTJ", "explain": "사물과 사람을 관리하는 데 뛰어난 능력을 지닌 경영자입니다.", "img": "img/ESTJ.svg"},
  "ESFJ": {"mbti": "집정관 ESFJ", "explain": "배려심이 넘치고 항상 다른 사람을 도울 준비가 되어 있는 성격으로, 인기가 많고 사교성 높은 마당발입니다.", "img": "img/ESFJ.svg"},
  "ENFJ": {"mbti": "선도자 ENFJ", "explain": "청중을 사로잡고 의욕을 불어넣는 카리스마 넘치는 지도자입니다.", "img": "img/ENFJ.svg"},
  "ENTJ": {"mbti": "통솔자 ENTJ", "explain": "항상 문제 해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자입니다.", "img": "img/ENTJ.svg"}
}
function start() {
  $(".start").hide();
  $(".question").show();
  next();
}
$("#A").click(function(){
  let type = $("#type").val();
  let preValue = $("#"+type).val();
  $("#"+type).val(parseInt(preValue)+1);
  next();
});
$("#B").click(function(){
  next();
});
function next() {
  if (num == 13) {
    $(".question").hide();
    $(".result").show();
    let mbti = "";
    ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
    ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
    ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
    ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
    $("#img").attr("src",result[mbti]["img"]);
    $("#mbti").html(result[mbti]["mbti"]);
    $("#explain").html(result[mbti]["explain"]);
  } else {
    $(".progress-bar").attr("style","width: calc(100/12*"+num+"%)");
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
  }
}