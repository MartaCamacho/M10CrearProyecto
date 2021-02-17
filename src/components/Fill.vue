<template>
  <div class="Fill">
    <ul>
        <li v-for="item in items" v-bind:key="item">
            {{ item.name }} 
            <button @click="item.value++">{{item.value}}</button>
        </li>
    </ul>
    <p>El nombre del hijo que viene por props del padre es {{ name }}</p>
  </div>
</template>

<script>
export default {
    props: ['name'],
    data() {
        return {
            nombre: 'Este es el name de hijo',
            items: [
                {name: "llave inglesa", value: 0}, 
                {name: "rueda", value: 0}, 
                {name: "destornillador", value: 0}],
        }
    }
}
</script>

<style scoped>
ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
    padding: 2rem;
    background-color: grey;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    border-radius: 10px;
}

li button {
    margin-top: 20px;
    width: 40px;
    border-radius: 10px;
    padding: 10px;
    background-color: green;
    color: white;
}
</style>