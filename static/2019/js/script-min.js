document.addEventListener("DOMContentLoaded",function(){document.querySelector(".copy-to-clipboard").addEventListener("click",function(e){e.preventDefault(),function(e){const t="_hiddenCopyText_",n="INPUT"===e.tagName||"TEXTAREA"===e.tagName;var o,c;if(n)a=e,o=e.selectionStart,c=e.selectionEnd;else{if(!(a=document.getElementById(t))){var a=document.createElement("textarea");a.style.position="absolute",a.style.left="-9999px",a.style.top="0",a.id=t,document.body.appendChild(a)}a.textContent=e.textContent}var d,i=document.activeElement;a.focus(),a.setSelectionRange(0,a.value.length);try{d=document.execCommand("copy")}catch(e){d=!1}i&&"function"==typeof i.focus&&i.focus(),n?e.setSelectionRange(o,c):a.textContent=""}(document.querySelector(".copy-email")),this.text="email has been copied!"})});