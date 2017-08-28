export function httpGet(url, callback) {
    const req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        if (req.status == 200) callback(JSON.parse(req.responseText));
        else throw "Erreur peandant le chargement de la page";
      }
    };
    req.send("null");
  }
  