<template>
    <div>
        <h1>the number is {{ counter }}</h1>
        <button @click="updateCounter(1)">Increase</button>
        <button @click="updateCounter(-1)">Decrease</button>
        <br/>
        <br/>

        <div v-if="blogs.length">
            <div v-for="(blog, i) in blogs" :key="i">
                <h1>{{ blog.title }}</h1>
                <p>{{ blog.post }}</p>
            </div>
        </div>
        <br/>
        <br/>

        <div>
            <h1 v-if="showItem">show this item if "showItem" is true</h1>
            <h1 v-else>show this item if "showItem" is false</h1>
        </div>

        <button @click="changeItem">Change showItem</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            views: 0,
            blogs: [],
            showItem: false,
        }
    },
    methods: {
        updateCounter(number){
            this.views += number;
        },
        changeItem() {
            this.showItem = !this.showItem;
            console.log(this.showItem);
        }
    },
    created(){
        // call the server to get views of this blog post..
        this.counter = 100;
        // get the blog post
        let post = [
            { title: 'Sample title 1', post: 'sample post 1', id: 1 },
            { title: 'Sample title 2', post: 'sample post 2', id: 2 },
            { title: 'Sample title 3', post: 'sample post 3', id: 3 },
            { title: 'Sample title 4', post: 'sample post 4', id: 4 },
            { title: 'Sample title 5', post: 'sample post 5', id: 5 },
            { title: 'Sample title 6', post: 'sample post 6', id: 6 },
        ];

        this.blogs = post;
    }
}
</script>