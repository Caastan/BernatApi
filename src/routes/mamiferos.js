var router = require('express').Router()
const mamiferos = new Map();

mamiferos.set("1", "Perro");
mamiferos.set("2", "Ciervo");
mamiferos.set("3", "Gato");
mamiferos.set("4", "Rata");
mamiferos.set("5", "Oso");
mamiferos.set("6", "Vaca");
mamiferos.set("7", "Conejo");
mamiferos.set("8", "Oveja");
mamiferos.set("9", "Panda");
mamiferos.set("10", "Tigre");


router.get('/:id', function(req, res) {
var nombre = mamiferos.get(req.params.id);

if (nombre==null)
{ res.json({ message: "No existe el mamifero con id " + req.params.id });
}
  else {res.json({ name: nombre })
}})

router.get('/', function(req, res) {
    array = Array.from(mamiferos, ([id, name]) => ({ id, name }));
    console.log(array);
    res.json(array)
})

router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir un mamifero' })
})

router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el mamifero con id ' + req.params.id })
})

router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el mamifero con id ' + req.params.id})
})


module.exports = router