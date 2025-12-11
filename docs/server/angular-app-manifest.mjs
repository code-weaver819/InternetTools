
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/internettools/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/internettools"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 570, hash: 'b2d333204de2d0d2c50f4ac89da5e62e332f6a891781d73d7adc11a2bb822157', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1087, hash: 'bc435673f699c73160741b8968877c7d518afdb28b73c82d8435cca3ca9574db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3350, hash: 'd7bd1839718e195af15ee966abdd8a2e80b00344dddeda37294407da8364bd2e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
