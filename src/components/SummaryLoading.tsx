import type { IServiceMap } from '@/types/Types'
import { SourceIcons } from '@/components/SourceIcons'

export const SummaryLoading: React.FC = () => (
  <div className="mt-4 w-full">
    <div>
      <h3 className="mb-4 mt-10 flex items-center gap-2 text-xl capitalize">
        <SourceIcons source={'tripleWhale' as IServiceMap} /> Loading...
      </h3>
    </div>
    <div className="grid w-full flex-wrap items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 20 }).map((_, j) => (
        <div key={j} className=" w-full rounded border p-4 shadow-md">
          <div className="mb-4 h-5 w-full animate-pulse bg-gray-300"></div>
          <div className="mb-3 h-2 w-full animate-pulse bg-gray-200 leading-relaxed"></div>
          <div className="mb-3 h-7 w-full animate-pulse bg-gray-200 leading-relaxed"></div>
          <div className="h-12 w-full animate-pulse bg-gray-200 leading-relaxed"></div>
        </div>
      ))}
    </div>
  </div>
)
