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
        
    })
})