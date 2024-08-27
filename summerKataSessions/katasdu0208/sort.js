/* cas A nous avons un array avec des données au hasard.
ces données sont des chiffres entiers
nous voulons les classer dans l'ordre */
let arrayRandom = [8, -2, 2, 1, 0, 9, 6]


//je vérifie l'élément de l'index 0
/*je vérifie l'élément de l'index 1 et je le compare à l'élément de 
l'index 0.
element d'index = [i]
si [1]<[0], je permute [1] et [0].
je continue jusqu'à la fin du tableau. dans ce cas jusqu'à 
i=arrayRandom.length-1. 
// Préciser la condition d'arrêt ?

//tableau de sortie sera [-2,0,1,2,6,8,9]


2/quick sort
je pars de [i]. je parcours le tableau. 
si [i+1]<[i] je permute [i] et [i+1]
je continue jusqu'à i=arrayrandom.length-1

// [8, -2, 2, pivot = 1, 0, 9, 6]