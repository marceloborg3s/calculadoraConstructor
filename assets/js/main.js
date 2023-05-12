// A escolha entre definir display como uma constante ou usá-lo como uma propriedade 
// com this.display depende do design e dos requisitos da sua aplicação.

// Usar this.display permite que você acesse a propriedade em outros métodos da 
// calculadora, o que pode ser útil se você precisar usá-la em mais de um lugar. 
// Além disso, usar this é uma convenção comum em linguagens orientadas a objetos, 
// onde você define propriedades como parte de uma instância de um objeto.

// Por outro lado, definir display como uma constante tem a vantagem de tornar a 
// propriedade privada para a função construtora, o que significa que ela não pode 
// ser acessada diretamente fora do escopo da calculadora. Isso pode ser útil se 
// você quiser proteger a propriedade de ser alterada ou usada incorretamente 
// por outros códigos.

// Em resumo, a escolha entre usar this.display ou uma constante depende do que 
// você deseja realizar. Se você precisar acessar a propriedade em outros métodos 
// da calculadora, use this.display. Se você quiser proteger a propriedade de ser
// alterada ou acessada fora do escopo da calculadora, defina-a como uma constante.

// display - this
function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaBackSpace();
    this.pressionaEnter();
  };

  this.pressionaBackSpace = () => {
    this.display.addEventListener('keydown', e => {
      if (e.keyCode === 8) {
        e.preventDefault();
        this.clearDisplay();
      }
    });
  };

  this.pressionaEnter = () => {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) this.realizaConta();
    });
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = String(conta);
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };

  this.clearDisplay = () => this.display.value = '';
  this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

  this.cliqueBotoes = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
      if(el.classList.contains('btn-clear')) this.clearDisplay();
      if(el.classList.contains('btn-del')) this.apagaUm();
      if(el.classList.contains('btn-eq')) this.realizaConta();

      this.display.focus();
    });
  };

  this.btnParaDisplay = (valor) => this.display.value += valor;

};

const calculadora = new Calculadora();
calculadora.inicia();

// display - const
// function Calculadora() {
//   const display = document.querySelector('.display');

//   this.inicia = () => {
//     this.cliqueBotoes();
//     this.pressionaBackSpace();
//     this.pressionaEnter();
//   };

//   this.pressionaBackSpace = () => {
//     display.addEventListener('keydown', e => {
//       if (e.keyCode === 8) {
//         e.preventDefault();
//         this.clearDisplay();
//       }
//     });
//   };

//   this.pressionaEnter = () => {
//     display.addEventListener('keyup', e => {
//       if (e.keyCode === 13) {
//         this.realizaConta();
//       }
//     });
//   };

//   this.realizaConta = () => {
//     let conta = display.value;

//     try {
//       conta = eval(conta);

//       if(!conta) {
//         alert('Conta inválida');
//         return;
//       }

//       display.value = String(conta);
//     } catch(e) {
//       alert('Conta inválida');
//       return;
//     }
//   };

//   this.clearDisplay = () => {
//     display.value = '';
//   };

//   this.apagaUm = () => {
//     display.value = display.value.slice(0, -1);
//   };


//   this.cliqueBotoes = () => {
//     document.addEventListener('click', e => {
//       const el = e.target;

//       if(el.classList.contains('btn-num')) {
//         this.btnParaDisplay(el.innerText);
//       }

//       if(el.classList.contains('btn-clear')) {
//         this.clearDisplay();
//       }

//       if(el.classList.contains('btn-del')) {
//         this.apagaUm();
//       }

//       if(el.classList.contains('btn-eq')) {
//         this.realizaConta();
//       }

//       display.focus();
//     });
//   };

//   this.btnParaDisplay = (valor) => {
//     display.value += valor;
//   }

// };

// const calculadora = new Calculadora();
// calculadora.inicia();