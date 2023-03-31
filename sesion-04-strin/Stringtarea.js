// strings-cadenas de caracteres

nombre = 'Catriel'
apellido = 'Escobar'

estudiante = `${nombre} ${apellido}`

estudianteMayus = estudiante.toUpperCase()

console.log(estudianteMayus)

estudianteMinus = estudiante.toLowerCase()

console.log(estudianteMinus)


numeroDeCaracteresEspacio= estudiante.length

console.log(numeroDeCaracteresEspacio)

primerLetraNombre = estudiante[0]

console.log(primerLetraNombre)

ultimaLetraApellido = estudiante.slice(-1)

console.log(ultimaLetraApellido)


estudianteSinEspacio= estudiante.replace(/ /g,'')

console.log(estudianteSinEspacio)



console.log(estudiante.includes(nombre))