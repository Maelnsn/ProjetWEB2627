const developerName: string = "Maël";
let city: string = "Charneux";
let available: boolean = true;
let weeklyHours: number = 40;
let currentYear: number = new Date().getFullYear();
let startYear: number = 2002;
let experiencesYears: number = currentYear - startYear;

//console.log(`Salut je m'appel ${developerName}. Je vis à ${city}, j'ai ${experiencesYears} années d'expérience. Je suis en ce moment ${available ? "disponible" : "non disponible"} pour travailler ${weeklyHours} heures par semaines.`);

//Merci l'autocomplétion pour le gain de temps et de compréhension.

//--------------------------------------------------------------------------------------------------

const technologies: string[] = ["Typescript", "Node.js", "Git"];
technologies.push("PostgreSQL");
//console.log(`Technologies: (${technologies.length}) ${technologies.join(" , ")}`);
//console.table(technologies);

//-------------------------------------------------------------------------------------------------

interface DevProfile {

    name: string;
    city: string;
    experiencesYears: number;
    available: boolean;
    weeklyHours: number;
    technologies: string[];
}

const moi: DevProfile = {
    name: "Maël",
    city: "Charneux",
    experiencesYears: 150,
    available: true,
    weeklyHours: 4,
    technologies: ["Typescript", "Node.js", "Git", "PostgreSQL"]
};

/*moi.name = developerName;
moi.city = city;
moi.experiencesYears = experiencesYears;
moi.available = available;
moi.weeklyHours = weeklyHours;
moi.technologies = technologies; */

//console.log(`Salut je m'appel ${moi.name}. Je vis à ${moi.city}, j'ai ${moi.experiencesYears} années d'expérience. Je suis en ce moment ${getAvailableStatus(moi)} pour travailler ${moi.weeklyHours} heures par semaines.`);
//console.log(`Score du profil: ${computeProfileScore(moi)}`);


//-------------------------------------------------------------------------------------------------

function getAvailableStatus(profil: DevProfile): string {
    return profil.available ? "disponible" : "indisponible";
}

function computeProfileScore(profil: DevProfile): number {
    let score: number = 0;
    score += profil.experiencesYears;
    score += profil.technologies.length;
    score += profil.weeklyHours;

    if (score > 100) {
        score = 100;
    }
    return score;
}

//-------------------------------------------------------------------------------------------------

class Developer {
    name: string;
    city: string;
    experiencesYears: number;
    available: boolean;
    weeklyHours: number;
    technologies: string[];

    constructor(name: string, city: string, experiencesYears: number, available: boolean, weeklyHours: number, technologies: string[]) {
        this.name = name;
        this.city = city;
        this.experiencesYears = experiencesYears;
        this.available = available;
        this.weeklyHours = weeklyHours;
        this.technologies = technologies;
    }

    GetAvailableStatus(): string {
        return this.available ? "disponible" : "indisponible";
    }

    GetScore(): number {
        let score: number = 0;
        score += this.experiencesYears;
        score += this.technologies.length;
        score += this.weeklyHours;
        return score;
    }

    PrintSummary(): void {
        console.log(`Salut je m'appel ${this.name}. Je vis à ${this.city}, j'ai ${this.experiencesYears} années d'expérience. Je suis en ce moment ${this.GetAvailableStatus()} pour travailler ${this.weeklyHours} heures par semaines.`);
        console.log(`Score du profil: ${this.GetScore()}`);
    }

}

const moi2: Developer = new Developer("Maël", "Charneux", 150, true, 4, ["Typescript", "Node.js", "Git", "PostgreSQL"]);
moi2.PrintSummary();

// ET C'EST OK EN FAIT

