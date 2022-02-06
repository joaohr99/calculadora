function calcular(primeiroNumero,segundoNumero){
    primeiroNumero = parseFloat(document.getElementById("primeiroNumero").value)
    segundoNumero = parseFloat(document.getElementById("segundoNumero").value)

    selector = document.querySelector('input[name="selector"]:checked').value
    calculo = eval(primeiroNumero + selector + segundoNumero)
    if(Number.isNaN(calculo)){
         document.getElementById("resultado").innerHTML = "Insira um divisivel válido."
        } else {
          document.getElementById("resultado").innerHTML = `O resultado é ${eval(calculo)}.`
        }
    }

       // switch(selector){
    //     case "+":   
    //         calculo = (primeiroNumero + segundoNumero);
    //         document.getElementById("resultado").innerHTML = `O resultado é ${calculo}.`
    //         break
    //     case "-":
    //         calculo = (primeiroNumero - segundoNumero);
    //         document.getElementById("resultado").innerHTML = `O resultado é ${calculo}.`
    //         break
    //     case "*":
    //          calculo = (primeiroNumero * segundoNumero);
    //          document.getElementById("resultado").innerHTML = `O resultado é ${calculo}.`
    //          break
    //      case "/":
    //          calculo = Math.round(primeiroNumero / segundoNumero);
    //          if(Number.isNaN(calculo)){
    //             document.getElementById("resultado").innerHTML = "Insira um divisivel válido."
    //          } else {
    //          document.getElementById("resultado").innerHTML = `O resultado é ${calculo}.`
    //      }
    //          break
    // }