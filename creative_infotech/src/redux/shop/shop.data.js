const SHOP_DATA = {
  hackandslash: {
    id: 1,
    title: 'Hack And Slash',
    routeName: 'hackandslash',
    items: [
      {
        id: 1,
        name: 'Metal Gear Solid: Revengeance',
        imageUrl: 'https://giantbomb1.cbsistatic.com/uploads/original/3/34651/3095132-reveng.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Devil May Cry 5',
        imageUrl: 'https://www.thelantern.com/files/2019/04/MOMS-CSM-GAME-REVIEW-DEVIL-MAY-CRY-5-1-MCT-1fd2ltt.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'For Honor',
        imageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/304390/capsule_616x353.jpg?t=1581608865',
        price: 35
      },
      {
        id: 4,
        name: 'Darksider Genesis',
        imageUrl: 'https://cdn-products.eneba.com/resized-products/l9I0s-2uIO_P22IqSEHEXFPiWJ5BBjkmnS1utJR9VwE_390x400_1x-0.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Darksiders III',
        imageUrl: 'https://i0.wp.com/www.thexboxhub.com/wp-content/uploads/2018/07/darksiders-III-release.png',
        price: 18
      },
      {
        id: 6,
        name: 'Sekiro: Shadows Die Twice',
        imageUrl: 'https://images.g2a.com/newlayout/323x433/1x1x0/6ab5064a2a09/5b9bbc43ae653a2f8216634f',
        price: 14
      },
      {
        id: 7,
        name: 'Path of Exile',
        imageUrl: 'https://store-images.s-microsoft.com/image/apps.4902.72010574177212064.dd6d7b7a-b352-489f-b298-564c358af4cd.bc9a83da-bee5-4d7e-ae8c-6fb023815bbb',
        price: 18
      },
      {
        id: 8,
        name: 'Diablo III',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Diablo_III_cover.png/220px-Diablo_III_cover.png',
        price: 14
      },
      {
        id: 9,
        name: 'Middle Earth: Shadow of War',
        imageUrl: 'https://s3.gaming-cdn.com/images/products/1961/orig/middle-earth-shadow-of-war-cover.jpg',
        price: 16
      }
    ]
  },
  strategy: {
    id: 2,
    title: 'Strategy',
    routeName: 'strategy',
    items: [
      {
        id: 10,
        name: 'Civilization VI',
        imageUrl: 'https://store-images.s-microsoft.com/image/apps.16669.13977311502771693.72aef738-75a3-4db8-97c9-280f3b8c4daa.c2290e57-1525-4b4a-94d7-d652b1ff3520',
        price: 220
      },
      {
        id: 11,
        name: 'Into the Breach',
        imageUrl: 'https://s3.gaming-cdn.com/images/products/3440/orig/into-the-breach-switch-cover.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Desperados III',
        imageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/610370/header.jpg?t=1591268524',
        price: 110
      },
      {
        id: 13,
        name: 'Total War: Three Kingdoms',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Total_War_Three_Kingdoms_cover_art.jpg/220px-Total_War_Three_Kingdoms_cover_art.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'Iron Harvest',
        imageUrl: 'https://install-game.com/wp-content/uploads/2019/08/Iron-Harvest-download.png',
        price: 160
      },
      {
        id: 15,
        name: 'Hearthstone',
        imageUrl: 'https://lh3.googleusercontent.com/iyw6-f_jQuuY6phgmdMtcksXKjIvqC2pOZ5CRRSASKW4SGVEX1vwPHGVSPvZ0fuoh-c=w412-h220-rw',
        price: 160
      },
      {
        id: 16,
        name: 'Dota 2',
        imageUrl: 'https://static-prod.weplay.tv/2020-03-17/11fcc8644ee0564c135465c61f0759cd_large_cover.312825-D28357-79A369.jpeg',
        price: 190
      },
      {
        id: 17,
        name: 'Anno 1800',
        imageUrl: 'https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/search-thumbnail/1anno-100-thumbnail-750x422_mobile_297543.jpg',
        price: 200
      }
    ]
  },
  sports: {
    id: 3,
    title: 'Sports',
    routeName: 'sports',
    items: [
      {
        id: 18,
        name: 'NBA 2K20',
        imageUrl: 'https://lh3.googleusercontent.com/YVSZZ5UZghNfMn6oG5L1zEny_Fxl-OEIXa6YYaoXX8WlLz1fNAnHI3Os8EVNOs0eilf-',
        price: 125
      },
      {
        id: 19,
        name: 'FIFA 20',
        imageUrl: 'https://images.indianexpress.com/2020/04/FIFA-20-759.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'WWE 2K20',
        imageUrl: 'https://i.ytimg.com/vi/hPu7aLcZVTY/maxresdefault.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'PES 2020',
        imageUrl: 'https://rukminim1.flixcart.com/image/352/352/k16qzrk0/code-in-the-box-game/d/f/h/pc-efootball-pes-2020-standard-edition-original-imafksrgd74etfth.jpeg?q=70',
        price: 165
      },
      {
        id: 22,
        name: 'Virtua Tennis 4',
        imageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/71390/header.jpg',
        price: 185
      }
    ]
  },
  fps: {
    id: 4,
    title: 'First Person Shooters',
    routeName: 'fps',
    items: [
      {
        id: 23,
        name: 'Rainbow Six Siege',
        imageUrl: 'https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/en_US/dw64173a87/images/large/56c494ad88a7e300458b4d5a.jpg?sw=341&sh=450&sm=fit',
        price: 25
      },
      {
        id: 24,
        name: 'DOOM Eternal',
        imageUrl: 'https://i.redd.it/2ei5g6azyf331.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Disintegration',
        imageUrl: 'https://gbatemp.net/data/reviews/boxart/full/1424.png?1592544046',
        price: 80
      },
      {
        id: 26,
        name: 'Call Of Duty: Modern Warfare',
        imageUrl: 'https://images.firstpost.com/wp-content/uploads/2019/08/Call-of-Duty-Modern-Warfare-720.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Destiny 2',
        imageUrl: 'https://static2.raru.co.za/cover/2017/04/01/5626114-l.jpg?v=1526890220',
        price: 45
      },
      {
        id: 28,
        name: 'Halo Infinite',
        imageUrl: 'https://gamingbolt.com/wp-content/uploads/2019/06/halo-infinite.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'Metro Exodus',
        imageUrl: 'https://www.deepsilver.com/wp-content/uploads/sites/3/2018/12/banner_spotlight.jpg',
        price: 20
      }
    ]
  },
  story: {
    id: 5,
    title: 'Story',
    routeName: 'story',
    items: [
      {
        id: 30,
        name: 'Assassins Creed Vallhalla',
        imageUrl: 'https://www.thestatesman.com/wp-content/uploads/2020/04/AC-Valhala1_ED.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Assassins Creed Odyssey',
        imageUrl: 'https://m.media-amazon.com/images/I/51bxXuTbbRL._SL500_.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Red Dead Redemption 2',
        imageUrl: 'https://lh3.googleusercontent.com/HCUkD69MAHEOj84Yi7Kb5vxHpCePTsmQI4g9vYuVPUo-87cWE6ZZIk0tiyYzaiS9zaAFMTXRNYJaaRczRN-yQYw',
        price: 25
      },
      {
        id: 33,
        name: 'Watch Dogs',
        imageUrl: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fwatch-dogs%2Fhome%2FWDOG_STD_Store_Portrait_1280x1420-1280x1420-661fb45db1d3eb9345330e582661d094fda8cb23.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Tom Clancy\'s Splinter Cell: Blacklist',
        imageUrl: 'https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/scbl_nakedbox_mobile_158939.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'Spec Ops: The Line',
        imageUrl: 'https://s2.gaming-cdn.com/images/products/43/271x377/spec-ops-the-line-cover.jpg',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;