// Entrada de datos número (N)
// Determinar array con interrvalo N a N+50
// crear contador que vuelque en un array
// Recorrer Array con for
// Crear contador que sume 1++ cada vez que coincida - if (contador % 2 !== 0)
// Volcar en un nuevo array
// console log nuevo contador


function cuentaImpares (N){
for (let x=N; x <=N+50; x++) {
    if (N % 2 !== 0) {
        return N
    }
  }
}

console.log(cuentaImpares (20))