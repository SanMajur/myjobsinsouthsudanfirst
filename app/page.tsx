'use client';
import { getDaysAgo } from '@/utils/date';
import { Job } from '@/types/job';

// Job[] = tells TS "this must be an array of Job objects"
const fakeJobs: Job[] = [
  {
    id: '1',
    title: "Accountant",
    company: "Equity Bank",
    location: "Juba, South Sudan",
    postedAt: new Date('2024-06-01'),
  },
  {
    id: '2', 
    title: "Driver",
    company: "UN Mission",
    location: "Wau, South Sudan",
    postedAt: new Date('2024-06-02'),
  }
];

export default function Home() {
  
  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {fakeJobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{getDaysAgo(job.postedAt)} days ago</p>
          </li>
        ))}
      </ul>
     

    </div>
  );
}