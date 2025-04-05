type FeatureCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-start">
          <div className="bg-gray-100 p-4 rounded-md mr-4">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    )
  }