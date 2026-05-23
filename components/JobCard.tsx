import { Job } from "@/types/job";
import { getDaysAgo } from "@/utils/date";

type JobCardProps = { job: Job };

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="border p-3 rounded mb-4">
        <h3 className="font-bold">{job.title}</h3>
        <p>Posted {getDaysAgo(job.postedAt)} days ago</p>
        <p>{job.company} • {job.location}</p>
        {job.isRemote && (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
            Remote
          </span>
        )}
        {job.employmentType && (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm ml-2">
            {job.employmentType}
          </span>
        )}
        <p>{job.salary && `Salary: $${job.salary} USD`}</p>
      </div>
  );
};
export default JobCard;
