var data =
    [
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
             <div class="flip-card">
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
        appendTemplate(template, lastRow)
    }
}

function appendTemplate(template, lastRow){
    let $templateElement = $(template);
    if (lastRow === 3){
        $templateElement.appendTo("#row1");
        sizeCard($templateElement);
        return 1;
    }
    $templateElement.appendTo("#row" + lastRow);
    sizeCard($templateElement);
    return lastRow++;
}

function sizeCard($element){
    console.log($element.find(".card")[0].css("background-color", "red"));
    let maxHeight = Math.max($element.find(".card")[0].height(), $element.find(".card")[1].height());
    $element.height(maxHeight);
}

