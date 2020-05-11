function textchanger(){
    $('title').text(language['H1Title']);
    $('h1').text(language['H1Title']);
    $('h2').text(language['H2Title']);
    $('#langchange').text(language['langchangebtn']);
    $('#disclaimergold').text(language['disclaimergold']);
    $('#costlabel').text(language['totalcost']);
    $('#currentgoldlabel').text(language['currentgold']);
    $('#smileygoldlabel').text(language['smileygold']);
    $('#calculate').text(language['calculate']);
    $('#resulttext').text(language['result']);
    $('#thanks').html(language['thanks']);
}

function langchanger(){
    let lang = $('#langselect').val();
        switch(lang) {
            case 'en-US' || 'en-UK' || 'en' || 'en-GB':
                language = en;
              break;
            case 'fr-FR':
                language = fr;
              break;
            default:
              language = en;
          }
          textchanger();
}

function autolang(){
    var userLang = navigator.language || navigator.userLanguage; 
    console.log(userLang);
    switch(userLang) {
        case 'en-US' || 'en-UK' || 'en' || 'en-GB':
                language = en;
              break;
            case 'fr-FR':
                language = fr;
              break;
            default:
              language = en;
          }
          textchanger();
}


$(function(){
    let language;
    autolang();
    $('#langchange').click(langchanger);
});

