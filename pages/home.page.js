// export default class HomePage { // padrão para type = module
class HomePage {                   // padrao para type = commonjs
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
    // Este seria para o exemplo sem parametro 
    async clicar_find_flights(){
        await this.page.locator(this.btnFindFlights).click()
    }

    // Este seria para o exemplo com parametro (texto no botão)
    async clicar_find_flights(texto_botao){
        await this.page.getByRole('button', { name: texto_botao}).click()
    }

    // Jeito "Rebelde" - verificação dentro do mapeamento
    async verificar_mensagem_boas_vindas(){
        // espera o seletor indicado carregar: Texto que serve de título da página
        await this.page.waitForSelector(this.titulo)
        // extrair o texto que estiver no elemento e guardar na constante da página
        const titulo_pagina = await this.page.textContent(this.titulo)

        if(!titulo_pagina.includes('Welcome to the Simple Travel Agency!')){
            throw new Error('Título na Home ausente ou diferente do esperado')
        }            

    }

}

module.exports = HomePage // Padrão quando type = commonjs