$(()=>{

    
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

        var altura1 = $('#projeto-1').position();
        var altura2 = $('#projeto-2').position();
        var altura3 = $('#projeto-3').position();
        var altura4 = $('#projeto-4').position();

        if(y >= altura1.top - 600){
            $('#projeto-1').addClass("slider-e");
            $('#projeto-1').removeClass("opaco");
        }else{
            $('#projeto-1').removeClass("slider-e");
            $('#projeto-1').addClass("opaco");
        }
        if(y >= altura2.top -600){
            $('#projeto-2').addClass("slider-d");
            $('#projeto-2').removeClass("opaco");
        }else{
            $('#projeto-2').removeClass("slider-d");
            $('#projeto-2').addClass("opaco");
        }

        if(y >= altura3.top -600){
            $('#projeto-3').addClass("slider-e");
            $('#projeto-3').removeClass("opaco");
        }else{
            $('#projeto-3').removeClass("slider-e");
            $('#projeto-3').addClass("opaco");
        }
        if(y >= altura4.top -600){
            $('#projeto-4').addClass("slider-d");
            $('#projeto-4').removeClass("opaco");
        }else{
            $('#projeto-4').removeClass("slider-d");
            $('#projeto-4').addClass("opaco");
        }
    })
})