<template>
    <div>
        <Sidebar/>
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./innerpage/Header";
import Sidebar from "./innerpage/Sidebar";

export default {
    name: 'app',
    components: {
        Header,
        Sidebar
    }    
}
</script>