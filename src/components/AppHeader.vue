<script>
import { store } from '../store'
export default {
    name: 'Header',
    data() {
        return {
            store
        }
    },
    emits: ['search']
}
</script>

<template>
    <div class="nav-container">
        <!-- logo -->
        <img class="logo" src="../../public/img/BoolfliX_-_Logo-removebg-preview.png" alt="logo">
        <!-- serch box -->
        <div class="search-box">
            <input type="search" placeholder="Inserisci il titolo" id="searchBar" v-model="store.searchKey">
            <button type="button" @click.prevent="$emit('search')">Cerca</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/common' as *;
.nav-container {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $primary-color;

    .logo {
        width: 300px;
        height: 70px;
        object-fit: cover;
        display: inline-block;
        margin-bottom: 6px;
    }

    .search-box {
        input {
            border: none;
            padding: 5px;
        }

        button {
            border: none;
            padding: 5px;
        }
    }
}
</style>