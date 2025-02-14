interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>
    </div>
  );
}
