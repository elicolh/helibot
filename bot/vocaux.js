const discord = require("discord.js")
const client = new discord.Client()
var guild;var scoreChannel;var members;var scoreMessage

const mots = ["CHOQUET", "ATTISER", "MAGNETS", "PARAGES", "BRANDEE", "WHARTON", "SOUPCON", "OTERAIT", "POURREZ", "MADISON", "JUTLAND", "ROSAIRE", "PLONGEZ", "INFECTE", "STOPPEZ", "RICANER", "ENJAMBE", "CHARGER", "NYUNGWE", "BECAUSE", "UTERINE", "SOUDOYE", "DIOXYDE", "RESETTE", "GAUSSES", "SUSCITA", "REPERER", "EXERCEZ", "WYSIWYG", "PIGNOLE", "PHENOME", "DEPECER", "SALLIER", "REFEREZ", "PARTONS", "REMISEE", "FARNELL", "BAISAIT", "SEDUIRA", "FAUTIFS", "HELICES", "FORCENE", "LAVEURS", "CORDONS", "PLAIGNE", "CHAMANE", "BIGBANG", "DENEIGE", "ENCULEE", "CALINOU", "CHOQUET", "ATTISER", "MAGNETS", "PARAGES", "BRANDEE", "WHARTON", "SOUPCON", "OTERAIT", "POURREZ", "MADISON", "JUTLAND", "ROSAIRE", "PLONGEZ", "INFECTE", "STOPPEZ", "RICANER", "ENJAMBE", "CHARGER", "NYUNGWE", "BECAUSE", "UTERINE", "SOUDOYE", "DIOXYDE", "RESETTE", "GAUSSES", "SUSCITA", "REPERER", "EXERCEZ", "WYSIWYG", "PIGNOLE", "PHENOME", "DEPECER", "SALLIER", "REFEREZ", "PARTONS", "REMISEE", "FARNELL", "BAISAIT", "SEDUIRA", "FAUTIFS", "HELICES", "FORCENE", "LAVEURS", "CORDONS", "PLAIGNE", "CHAMANE", "BIGBANG", "DENEIGE", "ENCULEE", "CALINOU", "SAROUEL", "PALADIN", "ARTISTE", "VENDOME", "YAOURTS", "TOUTAFE", "RECEPER", "REMARIE", "JUGULER", "KHALIFA", "APORIES", "OCTROYE", "JETEURS", "MADONNE", "ACETATE", "ABOUTIS", "SOULANT", "BLEUTES", "ZAPPEES", "GREFFES", "ANNEXEE", "CLONALE", "HERAUTS", "DELICES", "BINOCLE", "CORDEAU", "COMEDIE", "ABONDER", "IGUANES", "PHASMES", "ABIMENT", "BOVIDES", "CAUDRON", "INCULPE", "CODEURS", "CHAMSIN", "SCHWARZ", "COULANT", "REDIFFS", "BOURRIN", "FRACTAL", "CHTITES", "ACHETER", "SEZANNE", "BIDASSE", "ARSENIC", "INTIMES", "GAUFRER", "VIVANTE", "RENDUES","PINCAIT", "GILBERT", "OUKACHA", "FOUTAIT", "BRISERA", "CAHUTES", "IMPOSTE", "COUTENT", "SOMBREE", "RECORDA", "CONTENT", "CYCLONE", "AMERIKA", "MEUGLER", "CRACHES", "MAGHRIB", "NORFOLK", "CRETONS", "TANNEUR", "DIMITRI", "ABRUTIT", "NIQUAIT", "LEGALES", "SOUDAIT", "FASCINE", "BRITISH", "ESSAIMS", "ZEMMOUR", "CLEGUER", "COMBAVA", "BREVETE", "STABILO", "RAVAGEA", "FAUCHER", "MONTRER", "PENDONS", "PEELING", "FIGUIER", "BOUVIER", "LEURRES", "FLETRIE", "CONTRER", "CESSEES", "VERMONT", "LOUDEAC", "ETHANOL", "ESPERAI", "VENERER", "RAISINE", "ARRACHE", "TOUCHEE", "DEPECES", "CHECKEZ", "EMBALLA", "EMIGRER", "SOLIDES", "DRESSEZ", "GRANITE", "NARVALO", "SUCRENT", "BERMUDA", "CROIRAS", "TRUITES", "ACCISES", "LOUPEES", "FLOODEZ", "FINESSE", "PIGEAIT", "CELIBAT", "ETUDIES", "MENOTTE", "BANNIES", "MAJOREE", "ENTETEE", "FONCANT", "APAISES", "VANTANT", "PREVIEW", "ALARMEE", "GERSOIS", "FRISBEE", "LIERONT", "PERCERA", "FREEGAN", "FORBACH", "SPOILES", "LEOPARD", "ROMPENT", "ERUPTIF", "STIPULE", "CROPPEE", "OCCUPEZ", "MINAGES", "MARELLE", "MINOENS", "PAUMIEZ", "VITRAIL", "TACHEES", "REFUMER", "FISCALE", "CLEGUER", "COLONNA", "VALIDEZ", "ACCISES", "CYNIQUE", "FUMERAI", "RESINES", "TIGRONS", "PRIEURS", "ANSELME", "AMBIGUE", "BANCALS", "MANILLA", "MAURICE", "REVERER", "CONSENS", "LISSANT", "TESTEUR", "PACTISE", "VIBRERA", "POMEROL", "SENSURE", "VEROLER", "SUINTER", "GRISEES", "DEVOREE", "MILDIOU", "DEBATTU", "DECHUES", "WINSTON", "VENANTE", "ENFILEZ", "PISTENT", "AGRAVER", "ACIDULE", "AMORCER"]


client.on("ready",()=>{
    guild = client.guilds.get("544953131205918720");
    guild = client.guilds.get("532956456492728320");
    setInterval(refresh,1000)
})


function refresh(){
    let bypass = false
    guild.channels.filter(e=>
            e.type=="voice"&&
            e.id!="729002418473402438"&&//general
            e.id!="535151379786760212"&&//afk
            !e.members.array().length
        ).forEach(e=>{
            if(bypass)
                e.delete()
            else 
                bypass = true
    })
    var full = true
    guild.channels.filter(e=>
        e.type=="voice"&&
        e.name!="AFK"
        ).forEach(e=>{
            if(!e.members.array().length)
                full = false
        })
    if(full){
        guild.createChannel(mots[Math.floor(Math.random() * mots.length)], {
            type:"voice",
            parent:guild.channels.get("532956456492728323"),
            position:2
        })
    }
}


client.login(require("./../token"))