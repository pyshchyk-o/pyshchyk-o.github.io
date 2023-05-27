var block = document.querySelectorAll('.banner-panel__content'),
    panel = document.querySelectorAll('.banner-panel');



for(var i = 0; i < block.length; i++){
  block[i].addEventListener('click', function(e){
     var pn = this.querySelector('.banner-panel');

      if(this.classList.contains('active')){
        this.classList.remove('active');
        pn.classList.remove('banner-panel_active');
      }else{
        this.classList.add('active');
        pn.classList.add('banner-panel_active');
    }


});
}
