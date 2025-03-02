import padZero from "../utils/padZero";
import Countdown from "./Countdown";
import dates from "../data/dates";

const today = new Date().getDate();

const militaryToStandardTime = (input: string) => {
  const num = parseInt(input);
  if (num > 12) return (num - 12).toString();
  return input;
};

const getSehriTime = (day: { sehri: Date; fajr: Date; iftar: Date }) => {
  return (
    <span>
      {padZero(day.sehri.getHours().toString())}:
      {padZero(day.sehri.getMinutes().toString())}
    </span>
  );
};

// const getfajrTime = (day: { sehri: Date; fajr: Date; iftar: Date }) => {
//   return (
//     <span>
//       {padZero(day.fajr.getHours().toString())}:
//       {padZero(day.fajr.getMinutes().toString())}
//     </span>
//   );
// };

const getIftarTime = (day: { sehri: Date; fajr: Date; iftar: Date }) => {
  return (
    <span>
      {padZero(militaryToStandardTime(day.iftar.getHours().toString()))}:
      {padZero(day.iftar.getMinutes().toString())}
    </span>
  );
};

const getDayString = (day: { sehri: Date; iftar: Date }) => {
  const days = [
    "रविवार",
    "सोमवार",
    "मंगलवार",
    "बुधवार",
    "गुरुवार",
    "जुम्मा",
    "शनिवार",
  ];
  if (day.sehri.getDay() === 5)
    return (
      <span className="text-green-500  bg-teal-900/80 px-2 rounded-full">
        {days[day.sehri.getDay()]}
      </span>
    );
  return days[day.sehri.getDay()];
};

const Main = () => {
  return (
    <main className="mx-3 mb-6 max-w-2xl md:mx-auto">
      <div className="flex justify-center items-center mb-4">
        <Countdown />
      </div>
      <table className="table-auto w-full text-center">
        <thead>
          <tr className="bg-slate-700">
            <th className="rounded-l-md">हिजरी तारीख</th>
            <th>अंग्रेजी तारीख</th>
            <th>वार</th>
            <th className="text-amber-100">सेहरी</th>
            {/* <th className="text-red-200">Fajr</th> */}
            <th className="text-blue-300 rounded-r-md">इफ़्तार</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((day, index) => (
            <tr
              key={index}
              className={
                today === day.sehri.getDate()
                  ? "even:bg-slate-700 border-2 border-green-300 animate-pulse"
                  : "even:bg-slate-700"
              }
            >
              <td className="rounded-l-md">
                {(index + 1).toString() + " रमज़ान"}
              </td>
              <td>{day.sehri.getDate() + " मार्च"}</td>
              <td>{getDayString(day)}</td>
              <td className="text-amber-100">{getSehriTime(day)}</td>
              {/* <td className="text-red-200">{getfajrTime(day)}</td> */}
              <td className="text-blue-300 rounded-r-md">
                {getIftarTime(day)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Main;
