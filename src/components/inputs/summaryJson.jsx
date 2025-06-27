export default function SummaryJson({ formData }) {
  return (
    <div className="w-full h-full overflow-y-auto bg-white">
      <pre className="w-full text-teal-950 text-center">
        {JSON.stringify(formData, null, 1)}
      </pre>
    </div>
  );
}
