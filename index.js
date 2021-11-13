// 이진필이 추천하는 빡빡한 검사기
"use strict"

// HTML의 모든 내용을 읽었을 때 기능을 시작하자, 기능은...
document.addEventListener("DOMContentLoaded", function () {
    // 진척도는 0이야
    var progress = 0;
    // 아까 만들어둔 root라는 빈 상자를 선언할게. 나는 이 안에 다른 태그들을 쑤셔 넣을 생각이야.
    var root = document.getElementById('root')

    // 쇼라는 기능을 만들게. 나는 버튼 누르면 이걸 작동시킬 생각인데, 일단 기능부터 만들게.
    function show() {
        // 퀘스쳔을 정의할게, 그리고 퀘스쳔은 실행될때마다 진척도에 +1해줘
        var question = questions[progress++];

        // 루트라는 상자 내용은 재차 실행되기 전에 HTML에 공란으로 바꿔줘
        root.innerHTML = "";

        // 어펜드태그라는 기능을 만들거고, 첫번째는 태그네임, 두번째는 텍스트야
        function appendTag(tagName, text) {
            // 태그를 선언할게, 태그네임이라는 엘레먼트를 만들거야
            // <tagName></tagName>
            const $tag = document.createElement(tagName);
            // 선언한 태그에 어팬드태그의 두번째값인 텍스트를 넣을거야
            // <tagName>text</tagName>
            $tag.innerText = text;
            // 루트(상자)에 태그를 표시할게
            // <div id="root">
            //     <tagName>text</tagName>
            // </div>
            root.append($tag);
        }

        // <p>question.content</p>
        appendTag("p", question.content);

        // var content = document.createElement('p');
        // content.innerText = question.content;
        // root.append(content);

        for (let i = 0; i < question.answers.length; i++) {
            // <button>question.answers[i]</button>
            appendTag("button", question.answers[i]);

            // const answer = question.answers[i];

            // const $answer = document.createElement("button");
            // $answer.innerText = answer;
            // root.append($answer);
        }

        // 다음에는 이거를 배워봐요.
        const $buttons = document.getElementsByTagName("button");
        for (let i = 0; i < $buttons.length; i++) {
            $buttons[i].addEventListener("click", show);
        }
    }

    window.show = show;
    show();
});