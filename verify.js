const answer_dict = { '1_1011': "fireball", '2_221': "harry potter", '3_3030': "Johnny Depp", '4_4424': "Michael Scott", '5_51515': "Thirumandan", '6_636': "Sasthamcotta", '7_7417': "Dwangela", '8_88': "Thaggu", '9_919': "Aparecium"};

function checkAnswer(page_id){
    const response = document.getElementById('answer').value;
    const pass_html = "_pass.html";
    const fail_html = "_fail.html";

    if (response.toUpperCase() === answer_dict[page_id].toUpperCase())
        window.location = 'stage' + page_id + pass_html;
    else
        window.location = 'stage' + page_id + fail_html;

    return false;
}