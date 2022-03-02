$(()=>{

    function altd(){
        var alt = $('.projeto-d');
        var y = window.scrollY;
        for(let i = 0; i < alt.length; i++){
               var a = alt[i];
               var b = $(a).position();
            if(y >= b.top - 600){
                $(a).addClass("slider-d");
                $(a).removeClass("opaco");
            }else if(y < b.top - 600){
                $(a).removeClass("slider-d");
                $(a).addClass("opaco");
            }
        }
    }

    function alte(){
        var alt = $('.projeto-e');
        var y = window.scrollY;
        for(let i = 0; i < alt.length; i++){
               var a = alt[i];
               var b = $(a).position();
            if(y >= b.top - 600){
                $(a).addClass("slider-e");
                $(a).removeClass("opaco");
            }else if(y < b.top - 600){
                $(a).removeClass("slider-e");
                $(a).addClass("opaco");
            }
        }
    }

    $(document).scroll(()=>{
        var y = window.scrollY;
        if(y > 90){
            
            $('.formacao-border-gradient').css('opacity', 1);
            $('.formacao-border-gradient').css('trasition', '1s');
        }

        if(y < 85){
            $('.formacao-border-gradient').css('opacity', 0);   
            $('.formacao-border-gradient').css('trasition', '1s');
        }

        altd();
        alte();


    })
})