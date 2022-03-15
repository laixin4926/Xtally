
<template>
    <div class="nav-wrapper">
        <div class="content">
        <p>Money.vue</p>
        </div>
        <Daohang/>
    </div>
    
</template>

<script lang="ts">
export default{
}

</script>

<style lang="scss" scoped>
    .nav-wrapper{
        border: 1px solid green;
        display:flex;
        flex-direction:column;
        height: 100vh;
    }
    .content{
        overflow: auto;
        flex-grow: 1;
    }
</style>