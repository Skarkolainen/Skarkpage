import Skarkpage from './pages/skarkpage/Skarkpage.vue'
import Kart from './pages/kart/Kart.vue'
import KartVueLayers from './pages/kart/KartVueLayers.vue'

import ListeApp from './pages/listeApp/ListeApp.vue'
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
    path: '/kartVl',
    name: 'KartVl',
    component: KartVueLayers
  },
  {
    path: '/:ListeApp',
    name: 'ListeApp',
    component: ListeApp,
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
