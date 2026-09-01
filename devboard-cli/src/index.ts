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
    experiencesYears: 21,
    available: true,
    weeklyHours: 4,
    technologies: ["Typescript", "Node.js", "Git", "PostgreSQL"]
};

moi.name = developerName;
moi.city = city;
moi.experiencesYears = experiencesYears;
moi.available = available;
moi.weeklyHours = weeklyHours;
moi.technologies = technologies;

console.log(`Salut je m'appel ${moi.name}. Je vis à ${moi.city}, j'ai ${moi.experiencesYears} années d'expérience. Je suis en ce moment ${moi.available ? "disponible" : "non disponible"} pour travailler ${moi.weeklyHours} heures par semaines.`);

//-------------------------------------------------------------------------------------------------

