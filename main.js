
 // DESAFIO ENTREGABLE N°1 
 for (let i=0; i<5; i++){
                    let Tareasarealizar =  prompt("¿Que hay que hacer hoy?")
                    let Horadetareas = prompt ("¿A que hora se realiza?")
                
                    if(Tareasarealizar=="esc"/*saltea pero  no corta el loop */){
                    break;
                   }
                   result.innerHTML += (Horadetareas) + " " +  (Tareasarealizar) + "<br>";
}

