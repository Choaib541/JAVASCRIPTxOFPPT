// Exc1
class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    decrire() {
        return `${this.nom},${this.age} ans`;
    }
}

const personne1 = new Personne("Choaib", 18);

console.log(personne1.decrire());
// Exc2

class Formateur extends Personne {
    former(sujet) {
        return `${this.nom} enseigne ${sujet}`;
    }
}

const form1 = new Formateur("choaib", 19);

console.log(form1.former("'anything except french'"));

// Exc3
/**
 * 1
 */
class Livre {
    //  to declare variables types , i encourage you to use typescript instead
    constructor(titre, genre, auteur, lu, date_de_lecture) {
        this.titre = titre;
        this.genre = genre;
        this.auteur = auteur;
        this.lu = lu;
        this.date_de_lecture = date_de_lecture;
    }
}
/**
 * 2
 */
class ListeLivres {
    constructor(
        Nombre_de_livres_lus,
        Nombre_de_livre_marqués_pas_encore_lus,
        Livre_suivant_à_lire,
        Livre_en_cours_de_lecture,
        Dernier_livre_lu
    ) {
        this.Nombre_des_livres_lus = Nombre_de_livres_lus;
        this.Nombre_de_livres_marqués_pas_encore_lus =
            Nombre_de_livre_marqués_pas_encore_lus;
        this.Livre_suivant_à_lire = Livre_suivant_à_lire;
        this.Livre_en_cours_de_lecture = Livre_en_cours_de_lecture;
        this.Dernier_livre_lu = Dernier_livre_lu;
        this.list_livres = [];
    }

    /**
     * 3
     */
    ajouter(livre) {
        this.list_livres.push(livre);
    }

    terminerLivreEnCours() {
        this.Nombre_des_livres_lus += 1;
        this.Livre_en_cours_de_lecture.lu = true;
        this.Dernier_livre_lu = this.Livre_en_cours_de_lecture;
        this.Livre_en_cours_de_lecture = this.Livre_suivant_à_lire;

        let livre = null;

        try {
            this.list_livres.foreach((e) => {
                if (!e.lu) {
                    livre = e;
                    throw "break";
                }
            });
        } catch (err) {
            this.Livre_suivant_à_lire = livre;
        }
    }

    /**
     * 4
     */

    dropLivre(titre) {
        let newlist = this.list_livres.filter((e) => e.titre !== titre);

        this.list_livres = newlist;
    }
}
