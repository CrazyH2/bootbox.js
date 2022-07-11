 ///////////////////////////////////////////////////////////////////////////////////////
 //                                                                                   //
 //  ██████   ██████   ██████  ████████ ██████   ██████  ██   ██          ██ ███████  //
 //  ██   ██ ██    ██ ██    ██    ██    ██   ██ ██    ██  ██ ██           ██ ██       //
 //  ██████  ██    ██ ██    ██    ██    ██████  ██    ██   ███            ██ ███████  //
 //  ██   ██ ██    ██ ██    ██    ██    ██   ██ ██    ██  ██ ██      ██   ██      ██  //
 //  ██████   ██████   ██████     ██    ██████   ██████  ██   ██      █████  ███████  //
 //                                                                                   //
 ///////////////////////////////////////////////////////////////////////////////////////

 /////////////////////////////////////////////////
 //                                             //
 //  © Copyright 2022 CrazyH                    //
 //  This file was originally made by CrazyH    //
 //  Do not rebrand if you are distributing it  //
 //  © Copyright 2022 CrazyH                    //
 //                                             //
 /////////////////////////////////////////////////





 //  Setting Up Sleep Function

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


 //  Setting Up MSG
console.clear()
sleep(0.001)


 //  Import Header MSG
var msg = `%c
██████   ██████   ██████  ████████ ██████   ██████  ██   ██          ██ ███████ 
██   ██ ██    ██ ██    ██    ██    ██   ██ ██    ██  ██ ██           ██ ██      
██████  ██    ██ ██    ██    ██    ██████  ██    ██   ███            ██ ███████ 
██   ██ ██    ██ ██    ██    ██    ██   ██ ██    ██  ██ ██      ██   ██      ██ 
██████   ██████   ██████     ██    ██████   ██████  ██   ██      █████  ███████ 
                                                                                
                                                                                
LOADING ALL IMPORTS AND FILES FROM BOOTBOXJS ...
`
console.info(msg, 'color: #D81A6D; font-weight: bold; font-family: monospace; text-align: center;');


 //  Setting Up File Appender

function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}


 //  Importing Bootbox.js Files

 //  BOOTSTRAP.MIN.CSS
include('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0-beta1/css/bootstrap.min.css');
 //  JQUERY.MIN.JS
include('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
 //  BOOTSTRAP.MIN.JS
include('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0-beta1/js/bootstrap.min.js');
 //  BOOTBOX.MIN.JS
include('https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.5.3/bootbox.min.js');


 //  Import Footer MSG
var msg = `%c
 /////////////////////////////////////////////////
 //                                             //
 //  © Copyright 2022 CrazyH                    //
 //  This file was originally made by CrazyH    //
 //  Do not rebrand if you are distributing it  //
 //  © Copyright 2022 CrazyH                    //
 //                                             //
 /////////////////////////////////////////////////

`
console.info(msg, 'color: #D81A6D; font-weight: bold; font-family: monospace; text-align: center;');
