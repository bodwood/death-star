import { v4 } from 'uuid'

export default {
  "success": true,
  "data": {
    "room": [
      {
        "id": v4(),
        "name": 'Mandalorian',
        "origin": 'Mandalore',
        "price": 150,
        "color": 'Flipper',
        "description": 'Sleek room that represents the Mandalorian of Mandalore',
        "stock": 10,
      },
      {
        "id": v4(),
        "name": 'Sith',
        "origin": 'Coruscant',
        "price": 200,
        "color": 'FireStone',
        "description":
          'A powerful room that represents the sith with come from Coruscant',
        "stock": 10,
      },
      {
        "id": v4(),
        "name": 'Stormtrooper',
        "origin": 'Galactic Empire',
        "price": 90,
        "color": 'Ashe',
        "description": 'Modern room that represents the strong Stormtroopers',
        "stock": 10,
      },
      {
        "id": v4(),
        "name": 'Jedi',
        "origin": 'Unknown',
        "price": 100,
        "color": 'SandPink',
        "description":
          'This room represents the Jedi.. Be careful with this room',
        "stock": 10
      },
    ],
  },
}
