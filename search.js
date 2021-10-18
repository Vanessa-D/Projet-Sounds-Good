// SEARCH BAR// --> permet de compléter automatiquement ce qu'on est en train d'écrire
function autocomplete(inp, arr) {
    /*the autocomplete function takes two parameters ,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        let a, b, i, val = this.value;
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
        let x = document.getElementById(this.id + "autocomplete-list");
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
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      let x = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  let instruments = [
    "guitare accoustique", "guitare électrique", "ukulélé", "ukulélé électrique", "violon", "violioncelle", "mandoline", 
    "basse électrique", "tambourin", "batterie", "djembé", "maracas", "trompette", "harmonica", "cor", "flûte", "piano", "melodica", "synth", "accordéon", "african thingy"];

    autocomplete(document.getElementById("search_bar"), instruments);

    $(function(){
      // Recup le bouton de recherche
      let searchBtn = $('#search');
    
      $(searchBtn).click(function(){
        // Recup la valeur de l'input de recherche
        let searchBar = $('#search_bar').val();
        // Si la valeur saisie correspond à ...
        if(searchBar == 'guitare accoustique'){  
          // On donne une nouvelle valeur à l'attribut action du formulaire --> amène au bon endroit dans la page
          $('#form').attr('action','#guitareA');
        }else if(searchBar == 'guitare électrique'){  
          $('#form').attr('action','#guitareE');
        }else if(searchBar == 'ukulélé'){  
          $('#form').attr('action','#uku');
        }else if(searchBar == 'ukulélé électrique'){  
          $('#form').attr('action','#ukulE');
        }else if(searchBar == 'basse électrique'){  
          $('#form').attr('action','#basse');
        }else if(searchBar == 'violon'){  
          $('#form').attr('action','#le_violon');
        }else if(searchBar == 'violoncelle'){  
          $('#form').attr('action','#le_violoncelle');
        }else if(searchBar == 'mandoline'){  
          $('#form').attr('action','#la_mandoline');
        }else if(searchBar == 'tambourin'){  
          $('#form').attr('action','#le_tambourin');
        }else if(searchBar == 'batterie'){  
          $('#form').attr('action','#batterie');
        }else if(searchBar == 'djembé'){  
          $('#form').attr('action','#le_djembe');
        }else if(searchBar == 'maracasses'){  
          $('#form').attr('action','#les_maracas');
        }else if(searchBar == 'trompette'){  
          $('#form').attr('action','#la_trompette');
        }else if(searchBar == 'harmonica'){  
          $('#form').attr('action','#l_harmonica');
        }else if(searchBar == 'cor'){  
          $('#form').attr('action','#le_cor');
        }else if(searchBar == 'flûte'){  
          $('#form').attr('action','#la_flute');
        }else if(searchBar == 'piano'){  
          $('#form').attr('action','#le_piano');
        }else if(searchBar == 'melodica'){  
          $('#form').attr('action','#le_melodica');
        }else if(searchBar == 'violon'){  
          $('#form').attr('action','#le_violon');
        }else if(searchBar == 'synth'){  
          $('#form').attr('action','#synthe');
        }else if(searchBar == 'accordéon'){  
          $('#form').attr('action','#awesomeAccordian');
        }else if(searchBar == 'african thingy'){  
          $('#form').attr('action','#thingy');
        }
      });
    });