export const navMenuTest = (activeLinkText: string | null) => {
  describe('nav menu', () => {
    it('should contain links', () => {
      cy.get('app-nav a').contains('Dashboard').and('have.attr', 'href').and('include', '/');
      cy.get('app-nav a').contains('Posts').and('have.attr', 'href').and('include', '/posts');
      cy.get('app-nav a').contains('Albums').and('have.attr', 'href').and('include', '/albums');
      cy.get('app-nav a').contains('Photos').and('have.attr', 'href').and('include', '/photos');
    });

    if (activeLinkText !== null) {
      it('should contain active link', () => {
        cy.get('app-nav a').contains(activeLinkText).and('have.class', 'active');
      });
    }
  });
};
