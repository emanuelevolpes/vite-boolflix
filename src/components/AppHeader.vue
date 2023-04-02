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
    <header>
        <div class="nav-container">
            <!-- logo -->
            <img class="logo" src="../../public/img/BoolfliX_-_Logo-removebg-preview.png" alt="logo">


            <!-- navbar -->
            <div class="navbar">
                <a href="#" class="nav-link">
                    <font-awesome-icon class="icon" icon="fa-solid fa-house" />
                    <span class="nav-link-title">Home</span>
                </a>
                <a href="#" class="nav-link">
                    <font-awesome-icon class="icon" icon="fa-brands fa-hotjar" />
                    <span class="nav-link-title">Trending</span>
                </a>
                <a href="#" class="nav-link nav-active">
                    <font-awesome-icon class="icon" icon="fa-regular fa-compass" />
                    <span class="nav-link-title">Explore</span>
                </a>
                <a href="#" class="nav-link">
                    <font-awesome-icon class="icon" icon="fa-solid fa-tv" />
                    <span class="nav-link-title">Movies</span>
                </a>
                <a href="#" class="nav-link">
                    <font-awesome-icon class="icon" icon="fa-regular fa-heart" />
                    <span class="nav-link-title">Favourite</span>
                </a>
            </div>


            <!-- serch box -->
            <div class="search-box">
                <input type="search" @keyup.enter="$emit('search')" placeholder="Inserisci il titolo" id="searchBar" v-model="store.searchKey">
                <button type="button" @click.prevent="$emit('search')">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/common' as *;

.nav-container {
    background-color: $primary_color;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;

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
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        button {
            border: none;
            padding: 5px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }
    }
}

.navbar {
    display: flex;
    gap: 30px;

    .nav-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #b7b7b7;
        cursor: pointer;

        &:hover {
            color: white;
            transition: 0.3s all linear;
            transform: scale(1.1);
        }

        .icon {
            font-size: 1.6rem;
        }

        .nav-link-title {
            font-size: 0.7rem;
        }
    }

    .nav-link.nav-active {
        color: white;
        transition: 0.3s all linear;
        transform: scale(1.3);
    }
}
</style>