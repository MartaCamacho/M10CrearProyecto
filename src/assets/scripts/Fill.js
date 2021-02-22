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