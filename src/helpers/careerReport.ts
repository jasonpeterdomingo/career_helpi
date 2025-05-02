/**
 * CareerMatch Interface
 * This interface defines the structure of a career match object.
 * 
 */
interface CareerMatch {
    title: string;
    description: string;
    averageAnnualSalary: number;
    projectedGrowth: number;
}

/**
 * CareerReport Interface
 * This interface defines the structure of a career report object.
 */
export interface CareerReport {
    workStyleBreakdown: {
        "Humanitarian": number;
        "Innovator": number;
        "Caretaker": number;
        "Pragmatist": number;
    };
    workActivityPreferences: {
        "Building": number;
        "Thinking": number;
        "Creating": number;
        "Helping": number;
        "Persuading": number;
        "Organizing": number;
    };
    topCareerMatches: CareerMatch[];
}