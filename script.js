// Добавляем цвет на person
let helpName = document.querySelector('.help__name');
let svgName = document.querySelector('.help__form-name');
helpName.onfocus = function(){
    svgName.classList.add('active');
};
helpName.onblur = function(){
    svgName.classList.remove('active');
};

// Добавляем цвет на phonee
let helpPhone = document.querySelector('.help__phone');
let svgPhone = document.querySelector('.help__form-phone');
helpPhone.onfocus = function() {
    svgPhone.classList.add('active');
};
helpPhone.onblur = function() {
    svgPhone.classList.remove('active');
}