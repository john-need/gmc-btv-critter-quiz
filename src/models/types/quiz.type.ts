import Question from "./question.type";

type Quiz = {
    id: string;
    title: string;
    subtitle?: string;
    image?: string
    questionTags: string[];
};

export default Quiz;

