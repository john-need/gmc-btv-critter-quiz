
type Question = {
    id: string;
    tags: string[];
    critterImage: string;
    questionText?: string;
    clues: string[];
    commonNames: string[];
    scientificName: string;
    image?: string;
}

export default Question;

