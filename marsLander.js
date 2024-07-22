const N = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
    const landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}

// game loop
while (true) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    const HS = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
    const VS = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
    const F = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
    const R = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
    const P = parseInt(inputs[6]); // the thrust power (0 to 4).

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // Variables iniciales
let x = initialX;  // posición inicial en x
let y = initialY;  // posición inicial en y
let vx = initialVx;  // velocidad inicial en x
let vy = initialVy;  // velocidad inicial en y
let fuel = initialFuel;  // combustible inicial disponible


    // Leer la entrada (puedes usar readline para leer las entradas del juego)
    const inputs = readline().split(' ');
    const terrainX = parseInt(inputs[0]);  // coordenada x del terreno
    const terrainY = parseInt(inputs[1]);  // coordenada y del terreno
    
    // Hacer cálculos para decidir el ángulo y la potencia (aquí puedes colocar tu lógica)
    const angle = calculateAngle(x, y, vx, vy);
    const power = calculatePower(x, y, vx, vy, fuel);
    
    // Actualizar las variables de estado de la nave
    x += vx;
    y += vy;
    vx += 0;  // aquí deberías incluir la lógica para la gravedad y la propulsión
    vy += 0;  // aquí deberías incluir la lógica para la gravedad y la propulsión
    fuel -= 0;  // aquí deberías descontar el combustible usado

    // R P. R is the desired rotation angle. P is the desired thrust power.
    console.log('-20 3');
}
