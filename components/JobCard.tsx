import { Job } from '@/lib/fakeJobs'
import { formatRelativeTime } from '@/lib/formatRelativeTime'

export function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer">
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-700 mt-1">{job.company}</p>
          <p className="text-sm text-gray-600">{job.location}</p>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">{formatRelativeTime(job.postedAt.toISOString())}</span>
          {job.isRemote && (
            <>
              <span className="text-gray-300">•</span>
              <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md text-xs font-medium">
                Remote
              </span>
            </>
          )}
          <span className="text-gray-300">•</span>
          <span className="text-gray-600">{job.employmentType}</span>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
          {job.description}
        </p>
        
        <div className="pt-2">
          <a 
            href={`mailto:?subject=Application: ${job.title} at ${job.company}&body=Hello, I am interested in the ${job.title} role. Please find my CV attached.`}
            className="inline-block bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-center px-6 py-2.5 rounded-xl font-medium text-sm transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  )
}