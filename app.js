new Vue({
    el: '#app',

    data: {
        product: {
            name: '',
            price: '',
            description: '',
            dateReady: '',
            quantityReady: ''
        },
        products: []
    },

    filters: {
        dollar: function (value) {
            return "$ " + value;
        },
        euro: function (value) {
            return "€ " + value;
        }
    },

    methods: {
        addProduct: function () {
            if (this.product.name && this.product.price) {
                this.products.push(this.product);
                this.product = {
                    name: '',
                    price: '',
                    description: '',
                    dataReady: '',
                    quantityReady: ''
                };
            }
        },

        deleteProduct: function (index) {
            this.products.splice(index, 1);
        }
    }
});