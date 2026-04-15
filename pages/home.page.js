export default class HomePage {
    // Construtor com o mapeamento dos elementos
    constructor(page){
        this.page = page   // o objeto do Playwright(PW) interno recebe o objeto do Playwright(PW) externo
        this.titulo = 'h1'
        this.origem = '[name="fromPort"]'
        this.destino = '[name="toPort"]'  // xpath
        this.btnFindFlights = '.btn-primary'
        this.url = 'https://blazedemo.com'
    }

    // Mapear as ações
    async selecionar_origem(cidade_origem) {
        await this.page.locator(this.origem).selectOption(cidade_origem)        
    }

    async selecionar_destino(cidade_destino) {
        await this.page.locator(this.destino).selectOption(cidade_destino)      
    }

    async clicar_find_flights(){
        await this.page.locator(this.btnFindFlights).click()
    }

    // Jeito "Rebelde" - verificação dentro do mapeamento
    async verificar_mensagem_boas_vindas(){
        await expect(titulo)
    }


}
