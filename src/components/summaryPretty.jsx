export default function SummaryPretty({ formData }) {
  return (
    <div className="w-full h-full overflow-y-auto bg-white">
      {Object.keys(formData).map((section) => {
        return (
          <div className="w-full border-1 border-teal-900" key={section}>
            <div className="w-full bg-teal-950 px-4 py-2 ">
              <p className="text-xl font-bold text-white">{section}</p>
            </div>
            <table className="w-full">
              <thead></thead>
              <tbody>
                {Object.entries(formData[section]).map(([name, answer]) => {
                  return (
                    <tr
                      key={name}
                      className="even:bg-neutral-100 odd:bg-neutral-200"
                    >
                      <td className="px-4 py-2 text-sm text-teal-950">
                        {name}
                      </td>
                      <td className="px-4 py-2 text-sm text-teal-950">
                        {answer}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
