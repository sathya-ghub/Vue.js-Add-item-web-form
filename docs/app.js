//Custom component iterating over products array
Vue.component('sathya-list', {
    template:
    '<ul>' +
    '<li class="listItem">' +
    '<h3>{{item.name}}</h3>' +
    '<h4>{{item.price|dollar}}</h4>' +
    '<p class="text" v-if="item.description">Description: {{item.description}}</p>' +
    '<p class="text">Available after: {{item.dateReady | date}}</p>' +
    '<p class="text">Quantity available: {{item.quantityReady}}</p>' +
    '<div class="form-group">' +
    '<button class="btn btn-sm btn-danger" v-on:click="deleteItem()">Delete</button>' +
    '</div>' +
    '</li>' +
    '</ul>',

    filters: {
        dollar: function (value) {
            return "$ " + value;
        },
        euro: function (value) {
            return "€ " + value;
        },
        date: function (value) {
            return moment(value).format("dddd, MMM Do YYYY");
        }
    },

    methods: {
        deleteItem:function(index){
            this.$parent.deleteProduct(index);
        }
    },

    props: ['item']

});

new Vue({
    el: '#app',

    data: {
        product: {
            name: '',
            price: '',
            description: '',
            dateReady: '',
            quantityReady: '',
            index:''
        },
        products: []
    },

    //Implementing a custom filter for currency and date
    filters: {
        dollar: function (value) {
            return "$ " + value;
        },
        euro: function (value) {
            return "€ " + value;
        },
        date: function (value) {
            return moment(value).format("dddd, MMM Do YY");
        }
    },

    methods: {
        //Add all properties of the product in currenct vue instance
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

        //Deletes the product from the array of products
        deleteProduct: function (index) {
            this.products.splice(index, 1);
        }
    }
});