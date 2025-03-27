import { Question } from "../interfaces/question";

export const BASIC_QUESTIONS: Question[] = [
  {
    id: 1,
    name: "Basic Question 1",
    body: "What brings you here to take the career test today?",
    type: "multiple_choice_question",
    options: [
      "Considering a career change",
      "Student exploring possible careers",
      "Seeking career guidance about next steps in my career path",
      "Just curious",
      "Looking for a career that aligns with my passions",
      "Exploring new opportunities after a major life change",
    ],
    limit: null,
  },
  {
    id: 2,
    name: "Basic Question 2",
    body: "Which statement best describes you?",
    type: "multiple_choice_question",
    options: [
      "I enjoy hands-on tasks and working with tools or materials.",
      "I’m curious and enjoy solving complex problems.",
      "I like helping people and making a positive impact on their lives.",
      "I’m creative and enjoy expressing ideas in unique ways.",
      "I enjoy organizing, planning, and working with data.",
      "I thrive in leadership roles and enjoy making decisions.",
      "I like working with technology and staying up to date on advancements.",
    ],
    limit: null,
  },
  {
    id: 3,
    name: "Basic Question 3",
    body: "Which subjects interest you? (Select all that apply)",
    type: "checklist_question",
    options: [
      "Math",
      "Economics",
      "Languages (English, Foreign Languages, etc.)",
      "Computer Science & Programming",
      "Health & Medicine",
      "Agriculture & Environmental Science",
      "Performing Arts (Music, Theater, Dance)",
      "Visual Arts & Design (Drawing, Graphic Design, Architecture)",
      "History & Political Science",
      "Psychology & Social Sciences",
      "Engineering & Physics",
      "Business & Entrepreneurship",
      "Law & Criminal Justice",
      "Education & Teaching",
    ],
    limit: null,
  },
  {
    id: 4,
    name: "Basic Question 4",
    body: "How do you prefer to work?",
    type: "multiple_choice_question",
    options: [
      "Independently with minimal supervision",
      "In a team collaborating with others",
      "A mix of both, depending on the task",
      "Leading a group and making key decisions",
    ],
    limit: null,
  },
  {
    id: 5,
    name: "Basic Question 5",
    body: "I have a strong attention to detail and can complete tasks with a high level of accuracy and precision.",
    type: "opinion_question",
    options: [
      "Strongly agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strongly disagree",
    ],
    limit: null,
  },
  {
    id: 6,
    name: "Basic Question 6",
    body: "I am comfortable giving presentations and can effectively communicate complex ideas to a group.",
    type: "opinion_question",
    options: [
      "Strongly agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strongly disagree",
    ],
    limit: null,
  },
  {
    id: 7,
    name: "Basic Question 7",
    body: "Which activity would you prefer?",
    type: "binary_question",
    options: [
      ["Looking after animals", "Building a house"],
      ["Watching a show about science", "Watching a show about law"],
      ["Working outdoors", "Working in an office"],
      ["Writing an article", "Designing a product"],
      ["Analyzing financial data", "Conducting a social experiment"],
    ],
    limit: null,
  },
  {
    id: 8,
    name: "Basic Question 8",
    body: "Which of these appeals to you more?",
    type: "binary_question",
    options: [
      ["Doing volunteer work at a non-profit", "Starting your own business"],
      [
        "Taking care of children at a daycare center",
        "Keeping inventory records",
      ],
      ["Helping grow the U.S. economy", "Managing a sports team"],
      ["Performing on stage", "Editing a film"],
      ["Creating marketing campaigns", "Researching medical breakthroughs"],
    ],
    limit: null,
  },
];

export const DETAILED_QUESTIONS: Question[] = [
  {
    id: 1,
    name: "Detailed Question 1",
    body: "What long-term career goal do you hope to achieve?",
    type: "multiple_choice_question",
    options: [
      "Attaining a leadership position",
      "Becoming an expert in my field",
      "Achieving a healthy work-life balance",
      "Making a meaningful difference in the world",
      "Achieving financial independence",
      "Starting my own business",
      "Not sure",
    ],
    limit: null,
  },
  {
    id: 2,
    name: "Detailed Question 2",
    body: "What do you value most in a career? (Select up to 2)",
    type: "checklist_question",
    options: [
      "Financial stability/competitive compensation and benefits",
      "Career growth opportunities/job security",
      "Alignment with my skills",
      "Work-life balance",
      "Passion for the work (Aligns with my interests)",
      "Making a positive impact on others/helps the community",
      "Positive/inclusive company culture",
      "Alignment with my personality traits",
      "Creative freedom & autonomy",
      "Alignment with my personal values",
      "Finding fulfillment in my work (Receiving recognition and respect)",
    ],
    limit: 2,
  },
  {
    id: 3,
    name: "Detailed Question 3",
    body: "What does work-life balance mean to you?",
    type: "multiple_choice_question",
    options: [
      "Clear separation between work and personal time",
      "Prioritizing personal life over work",
      "Flexibility to manage both work and personal commitments",
      "Integrating work seamlessly into my life",
      "I'm open to a variety of work-life balance styles",
    ],
    limit: null,
  },
  {
    id: 4,
    name: "Detailed Question 4",
    body: "What type of work environment do you thrive in?",
    type: "multiple_choice_question",
    options: [
      "Highly structured and predictable",
      "Fast-paced and dynamic",
      "Collaborative and team-oriented",
      "Independent and self-driven",
      "Creative and experimental",
    ],
    limit: null,
  },
  {
    id: 5,
    name: "Detailed Question 5",
    body: "What is your ideal work setting?",
    type: "multiple_choice_question",
    options: [
      "Office-based",
      "Hybrid (Mix of office and remote)",
      "Fully remote",
      "Outdoors or field-based",
      "Lab or hands-on environment",
    ],
    limit: null,
  },
  {
    id: 6,
    name: "Detailed Question 6",
    body: "How important is workplace culture to you?",
    type: "multiple_choice_question",
    options: [
      "Very important—I want a strong, positive team culture",
      "Somewhat important—as long as it’s professional and supportive",
      "Not a priority—as long as I can do my job well",
    ],
    limit: null,
  },
  {
    id: 7,
    name: "Detailed Question 7",
    body: "What is your preferred career trajectory?",
    type: "multiple_choice_question",
    options: [
      "Specializing deeply in one field",
      "Moving into leadership/management",
      "Switching careers or exploring different industries",
      "Becoming an entrepreneur or freelancer",
      "Climbing the corporate ladder in a large company",
    ],
    limit: null,
  },
  {
    id: 8,
    name: "Detailed Question 8",
    body: "How do you feel about taking career risks?",
    type: "multiple_choice_question",
    options: [
      "I prefer stability and security over risk",
      "I’m open to some risk if it leads to growth",
      "I thrive on taking bold risks and challenges",
    ],
    limit: null,
  },
  {
    id: 9,
    name: "Detailed Question 9",
    body: "How do you prefer to work?",
    type: "multiple_choice_question",
    options: [
      "With clear instructions and structure",
      "With some flexibility, but clear expectations",
      "With full autonomy and creative freedom",
    ],
    limit: null,
  },
];
