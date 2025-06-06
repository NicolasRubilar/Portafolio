//Modito oscurito
const toggle =document.getElementById('darkModeToggle');

if (localStorage.getItem('dark-mode')==='true'){
    document.body.classList.add('dark-mode');
    toggle.checked=true;
}

toggle.addEventListener('change',()=>{
    const isDark =toggle.checked;
    document.body.classList.toggle('dark-mode',isDark);
    localStorage.setItem('dark-mode',isDark)
})