import { UserCircle2 } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company?: string;
  imageSrc?: string;
}

export function TestimonialCard({ quote, name, title, company, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg
            className="h-8 w-8 text-pharma-blue opacity-50"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-gray-600 italic mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          {imageSrc ? (
            <img
              className="h-10 w-10 rounded-full object-cover mr-4"
              src={imageSrc}
              alt={name}
            />
          ) : (
            <UserCircle2 className="h-10 w-10 text-gray-400 mr-4" />
          )}
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <div className="text-sm text-gray-500">
              {title}{company && `, ${company}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
