document.querySelector('.change_mode').addEventListener('click',function(){
    document.querySelector('body').classList.toggle('background_show')
    document.querySelector('.text_mode_change').classList.toggle('show')
    document.querySelector('.change_mode').classList.toggle('show')
    document.querySelector('#about').classList.toggle('about_text_show')
    document.querySelector('.drop_down_menu').classList.toggle('list_show')


})

document.querySelector('.search_btn').addEventListener('click',function(){
    document.querySelector('.search_bar').classList.toggle('search_bar_show')
})

document.querySelector('.list_btn').addEventListener('click',function(){
    document.querySelector('#drop_down').classList.toggle('list_show')
})



document.querySelector('.registration_btn').addEventListener('click',function(){
    document.querySelector('#registration').classList.toggle('registration_show')
})