const app = Vue.createApp({
    data(){
        return{
            showBooks : true,
            age : 0,
            x : '0',
            y : '0',
            url: "https://google.com/",

            books:[
                { title: 'First Book', author: 'First person', sold: "50000", urfav: true},
                { title: 'Second Book', author: 'Second person', sold: "24000", urfav: false},
                { title: 'Third Book', author: 'Third person', sold: "12300", urfav: true}
            ]
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        },
        toggleBooks(){
            this.showBooks = !this.showBooks
        },

        toggleFav(e){
            e.urfav = !e.urfav
        },

        handleEvent(e, data){
            if(data) {console.log(data)}
            else {console.log(e)}
        },
        moveMouse(e){
            this.x = e.offsetX,
            this.y = e.offsetY
        }

    },

    // Property that dependent to the data
    computed: {
        filteredBooks(){
            // callback function for each item inside the array, if true we keep the item in the filtered array
            return this.books.filter((book) => book.urFav)
        }
    }
})

app.mount('#app')