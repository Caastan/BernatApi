var router = require('express').Router()
const peces = new Map();

peces.set("1", "Besugo");
peces.set("2", "Caballa");
peces.set("3", "Merluza");
peces.set("4", "Pez espada");
peces.set("5", "Sardina");
peces.set("6", "Salmón");
peces.set("7", "Congrio");
peces.set("8", "Bacalao");
peces.set("9", "Lenguado");
peces.set("10", "Puye");


router.get('/:id', function(req, res) {
var nombre = peces.get(req.params.id);

if (nombre==null)
{ res.json({ message: "No existe el pez con id " + req.params.id });
}
  else {res.json({ name: nombre })
}})

router.get('/', function(req, res) {
    array = Array.from(peces, ([id, name]) => ({ id, name }));
    console.log(array);
    res.json(array)
})

router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir un pez' })
})

router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el pez con id ' + req.params.id })
})

router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el pez con id ' + req.params.id})
})


module.exports = router