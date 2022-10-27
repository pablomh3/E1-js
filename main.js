const pizzas = [ {
    id: 1,
    nombre: 'muzzarella',
    precio: 500,
    ingredientes : ['salsa', ' queso muzzarella', ' oregano']
},
{
    id: 2,
    nombre: 'napolitana',
    precio: 700,
    ingredientes : ['salsa', ' muzzarella', ' tomate', ' ajo ']
},
{
    id: 3,
    nombre: 'fugazzetta',
    precio: 700,
    ingredientes : ['salsa', ' muzzarella', ' cebolla']
},
{
    id: 4,
    nombre: 'calabresa',
    precio: 800,
    ingredientes : ['muzarella', ' rodajas de calabresa', ' oregano']
},
{
    id: 5,
    nombre: 'jamón y morrón',
    precio: 700,
    ingredientes : ['salsa', ' muzzarella', ' fetas de jamón', ' morrón']
},
{
    id: 6,
    nombre: 'vegana',
    precio: 700,
    ingredientes : ['tomates fritos', ' queso vegano', ' champignones'] 
}]

//Ejercicio 1: pizzas que tengan un id impar 

const idImpar = pizzas.forEach((pizzas) =>{
    if(pizzas.id % 2 !== 0){
        console.log(`la pizza ${pizzas.nombre} tiene un id impar`)
    }
})

//Ejercicio 2: ¿Hay alguna pizza que valga menos de $600?

let menor600 = pizzas.some((pizzas) => pizzas.precio < 600)
if (menor600 === true){
    console.log("Hay al menos una pizza que cuesta menos que $600")
} else{
    console.log("No hay una pizza que cueste menos que $600")
}

//Ejercicio 3: El nombre de cada pizza con su respectivo precio.

const nombrePrecio = pizzas.forEach((pizzas) => {
    console.log(`La pizza ${pizzas.nombre} cuesta $${pizzas.precio}`)
})

//Ejercicio 4:Todos los ingredientes de cada pizza

let pizzaIngrediente = pizzas.forEach((pizzas) => {
    pizzas.ingredientes.forEach ((ingredientes) =>{
        console.log(`La pizza ${pizzas.nombre} tiene estos ingredientes: ${pizzas.ingredientes}`)
    })
    
})