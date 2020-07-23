const fs = require('fs');
const color = require('colors')

const listarTabla = (base,limite) => {

console.log('=============================='.green)
console.log('Tabla de Multiplicar'.green)
console.log('=============================='.green)

     return new Promise((resolve,reject)=>{
     let data =''

          if(!Number(base) && !isNaN(limite)){
          reject('El valor introducido no es un numero')
          return
     }
     
         
          for ( i = 0; i <= limite ; i++) {
              
             data +=`${base} * ${i} = ${base*i}\n`
               
          }
          
         resolve(data)
     
})
}

 const crearArchivo = (base,limite ) => {
      
     return new Promise((resolve,reject)=>{
     
          if(!Number(base)){
          reject('El valor introducido no es un numero')
          return
     }
     
          let data='';
          for (let i = 0; i <= limite ; i++) {
              
             data +=`${base} * ${i} = ${base*i}\n`
               
          }
          
          fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`,data,(err)=>{
               if(err) 
               reject(err)
               else 
               resolve(`tabla ${base} al ${limite}.txt`)
          })
     })
}


module.exports = {
     crearArchivo,
     listarTabla
}