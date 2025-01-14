const xhr = new  XMLHttpRequest
xhr.open("GET", " https://students.netoservices.ru/nestjs-backend/poll", true);
xhr.send()
xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        let valueResp = JSON.parse(xhr.responseText);

        let questionText = document.getElementById("poll__title");
        questionText.textContent = valueResp.data.title;
        let buttonArray = valueResp.data.answers;
        let divToInsert = document.getElementById("poll__answers");
        console.log(divToInsert);
        for (btn in buttonArray) {
            let buttonInsert = `<button class="poll__answer">
                            ${buttonArray[btn]}
                          </button>`;
            divToInsert.insertAdjacentHTML("beforeEnd", buttonInsert);
        }

        let btnAnswer = Array.from(document.getElementsByClassName("poll__answer"));
        for (let b of btnAnswer){
            b.addEventListener("click", (event) => {
                event.preventDefault();
                alert("Спасибо, ваш голос засчитан!");
            })
        }
    }
})