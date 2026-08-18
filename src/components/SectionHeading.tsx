interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2
        id={id}
        className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
