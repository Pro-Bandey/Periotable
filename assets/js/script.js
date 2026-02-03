// Variables globales
var HideElement = [57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103]

var Tableau = document.getElementById('Tableau');
var List = document.getElementById('HorizontalList');
var Overlay = document.getElementById('overlay');
var Doc = document.querySelector('html');
var BigInfo = document.querySelector('.displayItem');
var Body = document.querySelector('body');

var GetRootVar = getComputedStyle(document.body)
var Speed = (parseFloat(GetRootVar.getPropertyValue('--Speed'))*1000);
var CountArray = [];

var SVGMoveH1 = document.getElementById('SelectorGridH1');
var SVGMoveH2 = document.getElementById('SelectorGridH2'); 
var SVGMoveV1 = document.getElementById('SelectorGridV1');
var SVGMoveV2 = document.getElementById('SelectorGridV2');

// Création de la gille principale
var iso = new Isotope( '.grid', {
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    masonry: {
        columnWidth: 0,
        gutter: 0,        
        fitWidth: false, // Not For Responsive
        percentPosition: false
    },
    stagger: 0,
    transitionDuration: 0,    
    getSortData: {
        Name: '.Name',
        Number: '.Number parseInt',
        Mass: '.Mass parseFloat',
        Initial: '[data-initial] parseFloat',
        Type: '[data-type]',
        Discover: '.Discover',
        Fusion : function(Elem){
            if(Elem.querySelector('.Fusion')){
                var Floated = parseFloat(Elem.querySelector('.FusionEl').textContent)
                if(isNaN(Floated)){
                    Floated = 100000;
                    Elem.classList.add('NoFusion')
                }                
                //console.log(Elem)
                return Floated
            }            
        }
    },
    sortBy: 'Initial',
    resize : true // Not For Responsive
});

// Création de la gille Horizontale
var isoH = new Isotope( '#HorizontalList', {
    itemSelector: '.HorizEl',
    layoutMode: 'horiz',
    transitionDuration: 0,    
});

// Génération Elements
for(var i=1; i<=118; i++){
        CountArray.push(i);
        // Pour lister les élements en fin de tableau
        var Other = (HideElement.includes(i)) ? 62 : 0; 
        var Presence = AtomJS[i].Presence.replace("^", "<sup>");
        // Création des éléments
        var Element = document.createElement('div')
        Element.className = "grid-item hidden element "+AtomJS[i].Class;
        Element.id = i;
        Element.setAttribute("data-initial", Other+i);
        Element.setAttribute("data-type", AtomJS[i].Class);
        Element.insertAdjacentHTML('beforeend', '\
            <div class="container" id="Ctn'+i+'">\
                <div class="Letter">'+AtomJS[i].Letter+'</div>\
                <div class="Name">'+AtomJS[i].Name+'</div>\
                <div class="Number">'+AtomJS[i].Number+'</div>\
                <div class="Mass">'+AtomJS[i].Mass+'</div>\
            </div>\
            <div class="MoreInfo">\
                <img class="Image" data-id="'+i+'" data-src="00/assets/media/imgel/Atoms/'+i+'/'+AtomJS[i].Url+'.jpg">\
                <div class="Description">'+AtomJS[i].Description+'</div>\
                <div class="Discover"><span class="TableList">Découverte : </span>'+AtomJS[i].Discover+'</div>\
                <div class="Neutrons"><span class="TableList">Neutrons : </span>'+AtomJS[i].Neutrons+'</div>\
                <div class="Fusion"><span class="TableList">Température de fusion : </span><span class="FusionEl">'+AtomJS[i].Fusion+' °C</span></div>\
                <div class="Ebulition"><span class="TableList">Température d"ébultion : </span>'+AtomJS[i].Ebulition+' °C</div>\
                <div class="Phase"><span class="TableList">Etat naturel : </span>'+AtomJS[i].Phase+'</div>\
                <div class="Couleur"><span class="TableList">Couleur : </span><div class="ColorAtom" style="background:#'+AtomJS[i].Couleur+';"></div></div>\
                <div class="Son"><span class="TableList">Vitesse du son : </span>'+AtomJS[i].Son+' m/s</div>\
                <div class="Mohs"><span class="TableList">Dureté de Mohs : </span>'+AtomJS[i].Mohs+'</div>\
                <div class="ConfigElec"><span class="TableList">Configuration : </span>'+AtomJS[i].ConfigElec+'</div>\
                <div class="Electronegativite"><span class="TableList">Electronegativité : </span>'+AtomJS[i].Electronegativite+'</div>\
                <div class="RayonCovalence"><span class="TableList">Rayon Covalence : </span>'+AtomJS[i].RayonCovalence+' pm</div>\
                <div class="VanDerWaalsRayon"><span class="TableList">Van Der Walls R : </span>'+AtomJS[i].VanDerWaalsRayon+' pm</div>\
                <div class="RayonIonique"><span class="TableList">Rayon Ionique : </span>'+AtomJS[i].RayonIonique+'</div>\
                <div class="EnergieIonisation"><span class="TableList">Energie Ionisation : </span>'+AtomJS[i].EnergieIonisation/100+' eV</div>\
                <div class="AffiniteElectronique"><span class="TableList">Affinité Elec : </span>'+AtomJS[i].AffiniteElectronique+' kJ/mole</div>\
                <div class="NombreOxydation"><span class="TableList">Nombre Oxydation : </span>'+AtomJS[i].NombreOxydation+'</div>\
                <div class="LiaisonChimique"><span class="TableList">Liaison Chimique : </span>'+AtomJS[i].LiaisonChimique+'</div>\
                <div class="Densite"><span class="TableList">Densité : </span><span>'+AtomJS[i].Densite+' g/cm<sup>3</sup></span></div>\
                <div class="Block"><span class="TableList">Block : </span>'+AtomJS[i].Block+'</div>\
                <div class="Periode"><span class="TableList">Periode : </span>'+AtomJS[i].Periode+'</div>\
                <div class="Groupe"><span class="TableList">Groupe : </span>'+AtomJS[i].Groupe+'</div>\
                <div class="Young"><span class="TableList">Module de Young : </span>'+AtomJS[i].Young+'</div>\
                <div class="Cisaillement"><span class="TableList">Module de Cisaillement : </span>'+AtomJS[i].Cisaillement+'</div>\
                <div class="Elasticité"><span class="TableList">Elasticité : </span>'+AtomJS[i].Elasticité+'</div>\
                <div class="Brinell"><span class="TableList">Dureté de Brinell : </span>'+AtomJS[i].Brinell+'</div>\
                <div class="ConductiviteTh"><span class="TableList">Conductivite Thermique : </span>'+AtomJS[i].ConductiviteTh+'</div>\
                <div class="DilatationTh"><span class="TableList">Dilatation Thermique : </span>'+AtomJS[i].DilatationTh+'</div>\
                <div class="ResistanceElec"><span class="TableList">Resistance Electrique : </span>'+AtomJS[i].ResistanceElec+'</div>\
                <div class="Radioactif"><span class="TableList">Radioactif : </span>'+AtomJS[i].Radioactif+'</div>\
                <div class="Demivie"><span class="TableList">Demi-vie : </span>'+AtomJS[i].Demivie+'</div>\
                <div class="Presence"><span class="TableList">Présence : </span><span class="PresencePerc">'+Presence+'</span></div>\
                <div class="Isotopes"><span class="TableList">Isotopes : </span>'+AtomJS[i].Isotopes+'</div>\
                <div><a class="ButtonMore" target="_blank" href="https://www.google.com/search?q='+AtomJS[i].Name+'">Voir plus</a></div>\
            </div>'
        );
        
        // Append Elements        
        Tableau.appendChild(Element);
        iso.appended(Element);
        // Append Horizontal Elements
        var HoriEl = Element.cloneNode(true);   
        HoriEl.id="h"+i;
        HoriEl.classList.add('HorizEl'); 
        HoriEl.classList.remove('grid-item');   
        HoriEl.classList.remove('hidden');    
        List.appendChild(HoriEl);  
        isoH.appended(HoriEl, true);     
                
        // Element fantomes (Séparations)
        for(var j=1; j<=AtomJS[i].Space; j++){
            var GhostElement = document.createElement('div')
            GhostElement.className = "grid-item ghost";
            GhostElement.setAttribute("data-initial", Other+i+'.'+j);
            GhostElement.setAttribute("data-type", "ZZZ");
            GhostElement.insertAdjacentHTML('beforeend', '\
                <div class="container" id="Ghost'+j+'">\
                <div class="Letter">'+AtomJS[i].Letter+'</div>\
                <div class="Name">Zzzy</div>\
                <div class="Number">1000</div>\
                <div class="Mass">1000</div>\
                </div>'
            );
            Tableau.appendChild(GhostElement);   
            iso.appended(GhostElement);  
            iso.hideItemElements(GhostElement)  
        }             
}
iso.arrange({sortBy: 'Initial',transitionDuration: Speed});

// Aparition aléatoire
var ranNums = shuffle(CountArray);
window.requestAnimationFrame(function(){
    document.querySelectorAll('.element:not(.HorizEl)').forEach(function(index) {
        setTimeout(function(){
            document.getElementById(ranNums[index.id-1]).classList.add('FadeIn')
        },300+(10*index.id))
    });
})

// Ouverture element en cliquant dessus
window.requestAnimationFrame(function(){
    document.querySelectorAll(".element:not(.HorizEl0)").forEach(El => 
        El.addEventListener("click", function(){
            Open(El)        
        })
    )
})


// Fermeture Overlay
document.querySelector('#overlay').addEventListener("click", function(el){  
    if(this.hasAttribute("data-toclose")){
        OpenCloseMenu(Overlay.getAttribute('data-toclose'), false)        
    }
    else{
        Close()
    }
    Blur(false)
})

// Fermeture
function Close(){
    Doc.classList.add('noevent');    
    Overlay.classList.remove('FadeIn'); 
    Blur(false)
    document.querySelectorAll('.element.FadeOut').forEach(function(Item){
        Item.classList.remove('FadeOut')
    })
    var Selected = document.querySelector('.selected:not(.Clone)');
    var Clone = document.querySelector('.Clone');
    var GetOrigin = document.getElementById(Clone.id.replace("h",""));  
    var SizeHeader = document.getElementById('Tableau').offsetTop;

    var LeftMargin = document.getElementById('Tableau').offsetLeft; //window.getComputedStyle(Tableau).marginLeft.replace("px","");
    var OriginTop = GetOrigin.offsetTop - window.scrollY;
    var OriginLeft = GetOrigin.offsetLeft - Body.scrollLeft + Number(LeftMargin);  

    Clone.style.setProperty("width", GetOrigin.offsetWidth+"px", "important")
    Clone.style.setProperty("height", GetOrigin.offsetWidth+"px", "important")
    Clone.style.setProperty("min-height", "0px", "important")
    Clone.style.setProperty("min-width", "0px", "important")
    Clone.style.left = OriginLeft+"px";
    Clone.style.zIndex = 99;
    Clone.style.top = SizeHeader+OriginTop+"px";

    Clone.classList.remove('Bigger')
    Clone.querySelector('.MoreInfo').classList.remove('FadeIn')
    
    List.classList.remove('FadeIn')    
    Selected.classList.remove('FadeOut', 'transition', 'selected');  

    setTimeout(function(){
        Doc.classList.remove('noevent');
        Clone.remove()              
    },800)
}

// Ouverture
function Open(El){
    if(document.querySelector('.selected')){
        document.querySelector('.selected').classList.remove('FadeOut', 'transition', 'selected');
    }     

    Doc.classList.add('noevent'); 
    El.classList.add('selected', 'transition')

    var LeftMargin = Tableau.offsetLeft;    
    var Top = El.offsetTop - window.scrollY;
    var Left = (El.offsetLeft - Body.scrollLeft)+Number(LeftMargin);
    var SizeHeader = document.getElementById('Tableau').offsetTop;
    var Header = SizeHeader;    
    var GetCloned = document.querySelector('.Clone');    
    var Clone = El.cloneNode(true);
    var Img = Clone.querySelector('.Image');
    var Data = Img.getAttribute('data-src'); 

    if(GetCloned){        
        GetCloned.style.transform = "translate(-50%,100%)";       
        Top = El.getBoundingClientRect().top;
        Left = El.getBoundingClientRect().left;
        Header = 0;
        setTimeout(function(){
            GetCloned.remove()
        },Speed)
    }  
        
    Clone.classList.add('Clone', 'transition');
    Clone.style.left = Left+"px";
    Clone.style.top = Header+Top+"px";

    document.body.after(Clone);
    document.querySelector('.selected:not(.HorizEl)').classList.remove('FadeOut');

    function Bigger(){
        Doc.classList.remove('noevent');
        Clone.classList.add('Bigger');
        Clone.classList.remove('HorizEl');
        Overlay.classList.add('FadeIn');  
        Blur(true)          
        List.classList.add('FadeIn')
        List.scrollLeft = (100*El.id.replace("h","")-200);
        Img.src = Data;
    }
    setTimeout (() => {window.requestAnimationFrame(Bigger)}, Speed);
    
    function Bigger_Show(){
        Clone.querySelector('.MoreInfo').classList.add('FadeIn')
            document.querySelectorAll('.Clone .MoreInfo > *').forEach(function(Childs,index) {
                setTimeout(function(){
                   Childs.classList.add('FadeInFlex')
                },100*index)
            });
    }
    setTimeout (() => {window.requestAnimationFrame(Bigger_Show)}, Speed*4);
}

// Filter les éléments
document.querySelectorAll(".Filterbutton").forEach(FilBut => 
    FilBut.addEventListener("click", function(){
        var GetFilter = FilBut.getAttribute('data-filter');
        var GetSort = FilBut.getAttribute('data-sort');
        //Filtre Initial (Info animée)
        (GetFilter == 'grid-item') ? BigInfo.style.display = 'flex' : BigInfo.style.display = 'none'; 
        // Filtre Fusion
        (GetSort == 'Fusion') ? Tableau.classList.add('FiltredFusion') : Tableau.classList.remove('FiltredFusion');       

        document.getElementById('dropdown').checked = false;
        document.querySelector('.dropdown__text').textContent = FilBut.textContent;

        iso.arrange({
            filter: '.'+GetFilter,
            sortBy: GetSort
          })
    })
)

// Hover Element to update Big Info 
document.querySelectorAll(".element:not(.HorizEl)").forEach(HoverEl => 
    HoverEl.addEventListener("mouseenter", function(){
        
        document.querySelector('.NameInfo').textContent = AtomJS[HoverEl.id].Name;
        document.querySelector('.LetterInfo').textContent = ""+AtomJS[HoverEl.id].Letter+"";        
        document.querySelector('.MassInfo').textContent = AtomJS[HoverEl.id].Mass;
        document.querySelector('.NumberInfo').textContent = AtomJS[HoverEl.id].Number;
        document.querySelector('.DescInfo').textContent = AtomJS[HoverEl.id].Description;
        if(document.querySelector('.minimalist')){
            document.querySelector('.LetterInfo').style.setProperty("color", "var(--"+AtomJS[HoverEl.id].Class+"Minimal)")
        }
        else{
            document.querySelector('.LetterInfo').style.setProperty("color", "var(--"+AtomJS[HoverEl.id].Class+")")
        }
       
        //document.documentElement.style.setProperty('--ElectronColor', "var(--"+AtomJS[HoverEl.id].Class+")");
        
        renderElectronicLayers("#Atom .electrospheres", new Atom(HoverEl.id))
    },{once : false})
)

// Chargement fenêtre
window.addEventListener("load", function(event) {
    window.requestAnimationFrame(Fonts)    
    // Fin animation SVG
    setTimeout(function(){
        BigInfo.classList.add('FadeInFlex')
    },2000)
    
});

// Redimensionnement fenêtre
window.addEventListener("resize", function(event) {
    window.requestAnimationFrame(Fonts);
    setTimeout(function(){
        //iso.layout()
    },Speed)
    
});

// Font Adaptative
function Fonts(){
    var WidthEl = document.getElementById('1').offsetWidth;

    // Lettre
    document.querySelectorAll('.Letter').forEach(function(Is) {
        Is.style.setProperty("font-size", "min("+WidthEl/3+"px, 20pt)")
    });

    // Name
    document.querySelectorAll('.Name').forEach(function(Is) {
        Is.style.setProperty("font-size", "min("+WidthEl/7+"px, 10pt)")
    });

    // Number
    document.querySelectorAll('.Number').forEach(function(Is) {
        Is.style.setProperty("font-size", "min("+WidthEl/7+"px, 8pt)")
    });

    // Mass
    document.querySelectorAll('.Mass').forEach(function(Is) {
        Is.style.setProperty("font-size", "min("+WidthEl/7+"px, 8pt)")
    });
}

// Animation SVG
for(var An=1; An<18; An++){
      // Vertical Draw
      var SVGElementVertical = '<svg class="IsSvg lineanimationVerticalAbsolute" id="VAn'+An+'" xmlns="http://www.w3.org/2000/svg">\
      <line id="Confort" class="animation" x1="0" y1="0" x2="0" y2="0%">\
          <animate attributeName="y2" from="0%" to="100%" begin="'+An/22+'s" dur="0.4s" fill="freeze" /> \
          <unanimate attributeName="y1" from="0%" to="100%" begin="'+(0.8+(An/22))+'s" dur="0.4s" fill="freeze" />\
      </line>\
    </svg>';

    // Horizontal Draw
    if(An<10){
        var SVGElementHorizontal = '<svg class="IsSvg lineanimationHorizontalAbsolute" id="HAn'+An+'" xmlns="http://www.w3.org/2000/svg">\
        <line id="Confort" class="animation" x1="0" y1="0" x2="0" y2="0%">\
            <animate attributeName="x2" from="0%" to="100%" begin="'+An/22+'s" dur="0.4s" fill="freeze" /> \
            <unanimate attributeName="x1" from="0%" to="100%" begin="'+(0.8+(An/22))+'s" dur="0.4s" fill="freeze" />\
        </line>\
      </svg>';
      document.getElementById('Tableau').insertAdjacentHTML( 'afterbegin', SVGElementHorizontal );
    }    
    document.getElementById('Tableau').insertAdjacentHTML( 'afterbegin', SVGElementVertical );    
}
  
// Fonction aléatoire pour l'apparition
  function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;   
    }    
    return array;
}

// Grille bouge
document.querySelectorAll(".element:not(.HorizEl)").forEach(ElementFocused => 
    ElementFocused.addEventListener("mouseover", function(){

        document.querySelectorAll('.SelectorGrid').forEach(function(SelectorGrid) {                   
            window.requestAnimationFrame(function(){SelectorGrid.classList.add('FadeIn')}) 
        });

        function MoveGrid(){  
            var VH = (window.innerHeight/11.5);
            var ElementWidth = document.getElementById(1).clientWidth;
            var ElementTop = ElementFocused.offsetTop;
            var ElementLeft = ElementFocused.offsetLeft;
                
            SVGMoveH1.style.transform = "translate(0px,"+ElementTop+"px)";
            SVGMoveH2.style.transform = "translate(0px,"+(ElementTop+ElementWidth)+"px)";
            SVGMoveV1.style.transform = "translate("+ElementLeft+"px,0px)";
            SVGMoveV2.style.transform = "translate("+(ElementLeft+ElementWidth)+"px,0px)";
        }
        window.requestAnimationFrame(MoveGrid)
    })
)
// Blur Elements
function Blur(OnOff){
    if(OnOff == true){
        document.getElementById('overlay').classList.add("isBlurBack");
        document.querySelectorAll(".ToBlur").forEach((el) => {
            el.classList.add("isBlur","transition");
        });
    }
    else{
        document.getElementById('overlay').classList.remove("isBlurBack");
        document.getElementById('overlay').classList.remove("FadeIn");
        document.querySelectorAll(".ToBlur").forEach((el) => {
            el.classList.remove("isBlur");
            setTimeout(() => {
                el.classList.remove("transition");
            }, Speed);
        });        
    }    
}

// Ouverture menu
document.querySelector('.Informations').addEventListener("click", function(){
    OpenCloseMenu(".MessageInfo", true)
})

function OpenCloseMenu(Element, Open){
    var Cible = document.querySelector(Element);
    if( Open == true){        
        Cible.classList.add('FadeIn');
        Overlay.classList.add('FadeIn');
        Overlay.setAttribute('data-toclose',Element)
        Blur(true);
    }
    else{
        Cible.classList.add('FadeOut');
        Overlay.classList.add('FadeOut');
        Overlay.removeAttribute('data-toclose');
        Blur(false);
        setTimeout(function(){
            Cible.classList.remove('FadeIn', 'FadeOut');
            Overlay.classList.remove('FadeIn', 'FadeOut');
        },Speed)
    }
    
}

// paramètres
document.querySelectorAll(".ParametersClick").forEach(Param => 
    Param.addEventListener("click", function(){
        var GetParm = Param.getAttribute('data-parameter');

        if(GetParm == "minimalist"){
            Tableau.classList.add('minimalist')
            List.classList.add('minimalist')
            Doc.classList.add('minimalist')
        }

        if(GetParm == "classic"){
            Tableau.classList.remove('minimalist')
            List.classList.remove('minimalist')
            Doc.classList.remove('minimalist')
        }

        if(Param.id == "GridVisibility"){
            if(GetParm == "true"){
                Param.setAttribute('data-parameter','false');
                Param.classList.add('unchecked')
                Param.textContent = "Grille invisible";
                document.querySelectorAll('.IsSvg').forEach(function(el) {
                    el.classList.add('FadeOut')
                });
                document.querySelectorAll('.SelectorGrid').forEach(function(el) {
                    el.classList.add('FadeOut')
                });
            }
            else{
                Param.setAttribute('data-parameter','true');
                Param.classList.remove('unchecked')
                Param.textContent = "Grille visible";
                document.querySelectorAll('.IsSvg').forEach(function(el) {
                    el.classList.remove('FadeOut')
                });
                document.querySelectorAll('.SelectorGrid').forEach(function(el) {
                    el.classList.remove('FadeOut')
                });
            }            
        }

        if(Param.id == "Responsivity"){
            if(GetParm == "true"){
                Param.setAttribute('data-parameter','false');
                Param.classList.add('unchecked')
                Param.textContent = "Reponsive désactivé";
                Tableau.classList.remove('TableauResponsive')     
                iso.modes.masonry.options.fitWidth = false;
                //iso.options.resize = false;    
                BigInfo.classList.remove('FadeOutFlex');     
                iso.arrange({sortBy: 'Initial'}); // ,transitionDuration: Speed
            }
            else{
                Param.setAttribute('data-parameter','true');
                Param.classList.remove('unchecked')
                Param.textContent = "Reponsive activé";
                Tableau.classList.add('TableauResponsive')    
                iso.modes.masonry.options.fitWidth = true;
                //iso.options.resize = true;
                BigInfo.classList.add('FadeOutFlex');   
                iso.arrange({sortBy: 'Number'}); // ,transitionDuration: Speed
            }            
        }


    })
)


