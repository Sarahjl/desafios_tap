const SenhaItem = {
    template: ``
  }
  
  const app = Vue.createApp({
    components: {
      SenhaItem
    },
    data() {
      return {
        // Inicializa as filas de senhas
        filaComum: [],
        filaEspecial: [],

        numComum: 1,
        numEspecial: 1
      }
    },
    methods: {

      gerarFilaComum() {
        let senha = 'c' + ('000' + this.numComum).slice(-3); //gera a senha com o formato c001, c002, etc
        this.filaComum.push(senha); //adiciona a senha à fila comum
        this.numComum++; //incrementa o número da próxima senha
      },
      
      gerarFilaEspecial() {
        let senha = 'e' + ('000' + this.numEspecial).slice(-3); 
        this.filaEspecial.push(senha); 
        this.numEspecial++; 
      },
      
      atenderFilaComum() {
        if (this.filaComum.length > 0) {
          this.filaComum.shift(); //remove o primeiro elemento da fila comum
        }
      },
      
      atenderFilaEspecial() {
        if (this.filaEspecial.length > 0) {
          this.filaEspecial.shift(); 
        }
      }
    },
    template: `
      <senha-item></senha-item>
      
      <div class="container">
        <div>
          <button @click="gerarFilaComum">Gerar senha comum</button>
          <button @click="gerarFilaEspecial">Gerar senha especial</button>
        </div>
        
        <div>
          <h4>Fila Comum:</h4>
          <p>{{ filaComum.join(', ') }}</p>
        </div>
  
        <div>
          <h4>Fila Especial:</h4>
          <p>{{ filaEspecial.join(', ') }}</p>
        </div>
  
        <div>
          <button @click="atenderFilaComum">Atender senha comum</button>
          <button @click="atenderFilaEspecial">Atender senha especial</button>
        </div>
      </div>
    `
  })
  
  app.mount('#app')
  