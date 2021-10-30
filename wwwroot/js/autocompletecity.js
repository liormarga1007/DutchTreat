
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
  var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
    /*make the matching letters bold:*/
    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
    b.innerHTML += arr[i].substr(val.length);
    /*insert a input field that will hold the current array item's value:*/
    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
        /*close the list of autocompleted values,
        (or any other open lists of autocompleted values:*/
        closeAllLists();
          });
        a.appendChild(b);
        }
      }
  });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
        function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
  }
        function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
    }
  }
        function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
      }
    }
  }
        /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        if (document.getElementById("myInput").value == "Tel Aviv") {
            autocomplete(document.getElementById("restaurants"), tlv);
        }
            closeAllLists(e.target);
  });
}

        /*An array containing all the country names in the world:*/
var countries = ["Amsterdam", "Berlin", "Helsinki", "Hong-kong", "London", "New York", "Roma", "Tel Aviv", "Singapore", "Sydney", "Vienna", "Zurich"]
var tlv = ["11thfloor", "11th floor", "Floor", "2c", "2 c", "2c", "6inmay", "6inmay", "6 in may", "akbarbar", "akbarbar", "akbar bar", "Akbar", "albi", "albi", "alibitelaviv", "alibi tel aviv", "Alibi", "allarampa", "alla rampa", "Rampa", "amoremio", "amoremio", "Amore mio", "Amore", "Mio", "angustlv", "angus", "animar", "animar", "araissaronamarket", "arais sarona market", "Araissa", "aria", "aria", "arisbar", "aris bar", "Aris", "armando", "armando", "avantgarderesturant", "avantgarde resturant", "avantgarde", "avitalsabag", "avital sabag", "avocadatlv", "avocada", "babayaga", "babayaga", "Baba", "Yaga", "bana", "bana", "bar51", "bar51", "Bar 51", "basta", "basta", "beccafico", "beccafico", "Becca", "Cafico", "beergardensarona", "beer garden sarona", "Beer garden", "beitkandinof", "beit kandinof", "Kandinof", "bellboy", "bellboy", "Bell", "bellcafe", "bellcafe", "Bell cafe", "bicicletta", "bicicletta", "bluesky", "bluesky", "Blue sky", "bluetlv", "bluetlv", "Blue", "brutwinebar", "brut wine bar", "Brut", "burek", "burek", "bushwick", "bushwick", "Bush", "Wick", "cafecucu", "cafe cucu", "Cucu", "cafeeuropa", "cafe europa", "Eropa", "Europa", "cafeitalia", "cafe italia", "Italia", "cafenoir", "cafe popular", "cafepopular", "cafe popular rest", "Popular", "cafepopularrest", "cafenoir", "Noir", "cafeteria", "cafeteria", "caffeyaffo", "caffe yaffo", "Yaffo", "jaffa", "calypso", "calypso", "canaantlv", "canaan", "centro", "centro", "chateaushual", "chateau shual", "Shual", "chloelys", "chloelys", "chocolulutlv", "chocolulu", "Lulu", "cicchetti", "cic chetti", "clarotlv", "cloud", "clown", "claro", "cnestjaffa", "nest", "cuckoo nest", "cuckoo", "cocobambino", "coco bambino", "concierge", "concierge", "cordero", "cordero", "countryclub", "country club", "cucinahess4", "cucina hess 4", "Cucina", "hess", "daffikremer", "daffi kremer", "Daffi", "dalida", "dalida", "dallal", "dallal", "Dal", "davidveyossef", "david ve yossef", "deca", "deca", "derbidagimyigalalon", "derbi dag imyigalalon", "Derbi", "diner", "diner", "dixie", "dixie", "dohatlv", "doha", "doncamillotelaviv", "don camillo tel aviv", "Don camillio", "Camillio", "doublestandard", "double standard", "dovnov8", "dovnov 8", "dovnov", "efraim", "efraim", "elvecino", "el vecino", "emesh", "emesh", "esperantoisrael", "esperanto israel", "Esperanto", "etzbakikar", "etzba kikar", "Kikar", "fantasticballroom", "fantastic ball room", "fishmarket", "fish market", "fortunadelmar", "fortuna delmar", "framesushibarrh", "frame sushi bar", "Frame", "garnish", "garnish", "gemma", "gemma", "georgeandjohn", "george and john", "gigi", "gigi", "giraffeibg", "giraffe ibg", "giraffe iben gevirol", "giraffe iben", "girafferamathachayal", "giraffe ramat hahyal", "giraffe ramat", "goat", "goat", "goldmanc", "goldmanc", "Gold", "Manc", "goochadizengoff", "goocha dizengoff", "goocharamathahayal", "goocha ramat hahayal", "goshen", "goshen", "greco", "greco", "grinberg", "grinberg", "hamisaddaha", "hamisaddaha", "hasalon", "hasalon", "hashmonaim99", "hashmonaim 99", "Hashmonaim", "hatraklin", "hatraklin", "hazakenvehayam", "hazaken ve hayam", "Hazaken", "Hayam", "honolulu", "honolulu", "hoteldeville", "hotel deville", "Devile", "hotelmontefiore", "hotel montefiore", "montefiore", "hudson", "hudson", "ibni", "ibni", "ijoandbabet", "ijoandbabet", "italiantlv", "italian", "jackies", "jackies", "jasia", "jasia", "jasperjohns", "jasper johns", "Jasper", "johnnyboyjohnny", "johnny boy", "joyarh", "joyarh", "Joy", "jozveloz", "joz ve loz", "Joz", "junowine", "juno wine", "Juno", "kabkem", "kabkem", "kalamata", "kalamata", "kanta", "kanta", "kitchenmarket", "kitchen market", "kittokatto", "kitto katto", "larepubblica", "la repubblica", "lashuk", "lashuk", "La shuk", "shuk", "lashukbar", "lashuk bar", "lemalatlv", "lemala", "lentrecote", "lentrecote", "Le entrecote", "leyla", "leyla", "Layla", "lumina", "lumina", "m25", "m 25", "m25brodetski", "m25 brodetski", "magazzino", "magazzino", "magreb", "magreb", "makomshelbasar", "makomshelbasar", "Makom shel basar", "makom", "malka", "malka", "malkibar5", "malki bar 5", "malki", "mansura", "mansura", "mantaray", "manta ray", "mashya", "masha", "mashyA", "matteo", "matteo", "meatkitchen", "meat kitchen", "kitchen", "meatos", "meatos", "Meat os", "meshekbarzilay", "meshek barzilay", "messa", "messa", "mezcal", "mezcal", "milgomilbar", "milgomil bar", "milgomil", "Milgo", "mondo", "mondo", "moonbograshov", "moon bograshov", "moon", "mosesrh", "moses rothschild", "moses", "mosesrothschild", "mosesrh", "moses ramat hayal", "mumbaimerijaan", "mumbai merijaan", "mumbai", "namrestaurantdizi", "nam restaurant dizi", "nam", "nam dizingof", "ng", "ng", "N g", "nightkitchen", "night kitchen", "night", "ninihachi", "niniha chi", "niniha", "nomi", "nomi", "northabraxass", "north abraxass", "ocd", "o c d", "oasis", "oasis", "onami", "onami", "ontoporest", "ontopo rest", "onza", "onza", "opatlv", "opa", "ouzeria", "ouzeria", "ouzerianextdoor", "ouzeria next door", "pankinatlv", "pankina", "parderriere", "parderriere", "Parde", "pastel", "pastel", "pekin", "pekin", "pimpinella", "pimpinella", "pomo", "pomo", "popina", "popina", "port19", "port 19 ha", "Port", "port19ha", "port19", "porterandsons", "porter and sons", "Porter", "pronto", "pronto", "prozdor", "prozdor", "puaa", "puaa", "quattro", "quattro", "raisa", "raisa", "ramesses", "ramesses", "revivaandceliatlv", "reviva and celia", "Reviva", "romano", "romano", "roomservice", "room service", "rubi", "rubi", "rusticobasel", "Rustico", "sahkisahki", "sahki sahki", "salonyevani", "salon yevani", "seatara", "seatara", "sefora", "sefora", "Sephora", "serafina", "serafina", "sheinerest", "sheine rest", "shila", "shila", "shishko", "shishko", "sirabdul", "sirabdul", "Abdul", "speakeasy", "speak easy", "spicehaus", "Spice house", "Spice", "spicehaus", "suramare", "suramare", "sushibarbazel", "sushi bar bazel", "taizu", "taizu", "tapachula", "tapachula", "Tapa", "Chula", "tapeotlv", "tapeo", "tashandtasha", "tashandtasha", "Tasha", "Tash", "tastingroom", "tasting room", "thaiharsinai", "thai harsinai", "thaihouse", "thai house", "thebluerooster", "the blue rooster", "thebosses", "the bosses", "Bosses", "thechapel", "thechapel", "Chapel", "thelittleburgershopdizi", "thelittleburgershopdizi", "Little burger", "theoldnorth", "theoldnorth", "The old north", "thouse", "thouse", "Tea house", "tigerlillyrh", "tiger lilly ramat hayal", "Tiger ramat hayal", "tigerlillysarona", "tiger lilly sarona", "Lily sarona", "tomerhava", "tomerhava", "toto", "toto", "turkiz", "turkiz", "tyo", "tyo", "uno", "uno", "wafflebar", "waffle bar", "whiskeybm", "whiskey bm", "Whiskey", "wolfnights", "wolf nights", "yaffotelaviv", "yaffo tel aviv", "Tel aviv", "yakimonohiltontlv", "yakimono hilton", "Yakimono", "yassou", "yassou", "zakaimtlv", "zakaim", "zukfarm", "zukfarm", "Zuk", "Nam", "Nam", "5da57520ffe21b644907f1f5", "Foccaia", "5c77bbac17187806f41429f5", "Tel Aviva", "5de8f09b310195ffc1c5c57a", "The Small French", "5cf6509a3c2d38a70af0eda0", "JEM's Be'erSheva", "5b587491a22dc812001d2ab7", "Muza", "5bc8f2b6c8e884010080b9d6", "55 Be'erSheva", "5da966fb089aba62a97ebc77", "Charlie's", "572b2dec3ff22d0300f60cf8", "BBB Yoqneam", "58a9b8e5df4ae32200c0cce2", "Maklot Vanil", "5e3bf0b56c862f77c91744be", "ABERTO", "5ce3b3135bbf8952be3030b2", "Luciana Ashdod", "5ccfe3b5d2b6805907237ffa", "Ma", "5dc7fe615da309c441f196c4", "Tzidkiyahu", "5efb563955e91c810d9cd8e7", "Rubida", "5ded1e62725f5c422d99d433", "Pavella", "5b82923d3954810100794d28", "Ima", "59c200f39eb25823002c96a0", "Benedict Bilu", "Benedict", "5f54a90d4f18662c82848715", "JLM", "5f58c1ef8d69fb6d63950ab5", "BBB Ashdod", "5d06040596ce9de171486711", "Oban Koban", "598c49b50beeaa22008697cb", "Coffee Bar", "5e37de03449daea24b71e3fd", "Pop and Pope", "580f63de6031dc1e0023a21f", "Zepra", "599ac32e5eb82a2200ba84e9", "Meatbar TLV", "meat bar", "5cb83e464dc1545fab15dc55", "Tandoori", "5dea00b4310195f75ac83b45", "Social Club", "5e0b4f73cd8c1ce4833fa146", "Guga Coffee and Wine", "58ab23760ae98b2200529e90", "Crave", "580f645e4fa7da1e00af5baf", "Topo lopompo", "5c6ac6e9adf892ced6ae1998", "David and Yossef", "55bdf3b828cad603007485d2", "Reviva and Celia", "5a6d9ad952ddc02400a507a1", "Hotel Montefiore", "5de8c1a483ec2397d49c9e7d", "Sharak", "5dbac2e7d5a6a134c0bcf344", "VONG", "5ec28038cfc62e96f18a300b", "Santa Katarina", "5b50719b220fdd17003b9c90", "Drama Bar", "5b3cc45e866eac120019ca7a", "Shishko", "5db583a6de4fda9ba01e0e95", "Onassis", "5ae849ab44be5d1200a17abe", "Rosa Parks", "5ef489b1188ae2c067cce467", "BBQ", "5dba9ac8382c931737dafd76", "Ze Sushi Bazel", "5a9419ba4042ad17005ca6bf", "Mezizim", "5b2f81c1d607ca17005ee8e2", "Hilton Bay", "5c84bce61a587b1ca324e996", "Vicky Cristina", "Vicky", "Cristina", "5ae8143a44be5d1200a15359", "George and John", "5acdd638ff025917002fdad4", "Hatzar Goldman", "5c9c9e3f5dbdf8dd06ccd62a", "Rak Basar", "594b9b3f3f24f42200b597f6", "Casino San Remo", "5aeffe0ebaf94312006378c5", "BBB Ramat HaHayal", "5981a0fc4aa161220071b052", "JEM'S PetahTikvah", "5b8e2cd9bc9cec01002056a3", "Shaffa Bar", "5e52a6bf0ad94d6c47ec5ed6", "DREAMERIE", "59f9ade629576d220022038e", "Segev Express Ramata hayal", "5cdaef5ef68792f6bd06cd9c", "Dosh", "5dfb9db19d0e4f6a1574f037", "Yoskeria", "5d2f136ad554d456f30b35aa", "Rak Basar RamatHaya", "5ae9c4f7fbb38c1700000948", "Faruk Bashuk", "faruk", "bashuk", "5bcf2dd1e603e801007853f7", "HaGarage", "garage", "5b2a05572ee2b91700125eb6", "Segev Art", "5cb83e314dc154261215dc47", "NONO Hertzliya", "590b1a62140f622200805d2a", "Nooch", "5cb822a7bfa5a10e6296627f", "tanduri herzelia", "tanduri", "57f637ae51c3c41e00f06836", "BBB Herzliya", "5d9a04e5a50ad0859c5eb60a", "Calata 15", "5b3e5ae96583f31700150a12", "JEM's Herzliya", "57bda2a2fe0dc11e0086bf16", "Kyoto", "5dcbac0f50e433c18cab9e8d", "Baileys", "5aa7930bba1fed1200f17fd0", "Bleecker Street", "5f17ca611ac136a3ae302b6c", "4 SEA", "58f5cef72ba6312200315723", "Maka Maka", "5dbac3c3382c93550edbeff1", "Ze Sushi", "5df0b9ffe502663cf2738cf8", "Piano Piano Yokne'am", "5e5794cad932437a5fe5f007", "italiano del kosta", "5daec4fe3c87b56fa8f9af7d", "Rak Basar Haifa", "5a801346e1158e2900338ef8", "Vivino Haifa", "5b827fdc08fd6d010095f2b1", "Shabtai Vitkin", "593ceb134c105d2200a9fb61", "JEMS Caesarea", "5f43904497e28e280c8d1118", "Aresto", "5f5886bd901b4114c03ddf86", "Hazalbanim", "5a5de0ecf72aec29004b6c66", "BBB EinShemer", "5b827f36d53ae80100f3fa9f", "Shabtai Caesarea", "limousine", "limousine", "fatvinnyhaifa", "fatvinny haifa", "nishabar", "nisha bar", "fatvinnynetanya", "fatvinny netanya", "fatvinnyhadera", "fatvinny hadera", "ontheriver", "on the river", "fratelli", "fratelli", "cafezahara", "cafe zahara", "giraffekrayot", "giraffe krayot", "taya", "taya", "giraffehaifa", "giraffe haifa", "doriskroshpina", "doris roshpina", "mosesnetanya", "moses netanya", "donarosa", "dona rosa", "mercato", "mercato", "hellenabanamal", "hellena banamal", "minnatomeicastra", "minna tomei castra", "minna tomei", "minna", "tomei", "vitkinwinery", "vitkin winery", "segevnetanya", "segev netanya", "alabama", "alabama", "aleta", "aleta", "lapampa", "la pampa", "assafwinery", "assaf winery", "5c72a8d9a242dc5208701edc", "sinta bar", "sinta", "rhythmsocial", "rhythm social", "hobbitbar", "hobbit bar", "robertavinci", "roberta vinci", "dedanatania", "deda natania", "lotemwinery", "lotem winery", "amphoraewines", "amphorae wines", "ortalwines", "ortal wines", "1910", "1910", "doriskzikron", "doris zikron", "michaelbistro", "michael bistro", "rutenberg", "rutenberg", "benjolina", "benjolina", "machneyuda", "machne yuda", "adom", "adom", "gatsby", "gatsby", "rooftop", "roof top", "pergamonjlm", "pergamonjlm", "mirrorbar", "mirror bar", "happyfish", "happy fish", "primitivo", "primitivo", "randr", "randr", "cafeyehoshua", "cafe yehoshua", "touro", "touro", "skyline", "sky line", "mona", "mona", "hasadna", "hasadna", "dekel", "dekel", "annajlm", "annajlm", "lechembasar", "lechem basar", "dejabu", "dejabu", "segevburgers", "segev burgers", "hamotzi", "hamotzi", "talbiye", "talbiye", "menza", "menza", "smadar", "smadar", "malabistro", "mala bistro", "caffit", "caffit", "azura", "azura", "brasseriejerusalem", "brasserie jerusalem", "kaparabar", "kapara bar", "kampai", "kampai", "almarest", "alma rest", "hasifria", "hasifria", "archie", "archie", "kepasa", "kepasa", "pavella", "pavella", "sulemabeersheva", "sulema beer sheva", "armonim", "armonim", "landwercafebs", "landwer cafe beer sheva", "hosthouse", "host house", "perlita", "perlita", "bavariaashdod", "bavaria ashdod", "cramimbeersheva", "cramim beer sheva", "cramim", "somethingsomethingbar", "something something bar", "5bb3876c6465b60100134dc3", "nammos", "namos", "5bbf20b59be8250100be7f69", "karma", "5cb2f3f4f01b16e851fffb87", "sasson", "sasson bar", "sason", "sason bar"]
        /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);

if (document.getElementById("myInput") == "Tel Aviv") {
    autocomplete(document.getElementById("restaurants"), tlv);
}
