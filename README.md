# Demo Angular routing lazy-loading

## Initialisation du projet

> ng new angular-demo-routing --routing  

> npm run build  

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.ab9ccc1f6b553430.js      | main          | 192.01 kB |                52.82 kB
polyfills.df41c822a75ace89.js | polyfills     |  33.15 kB |                10.62 kB
runtime.b85ee988af117e97.js   | runtime       |   1.06 kB |               602 bytes
styles.ef46db3751d8e999.css   | styles        |   0 bytes |                       -

                              | Initial Total | 226.22 kB |                64.03 kB

Build at: 2022-09-23T09:10:05.698Z - Hash: eed81ff2e625cc6c - Time: 29830ms

## Methode classique de génération des modules

> ng g module module1 --module app  

> ng g component module1/component1  

> ng g module module2 --module app  

> ng g component module2/component2  

Alimentation des .html  
Ajout des routes dans app-routing.module.ts  

> npm start  

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   1.98 MB |
main.js               | main          | 801.33 kB |
polyfills.js          | polyfills     | 297.02 kB |
styles.css, styles.js | styles        | 173.24 kB |
runtime.js            | runtime       |   6.54 kB |

                      | Initial Total |   3.22 MB

## Methode Lazy-loading de génération des modules  

> ng g module module1 --module app --route module1  

/!\ Cette méthode génère un composant au niveau du module, il peut être supprimé

> ng g component module1/component1  

> ng g module module2 --module app --route module2  

> ng g component module2/component2  

Alimentation des .html  
Suppression des composants générés automatiquement et modification des imports et routes

> npm start  

Initial Chunk Files                  | Names                  |  Raw Size
vendor.js                            | vendor                 |   1.98 MB |
polyfills.js                         | polyfills              | 297.02 kB |
styles.css, styles.js                | styles                 | 173.24 kB |
main.js                              | main                   |  50.61 kB |
runtime.js                           | runtime                |  12.66 kB |

                                     | Initial Total          |   2.50 MB

Lazy Chunk Files                     | Names                  |  Raw Size
src_app_module1_module1_module_ts.js | module1-module1-module | 377.67 kB |
src_app_module2_module2_module_ts.js | module2-module2-module | 377.67 kB |

Build at: 2022-09-23T09:38:34.194Z - Hash: 6d2a014daa9842ae - Time: 6527ms  
