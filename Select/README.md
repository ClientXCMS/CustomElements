

### CLIENTXCMS
![Logo](https://clientx.fr/assets/images/ClientXLight.png "ClientXCMS")

[![Chat](https://img.shields.io/discord/620000044191449108?color=7289da&label=Discord&logo=discord&logoColor=fff&style=flat-square)](https://clientxcms.com/discord)
### CustomElements - Select

CustomElement "Select" permet de créer un select en AJAX avec une API facilement grâce à [Select2](https://select2.org/).
Il faut importer le Javascript du CustomElement et Select2.

## Variable Backend
La recherche de l'utilisateur est les SuperVariables `$_GET['term']` et `$_GET['q']` ou dans l'object Request. Il faudra donc vous adapter selon Select2.

## Utilisation
```html
<select is="custom-select" data-url="/api/users/search"></select>
```