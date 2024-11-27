<!-- SCRIPT -->
<script setup lang="ts">
    // Importações
    import {onMounted, ref} from 'vue'

    // Váriavel para armazenar o termo da filtragem
    let filterTerm = ref<string>('')

    // Váriavel para exibir o carregamento
    let carregamento = ref<boolean>(true)

    // Vetor
    let pokemons: any[] = ref([])

    // onMounted
    onMounted(async () => {
        for(let index = 1; index <= 151; index++) {
            let response = await fetch('https://pokeapi.co/api/v2/pokemon/'+index)
            let pokemon = await response.json()

            pokemons.value.push(pokemon)
        }

        carregamento.value = false
    })

    // Função para filtrar os Pokémons
    function filterPokemons() {
        return pokemons.value.filter(obj => obj.name.toLowerCase().includes(filterTerm.value.toLowerCase()))
    }
</script>

<!-- HTML -->
<template>
    <div class="carregamento" v-if="carregamento">
        <img src="../complements/pokeball.gif" alt="loading">
    </div>

    <main class="container" v-if="!carregamento">
        <!-- FILTRAGEM -->
        <div class="row">
            <div class="col-12">
                <input type="text" placeholder="Qual pokemon você está procurando ?" class="form-control search" v-model="filterTerm">
                <p v-if="filterPokemons().length === 0">Não foi encontrado nenhum Pokémon.</p>
                <p v-else-if="filterPokemons().length === 1">Foi encontrado apenas 1 Pokémon.</p>
                <p v-else>Foram encontrados {{ filterPokemons().length }} Pokémons.</p>
            </div>
        </div>

        <!-- LISTAGEM -->
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="pokemon in filterPokemons()">
                <div class="card" :class="pokemon.types[0].type.name">
                    <img :src="pokemon.sprites.other.home.front_default" />
                    <p>{{ pokemon.name }}</p>
                </div>
            </div>
        </div>
    </main>
</template>