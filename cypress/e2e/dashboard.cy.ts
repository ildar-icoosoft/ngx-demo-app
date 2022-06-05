import albums from '../fixtures/albums.json';
import posts from '../fixtures/posts.json';
import photos from '../fixtures/photos.json';
import { navMenuTest } from '../utils/nav-menu';

describe('dashboard page', () => {
  const photosLimit = 15;
  const postsLimit = 10;

  beforeEach(() => {
    cy.intercept('GET', '/albums*', {
      body: albums,
      headers: {
        'x-total-count': '' + albums.length,
      },
    }).as('getAlbums');

    cy.intercept('GET', '/posts*', {
      body: posts.slice(0, postsLimit),
      headers: {
        'x-total-count': '' + posts.length,
      },
    }).as('getPosts'); // and assign an alias

    cy.intercept('GET', '/photos*', {
      body: photos.slice(0, photosLimit),
      headers: {
        'x-total-count': '' + photos.length,
      },
    }).as('getPhotos'); // and assign an alias
  });

  beforeEach(() => {
    cy.visit('/');
  });

  navMenuTest('Dashboard');

  describe('header', () => {
    it('should contain github link', () => {
      cy.get('a[title="Github"]')
        .and('have.attr', 'href')
        .and('include', 'https://github.com/ildar-icoosoft/ngx-demo-app');
    });
  });

  describe('statistics column', () => {
    it('should display posts count', () => {
      cy.get('app-dashboard-statistics [aria-label="Posts count"]').contains(
        `${posts.length} Posts`,
      );
    });
    it('should display albums count', () => {
      cy.get('app-dashboard-statistics [aria-label="Albums count"]').contains(
        `${albums.length} Albums`,
      );
    });
    it('should display photos count', () => {
      cy.get('app-dashboard-statistics [aria-label="Photos count"]').contains(
        `${photos.length} Photos`,
      );
    });
  });

  describe('latest posts column', () => {
    it('should display posts', () => {
      cy.get('app-post-list li').should('have.length', postsLimit);

      for (let i = 0; i < postsLimit; i++) {
        cy.get('app-post-list li a')
          .contains(posts[i].title)
          .and('have.attr', 'href')
          .and('include', `/post/${posts[i].id}`);
        // @todo Проверить наличие текста body
        // @todo Учитывать порядок элементов
      }
    });
  });

  describe('latest photos column', () => {
    it('should display photos', () => {
      cy.get('app-dashboard-photos app-dashboard-photos-item').should('have.length', photosLimit);

      for (let i = 0; i < photosLimit; i++) {
        cy.get('app-dashboard-photos app-dashboard-photos-item')
          .get('img[src="' + photos[i].thumbnailUrl + '"]')
          .parent('a')
          .and('have.attr', 'href')
          .and('include', `/photo/${photos[i].id}`);
        cy.get('app-dashboard-photos app-dashboard-photos-item').contains(photos[i].title);
        // @todo Учитывать порядок элементов
      }
    });
  });

  // @todo написать тесты для появления прелоадера
});
