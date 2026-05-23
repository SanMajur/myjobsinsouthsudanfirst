"use client";
import { fakeJobs } from '@/lib/fakeJobs'
import JobCard from '@/components/JobCard';



export default function Home() {
  return (
    <div>
       <h1 className="font-bold text-3xl">Job Listings</h1>
      <ul>
        {fakeJobs.map((job) => (
         <JobCard key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
}
