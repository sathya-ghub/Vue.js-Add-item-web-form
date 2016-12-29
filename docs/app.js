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
    '<button class="btn btn-sm btn-danger" id="list" v-on:click="deleteItem()">Delete</button>' +
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
        deleteItem: function (index) {
            this.$parent.deleteProduct(index);
        }
    },

    props: ['item']

});

//Vue instance
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

        products: [],

        userInfo: []
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
            if (this.product.name && this.product.price > 0) {
                this.products.push(this.product);
                this.product = {
                    name: '',
                    price: '',
                    description: '',
                    dataReady: '',
                    quantityReady: ''
                };
            }
            else {
                alert("Enter an item name and price");
            }
        },

        //Deletes the product from the array of products
        deleteProduct: function (index) {
            this.products.splice(index, 1);
        },

        //sample restapi call from a dummy endpoint
        getRest: function () {
            axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    id: 5
                }
            }).then(function (response) {
                this.userInfo = response.data[0];
                console.log("User's title is " + this.userInfo.title +" and body is "+ this.userInfo.body);
            });
        }
    }
});