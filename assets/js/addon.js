// Close Overlay
document.querySelector('#overlay').addEventListener("click", function(el){  
    this.hasAttribute("data-toclose") ? OpenCloseMenu(Overlay.getAttribute('data-toclose'), false) : Close()
    Blur(false)
})


// Filtering
document.querySelector('.dropdown__items').addEventListener("click", function(e){
    if(e.target.classList.contains('Filterbutton')){
        let FilBut = e.target;
        var GetFilter = FilBut.getAttribute('data-filter');
        var GetSort = FilBut.getAttribute('data-sort');
        //Initial Filter With BigInfo
        (GetFilter == 'grid-item') ? BigInfo.style.display = 'flex' : BigInfo.style.display = 'none'; 
        // Specific Filter
        (GetSort == 'Fusion') ? Tableau.classList.add('FiltredFusion') : Tableau.classList.remove('FiltredFusion');       
        // Update Content
        document.getElementById('dropdown').checked = false;
        document.querySelector('.dropdown__text').textContent = FilBut.textContent;
        // Filter
        iso.arrange({filter: '.'+GetFilter,sortBy: GetSort,transitionDuration: Speed})
        console.log(e.target)
    }    
})


// Filtering
// document.querySelectorAll(".Filterbutton").forEach(FilBut => 
//     FilBut.addEventListener("click", function(){
//         var GetFilter = FilBut.getAttribute('data-filter');
//         var GetSort = FilBut.getAttribute('data-sort');
//         //Initial Filter With BigInfo
//         (GetFilter == 'grid-item') ? BigInfo.style.display = 'flex' : BigInfo.style.display = 'none'; 
//         // Specific Filter
//         (GetSort == 'Fusion') ? Tableau.classList.add('FiltredFusion') : Tableau.classList.remove('FiltredFusion');       
//         // Update Content
//         document.getElementById('dropdown').checked = false;
//         document.querySelector('.dropdown__text').textContent = FilBut.textContent;
//         // Filter
//         iso.arrange({filter: '.'+GetFilter,sortBy: GetSort,transitionDuration: Speed})
//     })
// )

// Resizing
window.addEventListener("resize", function(event) {
    window.requestAnimationFrame(Fonts);    
});

// Dynamic Font Size
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
      Tableau.insertAdjacentHTML( 'afterbegin', SVGElementHorizontal );
    }    
    Tableau.insertAdjacentHTML( 'afterbegin', SVGElementVertical );    
}
  
// Blur Elements
function Blur(OnOff){
    if(OnOff == true){
        Overlay.classList.add("isBlurBack");
        document.querySelectorAll(".ToBlur").forEach((el) => {
            el.classList.add("isBlur","transition");
        });
    }
    else{
        Overlay.classList.remove("isBlurBack");
        Overlay.classList.remove("FadeIn");
        document.querySelectorAll(".ToBlur").forEach((el) => {
            el.classList.remove("isBlur");
            setTimeout(() => {
                el.classList.remove("transition");
            }, Speed);
        });        
    }    
}

// Open Menu
document.querySelector('.Informations').addEventListener("click", function(){
    OpenCloseMenu(".MessageInfo", true)
})

// Open/Close Menus
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

// Parameters
document.querySelector('.MessageInfo').addEventListener("click", function(e){
    if(e.target.classList.contains('ParametersClick')){
        let Param = e.target;
        
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
        console.log(e.target)
    }
})

// Parameters
// document.querySelectorAll(".ParametersClick").forEach(Param => 
//     Param.addEventListener("click", function(){
//         var GetParm = Param.getAttribute('data-parameter');

//         if(GetParm == "minimalist"){
//             Tableau.classList.add('minimalist')
//             List.classList.add('minimalist')
//             Doc.classList.add('minimalist')
//         }

//         if(GetParm == "classic"){
//             Tableau.classList.remove('minimalist')
//             List.classList.remove('minimalist')
//             Doc.classList.remove('minimalist')
//         }

//         if(Param.id == "GridVisibility"){
//             if(GetParm == "true"){
//                 Param.setAttribute('data-parameter','false');
//                 Param.classList.add('unchecked')
//                 Param.textContent = "Grille invisible";
//                 document.querySelectorAll('.IsSvg').forEach(function(el) {
//                     el.classList.add('FadeOut')
//                 });
//                 document.querySelectorAll('.SelectorGrid').forEach(function(el) {
//                     el.classList.add('FadeOut')
//                 });
//             }
//             else{
//                 Param.setAttribute('data-parameter','true');
//                 Param.classList.remove('unchecked')
//                 Param.textContent = "Grille visible";
//                 document.querySelectorAll('.IsSvg').forEach(function(el) {
//                     el.classList.remove('FadeOut')
//                 });
//                 document.querySelectorAll('.SelectorGrid').forEach(function(el) {
//                     el.classList.remove('FadeOut')
//                 });
//             }            
//         }

//         if(Param.id == "Responsivity"){
//             if(GetParm == "true"){
//                 Param.setAttribute('data-parameter','false');
//                 Param.classList.add('unchecked')
//                 Param.textContent = "Reponsive désactivé";
//                 Tableau.classList.remove('TableauResponsive')     
//                 iso.modes.masonry.options.fitWidth = false;
//                 //iso.options.resize = false;    
//                 BigInfo.classList.remove('FadeOutFlex');     
//                 iso.arrange({sortBy: 'Initial'}); // ,transitionDuration: Speed
//             }
//             else{
//                 Param.setAttribute('data-parameter','true');
//                 Param.classList.remove('unchecked')
//                 Param.textContent = "Reponsive activé";
//                 Tableau.classList.add('TableauResponsive')    
//                 iso.modes.masonry.options.fitWidth = true;
//                 //iso.options.resize = true;
//                 BigInfo.classList.add('FadeOutFlex');   
//                 iso.arrange({sortBy: 'Number'}); // ,transitionDuration: Speed
//             }            
//         }


//     })
// )


