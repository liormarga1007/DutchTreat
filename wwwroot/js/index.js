const { containerBootstrap, Nlp, LangEn } = window.nlpjs

// shortland function
const el = document.getElementById.bind(document)

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// initialize speech recognition
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = SpeechRecognition ? new SpeechRecognition() : null

// how long to listen before sending the message
let MESSAGE_DELAY = 4500

// timer variable
let timer = null

let recognizing = false

// delay initialization until form is created
setTimeout(async () => {
    const container = await containerBootstrap()
    container.use(Nlp)
    container.use(LangEn)
    const nlp = container.get("nlp")
    nlp.settings.autoSave = false
    nlp.addLanguage("en")

    // Adds the utterances and intents for the NLP
    //nlp.addDocument("en", "goodbye for now", "greetings.bye")
    //nlp.addDocument("en", "bye bye take care", "greetings.bye")
    //nlp.addDocument("en", "okay see you later", "greetings.bye")
    //nlp.addDocument("en", "bye for now", "greetings.bye")
    //nlp.addDocument("en", "i must go", "greetings.bye")
    nlp.addDocument("en", "hello", "greetings.hello")
    nlp.addDocument("en", "hi", "greetings.hello")
    nlp.addDocument("en", "howdy", "greetings.hello")
    nlp.addDocument("en", "sports", "greetings.sports")
    nlp.addDocument("en", "sport", "greetings.sports")
    nlp.addDocument("en", "football", "greetings.sports")
    nlp.addDocument("en", "Chelsea versus Everton", "greetings.adress")
    nlp.addDocument("en", "Wolverhampton Wonders versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Brentford versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Brighton", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Chesterfield", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Brighton versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Night", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Leicester City", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Newcastle", "greetings.adress")
    nlp.addDocument("en", "Lille versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Norwich versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Brentford", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Leeds United versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Everton versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Watford", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Leeds United versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Sunderland ", "greetings.adress")
    nlp.addDocument("en", "Norwich versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Burnley", "greetings.adress")
    nlp.addDocument("en", "Wolverhampton Wonders versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Brentford", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Watford versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Leicester City", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Brighton ", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "Newcastle versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Everton", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Newcastle", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Leicester City", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "Leicester City versus Liverpool Lester", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Liverpool", "greetings.adress")
    nlp.addDocument("en", " Liverpool versus Shrewsbury Town", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Brentford", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Leicester City", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Liverpool", "greetings.adress")
    nlp.addDocument("en", " Inter versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Norwich ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus West Ham United", "greetings.adress")
    nlp.addDocument("en", " Liverpool versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Brighton versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Watford", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Everton", "greetings.adress")
    nlp.addDocument("en", "Newcastle versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Brentford versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Brighton", "greetings.adress")
    nlp.addDocument("en", "Newcastle United versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Burnley", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Aston Villa", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Southampton", "greetings.adress")
    nlp.addDocument("en", "Leeds United versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Watford", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Leicester City", "greetings.adress")
    nlp.addDocument("en", "Everton versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Norwich ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Brentford", "greetings.adress")
    nlp.addDocument("en", "Brighton versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Leicester City versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Crystal Palace  London", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Watford versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Murkamb ", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Southampton ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Leeds United versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Everton ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Newcastle United", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Brighton ", "greetings.adress")
    nlp.addDocument("en", "Brentford versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Leicester City ", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Burnley ", "greetings.adress")
    nlp.addDocument("en", "Norwich versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Norwich ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Southampton", "greetings.adress")
    nlp.addDocument("en", "Watford versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Brentford versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Leeds United ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Watford", "greetings.adress")
    nlp.addDocument("en", "Leicester versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Newcastle ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus West Ham United", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Aston Villa ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Everton", "greetings.adress")
    nlp.addDocument("en", "Brentford versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Burnley", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Norwich versus West Ham United", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Brighton versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "Newcastle versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Leicester City ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Brentford", "greetings.adress")
    nlp.addDocument("en", "Norwich versus Manchester City", "greetings.adress")
    nlp.addDocument("en", "Sporting Lisbon versus Manchester City", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Everton versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Sporting Lisbon", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Brighton", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Wolverhampton Wonders versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Watford", "greetings.adress")
    nlp.addDocument("en", "Leeds United versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Newcastle", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Aston Villa", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Southampton ", "greetings.adress")
    nlp.addDocument("en", "Watford versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Norwich ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Brighton versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Norwich versus Crystal Palace", "greetings.adress")
    nlp.addDocument("en", "Brentford versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Burnley", "greetings.adress")
    nlp.addDocument("en", "Wolverhampton Wonders versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Newcastle versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Lester versus Crystal Palace", "greetings.adress")
    nlp.addDocument("en", "Everton versus Crystal Palace", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Watford", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Wolverhampton Wonders versus Watford ", "greetings.adress")
    nlp.addDocument("en", "Watford versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Watford versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Newcastle versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Norwich ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Brighton", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Everton ", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Leeds United ", "greetings.adress")
    nlp.addDocument("en", "Watford versus Brentford ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Burnley ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Leicester City ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Watford", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Chesterfield", "greetings.adress")
    nlp.addDocument("en", "West Ham versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Aston Villa", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Shrewsbury Town", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Murkamb ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Everton", "greetings.adress")
    nlp.addDocument("en", "Wolverhampton Wonders versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Brentford versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Brighton", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Chesterfield", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Brighton versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Night", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Leicester City", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Newcastle", "greetings.adress")
    nlp.addDocument("en", "Lille versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Norwich versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Brentford", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Leeds United versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Everton versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Watford", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Leeds United versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Sunderland ", "greetings.adress")
    nlp.addDocument("en", "Norwich versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Burnley", "greetings.adress")
    nlp.addDocument("en", "Wolverhampton Wonders versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Brentford", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Watford versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Leicester City", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Brighton ", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "Newcastle versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Everton", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Newcastle", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Leicester City", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "Leicester City versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Shrewsbury Town", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Brentford", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Leicester City", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Inter versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Norwich ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus West Ham United", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Brighton versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Watford", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Everton", "greetings.adress")
    nlp.addDocument("en", "Newcastle versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Brentford versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Brighton", "greetings.adress")
    nlp.addDocument("en", "Newcastle United versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Burnley", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Aston Villa", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Southampton", "greetings.adress")
    nlp.addDocument("en", "Leeds United versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Watford", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Leicester City", "greetings.adress")
    nlp.addDocument("en", "Everton versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Norwich ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Brentford", "greetings.adress")
    nlp.addDocument("en", "Brighton versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Leicester City versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Liverpool", "greetings.adress")
    nlp.addDocument("en", " Tottenham versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Watford versus Tottenham", "greetings.adress")
    nlp.addDocument("en", " Tottenham versus Murkamb ", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Southampton ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Leeds United versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Everton ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Newcastle United", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Brighton ", "greetings.adress")
    nlp.addDocument("en", "Brentford versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Leicester City ", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Burnley ", "greetings.adress")
    nlp.addDocument("en", "Norwich versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Norwich ", "greetings.adress")
    nlp.addDocument("en", " Tottenham versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Southampton", "greetings.adress")
    nlp.addDocument("en", "Watford versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Brentford versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Leeds United ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Watford", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Newcastle ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Wolverhampton Wonders ", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus West Ham United", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Aston Villa ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Everton", "greetings.adress")
    nlp.addDocument("en", "Brentford versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Burnley", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Norwich versus West Ham United", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Brighton versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "Newcastle versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Leicester City ", "greetings.adress")
    nlp.addDocument("en", "Arsenal versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Brentford", "greetings.adress")
    nlp.addDocument("en", "Norwich versus Manchester City", "greetings.adress")
    nlp.addDocument("en", "Sporting Lisbon versus Manchester City", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Everton versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Manchester United ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Sporting Lisbon", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Brighton", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Wolverhampton Wonders versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Watford", "greetings.adress")
    nlp.addDocument("en", "Leeds United versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Newcastle", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Aston Villa", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Southampton ", "greetings.adress")
    nlp.addDocument("en", "Watford versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Norwich ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Brighton versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Norwich versus Crystal Palace", "greetings.adress")
    nlp.addDocument("en", "Brentford versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Chelsea ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Burnley", "greetings.adress")
    nlp.addDocument("en", "Wolverhampton Wonders versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Manchester City ", "greetings.adress")
    nlp.addDocument("en", "Newcastle versus Crystal Palace  Newcastle", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Arsenal", "greetings.adress")
    nlp.addDocument("en", "Lester versus Crystal Palace", "greetings.adress")
    nlp.addDocument("en", "Everton versus Crystal Palace", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Watford", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Burnley versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Crystal Palace ", "greetings.adress")
    nlp.addDocument("en", "Wolverhampton Wonders versus Watford ", "greetings.adress")
    nlp.addDocument("en", "Watford versus West Ham United ", "greetings.adress")
    nlp.addDocument("en", "Watford versus Tottenham", "greetings.adress")
    nlp.addDocument("en", "Newcastle versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Norwich ", "greetings.adress")
    nlp.addDocument("en", "West Ham United versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Brighton ", "greetings.adress")
    nlp.addDocument("en", "Aston Villa versus Watford", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Arsenal ", "greetings.adress")
    nlp.addDocument("en", "Southampton versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Everton ", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Leeds United ", "greetings.adress")
    nlp.addDocument("en", "Watford versus Brentford ", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Burnley ", "greetings.adress")
    nlp.addDocument("en", "Crystal Palace versus Watford", "greetings.adress")
    nlp.addDocument("en", "Watford versus Leicester City ", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Watford", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Chesterfield", "greetings.adress")
    nlp.addDocument("en", "West Ham versus Leeds United", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Aston Villa", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Shrewsbury Town", "greetings.adress")
    nlp.addDocument("en", "Tottenham versus Murkamb ", "greetings.adress")
    nlp.addDocument("en", "2022 FA Cup Final  London", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Elche", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Rayo Vallecano", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Athletic Bilbao", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Ossona", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Cadiz ", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Mallorca", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Salta Vigo", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Cadiz ", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Elche Madrid", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Granada ", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Alabs ", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Real Sociedad", "greetings.adress")
    nlp.addDocument("en", " Real Madrid versus Paris Saint-Germain", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Hattafa ", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Espanyol", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Levante", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Real Betis ", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Rayo Vallecano", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Levante ", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Getafe ", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Salta Vigo", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Cadiz ", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Alabs ", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Espanyol", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Granada ", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Elche", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Real Betis ", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Hattafa ", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Mallorca", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Salta Vigo", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Espanyol", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Rayo Vallecano", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Espanyol", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Ossona ", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Hattafa", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Salta Vigo", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Elche", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Real Sociedad", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Granada ", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Seville -Cadiz ", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Majorca", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Athletic Bilbao", "greetings.adress")
    nlp.addDocument("en", "Villarreal versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Elche", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Rayo Vallecano", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Athletic Bilbao", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Ossona", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Cadiz ", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Mallorca", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Salta Vigo", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Cadiz ", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Elche", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Granada ", "greetings.adress")
    nlp.addDocument("en", " Paris Saint-Germain versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Alabs ", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Real Sociedad", "greetings.adress")
    nlp.addDocument("en", " Real Madrid versus Paris Saint-Germain", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Hattafa ", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Espanyol", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Levante", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Real Betis ", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Rayo Vallecano", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Levante ", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Getafe ", "greetings.adress")
    nlp.addDocument("en", " Atletico Madrid versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Salta Vigo", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Cadiz ", "greetings.adress")
    nlp.addDocument("en", " Manchester United versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Alabs ", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Espanyol", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Granada ", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Elche", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Real Betis ", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Hattafa ", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Mallorca", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Salta Vigo", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Espanyol", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Rayo Vallecano", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Espanyol", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Ossona ", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Valencia", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Barcelona", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Hattafa", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Salta Vigo", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Elche", "greetings.adress")
    nlp.addDocument("en", "Espanyol versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Real Sociedad", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Granada ", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Cadiz ", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Majorca", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Sevilla", "greetings.adress")
    nlp.addDocument("en", "Sevilla versus Athletic Bilbao", "greetings.adress")
    nlp.addDocument("en", " Villarreal versus Juventus", "greetings.adress")
    nlp.addDocument("en", " Juventus versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Barcelona versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Cagliari", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Napoli", "greetings.adress")
    nlp.addDocument("en", "Rome versus Juventus Borgata", "greetings.adress")
    nlp.addDocument("en", " Inter versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Udinese ", "greetings.adress")
    nlp.addDocument("en", "Milan versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Las Verona", "greetings.adress")
    nlp.addDocument("en", "Atlanta versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Turin ", "greetings.adress")
    nlp.addDocument("en", " Villarreal versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Specia", "greetings.adress")
    nlp.addDocument("en", " Juventus versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Salernitna", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Bologna", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Venice", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Lazio", "greetings.adress")
    nlp.addDocument("en", "Inter versus Turin ", "greetings.adress")
    nlp.addDocument("en", "Inter versus Lazio", "greetings.adress")
    nlp.addDocument("en", " Inter versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Inter versus Venice", "greetings.adress")
    nlp.addDocument("en", "Inter Milan", "greetings.adress")
    nlp.addDocument("en", "Naples versus Inter", "greetings.adress")
    nlp.addDocument("en", "", "greetings.adress")
    nlp.addDocument("en", "Inter versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Inter versus Sassolo ", "greetings.adress")
    nlp.addDocument("en", "Inter versus Slernitna ", "greetings.adress")
    nlp.addDocument("en", " Liverpool versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Inter versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Inter versus Las Verona", "greetings.adress")
    nlp.addDocument("en", "Inter versus Rome", "greetings.adress")
    nlp.addDocument("en", "Inter versus Ampoli", "greetings.adress")
    nlp.addDocument("en", "Inter versus Sampdoria", "greetings.adress")
    nlp.addDocument("en", "Milan versus Naples", "greetings.adress")
    nlp.addDocument("en", "Milan versus Rome", "greetings.adress")
    nlp.addDocument("en", "Milan versus Spezia ", "greetings.adress")
    nlp.addDocument("en", "Milan versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Inter Milan", "greetings.adress")
    nlp.addDocument("en", "Milan versus Sampdoria", "greetings.adress")
    nlp.addDocument("en", "Milan versus Udinese", "greetings.adress")
    nlp.addDocument("en", "Naples versus Milan ", "greetings.adress")
    nlp.addDocument("en", "Milan versus Ampoli", "greetings.adress")
    nlp.addDocument("en", "Milan versus Bologna", "greetings.adress")
    nlp.addDocument("en", "Milan versus Genoa", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Milan ", "greetings.adress")
    nlp.addDocument("en", "Milan versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Milan versus Atlanta", "greetings.adress")
    nlp.addDocument("en", "Rome versus Sampdoria Borgata", "greetings.adress")
    nlp.addDocument("en", "Milan versus Rome", "greetings.adress")
    nlp.addDocument("en", "Rome versus Juventus Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Cagliari Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Genoa Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Las Verona", "greetings.adress")
    nlp.addDocument("en", "Rome versus Atlanta Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Lazio Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Salernitna Borgata", "greetings.adress")
    nlp.addDocument("en", "Naples versus Rome", "greetings.adress")
    nlp.addDocument("en", "Inter versus Rome", "greetings.adress")
    nlp.addDocument("en", "Rome versus Bologna Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Venice Borgata", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Genoa", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Ampoli  Borgata", "greetings.adress")
    nlp.addDocument("en", "Inter versus Lazio", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Atlanta", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Bologna", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Naples", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Venice Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Lazio Borgata", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Sassolo ", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Turin ", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Milan ", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Sampdoria", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Lazio", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Las Verona", "greetings.adress")
    nlp.addDocument("en", "Milan versus Naples", "greetings.adress")
    nlp.addDocument("en", "Naples versus Specia", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Napoli", "greetings.adress")
    nlp.addDocument("en", "Naples versus Sampdoria", "greetings.adress")
    nlp.addDocument("en", "Naples versus Salernitna", "greetings.adress")
    nlp.addDocument("en", "Naples versus Inter", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Naples", "greetings.adress")
    nlp.addDocument("en", "Naples versus Milan ", "greetings.adress")
    nlp.addDocument("en", "Naples versus Udinese", "greetings.adress")
    nlp.addDocument("en", "Naples versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Naples versus Rome", "greetings.adress")
    nlp.addDocument("en", "Naples versus Sassolo ", "greetings.adress")
    nlp.addDocument("en", "Naples versus Genoa", "greetings.adress")
    nlp.addDocument("en", "Inter versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Naples versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Milan versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Atlanta", "greetings.adress")
    nlp.addDocument("en", "Atlanta versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Rome versus Atlanta Borgata", "greetings.adress")
    nlp.addDocument("en", "Milan versus Atlanta", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Cagliari", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Napoli", "greetings.adress")
    nlp.addDocument("en", "Rome versus Juventus Borgata", "greetings.adress")
    nlp.addDocument("en", " Inter versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Udinese ", "greetings.adress")
    nlp.addDocument("en", "Milan versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Las Verona", "greetings.adress")
    nlp.addDocument("en", "Atlanta versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Turin ", "greetings.adress")
    nlp.addDocument("en", " Villarreal versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Specia", "greetings.adress")
    nlp.addDocument("en", " Juventus versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Salernitna", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Bologna", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Venice", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Lazio", "greetings.adress")
    nlp.addDocument("en", "Inter versus Turin ", "greetings.adress")
    nlp.addDocument("en", "Inter versus Lazio", "greetings.adress")
    nlp.addDocument("en", " Inter versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Inter versus Venice", "greetings.adress")
    nlp.addDocument("en", "Inter Milan", "greetings.adress")
    nlp.addDocument("en", "Naples versus Inter", "greetings.adress")
    nlp.addDocument("en", " Inter versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Inter versus Sassolo ", "greetings.adress")
    nlp.addDocument("en", "Inter versus Slernitna ", "greetings.adress")
    nlp.addDocument("en", " Liverpool versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Inter versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Inter versus Las Verona", "greetings.adress")
    nlp.addDocument("en", "Inter versus Rome", "greetings.adress")
    nlp.addDocument("en", "Inter versus Ampoli", "greetings.adress")
    nlp.addDocument("en", "Inter versus Sampdoria", "greetings.adress")
    nlp.addDocument("en", "Milan versus Naples", "greetings.adress")
    nlp.addDocument("en", "Milan versus Rome", "greetings.adress")
    nlp.addDocument("en", "Milan versus Spezia ", "greetings.adress")
    nlp.addDocument("en", "Milan versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Inter Milan", "greetings.adress")
    nlp.addDocument("en", "Milan versus Sampdoria", "greetings.adress")
    nlp.addDocument("en", "Milan versus Udinese", "greetings.adress")
    nlp.addDocument("en", "Naples versus Milan ", "greetings.adress")
    nlp.addDocument("en", "Milan versus Ampoli", "greetings.adress")
    nlp.addDocument("en", "Milan versus Bologna", "greetings.adress")
    nlp.addDocument("en", "Milan versus Genoa", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Milan ", "greetings.adress")
    nlp.addDocument("en", "Milan versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Milan versus Atlanta", "greetings.adress")
    nlp.addDocument("en", "Rome versus Sampdoria Borgata", "greetings.adress")
    nlp.addDocument("en", "Milan versus Rome", "greetings.adress")
    nlp.addDocument("en", "Rome versus Juventus Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Cagliari Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Genoa Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Las Verona", "greetings.adress")
    nlp.addDocument("en", "Rome versus Atlanta Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Lazio Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Salernitna Borgata", "greetings.adress")
    nlp.addDocument("en", "Naples versus Rome", "greetings.adress")
    nlp.addDocument("en", "Inter versus Rome", "greetings.adress")
    nlp.addDocument("en", "Rome versus Bologna Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Venice Borgata", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Genoa", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Ampoli  Borgata", "greetings.adress")
    nlp.addDocument("en", "Inter versus Lazio", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Atlanta", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Bologna", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Naples", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Venice Borgata", "greetings.adress")
    nlp.addDocument("en", "Rome versus Lazio Borgata", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Sassolo ", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Turin ", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Milan ", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Sampdoria", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Lazio", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Las Verona", "greetings.adress")
    nlp.addDocument("en", "Milan versus Naples", "greetings.adress")
    nlp.addDocument("en", "Naples versus Specia", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Napoli", "greetings.adress")
    nlp.addDocument("en", "Naples versus Sampdoria", "greetings.adress")
    nlp.addDocument("en", "Naples versus Salernitna", "greetings.adress")
    nlp.addDocument("en", "Naples versus Inter", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Naples", "greetings.adress")
    nlp.addDocument("en", "Naples versus Milan ", "greetings.adress")
    nlp.addDocument("en", "Naples versus Udinese", "greetings.adress")
    nlp.addDocument("en", "Naples versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Naples versus Rome", "greetings.adress")
    nlp.addDocument("en", "Naples versus Sassolo ", "greetings.adress")
    nlp.addDocument("en", "Naples versus Genoa", "greetings.adress")
    nlp.addDocument("en", "Inter versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Naples versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Milan versus Fiorentina", "greetings.adress")
    nlp.addDocument("en", "Lazio versus Atlanta", "greetings.adress")
    nlp.addDocument("en", "Atlanta versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Rome versus Atlanta Borgata", "greetings.adress")
    nlp.addDocument("en", "Milan versus Atlanta", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Sporting Lisbon versus ManChester City ", "greetings.adress")
    nlp.addDocument("en", "Red Bull Salzburg versus Bayern Munich", "greetings.adress")
    nlp.addDocument("en", "Inter versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Night", "greetings.adress")
    nlp.addDocument("en", "Villarreal versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Benfica versus Ajax ", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Red Bull Salzburg", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Sporting Lisbon", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Paris Saint-Germain", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Benfica ", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Lille versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Sporting Lisbon versus Manchester City", "greetings.adress")
    nlp.addDocument("en", "Red Bull Salzburg versus Bayern Munich", "greetings.adress")
    nlp.addDocument("en", "Inter versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Night", "greetings.adress")
    nlp.addDocument("en", "Villarreal versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Benfica versus Ajax ", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Red Bull Salzburg", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Sporting Lisbon", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Paris Saint-Germain", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Benfica ", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Lille versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "hampions League Final 2022  St.", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Sporting Lisbon versus Manchester City", "greetings.adress")
    nlp.addDocument("en", "Red Bull Salzburg versus Bayern Munich", "greetings.adress")
    nlp.addDocument("en", "Inter versus Liverpool", "greetings.adress")
    nlp.addDocument("en", "Chelsea versus Night", "greetings.adress")
    nlp.addDocument("en", "Villarreal versus Juventus", "greetings.adress")
    nlp.addDocument("en", "Benfica versus Ajax ", "greetings.adress")
    nlp.addDocument("en", "Atletico Madrid versus Manchester United", "greetings.adress")
    nlp.addDocument("en", "Liverpool versus Inter ", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Red Bull Salzburg", "greetings.adress")
    nlp.addDocument("en", "Manchester City versus Sporting Lisbon", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Paris Saint-Germain", "greetings.adress")
    nlp.addDocument("en", "Manchester United versus Atletico Madrid", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Benfica ", "greetings.adress")
    nlp.addDocument("en", "Juventus versus Villarreal", "greetings.adress")
    nlp.addDocument("en", "Lille versus Chelsea", "greetings.adress")
    nlp.addDocument("en", "Lyon versus Paris Saint-Germain", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Brest ", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Reims", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Ran", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Real Madrid", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Saint-Etienne", "greetings.adress")
    nlp.addDocument("en", "Real Madrid versus Paris Saint-Germain", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Bordeaux", "greetings.adress")
    nlp.addDocument("en", "Monaco versus Paris Saint-Germain Monte", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Lorraine", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Marseille", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Lance", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Troyes", "greetings.adress")
    nlp.addDocument("en", "Paris Saint-Germain versus Metz", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Fortuna Citard ", "greetings.adress")
    nlp.addDocument("en", "F.S.W. Eindhoven versus Ajax ", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Hercules Almelo", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Twente ", "greetings.adress")
    nlp.addDocument("en", "Benfica versus Ajax ", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Walbike", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Benfica ", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Feyenoord", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Sparta Rotterdam ", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Zwolle ", "greetings.adress")
    nlp.addDocument("en", "Ajax versus Hornbone ", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Wolfsburg", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Borussia Mönchengladbach", "greetings.adress")
    nlp.addDocument("en", "Hertha Berlin versus Bayern Munich", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Red Bull Leipzig", "greetings.adress")
    nlp.addDocument("en", "Red Bull Salzburg versus Bayern Munich", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Greater Firt", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Bayern Leverkusen", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Red Bull Salzburg", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Union Berlin", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Augsburg", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Borussia Dortmund", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Stuttgart", "greetings.adress")
    nlp.addDocument("en", "Borussia Dortmund versus Groiter Firt", "greetings.adress")
    nlp.addDocument("en", "Hertha Berlin versus Borussia Dortmund", "greetings.adress")
    nlp.addDocument("en", "Borussia Dortmund versus Freiburg", "greetings.adress")
    nlp.addDocument("en", "Borussia Dortmund versus Bayer Leverkusen", "greetings.adress")
    nlp.addDocument("en", "Borussia Dortmund versus Borussia Mönchengladbach ", "greetings.adress")
    nlp.addDocument("en", "Borussia Dortmund versus Arminia Bielefeld", "greetings.adress")
    nlp.addDocument("en", "Borussia Dortmund versus Leipzig", "greetings.adress")
    nlp.addDocument("en", "Borussia Dortmund versus Wolfsburg", "greetings.adress")
    nlp.addDocument("en", "Bayern Munich versus Borussia Dortmund", "greetings.adress")
    nlp.addDocument("en", "BRussia Dortmund versus Bochum", "greetings.adress")
    nlp.addDocument("en", "Borussia Dortmund versus Hertha Berlin", "greetings.adress")

    nlp.addDocument('en', '%fullname%', 'address');
    nlp.addDocument('en', 'full name %fullname%', 'address');
    nlp.addDocument('en', '@fullname', 'address');

    nlp.addDocument('en', 'address %city%', 'phonenumber');
    nlp.addDocument('en', '@city', 'phonenumber');

    nlp.addDocument('en', 'my phone number is .* @phonenumber', 'number');
    nlp.addDocument('en', 'my phone number .* @phonenumber', 'number');
    nlp.addDocument('en', 'phone number .* %phonenumber%', 'number');
    nlp.addDocument('en', 'phonenumber .* @phonenumber', 'number');
    nlp.addDocument('en', '@phonenumber', 'number');
    nlp.addDocument('en', '%phonenumber%', 'number');

    nlp.addDocument('en', 'mail .* @email', 'number');
    nlp.addDocument('en', 'email .* @email', 'number');
    nlp.addDocument('en', '@email', 'number');
    nlp.addDocument('en', '@email2', 'number');

    nlp.addDocument('en', '@number tickets', 'processing');
    nlp.addDocument('en', '@number', 'processing');
    
    // Train also the NLG
    //nlp.slotManager.addSlot('greetings.adress', 'fullname', true, { en: 'What is your full name ?' });
    nlp.slotManager.addSlot('greetings.adress', 'city', true, { en: 'What is your address sending ticket ?' });
    nlp.slotManager.addSlot('phonenumber', 'phonenumber', true, { en: 'What is your phone number ?' });
    //nlp.slotManager.addSlot('email', 'email', true, { en: 'What is your email ?' });
    nlp.slotManager.addSlot('number', 'number', true, { en: 'How many tickets ?' });

    //nlp.addAnswer("en", "greetings.bye", "see you soon!")
    nlp.addAnswer("en", "greetings.hello", "which event to reserve : sports ? music?")
    nlp.addAnswer("en", "greetings.sports", "'For which game do you want to reserve ticket ? ")
    nlp.addAnswer("en", "greetings.music", "'For which concert do you want to reserve ticket ? ")
    
    //nlp.addAnswer("en", "greetings.adress", "'For which email do you want to send ticket ? ")
    //nlp.addAnswer("en", "email", "what is your phone number ?")
    //nlp.addAnswer("en", "phonenumber", "what is your address ?")
    //nlp.addAnswer("en", "address", "How many tickets ?")
    nlp.addAnswer("en", "processing", "please wait while processing your reservation")
    const corpus = {
        name: 'corpus',
        locale: 'en-US',
        data: [
            {
                intent: 'greet',
                utterances: ['hello', 'hi', 'good morning', 'good night','Hellohello','Hihi'],
                answers: ['which event to reserve tickets ? sports ? music?'],
            },
            {
                intent: 'sports',
                utterances: ['sports', 'ports', 'Sportssports','fart','sparks','sports'],
                answers: ['For which game do you want to reserve ticket ? '],
            },
        ],
        entities: {
            hero: {
                locale: ['en', 'es'],
                type: 'text',
                options: {
                    spiderman: ['spider', 'spider-man'],
                    ironman: ['ironman', 'iron-man'],
                    thor: ['thor'],
                },
            },
            //email: {
            //    locale: ['en', 'es'],
            //    regex: '/\\b(\\w[-._\\w]*\\w@\\w[-._\\w]*\\w\\.\\w{2,3})\\b/gi',
            //},
            //email2: {
            //    locale: ['en', 'es'],
            //    regex: '/\\b(\\w[-._\\w]*\\w\\s+at\\s+\\w[-._\\w]*\\w\\.\\w{2,3})\\b/gi',
            //},

            //fullname: {
            //    locale: ['en', 'es'],
            //    regex: '\\b\\w[-._\\w]*\\w\\s+name\\s+is\\s+(\\w[-._\\w]*\\s+\\w[-._\\w]*).*\\b/gi',
            //},

            city: {
                locale: ['en', 'es'],
                regex: '\\b\\w[-._\\w]*\\w\\s+address\\s+(\\w[-._\\w]*\\s+\\w[-._\\w]*)\\b/gi',
            },

            phonenumber: {
                locale: ['en', 'es'],
                regexp: '(?:(?:(\\+?972|\\(\\+?972\\)|\\+?\\(972\\))(?:\\s|\\.|-)?([1-9]\\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\\s|\\.|-)?([^0\\D]{1}\\d{2}(?:\\s|\\.|-)?\\d{4})/gi',
            },

            number: {
                locale: ['en', 'es'],
                regex: '\\b(\\d)\\b/gi',
            }
        },
    };
    await nlp.addCorpus(corpus);

    await nlp.train()

    let state = "";
    let game = "";
    let adress = "";
    let phone = "";
    let numoftickets = "";

    // initialize speech generation
    let synthVoice = null
    
        // wait until voices are ready
        
    synthVoice = text => {
        clearTimeout(timer)
        const synth = window.speechSynthesis
        const utterance = new SpeechSynthesisUtterance()
        // select some english voice
        //const voice = synth.getVoices().find(voice => {
        //    return voice.lang === "en-US"
        //})
        utterance.voice = currentVoice;
        utterance.text = text        
        synth.speak(utterance)
        if (text.includes("processing")) {
            
        }
        else {
            clearTimeout(timer)
            timer = setTimeout(onMessage, MESSAGE_DELAY)
        }
        
    }
        
        
    

    // form submit event
    async function onMessage(event) {
        if (event) event.preventDefault()
        let msg = el("message").value
        el("message").value = ""
        if (!msg) { recognition.start(); return }
        let userElement = document.createElement("div")
        userElement.innerHTML = "<b>User</b>: " + msg
        userElement.style.color = "blue"
        el("history").appendChild(userElement)
        if (state.includes("sports")) { game = msg; MESSAGE_DELAY = 2800 }
        if (state.includes("game")) { game = msg; MESSAGE_DELAY =2500}
        if (state.includes("address")) { adress = msg;msg += " address"; MESSAGE_DELAY= 2000}
        if (state.includes("phone")) { phone = msg; msg = msg.concat(' ', " phone number");MESSAGE_DELAY = 1500}
        if (state.includes("tickets")) { numoftickets = msg;  msg += " tickets"; MESSAGE_DELAY = 1800}
        const response = await nlp.process("en", msg)       
        const answer = response.answer || response.srcAnswer || "I don't understand."
        state = answer;
        const botElement = document.createElement("div")
        botElement.innerHTML = "<b>VOX</b>: " + answer
        botElement.style.color = "green"
        el("history").appendChild(botElement)
        recognition.stop()
        if (synthVoice) synthVoice(answer)
        if (answer.includes("processing")) {
            const Http = new XMLHttpRequest();
            const url = "https://mysterious-hollows-90255.herokuapp.com/?restaurant=eid=2177622" + game +
                "&persons=" + numoftickets +
                "&time=&date=" + adress +
                "&name=" + fullname +
                "&family=" + fullname +
                "&phone=+972" + phone +
                "&email=" + email +
                "&session=b9b67472 - 2b40 - 43bb - b163 - b6bad004c594";
            
            Http.open("GET", url);
            Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            Http.setRequestHeader('Access-Control-Allow-Origin',"*");
            Http.send();

            //Http.onreadystatechange = (e) => {
            //    console.log(Http.responseText)
            //}       
        }
        
        
    }

    // Add form submit event listener
    document.forms[0].onsubmit = onMessage

    // if speech recognition is supported then add elements for it
    if (recognition) {
        // add speak button
        const speakElement = document.createElement("button")
        speakElement.id = "speak"
        speakElement.innerText = "Speak!"
        speakElement.onclick = e => {
            e.preventDefault()
            if (el("history").childElementCount == 0) {
                const botElement = document.createElement("div")
                botElement.innerHTML = "<b>Bot</b>: Hi " + fullname + " for which event to reserve tickets: Sports ? Music ? "
                botElement.style.color = "green"
                el("history").appendChild(botElement)
                if (synthVoice) {
                    MESSAGE_DELAY = 5000;
                    synthVoice("Hi " + fullname + " for which event to reserve tickets: Sports ? Music ?");
                    MESSAGE_DELAY = 3000;
                }
                else {
                    recognition.start()
                }
            }
        }
        document.forms[0].appendChild(speakElement)

        // add "interim" element
        const interimElement = document.createElement("div")
        interimElement.id = "interim"
        interimElement.style.color = "grey"
        document.body.appendChild(interimElement)

        // configure continuous speech recognition
        recognition.continuous = true
        recognition.interimResults = true
        recognition.lang = "en-US"

        // switch to listening mode
        recognition.onstart = function () {
            recognizing = true
            el("speak").style.display = "none"
            el("send").style.display = "none"
            el("message").disabled = true
            el("message").placeholder = "Listening..."
        }

        recognition.onerror = function (event) {
            alert(event.error)
        }

        // switch back to type mode
        recognition.onend = function () {
            el("speak").style.display = "inline-block"
            el("send").style.display = "inline-block"
            el("message").disabled = false
            el("message").placeholder = "Type your message"
            el("interim").innerText = ""
            recognizing = false
        }

        // speech recognition result event;
        // append recognized text to the form input and display interim results
        recognition.onresult = event => {
            event.preventDefault();
            clearTimeout(timer)
            timer = setTimeout(onMessage, MESSAGE_DELAY)
            let transcript = ""
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    let msg = event.results[i][0].transcript
                    if (!el("message").value) msg = capitalize(msg.trimLeft())
                    el("message").value = msg
                } else {
                    transcript = event.results[i][0].transcript
                }
            }
            el("interim").innerText = transcript
        }
    }
    const voiceSelect = document.getElementById('voices');
    let voices;
    let currentVoice;

    const populateVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        voiceSelect.innerHTML = '';

        availableVoices.forEach(voice => {
            const option = document.createElement('option');
            let optionText = `${voice.name} (${voice.lang})`;
            if (voice.default || voice.lang.includes("en-US") || voice.lang.includes("en_US")) {
                optionText += ' [default]';               
                    currentVoice = voice;
                    option.selected = true;               
            }
            if (currentVoice === voice) {
                option.selected = true;
            }
            option.textContent = optionText;
            voiceSelect.appendChild(option);
        });
        voices = availableVoices;
    };

    populateVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoices;
    }

    voiceSelect.addEventListener('change', event => {
        const selectedIndex = event.target.selectedIndex;
        currentVoice = voices[selectedIndex];
    });   
})