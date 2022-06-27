var data =
    [
        [
            "Can a creator of a copyrighted work object to having their work portrayed in a light that is harmful to them?",
            "Yes, you can defend yourself in court"
        ],
        [
            "Can a creator of a copyrighted work object to having their work portrayed in a light that is harmful to them?",
            "Yes, you can defend yourself in court"
        ],
        [
            "Can a creator of a copyrighted work object to having their work portrayed in a light that is harmful to them?",
            "Yes, you can defend yourself in court"
        ],
        [
            "Can a creator of a copyrighted work object to having their work portrayed in a light that is harmful to them?",
            "Yes, you can defend yourself in court"
        ],
    ]

$( document ).ready(function() {
    $("#navbar").load("../../common/navigation/navbar.html", function () {
        $("#copyrightLink").attr("aria-current", "true").addClass("active");
    });
    loadData();
});

function loadData(){
    let lastRow = 1;
    for (let i = 0; i < data.length; i++){
        let question = data[i][0]
        let answer = data[i][1]
        let template = `
             <div class="flip-card mb-4">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">
                                    ${question}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">
                                    ${answer}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        lastRow = appendTemplate(template, lastRow);
    }
}

function appendTemplate(template, lastRow){
    console.log(lastRow);
    let $templateElement = $(template);
    if (lastRow === 3){
        $templateElement.appendTo("#row3");
        sizeCard($templateElement);
        return 1;
    }
    $templateElement.appendTo("#row" + lastRow);
    sizeCard($templateElement);
    return ++lastRow;
}

function sizeCard(element){
    let heights = [];
    for(let card of $(element).find(".card")){
        heights.push($(card).height());
    }
    let maxHeight = Math.max(...heights);
    $(element).height(maxHeight);
    for(let card of $(element).find(".card")){
        $(card).addClass("h-100");
    }
}

