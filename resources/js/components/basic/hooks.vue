<template>
    <div>
        <h1 ref="myref">Hook Tutorial</h1>
        <p>My name is {{ name }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'lei'
        }
    },
    beforeCreated() {
        console.log(this.name);
    },
    created() {
        console.log('sadasd', this.name);
    },
    mounted() {
        console.log(this.$refs.myref);
    }
}
</script>