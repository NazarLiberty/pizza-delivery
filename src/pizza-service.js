export default class PizzaService {
    pizzas = [
        {
            name: "Чізбургер-Піцца",
            img: './chizburger-pizza.png',
            markup: {
                thin: 0,
                classic: 30,
                small: 0,
                medium: 15,
                large: 45,
            },
            settings: {
                size: 'small',
                type: 'thin'
            },
            price: 101,
            totalPrice: 101,
            id: 1,
            class: 'meat',
            popularity: 0.3
        },
        {
            name: "Сирна",
            img: './cheeze.png',
            markup: {
                thin: 0,
                classic: 26,
                small: 0,
                medium: 20,
                large: 38,
            },
            settings: {
                size: 'small',
                type: 'thin',
            },
            price: 99,
            totalPrice: 99,
            id: 2,
            class: 'vegetable',
            popularity: 0.5,
        },
        {
            name: "Криветки по-азіатськи",
            img: './shrimp.png',
            markup: {
                thin: 0,
                classic: 41,
                small: 0,
                medium: 29,
                large: 65,
            },
            settings: {
                size: 'small',
                type: 'thin'
            },
            price: 95,
            totalPrice: 95,
            id: 3,
            class: 'meat',
            popularity: 0.99,
        },
        {
            name: "Сирне курча",
            img: './cheeze-chicken.png',
            markup: {
                thin: 0,
                classic: 30,
                small: 0,
                medium: 15,
                large: 25,
            },
            settings: {
                size: 'small',
                type: 'thin'
            },
            price: 95,
            totalPrice: 95,
            id: 4,
            class: 'spicy',
            popularity: 0.6
        },
    ]
    getPizzas() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.pizzas), 600)
        })
    }
}