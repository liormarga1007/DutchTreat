
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
        if (document.getElementById("myInput").value.toUpperCase() == "TEL AVIV") {
            autocomplete(document.getElementById("restaurants"), tlv);
        }
            closeAllLists(e.target);
  });
}

var countries = ["Amsterdam", "Berlin", "Helsinki", "Hong-kong", "London", "New York", "Roma", "Tel Aviv", "Singapore", "Sydney", "Vienna", "Zurich"]
var tlv = ["11thfloor", "11th floor", "Floor", "2c", "2 c", "2c", "6inmay", "6inmay", "6 in may", "akbarbar", "akbarbar", "akbar bar", "Akbar", "albi", "albi", "alibitelaviv", "alibi tel aviv", "Alibi", "allarampa", "alla rampa", "Rampa", "amoremio", "amoremio", "Amore mio", "Amore", "Mio", "angustlv", "angus", "animar", "animar", "araissaronamarket", "arais sarona market", "Araissa", "aria", "aria", "arisbar", "aris bar", "Aris", "armando", "armando", "avantgarderesturant", "avantgarde resturant", "avantgarde", "avitalsabag", "avital sabag", "avocadatlv", "avocada", "babayaga", "babayaga", "Baba", "Yaga", "bana", "bana", "bar51", "bar51", "Bar 51", "basta", "basta", "beccafico", "beccafico", "Becca", "Cafico", "beergardensarona", "beer garden sarona", "Beer garden", "beitkandinof", "beit kandinof", "Kandinof", "bellboy", "bellboy", "Bell", "bellcafe", "bellcafe", "Bell cafe", "bicicletta", "bicicletta", "bluesky", "bluesky", "Blue sky", "bluetlv", "bluetlv", "Blue", "brutwinebar", "brut wine bar", "Brut", "burek", "burek", "bushwick", "bushwick", "Bush", "Wick", "cafecucu", "cafe cucu", "Cucu", "cafeeuropa", "cafe europa", "Eropa", "Europa", "cafeitalia", "cafe italia", "Italia", "cafenoir", "cafe popular", "cafepopular", "cafe popular rest", "Popular", "cafepopularrest", "cafenoir", "Noir", "cafeteria", "cafeteria", "caffeyaffo", "caffe yaffo", "Yaffo", "jaffa", "calypso", "calypso", "canaantlv", "canaan", "centro", "centro", "chateaushual", "chateau shual", "Shual", "chloelys", "chloelys", "chocolulutlv", "chocolulu", "Lulu", "cicchetti", "cic chetti", "clarotlv", "cloud", "clown", "claro", "cnestjaffa", "nest", "cuckoo nest", "cuckoo", "cocobambino", "coco bambino", "concierge", "concierge", "cordero", "cordero", "countryclub", "country club", "cucinahess4", "cucina hess 4", "Cucina", "hess", "daffikremer", "daffi kremer", "Daffi", "dalida", "dalida", "dallal", "dallal", "Dal", "davidveyossef", "david ve yossef", "deca", "deca", "derbidagimyigalalon", "derbi dag imyigalalon", "Derbi", "diner", "diner", "dixie", "dixie", "dohatlv", "doha", "doncamillotelaviv", "don camillo tel aviv", "Don camillio", "Camillio", "doublestandard", "double standard", "dovnov8", "dovnov 8", "dovnov", "efraim", "efraim", "elvecino", "el vecino", "emesh", "emesh", "esperantoisrael", "esperanto israel", "Esperanto", "etzbakikar", "etzba kikar", "Kikar", "fantasticballroom", "fantastic ball room", "fishmarket", "fish market", "fortunadelmar", "fortuna delmar", "framesushibarrh", "frame sushi bar", "Frame", "garnish", "garnish", "gemma", "gemma", "georgeandjohn", "george and john", "gigi", "gigi", "giraffeibg", "giraffe ibg", "giraffe iben gevirol", "giraffe iben", "girafferamathachayal", "giraffe ramat hahyal", "giraffe ramat", "goat", "goat", "goldmanc", "goldmanc", "Gold", "Manc", "goochadizengoff", "goocha dizengoff", "goocharamathahayal", "goocha ramat hahayal", "goshen", "goshen", "greco", "greco", "grinberg", "grinberg", "hamisaddaha", "hamisaddaha", "hasalon", "hasalon", "hashmonaim99", "hashmonaim 99", "Hashmonaim", "hatraklin", "hatraklin", "hazakenvehayam", "hazaken ve hayam", "Hazaken", "Hayam", "honolulu", "honolulu", "hoteldeville", "hotel deville", "Devile", "hotelmontefiore", "hotel montefiore", "montefiore", "hudson", "hudson", "ibni", "ibni", "ijoandbabet", "ijoandbabet", "italiantlv", "italian", "jackies", "jackies", "jasia", "jasia", "jasperjohns", "jasper johns", "Jasper", "johnnyboyjohnny", "johnny boy", "joyarh", "joyarh", "Joy", "jozveloz", "joz ve loz", "Joz", "junowine", "juno wine", "Juno", "kabkem", "kabkem", "kalamata", "kalamata", "kanta", "kanta", "kitchenmarket", "kitchen market", "kittokatto", "kitto katto", "larepubblica", "la repubblica", "lashuk", "lashuk", "La shuk", "shuk", "lashukbar", "lashuk bar", "lemalatlv", "lemala", "lentrecote", "lentrecote", "Le entrecote", "leyla", "leyla", "Layla", "lumina", "lumina", "m25", "m 25", "m25brodetski", "m25 brodetski", "magazzino", "magazzino", "magreb", "magreb", "makomshelbasar", "makomshelbasar", "Makom shel basar", "makom", "malka", "malka", "malkibar5", "malki bar 5", "malki", "mansura", "mansura", "mantaray", "manta ray", "mashya", "masha", "mashyA", "matteo", "matteo", "meatkitchen", "meat kitchen", "kitchen", "meatos", "meatos", "Meat os", "meshekbarzilay", "meshek barzilay", "messa", "messa", "mezcal", "mezcal", "milgomilbar", "milgomil bar", "milgomil", "Milgo", "mondo", "mondo", "moonbograshov", "moon bograshov", "moon", "mosesrh", "moses rothschild", "moses", "mosesrothschild", "mosesrh", "moses ramat hayal", "mumbaimerijaan", "mumbai merijaan", "mumbai", "namrestaurantdizi", "nam restaurant dizi", "nam", "nam dizingof", "ng", "ng", "N g", "nightkitchen", "night kitchen", "night", "ninihachi", "niniha chi", "niniha", "nomi", "nomi", "northabraxass", "north abraxass", "ocd", "o c d", "oasis", "oasis", "onami", "onami", "ontoporest", "ontopo rest", "onza", "onza", "opatlv", "opa", "ouzeria", "ouzeria", "ouzerianextdoor", "ouzeria next door", "pankinatlv", "pankina", "parderriere", "parderriere", "Parde", "pastel", "pastel", "pekin", "pekin", "pimpinella", "pimpinella", "pomo", "pomo", "popina", "popina", "port19", "port 19 ha", "Port", "port19ha", "port19", "porterandsons", "porter and sons", "Porter", "pronto", "pronto", "prozdor", "prozdor", "puaa", "puaa", "quattro", "quattro", "raisa", "raisa", "ramesses", "ramesses", "revivaandceliatlv", "reviva and celia", "Reviva", "romano", "romano", "roomservice", "room service", "rubi", "rubi", "rusticobasel", "Rustico", "sahkisahki", "sahki sahki", "salonyevani", "salon yevani", "seatara", "seatara", "sefora", "sefora", "Sephora", "serafina", "serafina", "sheinerest", "sheine rest", "shila", "shila", "shishko", "shishko", "sirabdul", "sirabdul", "Abdul", "speakeasy", "speak easy", "spicehaus", "Spice house", "Spice", "spicehaus", "suramare", "suramare", "sushibarbazel", "sushi bar bazel", "taizu", "taizu", "tapachula", "tapachula", "Tapa", "Chula", "tapeotlv", "tapeo", "tashandtasha", "tashandtasha", "Tasha", "Tash", "tastingroom", "tasting room", "thaiharsinai", "thai harsinai", "thaihouse", "thai house", "thebluerooster", "the blue rooster", "thebosses", "the bosses", "Bosses", "thechapel", "thechapel", "Chapel", "thelittleburgershopdizi", "thelittleburgershopdizi", "Little burger", "theoldnorth", "theoldnorth", "The old north", "thouse", "thouse", "Tea house", "tigerlillyrh", "tiger lilly ramat hayal", "Tiger ramat hayal", "tigerlillysarona", "tiger lilly sarona", "Lily sarona", "tomerhava", "tomerhava", "toto", "toto", "turkiz", "turkiz", "tyo", "tyo", "uno", "uno", "wafflebar", "waffle bar", "whiskeybm", "whiskey bm", "Whiskey", "wolfnights", "wolf nights", "yaffotelaviv", "yaffo tel aviv", "Tel aviv", "yakimonohiltontlv", "yakimono hilton", "Yakimono", "yassou", "yassou", "zakaimtlv", "zakaim", "zukfarm", "zukfarm", "Zuk", "Nam", "Nam", "Foccaia", "Tel Aviva", "The Small French", "JEM's Be'erSheva", "Muza", "55 Be'erSheva", "Charlie's", "BBB Yoqneam", "Maklot Vanil", "ABERTO", "Luciana Ashdod", "Ma", "Tzidkiyahu", "Rubida", "Pavella", "Ima", "Benedict Bilu", "Benedict", "JLM", "BBB Ashdod", "Oban Koban", "Coffee Bar", "Pop and Pope", "Zepra", "Meatbar TLV", "meat bar", "Tandoori", "Social Club", "Guga Coffee and Wine", "Crave", "Topo lopompo", "David and Yossef", "Reviva and Celia", "Hotel Montefiore", "Sharak", "VONG", "Santa Katarina", "Drama Bar", "Shishko", "Onassis", "Rosa Parks", "BBQ", "Ze Sushi Bazel", "Mezizim", "Hilton Bay", "Vicky Cristina", "Vicky", "Cristina", "George and John", "Hatzar Goldman", "Rak Basar", "Casino San Remo", "BBB Ramat HaHayal", "JEM'S PetahTikvah", "Shaffa Bar", "DREAMERIE", "Segev Express Ramata hayal", "Dosh", "Yoskeria", "Rak Basar RamatHaya", "Faruk Bashuk", "faruk", "bashuk", "HaGarage", "garage", "Segev Art", "NONO Hertzliya", "Nooch", "tanduri herzelia", "tanduri", "BBB Herzliya", "Calata 15", "JEM's Herzliya", "Kyoto", "Baileys", "Bleecker Street", "4 SEA", "Maka Maka", "Ze Sushi", "Piano Piano Yokne'am", "italiano del kosta", "Rak Basar Haifa", "Vivino Haifa", "Shabtai Vitkin", "JEMS Caesarea", "Aresto", "Hazalbanim", "BBB EinShemer", "Shabtai Caesarea", "limousine", "limousine", "fatvinnyhaifa", "fatvinny haifa", "nishabar", "nisha bar", "fatvinnynetanya", "fatvinny netanya", "fatvinnyhadera", "fatvinny hadera", "ontheriver", "on the river", "fratelli", "fratelli", "cafezahara", "cafe zahara", "giraffekrayot", "giraffe krayot", "taya", "taya", "giraffehaifa", "giraffe haifa", "doriskroshpina", "doris roshpina", "mosesnetanya", "moses netanya", "donarosa", "dona rosa", "mercato", "mercato", "hellenabanamal", "hellena banamal", "minnatomeicastra", "minna tomei castra", "minna tomei", "minna", "tomei", "vitkinwinery", "vitkin winery", "segevnetanya", "segev netanya", "alabama", "alabama", "aleta", "aleta", "lapampa", "la pampa", "assafwinery", "assaf winery", "sinta bar", "sinta", "rhythmsocial", "rhythm social", "hobbitbar", "hobbit bar", "robertavinci", "roberta vinci", "dedanatania", "deda natania", "lotemwinery", "lotem winery", "amphoraewines", "amphorae wines", "ortalwines", "ortal wines", "1910", "1910", "doriskzikron", "doris zikron", "michaelbistro", "michael bistro", "rutenberg", "rutenberg", "benjolina", "benjolina", "machneyuda", "machne yuda", "adom", "adom", "gatsby", "gatsby", "rooftop", "roof top", "pergamonjlm", "pergamonjlm", "mirrorbar", "mirror bar", "happyfish", "happy fish", "primitivo", "primitivo", "randr", "randr", "cafeyehoshua", "cafe yehoshua", "touro", "touro", "skyline", "sky line", "mona", "mona", "hasadna", "hasadna", "dekel", "dekel", "annajlm", "annajlm", "lechembasar", "lechem basar", "dejabu", "dejabu", "segevburgers", "segev burgers", "hamotzi", "hamotzi", "talbiye", "talbiye", "menza", "menza", "smadar", "smadar", "malabistro", "mala bistro", "caffit", "caffit", "azura", "azura", "brasseriejerusalem", "brasserie jerusalem", "kaparabar", "kapara bar", "kampai", "kampai", "almarest", "alma rest", "hasifria", "hasifria", "archie", "archie", "kepasa", "kepasa", "pavella", "pavella", "sulemabeersheva", "sulema beer sheva", "armonim", "armonim", "landwercafebs", "landwer cafe beer sheva", "hosthouse", "host house", "perlita", "perlita", "bavariaashdod", "bavaria ashdod", "cramimbeersheva", "cramim beer sheva", "cramim", "somethingsomethingbar", "something something bar", "nammos", "namos", "karma", "sasson", "sasson bar", "sason", "sason bar"]

window.onload = function () {
    /*An array containing all the country names in the world:*/
    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
    if (document.getElementById("myInput") != null) {
        autocomplete(document.getElementById("myInput"), countries);
    }
}

$(document).on('click', '.btn-primary', myFunction);


function myFunction() {
    setTimeout(function () {
        var $reserveToggle = $("#reserveToggle");
        var $reserveForm = $(".reserve-form");
        let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
            || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
        if ($(".reserve-form").valid() || isIOS ) {
            $reserveForm.slideToggle(500);
            document.getElementById("myImg").setAttribute("width", "100");
            document.getElementById("myImg").setAttribute("height", "78");
            var node = document.createElement("h1");
            var textnode = document.createTextNode("  Calling ....");
            node.appendChild(textnode);
            document.getElementById("myImg").parentElement.appendChild(node)
            setTimeout(function () {
                document.getElementById("myImg2").setAttribute("width", "100");
                document.getElementById("myImg2").setAttribute("height", "78");
                var node = document.createElement("h1");
                var textnode = document.createTextNode("  Reserving ....");
                node.appendChild(textnode);
                document.getElementById("myImg2").parentElement.appendChild(node)
                setTimeout(function () {
                    document.getElementById("myImg3").setAttribute("width", "100");
                    document.getElementById("myImg3").setAttribute("height", "78");
                    var node = document.createElement("h1");
                    var textnode = document.createTextNode("  Filling ....");
                    node.appendChild(textnode);
                    document.getElementById("myImg3").parentElement.appendChild(node)
                    setTimeout(function () {
                        document.getElementById("myImg4").setAttribute("width", "100");
                        document.getElementById("myImg4").setAttribute("height", "78");
                        var node = document.createElement("h1");
                        var textnode = document.createTextNode("  Confirming ....");
                        node.appendChild(textnode);
                        document.getElementById("myImg4").parentElement.appendChild(node)
                    }, 5000);
                }, 4000);
            }, 3000);
        }
    }, 1000);
}

