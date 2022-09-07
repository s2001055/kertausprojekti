const Tietokanta = require('./tietokanta');
const yhteysOptiot = require('./sqlconfig.json');

const sql = require('./sqllauseet.json');
const haeKaikkiSql = sql.haeKaikki.join(' ');
const haeArtistitSql = sql.haeArtistit.join(' ');
const haeKaikkiArtistitSql = sql.haeKaikkiArtistit.join(' ');
const haeFestivaalitSql = sql.haeFestivaalit.join(' ');
const haeFestivaaliSql = sql.haeFestivaali.join(' ');
const haeKaupunkiSql = sql.haeKaupunki.join(' ');
const haeKaupungitSql = sql.haeKaupungit.join(' ');

module.exports = class Tietovarasto {
    constructor() {
        this.db = new Tietokanta(yhteysOptiot);
    }

    haeKaikki() {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.suoritaKysely(haeKaikkiSql);
                resolve(tulos.kyselynTulos);
            } catch(virhe) {
                reject(virhe);
            }
        });
    }

    haeArtistit(festivaali) {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.suoritaKysely(haeArtistitSql, [festivaali]);
                resolve(tulos.kyselynTulos);
            } catch(virhe) {
                reject(virhe);
            }
        });
    }

    haeKaikkiArtistit() {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.suoritaKysely(haeKaikkiArtistitSql);
                resolve(tulos.kyselynTulos);
            } catch(virhe) {
                reject(virhe);
            }
        });
    }

    haeFestivaalit() {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.suoritaKysely(haeFestivaalitSql);
                resolve(tulos.kyselynTulos);
            } catch(virhe) {
                reject(virhe);
            }
        });
    }

    haeFestivaali(festivaali) {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.suoritaKysely(haeFestivaaliSql, [festivaali]);
                resolve(tulos.kyselynTulos);
            } catch(virhe) {
                reject(virhe);
            }
        });
    }

    haeKaupunki(festivaali) {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.suoritaKysely(haeKaupunkiSql, [festivaali]);
                resolve(tulos.kyselynTulos[0]);
            } catch(virhe) {
                reject(virhe);
            }
        });
    }

    haeKaupungit() {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.suoritaKysely(haeKaupungitSql);
                resolve(tulos.kyselynTulos);
            } catch(virhe) {
                reject(virhe);
            }
        });
    }
}