
describe('Тестирование staya', function () {
    
    it('Проверка формы логина и пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('ruhshonalola97@mail.ru');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('20Oct2022');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button > span').click();
        cy.contains('Мои заказы');
        cy.get('#__layout > div > main > div > div.container > div > aside > button').click();
    })
    it('Проверка негативного кейса', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('ruhshonalola97@mail.ru');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('20.Oct2022');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button > span').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})