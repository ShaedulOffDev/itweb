let $ = e => document.querySelector(e);
let $$ = es => document.querySelector(es);

window.addEventListener('DOMContentLoaded', (e) => {
    window.addEventListener('scroll', (e) => {
        if(window.scrollY < 1000){
            if($('#navPC').classList.contains('navFixClose')){
                $('header').style.paddingTop = 0;
                $('#navPC').classList.remove('navFixClose');
                $('#navMob').classList.remove('navFixClose');
            }
            if($('#toTop').classList.contains('hide')){
                $('#toTop').classList.remove('hide');
                $('#toTop').classList.add('d-none');
            }
        }
        if(window.scrollY > 2000){
            if($('#navPC').classList.contains('navFixClose')){
                $('#navPC').classList.remove('navFixClose');
            }
            if($('#navMob').classList.contains('navFixClose')){
                $('#navMob').classList.remove('navFixClose');
            }
            $('#toTop').classList.add('show');
            $('#toTop').classList.remove('d-none');
            if($('#toTop').classList.contains('hide')){
                $('#toTop').classList.remove('hide');
            }
            if($('a').clientWidth > 15){
                $('header').style.paddingTop = $('#navMob').clientHeight + 'px';
            }else{
                $('header').style.paddingTop = $('#navPC').clientHeight + 'px';
            }
            $('#navPC').classList.add('navFix');
            $('#navMob').classList.add('navFix');
        }else if(window.scrollY < 2000){
            if($('#navPC').classList.contains('navFix')){
                $('#navPC').classList.add('navFixClose');
                $('#navPC').classList.remove('navFix');
            }
            if($('#navMob').classList.contains('navFix')){
                $('#navMob').classList.add('navFixClose');
                $('#navMob').classList.remove('navFix');
            }
            if($('#toTop').classList.contains('show')){
                $('#toTop').classList.add('hide');
                $('#toTop').classList.remove('show');
            }
        }
    })
})