
            var i = 0, logo;
            logo = "Portfolio."
            
            function typing() {
                if(i < logo.length){
                document.getElementById("logo").innerHTML += logo.charAt(i);
                i++;
                setTimeout(typing, 150);
                }
            
            }
            typing();
            
            
       
