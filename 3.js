/* Ici, la fonction dépend d'une opération extérieure d'insertion d'un utilisateur
 * dans ce qu'on imagine être une base de données.
*/
function createUser(firstName, lastName) {
  let user = {
    firstName: firstName,
    lastName: lastName
  }
  db.insert("users", user)
}


/*
Qui est sûr que `db` est bien une connexion à une vraie base de données ?
On s'offre la possibilité de `mocker` la fonction insert d'un potentiel objet "db".
*/

class DBMock {
  insert(table, object) {
    return true;
  };
}

// Fonction mise à jour
function createUser(db, firstname, lastname) {
  let user = {
    firstname: firstname,
    lastname: lastname,
  };
  result = db.insert("users", user);
  return result;
}
testEqual(true, createUser(new DBMock, "Victor", "Hugo"));

