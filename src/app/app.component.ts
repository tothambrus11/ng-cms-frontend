import {Component} from '@angular/core';
import {Post} from './post/Post';
import {ComponentType} from './post/ContentComponentMetadata';
import {OrderType} from './post/list/ListMetadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-blog';
  post: Post = {
    title: 'Ez a cím',
    id: 1,
    uniqueId: 1,
    content: [
      {
        componentType: ComponentType.heading,
        metadata: {
          level: 1,
          content: '1. A C# programozási nyelvről',
          customLinkName: "bevezetes"
        }
      },
      {
        componentType: ComponentType.paragraph,
        metadata: {
          content: 'A C# egy 2001-ben megjelent, elegáns, objektumorientált nyelv, amivel a fejlesztők biztonságos és gyors alkalmazásokat tudnak írni a <b>.NET keretrendszer</b> alá (ejtsd: dotnet). A C#-ot használhatjuk Windows applikációk, webszolgáltatások, mobil applikációk, kliens-szerver applikációk, adatbáziskezelő applikációk, játékok és még sok minden készítésére.'
        }
      },
      {
        componentType: ComponentType.infoBox,
        metadata: {
          content: 'A nevében a C a C programozási nyelvre utal, a # pedig a zenében a fél hanggal való felemelést szimbolizálja (a C++ nyelvben a ++ jelenti egy változó megnövelését 1-gyel).'
        }
      },
      {
        componentType: ComponentType.heading,
        metadata: {
          content: '2. A Visual Studio',
          level: 1
        }
      },
      {
        componentType: ComponentType.heading,
        metadata: {
          content: '2.1 Mi az az IDE?',
          level: 2
        }
      },
      {
        componentType: ComponentType.paragraph,
        metadata: {
          content: 'A programozóknak szükségük van egy fejlesztőkörnyezetre, ami segíti a programozást. Ezt nevezzük IDE-nek. Ez segít megtalálni a programban az esetleges hibákat és segít a kijavításukban is. Valamint kiszínezi a forráskódot az adott elemek nyelvi helyzete alapján, ezáltal a forráskódok is sokkal átláthatóbbak lesznek. A forráskódot is ezzel tudjuk futtatható .exe fájllá konvertálni.',
        }
      },
      {
        componentType: ComponentType.heading,
        metadata: {
          content: '2.2 Visual Studio telepítése',
          level: 2
        }
      },
      {
        componentType: ComponentType.list,
        metadata: {
          orderType: OrderType.NUMBERS,
          content: [
            'Töltsük le a Visual Studio Community 2017 telepítőfájlját a <a href="https://www.visualstudio.com/downloads/" target="_blank">https://www.visualstudio.com/downloads</a> oldalról a <span class="preil">Free download</span> gombra kattintva!',
            'Futtassuk a letöltött fájlt (rendszergazdai jogosultság szükséges)!',
            'Várjunk, amíg lemegy a kék csík.',
            'A listából válasszuk ki a <span class="preil">.NET desktop development</span> elemet, majd klikkeljünk az <span class="preil">Install</span> gombra!',
            'Várjuk meg, míg letöltődik a Visual Studio. Ez lassabb internetkapcsolat esetén több órát is igénybe vehet, de általában 20 perc alatt végez.',
            'Indítsuk el a programot a Launch gombbal.'
          ]
        }
      },
      /*{
        componentType: ComponentType.video,
        metadata: {
          type: 'youtube',
          source: 'https://www.youtube.com/watch?v=WgXN0kO1JEA',
          autoplay: false,
          startTime: 30,
        }
      },*/
      {
        componentType: ComponentType.sourceCode,
        metadata: {
          language: 'html',
          code: '<h1>Hello World!</h1>'
        }
      },
      {
        componentType: ComponentType.heading,
        metadata: {
          content: 'Lorem ipsum dolor sit </h1>asmet.<hello world!>',
          level: 1
        }
      },
      {
        componentType: ComponentType.paragraph,
        metadata: {
          content: 'Ez az első bejegyzés szövege. <strong>Ez nagyon <i>fontos</i>.</strong>'
        }
      },
      {
        componentType: ComponentType.paragraph,
        metadata: {
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aut deserunt dolores doloribus dolorum ducimus eveniet hic, impedit inventore iusto natus numquam officia officiis quasi quod repellat rerum totam.'
        }
      },
      {
        componentType: ComponentType.sourceCode,
        metadata: {
          language: 'typescript',
          code: 'export interface VideoMetadata {\n' +
            '  type: \'mp4\' | \'youtube\';\n' +
            '  source: string;\n' +
            '  startTime?: number;\n' +
            '  autoplay?: boolean;\n' +
            '}\n'
        }
      }
      /*{
        componentType: ComponentType.video,
        metadata: {
          type: "mp4",
          source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          autoplay: false,
          startTime: 10
        }
      }*/
    ]
  };
}
