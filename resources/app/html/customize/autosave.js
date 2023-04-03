function iniciarautosave() {
  let customizesalvar = document.getElementById("customizesalvar");
  if (customizesalvar.value == 0) {
    autosavec = setInterval(saveatukak, 15000);
    document.querySelector("[name='saveatual']").innerText = 'Jamais';
  }
  if (customizesalvar.value == 1) {
    autosavec = setInterval(saveProject, 30000);
    document.querySelector("[name='saveatual']").innerText = 'Toutes les 30 secondes';
  } 
  if (customizesalvar.value == 2) {
    autosavec = setInterval(saveProject, 60000);
    document.querySelector("[name='saveatual']").innerText = 'Toutes les 1 minutes';
  } 
  if (customizesalvar.value == 3) {
    autosavec = setInterval(saveProject, 120000);
    document.querySelector("[name='saveatual']").innerText = 'Toutes les 2 minutes';
  }
  if (customizesalvar.value == 4) {
    autosavec = setInterval(saveProject, 300000);
    document.querySelector("[name='saveatual']").innerText = 'Toutes les 5 minutes';
  }
  if (customizesalvar.value == 5) {
    autosavec = setInterval(saveProject, 600000);
    document.querySelector("[name='saveatual']").innerText = 'Toutes les 10 minutes';
  }
  if (customizesalvar.value == 6) {
    autosavec = setInterval(saveProject, 900000);
    document.querySelector("[name='saveatual']").innerText = 'Toutes les 15 minutes';
  }
  if (customizesalvar.value == 7) {
    autosavec = setInterval(saveProject, 1800000);
    document.querySelector("[name='saveatual']").innerText = 'Toutes les 30 minutes';
  }
  if (customizesalvar.value == 8) {
    autosavec = setInterval(saveProject, 2700000);
    document.querySelector("[name='saveatual']").innerText = 'Toutes les 45 minutes';
  }
  if (customizesalvar.value == 9) {
    autosavec = setInterval(saveProject, 3600000);
    document.querySelector("[name='saveatual']").innerText = 'Toutes les 60 minutes';
  }
  if (customizesalvar.value == 10) {
    autosavec = setInterval(saveatukak2, 15000);
    document.querySelector("[name='saveatual']").innerText = 'Quando criar ou editar uma action';
  }
}

function saveatukak() {
  document.querySelector("[name='saveatual']").innerText = 'Jamais';
}
function saveatukak2() {
  document.querySelector("[name='saveatual']").innerText = 'Quand créer ou modifier une action';
}

function autosaveupaction() {
  let customizesalvar = document.getElementById("customizesalvar");
  if (customizesalvar.value == 10) {
    saveProject();
  }
}

async function attActions() {
	const select = document.getElementById("attActionsSelect");
	const btn = document.getElementById("btnActions");
	const load = document.getElementById("btnActionsLoad");

	select.style.display = "none";
	btn.style.display = "none";
	load.style.display = "block";

	const value = parseInt(select.value);
	const fs = require("fs");

	const actionsUrl = "https://api.github.com/repos/DBM-Mods/French/contents/actions?ref=main";
	const eventsUrl = "https://api.github.com/repos/DBM-Mods/French/contents/events?ref=main";

	const actionsPath = this.DBM.actLocs.toString();
	const eventsPath = this.DBM.evtLocs.toString();

	async function fetchAndWrite(url, Path, att) {
		let actions = await fetch(url).then((r) => r.json());
		actions = actions.filter((file) => file.name.toString() != "aaa_dbmmods_dependencies_MODS" && file.download_url != null);
		
		if(att == true) {
			await Promise.all(actions.map(async (action) => {
				const path = `${Path}/${action.name}`;
				const arquivoLocal = fs.existsSync(path) ? fs.readFileSync(path, "utf-8") : null;

				if(arquivoLocal != null) {
					const arquivoFetch = await fetch(action.download_url).then((r) => r.text());

					if(arquivoLocal.toString() != arquivoFetch.toString()) {
						fs.writeFileSync(path, arquivoFetch);
					}
				}
			}));
		} else if(att == "all") {
			await Promise.all(actions.map(async (action) => {
				const path = `${Path}/${action.name}`;
				const arquivoLocal = fs.existsSync(path) ? fs.readFileSync(path, "utf-8") : null;
				const arquivoFetch = await fetch(action.download_url).then((r) => r.text());

				if(arquivoLocal == null) {
					fs.writeFileSync(path, arquivoFetch);
				} else {
					if(arquivoLocal.toString() != arquivoFetch.toString()) {
						fs.writeFileSync(path, arquivoFetch);
					}
				}
			}));
		} else {
			await Promise.all(actions.map(async (action) => {
				const path = `${Path}/${action.name}`;
				const arquivoLocal = fs.existsSync(path) ? fs.readFileSync(path, "utf-8") : null;

				if(arquivoLocal == null) {
					const arquivoFetch = await fetch(action.download_url).then((r) => r.text());
					fs.writeFileSync(path, arquivoFetch);
				}
			}));
		}
	}

	switch(value) {
		case 0:
			await fetchAndWrite(actionsUrl, actionsPath);
			break;
		case 1:
			await fetchAndWrite(actionsUrl, actionsPath, true);
			break;
		case 2:
			await fetchAndWrite(actionsUrl, actionsPath, "all");
			break;
		case 3:
			await fetchAndWrite(eventsUrl, eventsPath);
			break;
		case 4:
			await fetchAndWrite(eventsUrl, eventsPath, true);
			break;
		case 5:
			await fetchAndWrite(eventsUrl, eventsPath, "all");
			break;
		case 6:
			await fetchAndWrite(actionsUrl, actionsPath);
			await fetchAndWrite(eventsUrl, eventsPath);
			break;
		case 7:
			await fetchAndWrite(actionsUrl, actionsPath, true);
			await fetchAndWrite(eventsUrl, eventsPath, true);
			break;
		case 8:
			await fetchAndWrite(actionsUrl, actionsPath, "all");
			await fetchAndWrite(eventsUrl, eventsPath, "all");
			break;
	}

	select.style.display = "block";
	btn.style.display = "block";
	load.style.display = "none";
}



