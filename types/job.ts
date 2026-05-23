export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  postedAt: Date;
  isRemote?: boolean; // Optional property to indicate if the job is remote
}