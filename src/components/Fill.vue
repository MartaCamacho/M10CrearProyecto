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

<script src="../assets/scripts/Fill.js"></script>

<style>
  @import '../assets/styles/css/Fill.css';
</style>