// Globals Arrays
var HideElement = [57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103]
var ranNums = [15,5,27,90,116,20,43,37,29,110,86,68,108,62,100,63,58,11,57,42,69,74,91,66,44,24,48,19,114,33,77,26,82,2,46,16,34,55,104,38,89,99,111,107,93,60,67,14,112,106,83,109,51,71,102,13,21,87,113,75,52,10,41,88,18,3,79,6,31,80,70,115,96,32,25,72,17,105,47,101,1,94,35,65,95,117,92,28,78,76,97,8,64,7,36,98,54,4,23,9,73,61,81,56,59,40,53,12,103,118,50,84,45,49,30,22,39,85];
var CountArray = [];

// Global Variables
var Tableau = document.getElementById('Tableau');
var List = document.getElementById('HorizontalList');
var Overlay = document.getElementById('overlay');
var Doc = document.querySelector('html');
var BigInfo = document.querySelector('.displayItem');
var Body = document.querySelector('body');

// Get Root Var & Speed
var GetRootVar = getComputedStyle(document.body)
var Speed = (parseFloat(GetRootVar.getPropertyValue('--Speed'))*1000);

// Get Moving Grid Lines
var SVGMoveH1 = document.getElementById('SelectorGridH1');
var SVGMoveH2 = document.getElementById('SelectorGridH2'); 
var SVGMoveV1 = document.getElementById('SelectorGridV1');
var SVGMoveV2 = document.getElementById('SelectorGridV2');

// ISOTOPE - Meneleiv Grid
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

// ISOTOPE - Horizontal Grid
var isoH = new Isotope( '#HorizontalList', {
    itemSelector: '.HorizEl',
    layoutMode: 'horiz',
    transitionDuration: 0,    
});


// Create Table Elements
for(var i=1; i<=118; i++){
        // CountArray.push(i); // Différent à chaque fois (Tableau d'élements)

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
                <img class="Image" data-id="'+i+'" data-src="assets/media/imgel/Atoms/'+i+'/'+AtomJS[i].Url+'.jpg">\
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
        HoriEl.classList.remove('grid-item','hidden');   

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
iso.arrange({sortBy: 'Initial',transitionDuration: 0});

// .Element NOT HorizEl - Click Event
document.querySelectorAll('.element:not(.HorizEl)').forEach(function(Element) {

    // Appear One By One
    // var ranNums = shuffle(CountArray); // Version différente à chaque fois
    setTimeout(function(){
        document.getElementById(ranNums[Element.id-1]).classList.add('FadeIn')
    },300+(10*Element.id))
    // Moving Grid
    // Element.addEventListener("mouseover", function(){
    //         document.querySelectorAll('.SelectorGrid').forEach(function(SelectorGrid) {                   
    //             window.requestAnimationFrame(function(){SelectorGrid.classList.add('FadeIn')}) 
    //         });    
    //     function MoveGrid(){                      
    //         SVGMoveH1.style.transform = "translate(0px,"+Element.offsetTop+"px)";
    //         SVGMoveH2.style.transform = "translate(0px,"+(Element.offsetTop+document.getElementById(1).getBoundingClientRect().width)+"px)";
    //         SVGMoveV1.style.transform = "translate("+Element.offsetLeft+"px,0px)";
    //         SVGMoveV2.style.transform = "translate("+(Element.offsetLeft+document.getElementById(1).getBoundingClientRect().width)+"px,0px)";
    //     }
    //     window.requestAnimationFrame(MoveGrid)
    // })
    // Big Infos Update
    // Element.addEventListener("mouseenter", function(){        
    //     document.querySelector('.NameInfo').textContent = AtomJS[Element.id].Name;
    //     document.querySelector('.LetterInfo').textContent = ""+AtomJS[Element.id].Letter+"";        
    //     document.querySelector('.MassInfo').textContent = AtomJS[Element.id].Mass;
    //     document.querySelector('.NumberInfo').textContent = AtomJS[Element.id].Number;
    //     document.querySelector('.DescInfo').textContent = AtomJS[Element.id].Description;
    //     if(document.querySelector('.minimalist')){
    //         document.querySelector('.LetterInfo').style.setProperty("color", "var(--"+AtomJS[Element.id].Class+"Minimal)")
    //     }
    //     else{
    //         document.querySelector('.LetterInfo').style.setProperty("color", "var(--"+AtomJS[Element.id].Class+")")
    //     }
       
    //     //document.documentElement.style.setProperty('--ElectronColor', "var(--"+AtomJS[Element.id].Class+")");
        
    //     renderElectronicLayers("#Atom .electrospheres", new Atom(Element.id))
    // })        
});

// Event delegation
document.getElementById('Tableau').addEventListener('mouseover', function(e){
    // If is element
    if(e.target.classList.contains('element')){
        // Move Grid
        let Element = e.target;
        document.querySelectorAll('.SelectorGrid').forEach(function(SelectorGrid) {                   
            window.requestAnimationFrame(function(){SelectorGrid.classList.add('FadeIn')}) 
        });    
        function MoveGrid(){                      
            SVGMoveH1.style.transform = "translate(0px,"+Element.offsetTop+"px)";
            SVGMoveH2.style.transform = "translate(0px,"+(Element.offsetTop+document.getElementById(1).getBoundingClientRect().width)+"px)";
            SVGMoveV1.style.transform = "translate("+Element.offsetLeft+"px,0px)";
            SVGMoveV2.style.transform = "translate("+(Element.offsetLeft+document.getElementById(1).getBoundingClientRect().width)+"px,0px)";
        }
        window.requestAnimationFrame(MoveGrid)
     
        // update main Info          
        document.querySelector('.NameInfo').textContent = AtomJS[Element.id].Name;
        document.querySelector('.LetterInfo').textContent = ""+AtomJS[Element.id].Letter+"";        
        document.querySelector('.MassInfo').textContent = AtomJS[Element.id].Mass;
        document.querySelector('.NumberInfo').textContent = AtomJS[Element.id].Number;
        document.querySelector('.DescInfo').textContent = AtomJS[Element.id].Description;
        if(document.querySelector('.minimalist')){
            document.querySelector('.LetterInfo').style.setProperty("color", "var(--"+AtomJS[Element.id].Class+"Minimal)")
        }
        else{
            document.querySelector('.LetterInfo').style.setProperty("color", "var(--"+AtomJS[Element.id].Class+")")
        }        
        renderElectronicLayers("#Atom .electrospheres", new Atom(Element.id))

    }    
})


// .Element - Click Event
// document.querySelectorAll(".element").forEach(El => 
//     El.addEventListener("click", function(){
//          Open(El)        
//     }, {passive: true})
// )

// Event delegation
document.body.addEventListener('click', function(e){
    if(e.target.classList.contains('element')){
        Open(e.target)  
    }    
})

// Closing
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

    Clone.style.zIndex = 99;

    document.querySelector(":root").style.setProperty('--AnimateTranslateX', OriginLeft+'px');
    document.querySelector(":root").style.setProperty('--AnimateTranslateY', (SizeHeader+OriginTop)+'px');
    document.querySelector(":root").style.setProperty('--AnimateLeft', OriginLeft+'px');
    document.querySelector(":root").style.setProperty('--AnimateTop', (SizeHeader+OriginTop)+'px');

    Clone.classList.remove('Bigger')
    Clone.querySelector('.MoreInfo').classList.remove('FadeIn')
    
    List.classList.remove('FadeIn')    
    Selected.classList.remove('FadeOut', 'transition', 'selected');  

    setTimeout(function(){
        Doc.classList.remove('noevent');
        Clone.remove()              
    },800)
}

// Opening
function Open(El){
    if(document.querySelector('.selected')){
        document.querySelector('.selected').classList.remove('FadeOut', 'transition', 'selected');
    }     

    Doc.classList.add('noeventNONE'); 
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
        GetCloned.style.transform = "translate(calc(50vw - 150px), 200%) translateZ(0)";       
        Top = El.getBoundingClientRect().top;
        Left = El.getBoundingClientRect().left;
        Header = 0;
        setTimeout(function(){
            GetCloned.remove()
        },Speed)
    }  
        
    Clone.classList.add('Clone', 'transition');
    //Clone.classList.add('LeftTransition');
    Clone.removeAttribute("style")

    document.querySelector(":root").style.setProperty('--AnimateTranslateX', Left+'px');
    document.querySelector(":root").style.setProperty('--AnimateTranslateY', (Header+Top)+'px');
    document.querySelector(":root").style.setProperty('--AnimateLeft', Left+'px');
    document.querySelector(":root").style.setProperty('--AnimateTop', (Header+Top)+'px');
    
    document.body.appendChild(Clone);
    document.querySelector('.selected:not(.HorizEl)').classList.remove('FadeOut');

    
    function Bigger(){
        //Doc.classList.remove('noevent');        
        Clone.classList.add('Bigger');
        Clone.classList.add('Biggest');
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
    setTimeout (() => {window.requestAnimationFrame(Bigger_Show)}, Speed*2);
}

// Loading Event
window.addEventListener("load", function(event) {
    window.requestAnimationFrame(Fonts)    
    setTimeout(function(){
        BigInfo.classList.add('FadeInFlex')
    },2000)    
});
