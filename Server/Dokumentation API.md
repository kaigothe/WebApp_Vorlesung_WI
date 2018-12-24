# Dokumentation: API Web APP

## Inhalt

## User 
### Attribute 

| Attribut 	| Datentyp    	| Default              |
|----------	|-------------	|-----------------------|
| iduser   	| INT(11)     	| `Auto Increment`      |
| name     	| varchar(50) 	|                       |
| created  	| DATE TIME   	| `CURRENT_TIMESTAMP()` |

### Funktionen
**Base URL:** [localhost:3000/api/v1/user/]()

#### GET: {Base URL}
Der Output liefert alle User, die in der Datenbank gespeichert sind. Das ausgegebene Format ist in `JSON`

#### GET: {Base URL}/{id}
**Beispiel** : {Base URL}/1

Der Output liefert alle User, die in der Datenbank gespeichert sind. Das ausgegebene Format ist in `JSON`

#### POST Neuen Nutzer anlegen 

| Bezeichner | Datentyp | Beschreibung           |
|------------|----------|------------------------|
| action     | `String` |  new                   |
| userName   | `String` |  {Name des Benutzers}  |

#### POST Nutzername ändern

| Bezeichner | Datentyp | Beschreibung           |
|------------|----------|------------------------|
| action     | `String` |  update_name           |
| userID     | `Int`    |  {ID des Nutzter}      |
| userName   | `String` |  {Name des Benutzers}  |

#### POST Nutzter löschen

| Bezeichner | Datentyp | Beschreibung           |
|------------|----------|------------------------|
| action     | `String` |  delete                |
| userID     | `Int`    |  {ID des Nutzter}      |



