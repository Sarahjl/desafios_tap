//array que armazena as senhas comuns e especiais
let senha_comum = [];
let senha_especial = [];

//variáveis que controlam o numero das senhas
let numero_comum = 1;
let numero_especial = 1;

function gerarComum(){
    //cria a senha comum com a letra C 
    let senha = 'c' + ('000' + numero_comum).slice(-3);
    senha_comum.push(senha); //adiciona nova senha
    numero_comum++;
    atualizarFila();
}

function gerarEspecial(){
    //cria a senha especial com a letra E 
    let senha = 'e' + ('000' + numero_especial).slice(-3);
    senha_especial.push(senha); //adiciona nova senha
    numero_especial++;
    atualizarFila();
}

function atenderComum(){
    //vê se existe senhas na fila
    if(senha_comum.length > 0){
        senha_comum.shift(); //se existe, remove a primeira senha da fila
    }
    atualizarFila();
}

function atenderEspecial(){
    //vê se existe senhas na fila
    if(senha_especial.length > 0){
        senha_especial.shift(); //se existe, remove a primeira senha da fila
    }
    atualizarFila();
}

function atualizarFila(){
    document.getElementById('senha_comum').innerHTML = senha_comum.join(', ');
    document.getElementById('senha_especial').innerHTML = senha_especial.join(', ');
}