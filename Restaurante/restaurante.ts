class restaurante {
    private itens: string[];
    private valor: number;
    private status: string;
  
    constructor(itens: string[], valor: number, status: string) {
      this.itens = itens;
      this.valor = valor;
      this.status = status;
    }
  
    adicionarItem(item: string): void {
      this.itens.push(item);
    }
  
    getItens() {
        for (let i = 0; i < this.itens.length; i++) {
            let item = this.itens[i];            
            return item; 
        }
    }

    getValor() {
      return this.valor;
    }

    calcularValorTotal(valor: number) {
      valor = this.valor;
    }
  
    getStatus() {
      return this.status;
    }
  }