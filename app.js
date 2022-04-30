// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000
//Path inicial, responderá a la url localhost:3000
const explorer1 = {id:1,name:'Octavio'};
const explorer2 = {id:2,name:'Tavo'};
const explorer3 = {id:3,name:'Tavusia'};
const explorer4 = {id:4,name:'Tavolordk'};
const explorers = [explorer1,explorer2,explorer3,explorer4];
//Obtiene todos los explorers por petición GET
app.get('/v1/explorers',(req,res)=>{
    console.log(`Api explorers GET ALL requests ${new Date()}`);
    res.status(200).json(explorers);
});
//Obtiene un explorer por medio del id
app.get('/v1/explorers/:id',(req,res)=>{
    console.log(`Api explorers GET ALL requests ${new Date()}`);
    console.log(`Getting explorer with id ${req.params.id}`);
    res.status(200).json(explorers.find(e=>e.id==req.params.id));
});
//Agregar nuevo explorer con POST
app.post('/v1/explorers',(req,res)=>{
    console.log(`Api explorers POST request ${new Date()}`);
    const requestBody = req.body;
    explorers.push(requestBody);
    res.status(201).json({message:"Created"});
});
//Actualizar un explorer por id con PUT
app.put('/v1/explorers/:id',(req,res)=>{
    console.log(`Api explorers PUT request ${new Date()}`);
    console.log(`Update explorer with id ${req.params.id}`);
    const requestBody = req.body;
   for(let i =0;i<explorers.length;i++){
       if(explorers[i].id==req.params.id){
           explorers[i].id=requestBody.id;
           explorers[i].name=requestBody.name;
       }else{
           console.log('No existe el usuario con ese Id');
       }
   }
    res.status(200).json({message:"Updated"});
});
//Eliminar un elemento con DELETE
app.delete('/v1/explorers/:id',(req,res)=>{
    console.log(`Api explorers DELETE request ${new Date()}`);
    console.log(`Delete explorer with id ${req.params.id}`);
    const requestBody = req.body;
   for(let i =0;i<explorers.length;i++){
       if(explorers[i].id==req.params.id){
           explorers.splice(i,1);
       }else{
           console.log('No existe el usuario con ese Id');
       }
   }
    res.status(200).json({message:"Deleted"});
});
// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})