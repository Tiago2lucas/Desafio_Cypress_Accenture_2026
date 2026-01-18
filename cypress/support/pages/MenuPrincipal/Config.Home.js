
export const HomeElements = {
    DOMINIO_SITE_VALIDAR: 'coffee-cart.app',
    COFFE_ESPRESSO: '[data-test="Espresso"]',
    COFFE_ESPRESSO_MACCHIATO: '[data-test="Espresso_Macchiato"]',
    COFFE_CAPPUCCINO: '[data-test="Cappuccino"]',
    COFFE_MOCHA: '[data-test="Mocha"]',
    COFFE_FLAT_WHITE: '[data-test="Flat_White"]',
    COFFE_AMERICANO: '[data-test="Americano"]',
    COFFE_LATTE: '[data-test="Cafe_Latte"]',
    COFFE_ESPRESSO_CON_PANNA: '[data-test="Espresso_Con Panna"]',
    COFFE_BREVE: '[data-test="Cafe_Breve"]',
    CHECKOUT: '[data-test="checkout"]',
    CART_MODAL: '.cart-preview.show',
    ITENS_NO_MODAL: '.list-item',
    LIST_ITEMS: 'li.list-item:visible',
    BOTAO_CARRINHO_MENU: 'li:nth-child(2) > a',
    MODAL_PROMOCAO: '.promo',
    BOTAO_YES_PROMOCAO: '.yes',
    NAME_ALEATORIO : "testeacenture" + Math.random().toString(36).substring(2,7),
    EMAIL_ALEATORIO: "ateste" + Math.random().toString(36).substring(2, 5) + "@teste.com",
    EMAIL_ALEATORIO_ERRADO: "teste" + Math.random().toString(36).substring(2, 5) + ".com"
};

export const listaCafes = [
    HomeElements.COFFE_ESPRESSO, 
    HomeElements.COFFE_ESPRESSO_MACCHIATO, 
    HomeElements.COFFE_CAPPUCCINO,
    HomeElements.COFFE_MOCHA, 
    HomeElements.COFFE_FLAT_WHITE, 
    HomeElements.COFFE_AMERICANO,
    HomeElements.COFFE_LATTE, 
    HomeElements.COFFE_ESPRESSO_CON_PANNA, 
    HomeElements.COFFE_BREVE
];