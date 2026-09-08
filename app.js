document.addEventListener("DOMContentLoaded", () => {
    // ex1
    const button = document.getElementById("click");
    if (button) {
        button.addEventListener("click", () => {
            const nomeDisciplina = document.getElementById("nomedisc")?.value || "";
            const disciplina = document.getElementById("disciplina");
            if (disciplina) {
                disciplina.innerHTML = nomeDisciplina;
            }
        });
    }

    // ex2
    const somador = document.getElementById("soma");
    if (somador) {
        somador.addEventListener("click", () => {
            const resultados = document.getElementById("resultado");
            const primeironumero = document.getElementById("pri")?.value || "0";
            const segundonumero = document.getElementById("sec")?.value || "0";
            const fala = Number(primeironumero) + Number(segundonumero);
            if (resultados) {
                resultados.innerHTML = fala;
            }
        });
    }

    // ex3
    const calcularMedia = document.getElementById("calcularMedia");
    if (calcularMedia) {
        calcularMedia.addEventListener("click", () => {
            const notas = [
                Number(document.getElementById("nota1").value ),
                Number(document.getElementById("nota2").value ),
                Number(document.getElementById("nota3").value ),
                Number(document.getElementById("nota4").value )
            ];

            const resultadoMedia = document.getElementById("resultadoMedia");
            const statusAluno = document.getElementById("statusAluno");

            const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

            if (resultadoMedia) {
                resultadoMedia.textContent = `Média: ${media.toFixed(2)}`;
            }

            if (statusAluno) {
                statusAluno.textContent = media > 7 ? "Status: Aprovado" : "Status: Reprovado";
            }
        });
    }

    // ex5
    const gerarTabuada = document.getElementById("gerarTabuada");
    if (gerarTabuada) {
        gerarTabuada.addEventListener("click", () => {
            const numero = Number(document.getElementById("numeroTabuada")?.value || 0);
            const resultadoTabuada = document.getElementById("resultadoTabuada");

            let tabuada = "";
            for (let i = 0; i <= 10; i++) {
                tabuada += `${numero} x ${i} = ${numero * i}<br>`;
            }

            if (resultadoTabuada) {
                resultadoTabuada.innerHTML = tabuada;
            }
        });
    }

    //ex6
    const compararValoresBtn = document.getElementById("compararValores");
    if (compararValoresBtn) {
        compararValoresBtn.addEventListener("click", () => {
            const resultadoMaior = document.getElementById("resultadoMaior");
            const valores = [];

            while (true) {
                const valor = Number(window.prompt("Digite um valor positivo (ou -1 para encerrar):"));

                if (valor === -1) {
                    break;
                }

                if (valor > 0) {
                    valores.push(valor);
                }
            }

            if (!resultadoMaior) {
                return;
            }

            if (valores.length === 0) {
                resultadoMaior.textContent = "Nenhum valor positivo foi informado.";
                return;
            }

            const maiorValor = Math.max(...valores);
            resultadoMaior.textContent = `O maior valor informado foi: ${maiorValor}`;
        });
    }
});


//ex7
const mostrarImparesBtn = document.getElementById("mostrarImpares");

if (mostrarImparesBtn) {
    mostrarImparesBtn.addEventListener("click", () => {
        const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const resultadoImpares = document.getElementById("resultadoImpares");

        const impares = vetor.filter((numero) => numero % 2 !== 0);

        if (resultadoImpares) {
            resultadoImpares.textContent = `Números ímpares: ${impares.join(", ")}`;
        }
    });
}

//ex8
const inverterNomeBtn = document.getElementById("inverterNome");

if (inverterNomeBtn) {
    inverterNomeBtn.addEventListener("click", () => {
        const nome = document.getElementById("nomeInvertido").value;
        const resultadoNomeInvertido = document.getElementById("resultadoNomeInvertido");

        if (!resultadoNomeInvertido) {
            return;
        }

        const nomeInvertido = nome.split("").reverse().join("");
        resultadoNomeInvertido.textContent = `Nome invertido: ${nomeInvertido}`;
    });
}

//ex9
const funcionariosAcimaSalarioMinimoBtn = document.getElementById("funcionariosAcimaSalarioMinimo");

if (funcionariosAcimaSalarioMinimoBtn) {
    funcionariosAcimaSalarioMinimoBtn.addEventListener("click", () => {
        const salarioMinimo = 1412;
        const funcionarios = [];

        for (let i = 1; i <= 5; i++) {
            const nome = document.getElementById(`nomeFuncionario${i}`)?.value || "";
            const idade = Number(document.getElementById(`idadeFuncionario${i}`)?.value || 0);
            const sexo = document.getElementById(`sexoFuncionario${i}`)?.value || "";
            const salario = Number(document.getElementById(`salarioFuncionario${i}`)?.value || 0);

            if (nome && idade && sexo && salario) {
                funcionarios.push({ nome, idade, sexo, salario });
            }
        }

        const resultadoFuncionarios = document.getElementById("resultadoFuncionarios");

        if (!resultadoFuncionarios) {
            return;
        }

        const acimaDoSalarioMinimo = funcionarios.filter((funcionario) => funcionario.salario > salarioMinimo);

        if (acimaDoSalarioMinimo.length === 0) {
            resultadoFuncionarios.textContent = "Nenhum funcionário recebe acima do salário mínimo.";
            return;
        }

        resultadoFuncionarios.innerHTML = acimaDoSalarioMinimo
            .map(
                (funcionario) =>
                    `Nome: ${funcionario.nome} | Idade: ${funcionario.idade} | Sexo: ${funcionario.sexo} | Salário: R$ ${funcionario.salario}<br>`
            )
            .join("");
    });
}



//ex10
function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero.";
    }
    return a / b;
}

const calcularOperacoesBtn = document.getElementById("calcularOperacoes");

if (calcularOperacoesBtn) {
    calcularOperacoesBtn.addEventListener("click", () => {
        const numero1 = Number(document.getElementById("num1Operacao").value);
        const numero2 = Number(document.getElementById("num2Operacao").value);
        const resultadoOperacoes = document.getElementById("resultadoOperacoes");

        if (!resultadoOperacoes) {
            return;
        }

        const soma = adicao(numero1, numero2);
        const subtracaoResultado = subtracao(numero1, numero2);
        const multiplicacaoResultado = multiplicacao(numero1, numero2);
        const divisaoResultado = divisao(numero1, numero2);

        resultadoOperacoes.innerHTML = `
            Adição: ${soma}<br>
            Subtração: ${subtracaoResultado}<br>
            Multiplicação: ${multiplicacaoResultado}<br>
            Divisão: ${divisaoResultado}
        `;
    });
}

