var week = getWeekNumber(new Date())[1];
var quotes = [
	"I begyndelsen var Ordet, og Ordet var hos Gud, og Ordet var Gud.", "Joh. 1:1", //Nytårsdag
	"Jesus sagde til ham: 'Jeg er vejen og sandheden og livet; ingen kommer til Faderen uden ved mig.'", "Joh. 14:6",
	"Kristus har løskøbt os fra lovens forbandelse ved selv at blive en forbandelse for vor skyld", "Gal. 3:13a",
	"Håbets Gud fylde jer med al glæde og fred i troen, så at I bliver rige i håbet ved Helligåndens kraft!", "Rom. 15:13", 
	"Se, hvor stor kærlighed Faderen har vist os, at vi kaldes Guds børn, og vi er det! Derfor kender verden ikke os, fordi den ikke kender ham.", "1. Joh. 3:1",
	"Alt formår jeg i ham, der giver mig kraft.", "Fil. 4:13", //Generalforsamling
	"Jeg lever ikke mere selv, men Kristus lever i mig, og mit liv her på jorden lever jeg i troen på Guds søn, der elskede mig og gav sig selv hen for mig.", "Gal. 2:20", //Vinterferie
	"Kom til mig, alle I, som slider jer trætte og bærer tunge byrder, og jeg vil give jer hvile.", "Matt. 11:28",
	"Men Gud viser sin kærlighed til os, ved at Kristus døde for os, mens vi endnu var syndere.", "Rom. 5:8",
	"Jesus sagde til ham: »Jeg er vejen og sandheden og livet; ingen kommer til Faderen uden ved mig.", "Joh. 14:6",
	"For jeg skammer mig ikke ved evangeliet; det er Guds kraft til frelse for enhver.", "Rom. 1:16",
	"Gud er min frelse, jeg er tryg, jeg frygter ikke, for Herren er min styrke og lovsang, han blev min frelse.", "Es. 12:2",
	"Men han blev gennemboret for vore overtrædelser og knust for vore synder. Han blev straffet, for at vi kunne få fred, ved hans sår blev vi helbredt.", "Es. 53:5",
	"Hosianna, Davids søn! Velsignet være han, som kommer, i Herrens navn! Hosianna i det højeste!", "Matt. 21:9b", //Palmesøndag
	"Han er ikke her; han er opstået, som han har sagt. Kom og se stedet, hvor han lå.", "Matt. 28:6", //Påske
	"Synden skal ikke være herre over jer, for I er ikke under loven, men under nåden.", "Rom. 6:14",
	"Så er der da nu ingen fordømmelse for dem, som er i Kristus Jesus.", "Rom. 8:1",
	"Jesus sagde til hende: 'Jeg er opstandelsen og livet; den, der tror på mig, skal leve, om han end dør.'", "Joh. 11:25",
	"Vær ikke bekymrede for noget, men bring i alle forhold jeres ønsker frem for Gud i bøn og påkaldelse med tak.", "Fil. 4:6", //Store bededag
	"Jeg er Alfa og Omega, siger Gud Herren, han som er og som var og som kommer, den Almægtige.", "Åb. 1:8",
	"Gå derfor hen og gør alle folkeslagene til mine disciple, idet I døber dem i Faderens og Sønnens og Helligåndens navn.", "Matt. 28:19", //Kristi himmelfart
	"Jesus er den sten, som blev vraget af jer bygmestre, men som er blevet hovedhjørnesten.", "ApG. 4:11", //Pinse
	"Herren Jesu Kristi nåde og Guds kærlighed og Helligåndens fællesskab være med jer alle!", "2. Kor. 13:13",
	"Jeg mener nemlig, at lidelserne i den tid, der nu er inde, er for intet at regne mod den herlighed, som skal åbenbares på os.", "Rom. 8:18",
	"Jeg giver jer et nyt hjerte og en ny ånd i jeres indre. Jeg fjerner stenhjertet fra jeres krop og giver jer et hjerte af kød.", "Ez. 36:26",
	"Hvor er det godt og herligt, når brødre sidder sammen!", "Sl. 133:1", //Sankt hans
	"Men tolderen stod afsides og ville ikke engang løfte sit blik mod himlen, men slog sig for brystet og sagde: Gud, vær mig synder nådig!", "Luk. 18:13",
	"For af den nåde er I frelst ved tro. Og det skyldes ikke jer selv, gaven er Guds.", "Ef. 2:8",
	"Så er der da nu ingen fordømmelse for dem, som er i Kristus Jesus. For livets ånds lov har i Kristus Jesus befriet mig fra syndens og dødens lov.", "Rom. 8:1-2",
	"Alle I, der er døbt til Kristus, har jo iklædt jer Kristus.", "Gal. 3:28",
	"For hvis du med din mund bekender, at Jesus er Herre, og i dit hjerte tror, at Gud har oprejst ham fra de døde, skal du frelses.", "Rom. 10:9",
	"Men trofast er Herren, han vil styrke jer og bevare jer fra det onde.", "2. Thess. 3:3",
	"For således elskede Gud verden, at han gav sin enbårne søn, for at enhver, som tror på ham, ikke skal fortabes, men have evigt liv", "Joh. 3:16",
	"Bær hinandens byrder, således opfylder I Kristi lov.", "Gal. 6:2",
	"Jeg ved, hvilke planer jeg har lagt for jer, siger Herren, planer om lykke, ikke om ulykke, om at give jer en fremtid og et håb.", "Jer. 29:11",
	"For Gud sendte ikke sin søn til verden for at dømme verden, men for at verden skal frelses ved ham.", "Joh. 3:17",
	"Herrens navn er et fæstningstårn, den retfærdige løber ind i det og er i sikkerhed.", "Ordsp. 18:10",
	"Troen kommer altså af det, der høres, og det, der høres, kommer i kraft af Kristi ord.", "Rom. 10:17",
	"Men Åndens frugt er kærlighed, glæde, fred, tålmodighed, venlighed, godhed, trofasthed.", "Gal. 5:22",
	"Vær modige og stærke! Vær ikke bange, og nær ikke rædsel for dem, for Herren din Gud går selv med dig, han lader dig ikke i stikken og svigter dig ikke.", "5. Mos. 31:6",
	"Så bliver da tro, håb, kærlighed, disse tre. Men størst af dem er kærligheden.", "1. Kor. 13:13",
	"Herren Jesu nåde være med jer alle!", "Åb. 22:21", //Efterårsferie
	"Troen kommer altså af det, der høres, og det, der høres, kommer i kraft af Kristi ord.", "Rom. 10:17",
	"Hvad I end gør, gør det af hjertet – for Herren og ikke for mennesker.", "Kol. 3:23", //Halloween
	"Men søg først Guds rige og hans retfærdighed, så skal alt det andet gives jer i tilgift.", "Matt. 6:33",
	"Thi for mig er livet Kristus, og døden en vinding.", "Fil. 1:21",
	"Frygt ikke, for jeg er med dig, fortvivl ikke, for jeg er din Gud, Jeg styrker dig og hjælper dig, min sejrrige hånd holder dig fast.", "Es. 41:10",
	"For ingen af os lever for sig selv, og ingen dør for sig selv; for når vi lever, lever vi for Herren,", "Rom. 14:7-8a",
	"Mennesket skal ikke leve af brød alene, men af hvert ord, der udgår af Guds mund.", "Matt. 4:4b",
	"Ære være Gud i det højeste og på jorden! Fred til mennesker med Guds velbehag!", "Luk. 2:14",
	"For et barn er født os, en søn er givet os, og herredømmet skal ligge på hans skuldre. Man skal kalde ham underfuld rådgiver, vældig Gud, evigheds fader, freds fyrste.", "Es. 9:5", //Jul
	"I dag er der født jer en frelser i Davids by; han er Kristus, Herren.", "Luk. 2:11", //Jul
	"I begyndelsen skabte Gud himlen og jorden.", "1. Mos. 1:1" //Nytår
];

var txt = quotes[week * 2 - 2];
var ref = quotes[week * 2 - 1];

var book = getBook(ref);
var chapter = getChapter(ref);
var verse = getVerse(ref);

var link = "https://www.bibelselskabet.dk/brugbibelen/bibelenonline/" + book + "/" + chapter + "#" + verse;

document.write("\"" + txt + "\"<br>- " + ref.link(link));
document.write("<br><p style=\"font-size:9px;line-height:0\">(Ugens vers)</p>");

function getBook(str) {
	var start = 0;
	var end = 0;
	var book = "";
	
	if (str.charAt(1) != '.')
	{
		for (var i = str.length - 1; i > 0; i--) {
			if (str.charAt(i) == '.') {
				end = i;
				break;
			}
		}
		book = str.substring(start,end);
	
		return book;
	}
	else {
		for (var i = str.length - 1; i > 0; i--) {
			if (str.charAt(i) == '.') {
				end = i;
				break;
			}
		}
		
		for (var i = end; i > 0; i--) {
			if (str.charAt(i) == ' ') {
				start = i + 1;
				break;
			}
		}
		
		book = str.substring(start,end);
		
		return str.charAt(0) + "_" + book;
	}
}

function getChapter(str) {
	var start = 0;
	var end = 0;
	
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == ':') {
			end = i;
			break;
		}
	}
	
	for (var i = end; i >= 0; i--) {
		if (str.charAt(i) == ' ') {
			start = i+1;
			break;
		}
	}
	
	return str.substring(start, end);   
}

function getVerse(str) {
	var pos = 0;
	
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == ':') {
			pos = i;
			break;
		}
	}
	
	return str.substring(pos+1, str.length);    
}

function getWeekNumber(d) {
	// Copy date so don't modify original
	d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	// Set to nearest Thursday: current date + 4 - current day number
	// Make Sunday's day number 7
	d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
	// Get first day of year
	var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
	// Calculate full weeks to nearest Thursday
	var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
	// Return array of year and week number
	return [d.getUTCFullYear(), weekNo];
}