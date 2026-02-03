// Variables globales
var HideElement = [57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103]
var ranNums = [15,5,27,90,116,20,43,37,29,110,86,68,108,62,100,63,58,11,57,42,69,74,91,66,44,24,48,19,114,33,77,26,82,2,46,16,34,55,104,38,89,99,111,107,93,60,67,14,112,106,83,109,51,71,102,13,21,87,113,75,52,10,41,88,18,3,79,6,31,80,70,115,96,32,25,72,17,105,47,101,1,94,35,65,95,117,92,28,78,76,97,8,64,7,36,98,54,4,23,9,73,61,81,56,59,40,53,12,103,118,50,84,45,49,30,22,39,85];
var CountArray = [];

var Tableau = document.getElementById('Tableau');
var List = document.getElementById('HorizontalList');
var Overlay = document.getElementById('overlay');
var Doc = document.querySelector('html');
var BigInfo = document.querySelector('.displayItem');
var Body = document.querySelector('body');

var GetRootVar = getComputedStyle(document.body)
var Speed = (parseFloat(GetRootVar.getPropertyValue('--Speed'))*1000);


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
        //CountArray.push(i); // Différent à chaque fois
        // Pour lister les élements en fin de tableau
        var Other = (HideElement.includes(i)) ? 62 : 0; 
        var Presence = AtomJS[i].Presence.replace("^", "<sup>");
        // Création des éléments
        var Element = document.createElement('div')
        Element.className = "grid-item hiddenn element "+AtomJS[i].Class;
        Element.id = i;
        Element.setAttribute("data-initial", Other+i);
        Element.setAttribute("data-type", AtomJS[i].Class);
        Element.insertAdjacentHTML('beforeend', '\
            <div class="container" id="Ctn'+i+'">\
                <div class="Letter">'+AtomJS[i].Letter+'</div>\
                <div class="Name">'+AtomJS[i].Name+'</div>\
                <div class="Number">'+AtomJS[i].Number+'</div>\
                <div class="Mass">'+AtomJS[i].Mass+'</div>\
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


// Ouverture element en cliquant dessus
window.requestAnimationFrame(function(){
    document.querySelectorAll(".element:not(.HorizEl0)").forEach(El => 
        El.addEventListener("click", function(){
            Open(El)        
        })
    )
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

    // Clone.style.left = Left+"px";
    // Clone.style.top = Header+Top+"px";
    Clone.removeAttribute("style")
    console.log(Left)
    document.querySelector(":root").style.setProperty('--AnimateLeft', Left+'px');
    document.querySelector(":root").style.setProperty('--AnimateTop', (Header+Top)+'px');
    
    document.body.after(Clone);
    document.querySelector('.selected:not(.HorizEl)').classList.remove('FadeOut');

    function Bigger(){
        Clone.classList.add('Bigger');
        Clone.classList.remove('HorizEl');
    }
    setTimeout (() => {window.requestAnimationFrame(Bigger)}, Speed*3);
    
    function Bigger_Show(){
        Clone.querySelector('.MoreInfo').classList.add('FadeIn')
            document.querySelectorAll('.Clone .MoreInfo > *').forEach(function(Childs,index) {
                setTimeout(function(){
                   Childs.classList.add('FadeInFlex')
                },100*index)
            });
    }
    setTimeout (() => {window.requestAnimationFrame(Bigger_Show)}, Speed*20000);
}





