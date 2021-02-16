import Skarkpage from './pages/skarkpage/Skarkpage.vue'
import Kart from './pages/kart/Kart.vue'

import Lister from './pages/listeApp/Lister.vue'
import NyListe from './pages/listeApp/nyListe.vue'
import Liste from './pages/listeApp/Liste.vue'
import ListePunktDetaljer from './pages/listeApp/ListepunktDetaljer.vue'

import NotFound from './pages/NotFound.vue'

export const routes = [
  {
    path: '/',
    redirect: '/Skarkpage'
  },
  {
    path: '/Skarkpage',
    name: 'Skarkpage',
    component: Skarkpage
  },
  {
    path: '/kart',
    name: 'Kart',
    component: Kart
  },
  {
    path: '/:ListeApp',
    name: 'ListeApp',
    component: Lister,
    children: [
      {
        path: ':listeNavn',
        name: 'listenavn',
        component: Liste,
        children: [
          {
            path: ':listepunktId',
            name: 'listepunktDetaljer',
            component: ListePunktDetaljer
          },
        ]
      },
      {
        path: 'nyListe',
        name: 'nyListe',
        component: NyListe
      }
    ]
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
]
