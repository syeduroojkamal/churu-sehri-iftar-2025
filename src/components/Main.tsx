const dates = [
  {
    sehri: new Date("Mar 02 2025 05:33:00 GMT+0530"),
    fajr: new Date("Mar 02 2025 05:38:00 GMT+0530"),
    iftar: new Date("Mar 02 2025 18:33:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 03 2025 05:32:00 GMT+0530"),
    fajr: new Date("Mar 03 2025 05:37:00 GMT+0530"),
    iftar: new Date("Mar 03 2025 18:33:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 04 2025 05:31:00 GMT+0530"),
    fajr: new Date("Mar 04 2025 05:36:00 GMT+0530"),
    iftar: new Date("Mar 04 2025 18:34:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 05 2025 05:30:00 GMT+0530"),
    fajr: new Date("Mar 05 2025 05:35:00 GMT+0530"),
    iftar: new Date("Mar 05 2025 18:35:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 06 2025 05:29:00 GMT+0530"),
    fajr: new Date("Mar 06 2025 05:34:00 GMT+0530"),
    iftar: new Date("Mar 06 2025 18:35:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 07 2025 05:28:00 GMT+0530"),
    fajr: new Date("Mar 07 2025 05:33:00 GMT+0530"),
    iftar: new Date("Mar 07 2025 18:36:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 08 2025 05:27:00 GMT+0530"),
    fajr: new Date("Mar 08 2025 05:32:00 GMT+0530"),
    iftar: new Date("Mar 08 2025 18:37:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 09 2025 05:26:00 GMT+0530"),
    fajr: new Date("Mar 09 2025 05:31:00 GMT+0530"),
    iftar: new Date("Mar 09 2025 18:37:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 10 2025 05:25:00 GMT+0530"),
    fajr: new Date("Mar 10 2025 05:30:00 GMT+0530"),
    iftar: new Date("Mar 10 2025 18:38:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 11 2025 05:24:00 GMT+0530"),
    fajr: new Date("Mar 11 2025 05:29:00 GMT+0530"),
    iftar: new Date("Mar 11 2025 18:38:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 12 2025 05:23:00 GMT+0530"),
    fajr: new Date("Mar 12 2025 05:28:00 GMT+0530"),
    iftar: new Date("Mar 12 2025 18:39:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 13 2025 05:22:00 GMT+0530"),
    fajr: new Date("Mar 13 2025 05:27:00 GMT+0530"),
    iftar: new Date("Mar 13 2025 18:39:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 14 2025 05:21:00 GMT+0530"),
    fajr: new Date("Mar 14 2025 05:26:00 GMT+0530"),
    iftar: new Date("Mar 14 2025 18:40:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 15 2025 05:20:00 GMT+0530"),
    fajr: new Date("Mar 15 2025 05:25:00 GMT+0530"),
    iftar: new Date("Mar 15 2025 18:40:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 16 2025 05:19:00 GMT+0530"),
    fajr: new Date("Mar 16 2025 05:24:00 GMT+0530"),
    iftar: new Date("Mar 16 2025 18:41:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 17 2025 05:17:00 GMT+0530"),
    fajr: new Date("Mar 17 2025 05:23:00 GMT+0530"),
    iftar: new Date("Mar 17 2025 18:42:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 18 2025 05:16:00 GMT+0530"),
    fajr: new Date("Mar 18 2025 05:21:00 GMT+0530"),
    iftar: new Date("Mar 18 2025 18:43:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 19 2025 05:15:00 GMT+0530"),
    fajr: new Date("Mar 19 2025 05:20:00 GMT+0530"),
    iftar: new Date("Mar 19 2025 18:43:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 20 2025 05:13:00 GMT+0530"),
    fajr: new Date("Mar 20 2025 05:18:00 GMT+0530"),
    iftar: new Date("Mar 20 2025 18:44:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 21 2025 05:12:00 GMT+0530"),
    fajr: new Date("Mar 21 2025 05:17:00 GMT+0530"),
    iftar: new Date("Mar 21 2025 18:44:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 22 2025 05:11:00 GMT+0530"),
    fajr: new Date("Mar 22 2025 05:16:00 GMT+0530"),
    iftar: new Date("Mar 22 2025 18:45:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 23 2025 05:10:00 GMT+0530"),
    fajr: new Date("Mar 23 2025 05:15:00 GMT+0530"),
    iftar: new Date("Mar 23 2025 18:45:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 24 2025 05:09:00 GMT+0530"),
    fajr: new Date("Mar 24 2025 05:14:00 GMT+0530"),
    iftar: new Date("Mar 24 2025 18:46:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 25 2025 05:07:00 GMT+0530"),
    fajr: new Date("Mar 25 2025 05:13:00 GMT+0530"),
    iftar: new Date("Mar 25 2025 18:46:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 26 2025 05:06:00 GMT+0530"),
    fajr: new Date("Mar 26 2025 05:11:00 GMT+0530"),
    iftar: new Date("Mar 26 2025 18:47:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 27 2025 05:05:00 GMT+0530"),
    fajr: new Date("Mar 27 2025 05:10:00 GMT+0530"),
    iftar: new Date("Mar 27 2025 18:47:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 28 2025 05:04:00 GMT+0530"),
    fajr: new Date("Mar 28 2025 05:09:00 GMT+0530"),
    iftar: new Date("Mar 28 2025 18:48:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 29 2025 05:02:00 GMT+0530"),
    fajr: new Date("Mar 29 2025 05:07:00 GMT+0530"),
    iftar: new Date("Mar 29 2025 18:49:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 30 2025 05:01:00 GMT+0530"),
    fajr: new Date("Mar 30 2025 05:06:00 GMT+0530"),
    iftar: new Date("Mar 30 2025 18:49:00 GMT+0530"),
  },
  {
    sehri: new Date("Mar 31 2025 05:00:00 GMT+0530"),
    fajr: new Date("Mar 31 2025 05:05:00 GMT+0530"),
    iftar: new Date("Mar 31 2025 18:50:00 GMT+0530"),
  },
];

const padZero = (input: string) => {
  if (input.length === 1) return "0" + input;
  return input;
};

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
      <table className="table-auto w-full bg-gray-900 text-center">
        <thead>
          <tr>
            <th>हिजरी तारीख</th>
            <th>अंग्रेजी तारीख</th>
            <th>वार</th>
            <th className="text-amber-100">सेहरी</th>
            {/* <th className="text-red-200">Fajr</th> */}
            <th className="text-blue-300">इफ़्तार</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((day, index) => (
            <tr
              key={index}
              className="bg-white odd:bg-slate-700 even:bg-slate-800"
            >
              <td>{(index + 1).toString()} रमदान</td>
              <td>{day.sehri.getDate() + " मार्च"}</td>
              <td>{getDayString(day)}</td>
              <td className="text-amber-100">{getSehriTime(day)}</td>
              {/* <td className="text-red-200">{getfajrTime(day)}</td> */}
              <td className="text-blue-300">{getIftarTime(day)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Main;
