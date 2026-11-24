const categories = {

chemistry: [

{
question:"Hvilken pH-værdi er neutral?",
options:["2","5","7","14"],
correct:2,
explanation:"Neutral pH er 7."
},

{
question:"Hvilket middel anvendes typisk mod kalk?",
options:["Surt","Basisk","Neutralt","Sæbe"],
correct:0,
explanation:"Kalk fjernes bedst med sure rengøringsmidler."
},

{
question:"Hvorfor skal man dosere rengøringsmidler korrekt?",
options:[
"For at spare kemi",
"For at beskytte overflader",
"For at få korrekt rengøring",
"Alle ovenstående"
],
correct:3,
explanation:"Korrekt dosering giver bedst rengøring, beskytter overflader og mindsker miljøpåvirkning."
},

{
question:"Hvilken pH har et stærkt basisk middel typisk?",
options:["2","5","7","11+"],
correct:3,
explanation:"Basiske midler ligger over pH 7."
},

{
question:"Hvorfor efterskylles gulvet efter afrensning?",
options:[
"For at fjerne sæberester",
"For at få mere glans",
"For at tørre hurtigere",
"For at gøre gulvet glattere"
],
correct:0,
explanation:"Kemi skal fjernes før ny behandling."
},

{
question:"Hvad kan ske ved overdosering af rengøringsmidler?",
options:[
"Dårlig rengøring",
"Hinder og rester",
"Ingenting",
"Mindre slid"
],
correct:1,
explanation:"Overdosering kan efterlade rester og tiltrække snavs."
},

{
question:"Hvad betyder pH?",
options:[
"Potentiale for hydrogen",
"Power house",
"Polish hardness",
"Pressure handling"
],
correct:0,
explanation:"pH står for potentiale for hydrogen."
},

{
question:"Hvilket pH-område betragtes som surt?",
options:[
"0-6",
"7",
"8-14",
"10-12"
],
correct:0,
explanation:"Alt under 7 er surt."
},

{
question:"Hvilket pH-område betragtes som basisk?",
options:[
"0-6",
"7",
"8-14",
"Kun 14"
],
correct:2,
explanation:"Alt over 7 er basisk."
},

{
question:"Hvilken pH-værdi bør gulvet have før polish?",
options:[
"3",
"5",
"7",
"12"
],
correct:2,
explanation:"Polish binder bedst ved neutral pH."
},

{
question:"Hvorfor skal man læse produktanvisningen?",
options:[
"For at følge doseringen",
"For at bruge korrekt metode",
"For at kende sikkerheden",
"Alle ovenstående"
],
correct:3,
explanation:"Produktanvisningen fortæller om brug og sikkerhed."
},

{
question:"Hvad sker der ofte ved underdosering?",
options:[
"Dårlig effekt",
"Bedre effekt",
"Mere glans",
"Mindre slid"
],
correct:0,
explanation:"For lidt kemi giver ofte dårlig rengøring."
},

{
question:"Hvilken type kemi bruges ofte til grundrengøring?",
options:[
"Basisk",
"Surt",
"Kun vand",
"Neutral polish"
],
correct:0,
explanation:"Grundrengøring udføres ofte med basiske midler."
},

{
question:"Hvad kan rester af rengøringsmiddel give under polish?",
options:[
"Fiskeøjne",
"Pletter",
"Dårlig vedhæftning",
"Alle ovenstående"
],
correct:3,
explanation:"Kemirester giver ofte fejl i polish."
},

{
question:"Hvorfor bør man bruge mindst mulig kemi?",
options:[
"Miljø",
"Økonomi",
"Sikkerhed",
"Alle ovenstående"
],
correct:3,
explanation:"Mindre kemi er bedre for miljø, økonomi og arbejdsmiljø."
}

],

surfaces: [

{
question:"Hvilket gulv tåler dårligt store mængder vand?",
options:[
"Linoleum",
"Klinker",
"Beton",
"Rustfrit stål"
],
correct:0,
explanation:"Linoleum kan tage skade af for meget vand."
},

{
question:"Hvilket materiale bør man være forsigtig med at bruge stærk alkali på?",
options:[
"Linoleum",
"Klinker",
"Vinyl",
"Beton"
],
correct:0,
explanation:"Linoleum kan nedbrydes af stærk alkali."
},

{
question:"Hvilket materiale findes ofte i vådrum?",
options:[
"Klinker",
"Pap",
"Linoleum",
"Tæppe"
],
correct:0,
explanation:"Klinker bruges ofte i vådrum."
},

{
question:"Hvorfor skal man kende gulvtypen før rengøring?",
options:[
"For at vælge korrekt metode",
"For at vælge korrekt kemi",
"For at undgå skader",
"Alle ovenstående"
],
correct:3,
explanation:"Gulvtypen afgør valg af metode og kemi."
},

{
question:"Hvilket gulv behandles ofte med polish?",
options:[
"Linoleum",
"Klinker",
"Beton",
"Stål"
],
correct:0,
explanation:"Linoleum beskyttes ofte med polish."
},

{
question:"Hvad er et tegn på slidt polish?",
options:[
"Matte områder",
"Mere glans",
"Mørkere farve",
"Ingen ridser"
],
correct:0,
explanation:"Slidt polish fremstår ofte mat."
},

{
question:"Hvad skal man gøre før ny polish lægges?",
options:[
"Kontrollere pH",
"Rengøre gulvet",
"Lade gulvet tørre",
"Alle ovenstående"
],
correct:3,
explanation:"Gulvet skal være rent, tørt og neutralt."
},

{
question:"Hvilken overflade tåler typisk syre bedst?",
options:[
"Klinker",
"Linoleum",
"Træ",
"Kork"
],
correct:0,
explanation:"Klinker tåler generelt syre bedre."
},

{
question:"Hvorfor tester man ny pad på et lille område?",
options:[
"For at undgå skader",
"For at spare strøm",
"For at få mere glans",
"For at bruge mindre kemi"
],
correct:0,
explanation:"Man tester for at beskytte gulvet."
},

{
question:"Hvad kan ridser i polish skyldes?",
options:[
"Slid",
"Trafik",
"Forkert vedligeholdelse",
"Alle ovenstående"
],
correct:3,
explanation:"Ridser kan opstå af flere årsager."
}

],

hygiene: [],
sanitary: [],
machines: [

{
question:"Hvad bruges en rød pad typisk til?",
options:[
"Let rengøring",
"Grov afrensning",
"Fjernelse af beton",
"Kun polering"
],
correct:0,
explanation:"Røde pads bruges ofte til lettere rengøring og vedligeholdelse."
},

{
question:"Hvad bruges en sort pad typisk til?",
options:[
"Grov afrensning",
"Polering",
"Voksning",
"Støvsugning"
],
correct:0,
explanation:"Sort pad er en af de mest aggressive pads."
},

{
question:"Hvad er formålet med en vandsuger?",
options:[
"Opsuge vand",
"Polere gulve",
"Påføre polish",
"Afkalke toiletter"
],
correct:0,
explanation:"Vandsugeren bruges til at opsuge vand og snavs."
},

{
question:"Hvorfor vælger man den mindst aggressive pad først?",
options:[
"For at undgå skader",
"For at spare strøm",
"For at bruge mere kemi",
"For at få mere glans"
],
correct:0,
explanation:"Man starter forsigtigt for at beskytte gulvet."
},

{
question:"Hvad bruges en kombimaskine til?",
options:[
"Skuring og opsugning",
"Vinduespolering",
"Afkalkning",
"Støvsugning af tæpper"
],
correct:0,
explanation:"En kombimaskine kan både skure og opsuge vand."
},

{
question:"Hvad betyder excentriske bevægelser?",
options:[
"Ujævne cirkulære bevægelser",
"Kun lige bevægelser",
"Vibrerende bevægelser",
"Hoppende bevægelser"
],
correct:0,
explanation:"Excenterbevægelse er en speciel roterende bevægelse."
},

{
question:"Hvornår bruges en doodlebug?",
options:[
"Kanter og hjørner",
"Hele gulvet",
"Vinduer",
"Tæpper"
],
correct:0,
explanation:"Doodlebug bruges ofte langs kanter og svært tilgængelige steder."
},

{
question:"Hvad skal man gøre før maskinen tages i brug?",
options:[
"Kontrollere udstyret",
"Starte direkte",
"Fylde polish på",
"Intet"
],
correct:0,
explanation:"Maskinen skal kontrolleres før brug."
},

{
question:"Hvad kan ske ved forkert valg af pad?",
options:[
"Skader på gulvet",
"Bedre resultat",
"Mindre slid",
"Ingenting"
],
correct:0,
explanation:"En for aggressiv pad kan beskadige overfladen."
},

{
question:"Hvad bruges en gulvbehandlingsmaskine til?",
options:[
"Skuring og polering",
"Toiletrengøring",
"Vinduesvask",
"Affaldssortering"
],
correct:0,
explanation:"Maskinen bruges ofte ved gulvpleje."
},

{
question:"Hvorfor skal rondeller udskiftes?",
options:[
"Når de er slidte",
"Hver time",
"Aldrig",
"Kun ved polering"
],
correct:0,
explanation:"Slidte rondeller giver dårligere resultat."
},

{
question:"Hvad er vigtigt ved ledninger til maskiner?",
options:[
"Undgå snublefare",
"Gør dem længere",
"Læg dem i vand",
"Ingenting"
],
correct:0,
explanation:"Ledninger skal håndteres sikkert."
},

{
question:"Hvilken pad er mest aggressiv?",
options:[
"Sort",
"Rød",
"Hvid",
"Blå"
],
correct:0,
explanation:"Sort er typisk den groveste pad."
},

{
question:"Hvorfor rengøres maskinen efter brug?",
options:[
"Forlænge levetiden",
"Bedre hygiejne",
"Bedre funktion",
"Alle ovenstående"
],
correct:3,
explanation:"Vedligeholdelse sikrer drift og levetid."
},

{
question:"Hvorfor læse maskinens brugsanvisning?",
options:[
"Sikker brug",
"Korrekt anvendelse",
"Undgå skader",
"Alle ovenstående"
],
correct:3,
explanation:"Brugsanvisningen skal altid følges."
}

],

safety: [],
ergonomics: [],
insta: []

};
