let menu = ''
do {
    menu = prompt('Calculadora Geométrica\n\n' +
    '1 - Calcular Área do Triangulo\n' + 
    '2 - Calcular Área do Retangulo\n' + 
    '3 - Calcular Área do Quadrado\n' + 
    '4 - Calcular Área do Trapézio\n' + 
    '5 - Calcular Área do Circulo\n' +
    '6 - Sair')


   
    switch (menu){
        case '1':
            function areaTriangulo() {
                let baseT = parseFloat(prompt('Insira o valor da BASE do triangulo:')) 
                let alturaT = parseFloat(prompt('Insira o valor da ALTURA do triangulo:'))
                let areaT = (baseT * alturaT) /2
                alert('A área do triangulo é: ' + areaT)
            }
            areaTriangulo()
            break
        case '2':
            function areaRetangulo() {
                let baseR = parseFloat(prompt('Insira o valor da BASE do retângulo:'))
                let alturaR = parseFloat(prompt('Insira o valor da ALTURA do retângulo:'))
                let areaR = (baseR * alturaR)
                alert('A área do retâangulo é: ' + areaR)
            }
            areaRetangulo()
            break
        case '3':
            function areaQuadrado() {
                let ladoQ = parseFloat(prompt('Insira o valor do LADO do quadrado:'))
                let areaQ = (ladoQ * ladoQ)
                alert('A área do quadrado é: ' + areaQ)
            }
            areaQuadrado()
            break
        case '4':
            function areaTrapezio() {
                let baseMaior = parseFloat(prompt('Insira o valor da BASE MAIOR do trapézio:'))
                let baseMenor = parseFloat(prompt('Insira o valor da BASE MENOR do trapézio:'))
                let alturaTr = parseFloat(prompt('Insira o valor da ALTURA do trapézio:'))
                let areaTr = (baseMaior + baseMenor) * alturaTr / 2
                alert('A área do trapézio é: ' + areaTr)
            }
            areaTrapezio()
            break
        case '5':
            function areaCirculo() {
                let raio = parseFloat(prompt('Insira o valor do RAIO do círculo:'))
                let areaC = Math.PI * raio * raio
                alert('A área do circulo é: ' + areaC.toFixed(2))
            }
            areaCirculo()
            break
        case '6':
            alert('Encerrando..')
            break
        default:
            alert('[ERRO] Opção Invalida!')
    }
} while (menu !== '6')