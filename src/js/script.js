var app = new Vue({
    el: '.container',
    data: {
        header: 'Камень, ножницы, бумага',
        element: '',
        enemy: '???',
        result: '',
    },
    methods: {
        knb: function() {
            let random = Math.round(1 - 0.5 + Math.random() * (3 - 1 + 1));
            switch(random) {
                case 1: 
                    this.enemy = 'Камень';
                    if(this.element == 1) this.result = 'Ничья';
                    if(this.element == 2) this.result = 'Проигрыш';
                    if(this.element == 3) this.result = 'Победа';
                    break;
                case 2: 
                    this.enemy = 'Ножницы';
                    if(this.element == 1) this.result = 'Победа';
                    if(this.element == 2) this.result = 'Ничья';
                    if(this.element == 3) this.result = 'Проигрыш';
                    break;
                case 3: 
                    this.enemy = 'Бумага';
                    if(this.element == 1) this.result = 'Проигрыш';
                    if(this.element == 2) this.result = 'Победа';
                    if(this.element == 3) this.result = 'Ничья';
                    break;
            }
        },
    },
});