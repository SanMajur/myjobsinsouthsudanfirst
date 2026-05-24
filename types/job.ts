export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  postedAt: Date;
  isRemote: boolean; 
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship"; // Using a union type to restrict the values for employmentType
  salary?: number; // Optional property for salary because not all job listings may include this information
}
