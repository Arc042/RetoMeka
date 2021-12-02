
 


var DIARIO = "diario";
        var SEMANAL = "semanal";
        var QUINCENAL = "quincenal";
        var MENSUAL = "mensual";
        var BIMESTRAL = "bimestral";
        var TRIMESTRAL = "trimestral";
        var CUATRIMESTRAL = "cuatrimestral";
        var SEMESTRAL = "semestral";
        var ANUAL = "anual";
        
        function getTasa(tasa1, tasa_tipo2, periodo2) {
            if (tasa_tipo2 == ANUAL) { tasa1 = tasa1 / 12 }
            tasa1 = tasa1 / 100.0
            if (periodo2 == DIARIO) { tasa1 = tasa1 / 30.4167 };
            if (periodo2 == SEMANAL) { tasa1 = tasa1 / 4.34524 };
            if (periodo2 == QUINCENAL) { tasa1 = tasa1 / 2 };
            if (periodo2 == MENSUAL) { };
            if (periodo2 == BIMESTRAL) { tasa1 = tasa1 * 2 };
            if (periodo2 == TRIMESTRAL) { tasa1 = tasa1 * 3 };
            if (periodo2 == CUATRIMESTRAL) { tasa1 = tasa1 * 4 };
            if (periodo2 == SEMESTRAL) { tasa1 = tasa1 * 6 };
            if (periodo2 == ANUAL) { tasa1 = tasa1 * 12 };
            return tasa1;
        }
        
        function getValorDeCuotaFija(monto1, tasa1, cuotas1, periodo2, tasa_tipo2) {
            tasa1 = getTasa(tasa1, tasa_tipo2, periodo2);
             valor2 = monto1 *( (tasa1 * Math.pow(1 + tasa1, cuotas1)) / (Math.pow(1 + tasa1, cuotas1) - 1) );
            return valor2.toFixed(2);
        }
        
        function getAmortizacion(monto1, tasa1, cuotas1, periodo2, tasa_tipo2) {
            var valor_de_cuota1 = getValorDeCuotaFija(monto1, tasa1, cuotas1, periodo2, tasa_tipo2);
            var saldo_al_capital1 = monto1;
            //var Deuda = saldo_al_capital-residual;
            var items2 = new Array();
            valor_de_cuota1=parseFloat(valor_de_cuota1);
        // console.log("saldo_al_capital");
        // console.log(saldo_al_capital)
            for (i=0; i < cuotas1; i++) {
                interes1 = saldo_al_capital1 * getTasa(tasa1, tasa_tipo2, periodo2);
                // console.log("valor_de_cuota");
                // console.log(valor_de_cuota);

                abono_al_capital1 = valor_de_cuota1 - interes1;
                // saldo_al_capital -= abono_al_capital;
                IVA = (valor_de_cuota1*21)/100;
                // console.log("1")
               
                // console.log(abono_al_capital)
                saldo_al_capital1=parseFloat(saldo_al_capital1);
                abono_al_capital1=parseFloat(abono_al_capital1);
                 Deuda = (saldo_al_capital1 - abono_al_capital1);
                 Deuda=Deuda.toFixed(2);
                 IVA=parseFloat(IVA);
                cuotaT= valor_de_cuota1 + IVA;
                // console.log(valor_de_cuota1)
                // console.log(IVA)
                // console.log(cuotaT)
                numero1 = i+1;
                
                interes1 = interes1.toFixed(2);
                abono_al_capital1 = abono_al_capital1.toFixed(2);
                saldo_al_capital1 = saldo_al_capital1.toFixed(2);
        
                item2 = [numero1, valor_de_cuota1, IVA, cuotaT, interes1, abono_al_capital1, Deuda];
                items2.push(item2);
                saldo_al_capital1=Deuda;
            }
            return items2;
        }
        
        
        function setMoneda(num) {
            num = num.toString().replace(/\$|\,/g, '');
            if (isNaN(num)) num = "0";
            sign = (num == (num = Math.abs(num)));
            num = Math.floor(num * 100 + 0.50000000001);
            cents = num % 100;
            num = Math.floor(num / 100).toString();
            if (cents < 10) cents = "0" + cents;
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
            return (((sign) ? '' : '-') + '$' + num + ((cents == "00") ? '' : '.' + cents));
        }
        
        
        
        
        
                function calcularLeasing() {
            
                    var monto1 = document.getElementById("input_monto1").value;
                    var cuotas1 = document.getElementById("input_cuotas1").value;
                    var tasa1 = document.getElementById("input_tasa1").value;
                    if (!monto1) {
                        alert('Indique el monto');
                        return;
                    }
                    if (!cuotas1) {
                        alert('Indique las cuotas');
                        return;
                    }
                    if (!tasa1) {
                        alert('Indique la tasa');
                        return;
                    }
                    if (parseInt(cuotas1) < 0) {
                        alert('Las cuotas deben ser de 0 en adelante');
                        return;
                    }
                    var select_periodo2 = document.getElementById("select_periodo2");
                    periodo2 = select_periodo2.options[select_periodo2.selectedIndex].value;
                    var select_tasa_tipo2 = document.getElementById("select_tasa_tipo2");
                    tasa_tipo2 = select_tasa_tipo2.options[select_tasa_tipo2.selectedIndex].value;
                    var items2 = getAmortizacion(monto1, tasa1, cuotas1, periodo2, tasa_tipo2);
                    var tbody1 = document.getElementById("tbody_2");
                    tbody1.innerHTML = "";
          
        
        if (parseInt(cuotas1) > 3000) { alert("Ha indicado una cantidad excesiva de cuotas, porfavor reduzcala a menos de 3000"); return; }
        
        
        
                    for (i = 0; i < items2.length; i++) {
                        item2 = items2[i];
                        tr2 = document.createElement("tr");
                        for (e = 0; e < item2.length; e++) {
                            value2 = item2[e];
                            if (e > 0) { value2 = setMoneda(value2); }
                            td2 = document.createElement("td");
                            textCell2 = document.createTextNode(value2);
                            td2.appendChild(textCell2);
                            tr2.appendChild(td2);
                        }
                        tbody1.appendChild(tr2);
                    }
                    // var div1 = document.getElementById("div-valor-cuota");
                    
                    valor = setMoneda(items2[0][3]);
                    // div1.innerHTML = valor;
                    var msg = "";
                    if (periodo2 == "diario") { 
            msg = "Usted estará pagando " + valor + ", todos los dias durante " + items2.length + " dias.";
           }
           if (periodo2 == "semanal") {
            msg = "Usted pagará " + valor + ", semanalmente durante " + items2.length + " semanas.";
           }
           if (periodo2 == "mensual") {
            msg = "Usted pagará " + valor + ", mensualmente durante " + items2.length + " meses.";
           }
           if (periodo2 == "quincenal") {
            msg = "Usted pagará " + valor + ", de manera quincenal por un periodo de " + items2.length + " quincenas.";
           }
           if (periodo2 == "bimestral") {
            msg = "Usted pagará " + valor + ", cada 2 meses durante un periodo de " + items2.length + " bimestres.";
           }
           if (periodo2 == "trimestral") {
            msg = "Usted va a pagar " + valor + ", cada 3 meses durante " + items2.length + " trimestres.";
           }
           if (periodo2 == "cuatrimestral") {
            msg = "Usted pagará " + valor + ", cada cuatrimestre (4 meses) por un periodo de " + items2.length + " cuatrimestres.";
           }
           if (periodo2 == "semestral") {
            msg = "Usted pagará " + valor + ", cada 6 meses durante " + items2.length + " semestres";
           }
           if (periodo2 == "anual") {
            msg = "Usted pagará " + valor + ", anualmente por un periodo de " + items2.length + " años";
           }
        //    var div2 = document.getElementById("div-comentario");
        //    div2.innerHTML = msg;
                }
 