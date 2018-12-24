# Dokumentation: API Web APP

## Inhalt

## User 
### Attribute 

| Attribut 	| Datentyp    	| Default               |
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
