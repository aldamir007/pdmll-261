class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(elemento){
        this.itens.push(elemento);
        console.log(elemento + " empilhado com sucesso!");
    }

    desempilhar(){
        if(this.itens.length === 0){
            console.log("Pilha vazia");
            return;
        }

        let removido = this.itens.pop();
        console.log(removido + " foi desempilhado.");
    }

    topo(){
        if(this.itens.length === 0){
            console.log("Pilha vazia");
            return;
        }

        console.log("Topo da pilha:", this.itens[this.itens.length-1]);
    }

    mostrar(){
        console.log("Elementos da pilha:");
        for(let i = this.itens.length-1; i >=0; i--){
            console.log(this.itens[i]);
        }
    }
}

const pilha = new Pilha();

pilha.empilhar("HTML");
pilha.empilhar("CSS");
pilha.empilhar("JavaScript");

pilha.mostrar();
pilha.topo();
pilha.desempilhar();
pilha.mostrar();
