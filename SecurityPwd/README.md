
### CLIENTXCMS
![Logo](https://clientx.fr/assets/images/ClientXLight.png "ClientXCMS")

[![Chat](https://img.shields.io/discord/620000044191449108?color=7289da&label=Discord&logo=discord&logoColor=fff&style=flat-square)](https://clientxcms.com/discord)

### CustomElements - SecurityPwd

CustomElement "SecurityPwd" permet de générer un mot de passe sécurisé en AJAX avec une API facilement.
Il faut importer le Javascript du CustomElement.

## Champs
Pour un retour utilisateur un Element HTMl doit avoir l'id `pwd-return` 
Pour mettre le mot de passe directement dans un `input` Il faut ajouter la classe `pwd-field` 

## Retour Backend
Le Retour du backend doit être fait en JSON avec une clé "pwd" contant le mot de passe

Exemple : 

```json
{
    "pwd": "6fzq77RSV"
}
```

## Utilisation

```html
<div is="security-pwd" data-url="/api/pwd"></div>
```