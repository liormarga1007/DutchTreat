﻿const { containerBootstrap, Nlp, LangEn } = window.nlpjs

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

    nlp.addDocument("en", "music", "greetings.music")

    nlp.addDocument("en", "pizza", "greetings.pizza")
    nlp.addDocument("en", "hut", "greetings.pizza")
    nlp.addDocument("en", "pizzahut", "greetings.pizza")
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
    nlp.addDocument("en", "Borussia Dortmund versus Bochum", "greetings.adress")
    nlp.addDocument("en", "Borussia Dortmund versus Hertha Berlin", "greetings.adress")

    nlp.addDocument("en", "coldplay berlin", "greetings.adress")
    nlp.addDocument("en", "call play berlin", "greetings.adress")

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

    nlp.addDocument('en', 'crispy', 'greetings.size');
    nlp.addDocument('en', 'krispy', 'greetings.size');
    nlp.addDocument('en', 'pan', 'greetings.size');
    nlp.addDocument('en', 'thin', 'greetings.size');
    nlp.addDocument('en', 'send', 'greetings.size');
    nlp.addDocument('en', 'same', 'greetings.size');
    nlp.addDocument('en', 'seek', 'greetings.size');
    nlp.addDocument('en', 'thick', 'greetings.size');
    nlp.addDocument('en', '10', 'greetings.size');

    nlp.addDocument('en', 'small', 'greetings.topic');
    nlp.addDocument('en', 'extra', 'greetings.topic');
    nlp.addDocument('en', 'large', 'greetings.topic');

    nlp.addDocument('en', 'olives', 'greetings.verification');
    nlp.addDocument('en', 'olive', 'greetings.verification');
    nlp.addDocument('en', 'onions', 'greetings.verification');
    nlp.addDocument('en', 'mushroom', 'greetings.verification');
    
    nlp.addDocument('en', 'plane', 'greetings.verification');
    nlp.addDocument('en', 'plain', 'greetings.verification');
    nlp.addDocument('en', 'no', 'greetings.verification');
    nlp.addDocument('en', 'none', 'greetings.verification');

    nlp.addDocument('en', 'verification', 'greetings.code');
    nlp.addDocument('en', 'pay', 'greetings.confirm');
    
    // Train also the NLG
    //nlp.slotManager.addSlot('greetings.adress', 'fullname', true, { en: 'What is your full name ?' });
    nlp.slotManager.addSlot('greetings.adress', 'city', true, { en: 'What is your address sending ticket ?' });
    nlp.slotManager.addSlot('phonenumber', 'phonenumber', true, { en: 'What is your phone number ?' });
    //nlp.slotManager.addSlot('email', 'email', true, { en: 'What is your email ?' });
    nlp.slotManager.addSlot('number', 'number', true, { en: 'How many tickets ?' });

    //nlp.addAnswer("en", "greetings.bye", "see you soon!")
    nlp.addAnswer("en", "greetings.hello", "which event to reserve : sports ? music?")
    nlp.addAnswer("en", "greetings.sports", "For which game do you want to reserve ticket ? ")
    nlp.addAnswer("en", "greetings.music", "which artist or band? And in which city?")

    nlp.addAnswer("en", "greetings.pizza", "What sort of pizza? Pan? Crispy? ")
    nlp.addAnswer("en", "greetings.size", "what size? Small? Large? Extra large?")
    nlp.addAnswer("en", "greetings.topic", "Any extras?  Mushrooms? Half Mushrooms? Olives?")
    nlp.addAnswer("en", "greetings.verification", "What is your mobile for verification ?")
    nlp.addAnswer("en", "greetings.code", "We are loading your order ... We are getting your details ... We are adding your topic ... What is the code sent to the mobile ? it may take 10 sec")
    nlp.addAnswer("en", "greetings.confirm", "you pay when you get your pizza, thank you.")

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
            {
                intent: 'pizzahut',
                utterances: ['pizzahut', 'pizza', 'hut'],
                answers: ['What sort of pizza? Pan? Crispy?'],
            },
            {
                intent: 'greetings.size',
                utterances: ['10','pan' , 'crispy','krispy','thin', 'sing', 'same','seek','thick','spin','saint','fake','dick','loud','take','peak','lowd','laws','Sick','fake','Zeeks'],
                answers: ['What size? Small? Large? Extra large?' ]
            },
            {
                intent: 'greetings.place',
                utterances: ["British Summer Time 2022  Elton John  London", "British Summer Time 2022  Pearl Jam  Host The Pixies  London", "British Summer Time 2022  Pearl Jam  London", "British Summer Time 2022  Duran Duran  Special Guest Nail Rogers London", "Dua Lipa  Miami", "Dua Lipa  Orlando", "Dua Lipa  Atlanta", "Dua Lipa  Nashville", "Dua Lipa  Charlotte", "Dua Lipa  Boston", "Dua Lipa  Philadelphia", "Dua Lipa  Montreal", "Dua Lipa  Toronto", "Dua Lipa  Detroit", "Dua Lipa  Columbus", "Dua Lipa  New York", "Dua Lipa  Washington", "Dua Lipa  Newark", "Dua Lipa  Buffalo", "Dua Lipa  Minneapolis", "Dua Lipa  Chicago", "Dua Lipa  Houston", "Dua Lipa  Dallas", "Dua Lipa  Denver", "Dua Lipa  Tulsa", "Dua Lipa  Phoenix", "Dua Lipa  Inglewood", "Dua Lipa  Inglewood", "Dua Lipa  Las Vegas", "Dua Lipa  San Jose", "Dua Lipa  Portland", "Dua Lipa  Seattle", "Dua Lipa  Vancouver", "Dua Lipa  Newcastle", "Doa Lipa London", "Doa Lipa London", "IDays Festival Milano 2022  Aerosmith  Milan", "IDays Festival Milano 2022  Foo Fighters + Nile Rodgers & Chic  Milan", "Snow Patrol  Boston", "Snow Patrol  New York", "Snow Patrol  New York", "Snow Patrol  Washington", "Snow Patrol  Detroit", "Snow Patrol  Chicago", "Snow Patrol  Denver", "Snow Patrol  San Francisco", "Snow Patrol  San Francisco", "Snow Patrol  Los Angeles", "Snow Patrol  Los Angeles", "Pinkpop Festival: Metallica Landgraaf", "Twenty One Pilots  London", "Twenty One Pilots  London", "Twenty One Pilots  London", "Rock & Rechter Festival Vercht", "Sound Meter Festival Madrid", "Ed Sheeran  Dublin", "Ed Sheeran  Dublin", "Ed Sheeran  Ballintemple", "Ed Sheeran  Ballintemple", "Ed Sheeran  Belfast", "Ed Sheeran  Belfast", "Ed Sheeran  Belfast", "Ed Sheeran  Belfast", "Ed Sheeran  Cardiff", "Ed Sheeran  Cardiff", "Ed Sheeran  Cardiff", "Ed Sheeran  Sunderland", "Ed Sheeran  Sunderland", "Ed Sheeran  Sunderland", "Ed Sheeran  Manchester", "Ed Sheeran  Manchester", "Ed Sheeran  Manchester", "Ed Sheeran  Manchester", "Ed Sheeran  Glasgow", "Ed Sheeran  Glasgow", "Ed Sheeran  London", "Ed Sheeran  London", "Ed Sheeran  London", "Ed Sheeran  London", "Ed Sheeran  London", "Ed Sheeran  Glaskirchen", "Ed Sheeran  Glaskirchen", "Ed Sheeran  Glaskirchen", "Ed Sheeran  Amsterdam", "Ed Sheeran  Amsterdam", "Ed Sheeran  Brussels", "Ed Sheeran  Brussels", "Ed Sheeran  Paris", "Ed Sheeran  Paris", "Ed Sheeran  Copenhagen", "Ed Sheeran  Copenhagen", "Ed Sheeran  Copenhagen", "Ed Sheeran  Goteborg", "Ed Sheeran  Goteborg", "Ed Sheeran  Helsinki", "Ed Sheeran  Helsinki", "Ed Sheeran  Warsaw", "Ed Sheeran  Warsaw", "Ed Sheeran  Vienna", "Ed Sheeran  Vienna", "Ed Sheeran  Munich", "Ed Sheeran  Munich", "Ed Sheeran  Munich", "Ed Sheeran  Zurich", "Ed Sheeran  Zurich", "Ed Sheeran  Frankfurt", "Ed Sheeran  Frankfurt", "Ed Sheeran  Frankfurt", "Elton John  New Orleans", "Elton John  Houston", "Elton John  Houston", "Elton John  Dallas", "Elton John  Dallas", "Elton John  North Little Rock", "Elton John  Oklahoma City", "Elton John  Kansas City", "Elton John  Chicago", "Elton John  Chicago", "Elton John  Detroit", "Elton John  Detroit", "Elton John  Toronto", "Elton John  Toronto", "Elton John  Montreal", "Elton John  Montreal", "Elton John  New York", "Elton John  New York", "Elton John  Newark", "Elton John  Brooklyn", "Elton John  Brooklyn", "Elton John  Uniondale", "Elton John  Uniondale", "Elton John  Fargo", "Elton John  Saint Paul", "Elton John  Saint Paul", "Elton John  Des Moines", "Elton John  Lincoln", "Elton John  St. Louis", "Elton John  Indianapolis", "Elton John  Milwaukee", "Elton John  Grand Rapids", "Elton John  Knoxville", "Elton John  Lexington", "Elton John  Columbus", "Elton John  Hershey", "Elton John  Louisville", "Elton John  Greensboro", "Elton John  Columbia", "Elton John  Jacksonville", "Elton John  Tampa", "Elton John  Orlando", "Elton John  Miami", "Elton John  Frankfurt", "Elton John  Leipzig", "Elton John  Milan", "Elton John  Horsens", "Elton John  Arnhem", "Elton John  Nanterre", "Elton John  Nanterre", "Elton John  Norwich", "Elton John  Liverpool", "Elton John  Sunderland", "Elton John  Bristol", "Elton John  Swansea", "Elton John  Watford", "Elton John  Watford", "Elton John  Philadelphia", "Elton John  Detroit", "Elton John  East Rutherford", "Elton John  Foxboro", "Elton John  Cleveland", "Elton John  Chicago", "Elton John  Toronto", "Elton John  Syracuse", "Elton John  Pittsburgh", "Elton John  Charlotte", "Elton John  Atlanta", "Elton John  Washington", "Elton John  Arlington", "Elton John  Nashville", "Elton John  Vancouver", "Elton John  San Antonio", "Elton John  Houston", "Elton John  Phoenix", "Elton John  Los Angeles", "Elton John  Los Angeles", "Elton John  Auckland", "Elton John  Auckland", "Elton John  Dublin", "Elton John  Dublin", "Elton John  Belfast", "Elton John  London", "Elton John  London", "Elton John  London", "Elton John  London", "Elton John  London", "Elton John  London", "Elton John  London", "Elton John  London", "Elton John  London", "Elton John  Birmingham", "Elton John  Liverpool", "Elton John  Liverpool", "Elton John  Munich", "Elton John  Stockholm", "Elton John  Hamburg", "Elton John  Hamburg", "Elton John  Hamburg", "Elton John  Berlin", "Elton John  Berlin", "Elton John  Berlin", "Elton John  Cologne", "Elton John  Cologne", "Elton John  Cologne", "Elton John  Oslo", "Elton John  Oslo", "Elton John  Barcelona", "Elton John  Barcelona", "Elton John  Antwerp", "Elton John  Antwerp", "Elton John  Manchester", "Elton John  Manchester", "Elton John  Manchester", "Elton John  Leeds", "Elton John  Birmingham", "Elton John  Birmingham", "Elton John  Aberdeen", "Elton John  Aberdeen", "Elton John  Glasgow", "Andrea Bocelli  Miami", "Andrea Bocelli  Orlando", "Andrea Bocelli Prague", "Andrea Bocelli Amsterdam", "Andrea Bocelli Amsterdam", "Andrea Bocelli  Tampere", "Andrea Bocelli Hamburg", "Andrea Bocelli  Atlanta", "Andrea Bocelli  Charlotte", "Andrea Bocelli  Sunrise", "Andrea Bocelli  Las Vegas", "Andrea Bocelli  Phoenix", "Andrea Bocelli Paris", "Andrea Bocelli Antwerp", "Andrea Bocelli Herning", "Andrea Bocelli Copenhagen", "Andrea Bocelli  Oslo", "Andrea Bocelli Oslo", "Andrea Bocelli Oberhausen", "Andrea Bocelli Mannheim", "Andrea Bocelli Leipzig", "Andrea Bocelli Berlin", "Andrea Bocelli Klagenfurt", "Andrea Bocelli  Inverness", "Andrea Bocelli Inverness", "Andrea Bocelli Warsaw", "Andrea Bocelli Krakow", "Andrea Bocelli Vienna", "Andrea Bocelli Zurich", "Andrea Bocelli Marostica", "Andrea Bocelli  Liverpool", "Andrea Bocelli Liverpool", "Andrea Bocelli  Glasgow", "Andrea Bocelli Glasgow", "Andrea Bocelli  Belfast", "Andrea Bocelli Belfast", "Andrea Bocelli  Birmingham", "Andrea Bocelli Birmingham", "Andrea Bocelli  Sheffield", "Andrea Bocelli Sheffield", "Andrea Bocelli Dublin", "Andrea Bocelli Dublin", "Andrea Bocelli London", "Andrea Bocelli London", "Andrea Bocelli  Gdansk", "Andrea Bocelli Rome", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Amsterdam", "Andre Rio Antwerp", "Andre Rio Ziesendorf", "Andre Rio Berlin", "Andre Rio Mannheim", "Andre Rio Munich", "Andre Rio Stuttgart", "Andre Rio Nⁿrnberg", "Andre Rio Dortmund", "Andre Rio Frankfurt", "Andre Rio Zurich", "Andre Rio Kiel", "Andre Rio Berman", "Andre Rieu  Atlanta", "Andre Rieu & His Johann Strauss Orchestra  Jacksonville", "Andre Rieu & His Johann Strauss Orchestra  Orlando", "Andre Rieu  Sunrise", "Andre Rieu  Tampa", "Andre Rieu  Phoenix", "Andre Rieu  San Diego", "Andre Rieu  Las Vegas", "Andre Rieu  Anaheim", "Andre Rieu & His Johann Strauss Orchestra  Auckland", "Andre Rieu  Portland", "Andre Rieu  Tacoma", "Andre Rieu  Vancouver", "Andre Rio Manchester", "Andre Rio Leeds", "Andre Rio Newcastle", "Andre Rio Glasgow", "Andre Rio Liverpool", "Andre Rio Nottingham", "Andre Rio Birmingham", "Andre Rio Birmingham", "Andre Rio Dublin", "Andre Rio Belfast", "Andre Rio Dublin", "Andre Rio Dublin", "Andre Rio London", "Andre Rio London", "Andre Rio Prague", "Andre Rio Chemnitz", "Andre Rio Erfurt", "Andre Rio Krakow", "Andre Rio Gliwice", "Andre Rio Lodge", "Andre Rio Gdansk", "Andre Rio Gdansk", "Andre Rio Oslo", "Andre Rio Copenhagen", "Andre Rio Herning", "Andre Rio Hamburg", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Maastricht", "Andre Rio Vienna", "Andre Rio Belgrade", "Andre Rio Sofia", "Enrique Iglesias  Prague", "Eric Clapton London", "Eric Clapton London", "Eric Clapton Zurich", "Eric Clapton Milan", "Eric Clapton Bologna", "Eric Clapton Stuttgart", "Eric Clapton Munich", "Eric Clapton Vienna", "Eric Clapton Prague", "Eric Clapton Amsterdam", "Eric Clapton Dⁿsseldorf", "Eric Clapton Antwerp", "Eric Clapton Copenhagen", "Eric Clapton Copenhagen", "Eric Clapton Helsinki", "Bon Iver & Dijon  Mesa", "Bon Iver & Dijon  Austin", "Bon Iver & Dijon  Austin", "Bon Iver & Dijon  Irving", "Bon Iver & Dijon  Houston", "Bon Iver & Dijon  New Orleans", "Bon Iver & Dijon  Atlanta", "Bon Iver & Dijon  Wilmington", "Bon Iver & Dijon  St. Augustine", "Bon Iver & Dijon  Miami", "Bon Iver & Bonny Light Horseman  Forest Hills", "Bon Iver & Bonny Light Horseman  Pittsburgh", "Bon Iver & Bonny Light Horseman  Lewiston", "Bon Iver & Bonny Light Horseman  Essex Junction", "Bon Iver & Bonny Light Horseman  Portland", "Bon Iver & Bonny Light Horseman  East Providence", "Bon Iver & Bonny Light Horseman  Richmond", "Bon Iver & Bonny Light Horseman  Kansas City", "Bon Iver & Bonny Light Horseman  Maryland Heights", "Bon Iver & Bonny Light Horseman  Lincoln", "Bon Iver & Bonny Light Horseman  Newport", "Bon Iver & Bonny Light Horseman  Nashville", "Bon Iver & Bonny Light Horseman  Asheville", "Bon Iver & Bonny Light Horseman  Lisbon", "Billie Eilish  New Orleans", "Billie Eilish  Atlanta", "Billie Eilish  Charlotte", "Billie Eilish  Pittsburgh", "Billie Eilish  Washington", "Billie Eilish  University Park", "Billie Eilish  Buffalo", "Billie Eilish  Philadelphia", "Billie Eilish  Montreal", "Billie Eilish  Toronto", "Billie Eilish  New York", "Billie Eilish  New York", "Billie Eilish  Boston", "Billie Eilish  Newark", "Billie Eilish  Birmingham", "Billie Eilish  Nashville", "Billie Eilish  Louisville", "Billie Eilish  Detroit", "Billie Eilish  Chicago", "Billie Eilish  Saint Paul", "Billie Eilish  Omaha", "Billie Eilish  Denver", "Billie Eilish  Salt Lake City", "Billie Eilish  Vancouver", "Billie Eilish  Seattle", "Billie Eilish  Seattle", "Billie Eilish  San Francisco", "Billie Eilish  Sacramento", "Billie Eilish  Las Vegas", "Billie Eilish  Glendale", "Billie Eilish  Glendale", "Billie Eilish  Inglewood", "Billie Eilish  Inglewood", "Billie Eilish  Inglewood", "Billy Aylish  Belfast", "Billy Aylish  Dublin", "Billy Aylish  Dublin", "Billy Aylish  Manchester", "Billy Aylish  Manchester", "Billy Aylish  London", "Billy Aylish  London", "Billy Aylish  London", "Billy Aylish  Glasgow", "Billy Aylish  Birmingham", "Billy Aylish  London", "Billy Aylish  Amsterdam", "Billy Aylish  Frankfurt", "Billy Aylish  K httln", "Billy Aylish  Paris", "Billy Aylish  London", "Billy Aylish  London  ", "Billy Aylish  אנטוורפן  ", "Billy Aylish  Berlin  ", "Billy Aylish  ציריך  ", "Billy Joel  New York  ", "Billy Joel  New York  ", "Billy Joel  Fort Lauderdale  ", "Billy Joel  New York  ", "Billy Joel  Las Vegas  ", "Billy Joel  New York  ", "Billy Joel  New York  ", "Billy Joel  שארלוט  ", "Billy Joel  Notre Dame  ", "Billy Joel  Detroit  ", "Backstreet Boys  Las Vegas  ", "Backstreet Boys  Las Vegas  ", "Backstreet Boys  Las Vegas  ", "Backstreet Boys  Las Vegas  ", "Backstreet Boys  מלבורן  ", "Backstreet Boys  Sydney  ", "Backstreet Boys  Chula Vista  ", "Backstreet Boys  לוס אנגלס  ", "Backstreet Boys  פיניקס  ", "Backstreet Boys  Albuquerque  ", "Backstreet Boys  Spring  ", "Backstreet Boys  Irving  ", "Backstreet Boys  Rogers  ", "Backstreet Boys  Jacksonville  ", "Backstreet Boys  Tampa  ", "Backstreet Boys  West Palm Beach  ", "Backstreet Boys  שארלוט  ", "Backstreet Boys  Raleigh  ", "Backstreet Boys  Alpharetta  ", "Backstreet Boys  טורונטו  ", "Backstreet Boys  טורונטו  ", "Backstreet Boys  Darien Center  ", "Backstreet Boys  Burgettstown  ", "Backstreet Boys  Cuyahoga Falls  ", "Backstreet Boys  Noblesville  ", "Backstreet Boys  Bristow  ", "Backstreet Boys  Virginia Beach  ", "Backstreet Boys  Camden  ", "Backstreet Boys  Wantagh  ", "Backstreet Boys  Hartford  ", "Backstreet Boys  Holmdel  ", "Backstreet Boys  Mansfield  ", "Backstreet Boys  Saratoga Springs  ", "Backstreet Boys  Clarkston  ", "Backstreet Boys  Tinley Park  ", "Backstreet Boys  Maryland Heights  ", "Backstreet Boys  Englewood  ", "Backstreet Boys  Salt Lake City  ", "Backstreet Boys  Wheatland  ", "Backstreet Boys  Mountain View  ", "Backstreet Boys  Concord  ", "Backstreet Boys  Auburn  ", "Backstreet Boys  Nampa  ", "Backstreet Boys  Spokane  ", "Backstreet Boys  ונקובר  ", "Backstreet Boys  Quebec  ", "Backstreet Boys  מונטריאול  ", "Backstreet Boys  Lexington  ", "Backstreet Boys  Sioux Falls  ", "Backstreet Boys  Wichita  ", "Backstreet Boys  Oklahoma City  ", "Bruno Mars  Las Vegas  ", "Bruno Mars  Las Vegas  ", "Bruno Mars  Las Vegas  ", "Bruno Mars  Las Vegas  ", "Bryan Adams New Years Eve Party  ונקובר  ", "Brian Adams Stavanger  ", "Brian Adams Oslo  ", "Brian Adams Malmo  ", "Brian Adams Goteborg  ", "Brian Adams קופנהגן  ", "Brian Adams Horsens  ", "Brian Adams Horsens  ", "Brian Adams London  ", "Brian Adams London  ", "Brian Adams London  ", "Justin Bieber  סן דייגו  ", "Justin Bieber  Las Vegas  ", "Justin Bieber  Glendale  ", "Justin Bieber  אינגלווד  ", "Justin Bieber  Tacoma  ", "Justin Bieber  סן חוזה  ", "Justin Bieber  סן חוזה  ", "Justin Bieber  Sacramento  ", "Justin Bieber  לוס אנגלס  ", "Justin Bieber  לוס אנגלס  ", "Justin Bieber  פורטלנד  ", "Justin Bieber  Salt Lake City  ", "Justin Bieber  דנוור  ", "Justin Bieber  Tulsa  ", "Justin Bieber  Atlanta  ", "Justin Bieber  Atlanta  ", "Justin Bieber  טורונטו  ", "Justin Bieber  אוטווה  ", "Justin Bieber  מונטריאול  ", "Justin Bieber  Newark  ", "Justin Bieber  Brooklyn  ", "Justin Bieber  Pittsburgh  ", "Justin Bieber  Greensboro  ", "Justin Bieber  Jacksonville  ", "Justin Bieber  אורלנדו  ", "Justin Bieber  מיאמי  ", "Justin Bieber  סינסינטי  ", "Justin Bieber  אינדיאנפוליס  ", "Justin Bieber  Des Moines  ", "Justin Bieber  St. Louis  ", "Justin Bieber  אוסטין  ", "Justin Bieber  יוסטון  ", "Justin Bieber  Dallas  ", "Justin Bieber  קנזס סיטי  ", "Justin Bieber  Minneapolis  ", "Justin Bieber  שיקגו  ", "Justin Bieber  שיקגו  ", "Justin Bieber  Grand Rapids  ", "Justin Bieber  Buffalo  ", "Justin Bieber  קולומבוס  ", "Justin Bieber  נאשוויל  ", "Justin Bieber  Detroit  ", "Justin Bieber  טורונטו  ", "Justin Bieber  טורונטו  ", "Justin Bieber  וושינגטון  ", "Justin Bieber  New York  ", "Justin Bieber  New York  ", "Justin Bieber  פילדלפיה  ", "Justin Bieber  Uncasville  ", "Justin Bieber  בוסטון  ", "Justin Bieber אמסטרדם  ", "Justin Bieber אמסטרדם  ", "Justin Bieber המבורג  ", "Justin Bieber ציריך  ", "Justin Bieber ליסבון  ", "Justin Bieber מדריד  ", "Justin Bieber ברצלונה  ", "Justin Bieber Bologna  ", "Justin Bieber Bologna  ", "Justin Bieber K ln  ", "Justin Bieber פרנקפורט  ", "Justin Bieber Berlin  ", "Justin Bieber גלזגו  ", "Justin Bieber Aberdeen  ", "Justin Bieber London  ", "Justin Bieber London  ", "Justin Bieber London  ", "Justin Bieber ברמינגהאם  ", "Justin Bieber מנצסטר  ", "Justin Bieber שפילד  ", "Justin Bieber פריז  ", "Justin Bieber פריז  ", "Justin Bieber מינכן  ", "Justin Bieber בודפשט  ", "Justin Bieber פראג  ", "Justin Bieber Johanneshov  ", "Justin Bieber קופנהגן  ", "Justin Bieber קופנהגן  ", "Justin Bieber אנטוורפן  ", "Justin Bieber וינה  ", "Justin Bieber Krakow  ", "The Beach Boys  Mount Pleasant  ", "The Beach Boys  Wabash  ", "The Beach Boys  Nashville  ", "The Beach Boys  Welch  ", "The Beach Boys  Uncasville  ", "The Beach Boys  Greenville  ", "The Beach Boys  קנזס סיטי  ", "The Beach Boys  Tulsa  ", "Alabama  Wichita  ", "The Beach Boys  Rancho Mirage  ", "The Beach Boys  New Bedford  ", "The Beach Boys  Morristown  ", "The Beach Boys  Red Bank  ", "The Beach Boys  Port Chester  ", "The Beach Boys  Hershey  ", "The Beach Boys  Wilkes Barre  ", "The Beach Boys  Calgary  ", "The Beach Boys  Wildwood  ", "The Weeknd  ונקובר  ", "The Weeknd  ונקובר  ", "The Weeknd  אדמונטון  ", "The Weeknd  ויניפג  ", "The Weeknd  Saint Paul  ", "The Weeknd  שיקגו  ", "The Weeknd  שיקגו  ", "The Weeknd  Milwaukee  ", "The Weeknd  Detroit  ", "The Weeknd  Pittsburgh  ", "The Weeknd & Sabrina Claudio  קליבלנד  ", "The Weeknd  טורונטו  ", "The Weeknd  טורונטו  ", "The Weeknd  מונטריאול  ", "The Weeknd  Newark  ", "The Weeknd  Uncasville  ", "The Weeknd  בוסטון  ", "The Weeknd  בוסטון  ", "The Weeknd  Brooklyn  ", "The Weeknd  Brooklyn  ", "The Weeknd  וושינגטון  ", "The Weeknd  שארלוט  ", "The Weeknd & Don Toliver  נאשוויל  ", "The Weeknd  קנזס סיטי  ", "The Weeknd  Tulsa  ", "The Weeknd  New Orleans  ", "The Weeknd & Sabrina Claudio  יוסטון  ", "The Weeknd  Dallas  ", "The Weeknd & Don Toliver  דנוור  ", "The Weeknd  Salt Lake City  ", "The Weeknd  פורטלנד  ", "The Weeknd  סיאטל  ", "The Weeknd  Sacramento  ", "The Weeknd  אוקלנד  ", "The Weeknd  סן חוזה  ", "The Weeknd  אינגלווד  ", "The Weeknd & Sabrina Claudio  סן דייגו  ", "The Weeknd  Anaheim  ", "The Weeknd  Anaheim  ", "The Weeknd & Sabrina Claudio  לוס אנגלס  ", "The Weeknd & Sabrina Claudio  לוס אנגלס  ", "The Weeknd  לוס אנגלס  ", "The Weeknd  Glendale  ", "The Weeknd  Fort Worth  ", "The Weeknd & Don Toliver  אורלנדו  ", "The Weeknd & Sabrina Claudio  מיאמי  ", "The Weeknd & Sabrina Claudio  מיאמי  ", "The Weeknd  Atlanta  ", "The Weeknd  פילדלפיה  ", "The Weeknd  New York  ", "The Weeknd  New York  ", "The Weeknd  Elmont  ", "The Weeknd  Buffalo  ", "The Weeknd  טורונטו  ", "The Weeknd  טורונטו  ", "The Weeknd & Don Toliver  St. Louis  ", "The Weeknd  Omaha  ", "The Weeknd  אוסטין  ", "The Weeknd  San Antonio  ", "The Weeknd  Las Vegas  ", "The Weeknd  פיניקס  ", "The Weeknd  Fresno  ", "The Weeknd  Spokane  ", "The Weeknd  Tacoma  ", "David Guetta  Brooklyn  ", "Tomorrowland Festival  בום  ", "Tomorrowland Festival  בום  ", "Maluma  אתונה  ", "Maluma  מילאנו  ", "Maluma  אמסטרדם  ", "Maluma  אנטוורפן  ", "Maluma  פריז  ", "Maluma  London  ", "Maluma  ציריך  ", "Maluma  פרנקפורט  ", "Maluma  ברצלונה  ", "Maluma  מדריד  ", "Maroon 5  Las Vegas  ", "Maroon 5  Las Vegas  ", "Maroon 5  בואנוס איירס  ", "Marc Anthony  סן חוזה  ", "Marc Anthony  אינגלווד  ", "Metallica  2 Day Pass  סן פרנסיסקו  ", "Metallica  סן פרנסיסקו  ", "Metallica  סן פרנסיסקו  ", "Metallica  Las Vegas  ", "Rock in Florence  Metallica פירנצה  ", "Rock in Prague Metallica and more ...  פראג  ", "Sting  KosiceJuh  ", "Sting  לייפציג  ", "Sting  EschsurAlzette  ", "Sting  המבורג  ", "Sting  המבורג  ", "Sting  Dijon  ", "Sting  Strasbourg  ", "Sting  טולוז  ", "Sting  Les Milles  ", "Sting  Oberhausen  ", "Sting  קלן  ", "Sting  London  ", "Sting  London  ", "Sting  London  ", "Sting  London  ", "Sting  London  ", "Sting  London  ", "Sting  פילדלפיה  ", "Sting  פילדלפיה  ", "Sting  Las Vegas  ", "Sting  Las Vegas  ", "Sting  Las Vegas  ", "Sting  Las Vegas  ", "Sting  Las Vegas  ", "Sting  Las Vegas  ", "Sting  Las Vegas  ", "Sting  Las Vegas  ", "Sting  Goteborg  ", "Sting  Horsens  ", "Sting  המבורג  ", "Sting  NeuUlm  ", "Sting  Blois  ", "Sting  Maxeville Champleboeuf  ", "Sting  Bonn  ", "Sting  St. Georgen am Leithagebirge  ", "Sting  Mⁿnchen  ", "Celine Dion  Las Vegas", "Celine Dion  Las Vegas", "Celine Dion  Las Vegas", "Celine Dion  Las Vegas", "Celine Dion  Las Vegas", "Celine Dion  Las Vegas", "Celine Dion  Las Vegas", "Celine Dion  Las Vegas", "Celine Dion  Las Vegas", "Celine Dion  Las Vegas", "Celine Dion  Las Vegas", "Celine Dion  דנוור", "Celine Dion  Salt Lake City", "Celine Dion  ויניפג", "Celine Dion  Saskatoon", "Celine Dion  אדמונטון", "Celine Dion  אדמונטון", "Celine Dion  פורטלנד", "Celine Dion  Tacoma", "Celine Dion  ונקובר", "Celine Dion  ונקובר", "Celine Dion  סן פרנסיסקו", "Celine Dion  אוקלנד", "Celine Dion  סן דייגו", "Celine Dion  Glendale", "Celine Dion  Sacramento", "Celine Dion  לוס אנגלס", "Celine Dion  לוס אנגלס", "Celine Dion  Pittsburgh", "Celine Dion  וושינגטון", "Celine Dion  ברמינגהאם", "Celine Dion ברמינגהאם", "Celine Dion  ברמינגהאם", "Celine Dion ברמינגהאם", "Celine Dion London", "Celine Dion London", "Celine Dion  דבלין", "Celine Dion דבלין", "Celine Dion  דבלין", "Celine Dion דבלין", "Celine Dion  מנצסטר", "Celine Dion מנצסטר", "Celine Dion  מנצסטר", "Celine Dion מנצסטר", "Celine Dion גלזגו", "Celine Dion גלזגו", "Celine Dion  מנהיים", "Celine Dion מנהיים", "Celine Dion  K ln", "Celine Dion קלן", "Celine Dion  ציריך", "Celine Dion ציריך", "Celine Dion  ציריך", "Celine Dion ציריך", "Celine Dion לודג ", "Celine Dion  לודג ", "Celine Dion Krakow", "Celine Dion  Krakow", "Celine Dion פראג", "Celine Dion  Zagreb", "Celine Dion Zagreb", "Celine Dion  בודפשט", "Celine Dion בודפשט", "Celine Dion Berlin", "Celine Dion  Berlin", "ECline Dion Hamburg", "Celine Dion  Hamburg", "Celine Dion  Vienna", "Celine Dion Vienna", "Celine Dion  M nchen", "Celine Dion Munich", "Celine Dion Stockholm", "Celine Dion Helsinki", "Celine Dion Helsinki", "Celine Dion Oslo", "Celine Dion Oslo", "Celine Dion Copenhagen", "Celine Dion Copenhagen", "Celine Dion  Marksm", "Celine Dion Marksm", "Celine Dion  Marksm", "Celine Dion Marksm", "Celine Dion  Amsterdam", "Celine Dion Amsterdam", "Celine Dion  Amsterdam", "Celine Dion Amsterdam", "Celine Dion  Amsterdam", "Celine Dion Amsterdam", "Celine Dion  Nanterre", "Celine Dion Nanterre", "Celine Dion  Nanterre", "Celine Dion Nanterre", "Celine Dion  Nanterre", "Celine Dion Nanterre", "Celine Dion  Nanterre", "Celine Dion Nanterre", "Celine Dion  Nanterre", "Celine Dion Nanterre", "Celine Dion  Nanterre", "Celine Dion Nanterre", "Celine Dion Nicosia", "Celine Dion Floriana", "Celine Dion  Ta Qali", "Celine Dion Athens", "Celine Dion Bucharest", "Fu Fighters  Berlin  ", "Fu Fighters  באזל  ", "Rock in Rio Lisbon  ליסבון  ", "Fu Fighters  מדריד  ", "Nim Festival  Fu Fighters Nimes  ", "Nim Festival  Fu Fighters Nimes  ", "Foo Fighters  מנצסטר  ", "Fu Fighters  מנצסטר  ", "Foo Fighters  ברמינגהאם  ", "Fu Fighters  ברמינגהאם  ", "Fu Fighters  London  ", "Fu Fighters  London  ", "Pitbull  Indio  ", "Pitbull  Scottsdale  ", "Pitbull  Laughlin  ", "Primavera Sound Festival  3 Day Pass  לוס אנגלס  ", "Rock in Rio Lisbon  ליסבון  ", "Ozora Festival בודפשט  ", "Loveland Amsterdam  אמסטרדם  ", "Milan Summer Festival  Louis Tomlinson מילאנו  ", "Pearl Jam  אמסטרדם  ", "Pearl Jam  אמסטרדם  ", "Pearl Jam  Berlin  ", "Pearl Jam  ציריך  ", "Pearl Jam  Bologna  ", "Pearl Jam  פרנקפורט  ", "Lollipopy  Stockholm  שטוקהולם  ", "Pearl Jam  קופנהגן  ", "Pearl Jam  בודפשט  ", "Pearl Jam  Krakow  ", "Pearl Jam  וינה  ", "Pearl Jam  פראג  ", "Kevin and Adam Lambert מנצסטר  ", "Kevin and Adam Lambert מנצסטר  ", "Kevin and Adam Lambert גלזגו  ", "Kevin and Adam Lambert גלזגו  ", "Kevin and Adam Lambert London  ", "Kevin and Adam Lambert London  ", "Kevin and Adam Lambert London  ", "Kevin and Adam Lambert London  ", "Kevin and Adam Lambert ברמינגהאם  ", "Kevin and Adam Lambert ברמינגהאם  ", "Kevin and Adam Lambert London  ", "Kevin and Adam Lambert London  ", "Kevin and Adam Lambert London  ", "Kevin and Adam Lambert London  ", "Kevin and Adam Lambert London  ", "Kevin and Adam Lambert London  ", "Kevin and Adam Lambert Berlin  ", "Kevin and Adam Lambert קלן  ", "Kevin and Adam Lambert ציריך  ", "Kevin and Adam Lambert מינכן  ", "Kevin and Adam Lambert אמסטרדם  ", "Kevin and Adam Lambert אמסטרדם  ", "Kevin and Adam Lambert מדריד  ", "Kevin and Adam Lambert מדריד  ", "Kevin and Adam Lambert Bologna  ", "Kevin and Adam Lambert Paris 12  ", "Kevin and Adam Lambert אנטוורפן  ", "Kevin and Adam Lambert קופנהגן  ", "Kevin and Adam Lambert קופנהגן  ", "Coldplay & H.E.R.  Santa Clara", "Coldplay & H.E.R.  Inglewood", "Coldplay & H.E.R.  Inglewood", "Coldplay & H.E.R.  Glendale", "Coldplay & H.E.R.  Dallas", "Coldplay & H.E.R.  Houston", "Coldplay & H.E.R.  Chicago", "Coldplay & H.E.R.  Chicago", "Coldplay & H.E.R.  Landover", "Coldplay & H.E.R.  East Rutherford", "Coldplay & H.E.R.  East Rutherford", "Coldplay & H.E.R.  Philadelphia", "Coldplay & H.E.R.  Atlanta", "Coldplay & H.E.R.  Tampa", "Coldplay Frankfurt", "Coldplay Frankfurt", "Coldplay Warsaw", "Coldplay Berlin", "Coldplay Berlin", "Coldplay Berlin", "Coldplay Paris", "Coldplay Paris", "Coldplay Paris", "Coldplay Paris", "Coldplay Brussels", "Coldplay Brussels", "Coldplay London", "Coldplay London", "Coldplay London", "Coldplay London", "Coldplay London", "Coldplay London", "Coldplay Glasgow", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  Las Vegas  ", "Kiss  מלבורן  ", "Kiss  מלבורן  ", "Kiss  מלבורן  ", "Kiss  Perth  ", "Kiss  Hindmarsh  ", "Kiss  Sydney  ", "Kiss  Brisbane  ", "Kiss  Railway Estate  ", "Lollapalooza Stockholm  Sunday  שטוקהולם  ", "Red Hot Chili Peppers סביליה  ", "Red Hot Chili Peppers ברצלונה  ", "Red Hot Chili Peppers ניימכן  ", "Red Hot Chili Peppers בודפשט  ", "Red Hot Chili Peppers מנצסטר  ", "Red Hot Chili Peppers London  ", "Red Hot Chili Peppers London  ", "Red Hot Chili Peppers דבלין  ", "Red Hot Chili Peppers גלזגו  ", "Red Hot Chili Peppers קלן  ", "Red Hot Chili Peppers פריז  ", "Red Hot Chili Peppers פריז  ", "Red Hot Chili Peppers המבורג  ", "Red Hot Chili PeppersHaim & Thundercat  דנוור  ", "Red Hot Chili PeppersHaim & Thundercat  סן דייגו  ", "Red Hot Chili PeppersBeck & Thundercat  סנטה קלרה  ", "Red Hot Chili PeppersBeck & Thundercat  אינגלווד  ", "Red Hot Chili PeppersThe Strokes & Thundercat  סיאטל  ", "Red Hot Chili PeppersThe Strokes & Thundercat  Las Vegas  ", "Red Hot Chili PeppersThe Strokes & Thundercat  Atlanta  ", "Red Hot Chili PeppersThe Strokes & Thundercat  נאשוויל  ", "Red Hot Chili PeppersThe Strokes & Thundercat  Detroit  ", "Red Hot Chili PeppersThe Strokes & Thundercat  East Rutherford  ", "Red Hot Chili PeppersThe Strokes & Thundercat  שיקגו  ", "Red Hot Chili PeppersThe Strokes & Thundercat  טורונטו  ", "Red Hot Chili PeppersThe Strokes & Thundercat  Miami Gardens  ", "Red Hot Chili PeppersThe Strokes & Thundercat  שארלוט  ", "Red Hot Chili PeppersThe Strokes & Thundercat  פילדלפיה  ", "Red Hot Chili PeppersThe Strokes & Thundercat  וושינגטון  ", "Red Hot Chili PeppersSt. Vincent & Thundercat   בוסטון  ", "Red Hot Chili PeppersThe Strokes & Thundercat  אורלנדו  ", "Red Hot Chili PeppersThe Strokes & Thundercat  Arlington  ", "Roger Waters   Pittsburgh  ", "Roger Waters   טורונטו  ", "Roger Waters   טורונטו  ", "Roger Waters   בוסטון  ", "Roger Waters   מונטריאול  ", "Roger Waters   Quebec  ", "Roger Waters   Albany  ", "Roger Waters   Detroit  ", "Roger Waters   שיקגו  ", "Roger Waters   Milwaukee  ", "Roger Waters   Minneapolis  ", "Roger Waters   סינסינטי  ", "Roger Waters   פילדלפיה  ", "Roger Waters   פילדלפיה  ", "Roger Waters   Elmont  ", "Roger Waters   וושינגטון  ", "Roger Waters   Raleigh  ", "Roger Waters   Atlanta  ", "Roger Waters   מיאמי  ", "Roger Waters   אורלנדו  ", "Roger Waters   נאשוויל  ", "Roger Waters   New York  ", "Roger Waters   New York  ", "Roger Waters   קנזס סיטי  ", "Roger Waters   דנוור  ", "Roger Waters   Salt Lake City  ", "Roger Waters   פורטלנד  ", "Roger Waters   אדמונטון  ", "Roger Waters   ונקובר  ", "Roger Waters   Tacoma  ", "Roger Waters   Sacramento  ", "Roger Waters   סן פרנסיסקו  ", "Roger Waters   סן פרנסיסקו  ", "Roger Waters   לוס אנגלס  ", "Roger Waters   לוס אנגלס  ", "Roger Waters   Las Vegas  ", "Roger Waters   Dallas  ", "Rod Stewart   Perth  ", "Rod Stewart   מלבורן  ", "Rod Stewart   מלבורן  ", "Rod Stewart   Mount Duneed  ", "Rod Stewart   Pokolbin  ", "Rod Stewart   Bowral  ", "Rod Stewart   Sydney  ", "Rod Stewart   Mount Cotton  ", "Rod Stewart   Mount Cotton  ", "Rod Stewart   Napier  ", "Rod Stewart   Napier  ", "Rod Stewart   Las Vegas  ", "Rod Stewart   Las Vegas  ", "Rod Stewart   Las Vegas  ", "Rod Stewart   Las Vegas  ", "Rod Stewart   Las Vegas  ", "Rod Stewart & Cheap Trick   Fort Worth  ", "Rod Stewart & Cheap Trick   Spring  ", "Rod Stewart & Cheap Trick   נאשוויל  ", "Rod Stewart & Cheap Trick   סינסינטי  ", "Rod Stewart & Cheap Trick   Tinley Park  ", "Rod Stewart & Cheap Trick   Cuyahoga Falls  ", "Rod Stewart   Saratoga Springs  ", "Rod Stewart & Cheap Trick   טורונטו  ", "Rod Stewart & Cheap Trick   Clarkston  ", "Rod Stewart & Cheap Trick   Mansfield  ", "Rod Stewart & Cheap Trick   Uncasville  ", "Rod Stewart & Cheap Trick   Holmdel  ", "Rod Stewart   Atlantic City  ", "Rod Stewart & Cheap Trick   Hershey  ", "Rod Stewart & Cheap Trick   Wantagh  ", "Rod Stewart & Cheap Trick   Columbia  ", "Rod Stewart & Cheap Trick   Alpharetta  ", "Rod Stewart   Jacksonville  ", "Rod Stewart & Cheap Trick   Tampa  ", "Rod Stewart   Las Vegas  ", "Rod Stewart   Las Vegas  ", "Rod Stewart   Las Vegas  ", "Rod Stewart   Las Vegas  ", "Rod Stewart   Las Vegas  ", "Rage Against The Machine & Run the Jewels   El Paso  ", "Rage Against The Machine & Run the Jewels   Las Cruces  ", "Rage Against The Machine & Run the Jewels   Glendale  ", "Rage Against The Machine & Run the Jewels   Glendale  ", "Rage Against The Machine & Run the Jewels   אוקלנד  ", "Rage Against The Machine & Run the Jewels   אוקלנד  ", "Rage Against The Machine & Run the Jewels   Tacoma  ", "Rage Against The Machine & Run the Jewels   פורטלנד  ", "Rage Against The Machine & Run the Jewels   ונקובר  ", "Rage Against The Machine & Run the Jewels   אדמונטון  ", "Rage Against The Machine & Run the Jewels   Calgary  ", "Rage Against The Machine & Run the Jewels   ויניפג  ", "Rage Against The Machine & Run the Jewels   Sioux Falls  ", "Rage Against The Machine & Run the Jewels   Minneapolis  ", "Rage Against The Machine & Run the Jewels   Minneapolis  ", "Rage Against The Machine & Run the Jewels   קנזס סיטי  ", "Rage Against The Machine & Run the Jewels  St. Louis  ", "Rage Against The Machine & Run the Jewels   Detroit  ", "Rage Against The Machine & Run the Jewels   Detroit  ", "Rage Against The Machine & Run the Jewels   East Troy  ", "Rage Against The Machine & Run the Jewels   שיקגו  ", "Rage Against The Machine & Run the Jewels   שיקגו  ", "Rage Against The Machine & Run the Jewels   Hamilton  ", "Rage Against The Machine & Run the Jewels   טורונטו  ", "Rage Against The Machine & Run the Jewels   טורונטו  ", "Rage Against The Machine & Run the Jewels   Buffalo  ", "Rage Against The Machine & Run the Jewels   קליבלנד  ", "Rage Against The Machine & Run the Jewels   Pittsburgh  ", "Rage Against The Machine & Run the Jewels   Raleigh  ", "Rage Against The Machine & Run the Jewels   וושינגטון  ", "Rage Against The Machine & Run the Jewels   וושינגטון  ", "Rage Against The Machine & Run the Jewels   New York  ", "Rage Against The Machine & Run the Jewels   New York  ", "Rage Against The Machine & Run the Jewels   New York  ", "Rage Against The Machine & Run the Jewels   New York  ", "Rage Against The Machine & Run the Jewels   New York  ", "Sean Mendes  Copenhagen", "Sean Mendes  Stockholm", "Sean Mendes  Oslo", "Sean Mendes  Hamburg", "Sean Mendes  Krakow", "Sean Mendes  Vienna", "Sean Mendes  Budapest", "Sean Mendes  Bologna", "Sean Mendes  Munich", "Sean Mendes  Berlin", "Sean Mendes  K ln", "Sean Mendes  Mannheim", "Sean Mendes  Prague", "Sean Mendes  Antwerp", "Sean Mendes  Amsterdam", "Sean Mendes  London", "Sean Mendes  Birmingham", "Sean Mendes  Glasgow", "Sean Mendes  Sheffield", "Sean Mendes  Manchester", "Sean Mendes  Nanterre", "Sean Mendes  Zurich", "Sean Mendes  Bordeaux", "Sean Mendes  Barcelona", "Sean Mendes  Lisbon", "Sean Mendes  Madrid", "Shawn Mendes   פורטלנד  ", "Shawn Mendes   סיאטל  ", "Shawn Mendes   Sacramento  ", "Shawn Mendes   ונקובר  ", "Shawn Mendes   אדמונטון  ", "Shawn Mendes   Saint Paul  ", "Shawn Mendes   Milwaukee  ", "Shawn Mendes   Rosemont  ", "Shawn Mendes   קליבלנד  ", "Shawn Mendes   Pittsburgh  ", "Shawn Mendes   שארלוט  ", "Shawn Mendes   Raleigh  ", "Shawn Mendes   וושינגטון  ", "Shawn Mendes   Uncasville  ", "Shawn Mendes   פילדלפיה  ", "Shawn Mendes   בוסטון  ", "Shawn Mendes   בוסטון  ", "Shawn Mendes   Louisville  ", "Shawn Mendes   מונטריאול  ", "Shawn Mendes   מונטריאול  ", "Shawn Mendes   Brooklyn  ", "Shawn Mendes   Glendale  ", "Shawn Mendes   לוס אנגלס  ", "Shawn Mendes   לוס אנגלס  ", "Shawn Mendes   Las Vegas  ", "Shawn Mendes   אוקלנד  ", "Shawn Mendes   Salt Lake City  ", "Shawn Mendes   דנוור  ", "Shawn Mendes   קנזס סיטי  ", "Shawn Mendes   Oklahoma City  ", "Shawn Mendes   Dallas  ", "Shawn Mendes   אוסטין  ", "Shawn Mendes   יוסטון  ", "Shawn Mendes   מיאמי  ", "Shawn Mendes   Tampa  ", "Shawn Mendes   אורלנדו  ", "Shawn Mendes   Atlanta  ", "Shawn Mendes   נאשוויל  ", "Shawn Mendes   Detroit  ", "Shawn Mendes   אינדיאנפוליס  ", "Shawn Mendes   Newark  ", "Adele London"],
                answers: ['where would you like to be:  Standing? Lower ring/area? Top ring/area?']
            },
            {
                intent: 'greetings.adress',
                utterances:['standing, top,lower,stop'],
                answers: ['what is the address for sending the tickets?']
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
    let topics = "";
    let wide = "";
    let size = "";
    let code = "";
    let game = "";
    let place = "";
    let adress = "";
    let phone = "";
    let numoftickets = "";
    let uuid = uuidv4()

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
        if (text.includes("processing") || text.includes("Success") || text.includes("pay") || text.includes("please wait")) {
            
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
        if (state.includes("sports")) { game = msg; MESSAGE_DELAY = 2500 }
        if (state.includes("game")) { game = msg; MESSAGE_DELAY = 2500 }
        if (state.includes("artist")) { game = msg; MESSAGE_DELAY = 4000 }
        if (state.includes("Standing")) { place = msg; MESSAGE_DELAY = 2500 }
        if (state.includes("address")) { adress = msg;msg += " address"; MESSAGE_DELAY= 2000}
        if (state.includes("phone") && !state.includes("verification")) { phone = msg; msg = msg.concat(' ', " phone number");MESSAGE_DELAY = 1500}
        if (state.includes("tickets")) { numoftickets = msg; msg += " tickets"; MESSAGE_DELAY = 1800 }

        if (state.includes("Crispy")) { wide = msg; MESSAGE_DELAY = 4000 }
        if (state.includes("size")) { size = msg; MESSAGE_DELAY = 3500 }
        if (state.includes("extras")) { topics = msg; MESSAGE_DELAY = 2500 }
        if (state.includes("verification") && await (/^\d{3}-\d{3}-\d{4}$/.test(msg) || /^\d{10}$/.test(msg))) { phone = msg; msg += " verification"; MESSAGE_DELAY = 10000 }
        if (state.includes("code") && await /^\d{4}$/.test(msg.replace("-", "").replace(" ", ""))) { code = await msg.replace("-", "").replace(" ", ""); msg += " pay"; MESSAGE_DELAY = 20000 }

        const response = await nlp.process("en", msg)       
        let answer = response.answer || response.srcAnswer || "I don't understand."
        if (!answer.includes("understand")) {
            state = answer;
        }
        else {
            answer = state; 
            if (state.includes("size")) MESSAGE_DELAY = 4000;
            if (state.includes("topic")) MESSAGE_DELAY = 3500;
            if (state.includes("verification")) MESSAGE_DELAY = 2500;
            if (state.includes("artist")) MESSAGE_DELAY = 4000

        }
        window.scrollBy(0, 50)
        if (!answer.includes("code")) {           
            const botElement = document.createElement("div")
            botElement.innerHTML = "<b>ZUZU</b>: " + answer
            botElement.style.color = "green"
            el("history").appendChild(botElement)
            recognizing = false
            recognition.stop()            
            if (synthVoice) synthVoice(answer);
        }
        else {
            if (msg.includes("verification")) {
                waitingforcode("please wait. while we process your order")
            }
            else {
                waitingforcode("Could you tell me the code we sent to your mobile?");
                return;

            }
                      
        }
        if (answer.includes("processing")) {
            //const Http = new XMLHttpRequest();
            MESSAGE_DELAY = 3000
            const res = await fetch("https://tranquil-plains-09740.herokuapp.com/https://mysterious-hollows-90255.herokuapp.com/?restaurant=eid=99999" + game +
                "&persons=" + numoftickets +
                "&time=&date=" + adress +
                "&name=" + fullname +
                "&family=" + fullname +
                "&phone=+972" + phone +
                "&email=" + email +
                "&session=" + uuid, {
                //mode: 'no-cors',
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            }
            )
            const text = await res.text();
            console.log(text)

            //const myTimeout = setTimeout(myGreeting, 10000);            
            if (answer.includes("processing")) {
                //const Http = new XMLHttpRequest();
                MESSAGE_DELAY = 3000
                const res = await fetch("https://tranquil-plains-09740.herokuapp.com/https://mysterious-hollows-90255.herokuapp.com/?restaurant=eid=99999" + game +
                    "&persons=" + numoftickets +
                    "&time=&date=" + adress +
                    "&name=" + fullname +
                    "&family=" + fullname +
                    "&phone=+972" + phone +
                    "&email=" + email +
                    "&session=" + uuid, {
                    //mode: 'no-cors',
                    headers: { 'X-Requested-With': 'XMLHttpRequest' }
                }
                )
                const text = await res.text();
                console.log(text)

                const myTimeout = setTimeout(myGreeting, 10000);

            }
        }
        if (answer.includes("code")) {
            //const Http = new XMLHttpRequest();
            MESSAGE_DELAY = 3000
            const res = await fetch("https://tranquil-plains-09740.herokuapp.com/https://mysterious-hollows-90255.herokuapp.com/?restaurant=pizzahut" +
                "&persons=" + numoftickets +
                "&date=" + topics +
                "&name=" + wide +
                "&family=" + size +
                "&phone=" + phone +
                "&email=" + email +
                "&session=" + uuid, {
                //mode: 'no-cors',
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            }
            )
            const text = await res.text();
            console.log(text)

            //const myTimeout = setTimeout(mycoe, 10000);
        }
        if (answer.includes("pay")) {
            //const Http = new XMLHttpRequest();
            MESSAGE_DELAY = 3000
            const res = await fetch("https://tranquil-plains-09740.herokuapp.com/https://mysterious-hollows-90255.herokuapp.com/?restaurant=pizzahut" +
                "&time=" + code +
                "&session=" + uuid, {
                //mode: 'no-cors',
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            }
            )
            const text = await res.text();
            console.log(text)

            const myTimeout = setTimeout(myGreeting, 20000);
        }
        
    }
    waitingforcode = answer1 => {
        //We are loading your order ...We are getting your details ...We are adding your topic ...What is the code sent to the mobile ? it may take 10 sec
        window.scrollBy(0, 28)
        const botElement = document.createElement("div")
        botElement.innerHTML = "<b>ZUZU</b>: " + answer1
        botElement.style.color = "green"
        el("history").appendChild(botElement)
        recognizing = false
        recognition.stop()       
        if (synthVoice) synthVoice(answer1);
        if (answer1.includes("process")) {
            setTimeout(waitingforcode, 8000, "please wait. while we prepare your pizza hut order")
        }
        if (answer1.includes("prepare")) {
            setTimeout(waitingforcode, 8000, "please wait. your pizza hut order is almost ready for delivery")
        }
        if (answer1.includes("delivery")) {
            setTimeout(waitingforcode, 8000, "Could you tell me the code we sent to your mobile?")
        }
    }

    async function myGreeting() {
        const res1 = await fetch("https://tranquil-plains-09740.herokuapp.com/https://mysterious-hollows-90255.herokuapp.com/" +
            "?session=" + uuid, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        }
        )        
        const text1 = await res1.text();
        if (text1.includes("code")) {
            return;
        }
        window.scrollBy(0, 25)
        let answer = text1.match(/<title>([^<]*)<\/title>/)[1];
        const botElement = document.createElement("div")
        botElement.innerHTML = "<b>ZUZU</b>: Success " + answer
        botElement.style.color = "green"
        el("history").appendChild(botElement)
        recognizing = false
        recognition.stop()        
        if (synthVoice) synthVoice("Success " + answer)
        console.log(answer)
    }

    // Add form submit event listener
    document.forms[0].onsubmit = onMessage
    var speakElement = null;
    // if speech recognition is supported then add elements for it
    if (recognition && speakElement == null) {
        // add speak button
        speakElement = document.createElement("button")
        speakElement.id = "speak"
        speakElement.innerText = "Speak!"
        speakElement.hidden = "true"
        speakElement.onclick = e => {
            e.preventDefault()
            if (el("history").childElementCount == 0) {
                window.scrollBy(0, 35)
                const botElement = document.createElement("div")
                botElement.innerHTML = "<b>ZUZU</b>:" + " What would you like to order? from pizza hut or tickets for sports or music events?"
                botElement.style.color = "green"
                el("history").appendChild(botElement)
                if (synthVoice) {
                    MESSAGE_DELAY = 5500;
                    synthVoice("Hi " + fullname + " What would you like to order? from pizza hut or tickets for sports or music events?");
                    MESSAGE_DELAY = 3000;
                }
            }
            else if (el("history").lastChild.innerHTML.includes("code")) {
                if (!recognizing)
                    { recognition.start() }
                else {
                    recognizing = false;
                    recognition.stop();                   
                }
            }
            else if (el("history").lastChild.innerHTML.includes("Success")) {
                while (el("history").firstChild) {
                    el("history").removeChild(el("history").lastChild);
                    window.scrollTo(0, -1000)
                }
            }
            else {
                if (!recognizing) { recognition.start() }
                else {
                    recognizing = false;
                    recognition.stop();
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
            //el("speak").style.display = "none"
            el("send").style.display = "none"
            el("message").disabled = true
            el("message").placeholder = "Listening..."
            el("microphone").src = "../images/microphonerecording.png"
        }

        recognition.onerror = function (event) {
            //alert(event.error)
        }

        // switch back to type mode
        recognition.onend = function (event) {
            event.preventDefault()
            //el("speak").style.display = "inline-block"
            el("send").style.display = "inline-block"
            el("message").disabled = false
            el("message").placeholder = "Type your message"
            el("interim").innerText = ""
            el("microphone").src = "../images/microphone.png"
            if (el("message").value == "" && el("history").childElementCount > 0 && !el("history").lastChild.innerHTML.includes("please wait") && recognizing) {                
                try {
                    recognition.start();
                } catch (error) {
                    alert(event.error)
                }
            }
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
            if (voice.lang.includes("en-US") || voice.lang.includes("en_US")) {
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

    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

})