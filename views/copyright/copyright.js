const data =
    [
        [
            "Can a creator of a copyrighted work object to having their work portrayed in a light that is harmful to them?",
            "Yes, you can defend yourself in court"
        ],
        [
            "Where does copyright stop?",
            "Quotation rights, usage of images in a catalogue (Katalogbildfreiheit), orphan works"
        ],
        [
            "Can the copyright of a work be transferred via a testament?",
            "Yes it can"
        ],
        [
            "When does something count as copyright protected?",
            "When a work is created. It does not need to be written down in a register"
        ],
        [
            "What's the main goal of a counterfeit?",
            "To profit off the reputation of the original"
        ],
        [
            "How can you defend yourself if your copyright is infringed on the internet?",
            "You can contact the hosting provider of the website. They then take the necessary steps to ensure your copyright is secured"
        ],
        [
            "What information needs to be noted in the imprint?",
            "Full name, postal address or domicile, email address"
        ],
        [
            "Do people that appear in an image that you took need to be asked for permission before the image is published?",
            "Yes, you need their consent"
        ],
        [
            "Can a domain name be anything you want?",
            "No, the names of well known people, company names or city and municipality names can't be contained in a domain name"
        ],
        [
            "Who is the holder of copyright?",
            "It’s the owner of the copyright."
        ],
        [
            "Can copyright be transferred?",
            "Copyrights are like properties and are treated as such, meaning it can be transferred."
        ],
        [
            "Can data be copyrighted?",
            "Data itself cannot be copyrighted since they are facts. Only under certain conditions the DB can be copyrighted."
        ],
        [
            "Under what condition?",
            "The data must be in a DB and the arrangement of data must be sufficiently creative or original to be copyrighted."
        ],
        [
            "Is Open-Source still consider a copyright?",
            "Yes, it is, the open-source has been given for use for other people by the copyright owner of the open-source."
        ],
        [
            "How do you become the copyright holder?",
            "After creating something, you are automatically the owner of the copyright. E.G. Writing new code. If you invented something new, you could also patent it."
        ],
        [
            "Can you defend your copyright?",
            "Yes, after the unlawful use of you copyright by another party you can demand that your copyright need to be observed in civil and criminal proceedings."
        ]
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
        return 1;
    }
    $templateElement.appendTo("#row" + lastRow);
    return ++lastRow;
}

