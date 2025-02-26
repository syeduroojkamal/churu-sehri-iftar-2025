const dates = [
  {
    sehri: new Date("Sat Mar 01 2025 05:37:00 GMT+0530"),
    iftar: new Date("Sat Mar 01 2025 18:30:00 GMT+0530"),
  },
  {
    sehri: new Date("Sun Mar 02 2025 05:36:00 GMT+0530"),
    iftar: new Date("Sun Mar 02 2025 18:31:00 GMT+0530"),
  },
  {
    sehri: new Date("Mon Mar 03 2025 05:35:00 GMT+0530"),
    iftar: new Date("Mon Mar 03 2025 18:32:00 GMT+0530"),
  },
  {
    sehri: new Date("Tue Mar 04 2025 05:34:00 GMT+0530"),
    iftar: new Date("Tue Mar 04 2025 18:32:00 GMT+0530"),
  },
  {
    sehri: new Date("Wed Mar 05 2025 05:33:00 GMT+0530"),
    iftar: new Date("Wed Mar 05 2025 18:33:00 GMT+0530"),
  },
  {
    sehri: new Date("Thu Mar 06 2025 05:32:00 GMT+0530"),
    iftar: new Date("Thu Mar 06 2025 18:33:00 GMT+0530"),
  },
  {
    sehri: new Date("Fri Mar 07 2025 05:31:00 GMT+0530"),
    iftar: new Date("Fri Mar 07 2025 18:34:00 GMT+0530"),
  },
  {
    sehri: new Date("Sat Mar 08 2025 05:30:00 GMT+0530"),
    iftar: new Date("Sat Mar 08 2025 18:35:00 GMT+0530"),
  },
  {
    sehri: new Date("Sun Mar 09 2025 05:29:00 GMT+0530"),
    iftar: new Date("Sun Mar 09 2025 18:35:00 GMT+0530"),
  },
  {
    sehri: new Date("Mon Mar 10 2025 05:27:00 GMT+0530"),
    iftar: new Date("Mon Mar 10 2025 18:36:00 GMT+0530"),
  },
  {
    sehri: new Date("Tue Mar 11 2025 05:26:00 GMT+0530"),
    iftar: new Date("Tue Mar 11 2025 18:36:00 GMT+0530"),
  },
  {
    sehri: new Date("Wed Mar 12 2025 05:25:00 GMT+0530"),
    iftar: new Date("Wed Mar 12 2025 18:37:00 GMT+0530"),
  },
  {
    sehri: new Date("Thu Mar 13 2025 05:24:00 GMT+0530"),
    iftar: new Date("Thu Mar 13 2025 18:37:00 GMT+0530"),
  },
  {
    sehri: new Date("Fri Mar 14 2025 05:23:00 GMT+0530"),
    iftar: new Date("Fri Mar 14 2025 18:38:00 GMT+0530"),
  },
  {
    sehri: new Date("Sat Mar 15 2025 05:22:00 GMT+0530"),
    iftar: new Date("Sat Mar 15 2025 18:39:00 GMT+0530"),
  },
  {
    sehri: new Date("Sun Mar 16 2025 05:21:00 GMT+0530"),
    iftar: new Date("Sun Mar 16 2025 18:39:00 GMT+0530"),
  },
  {
    sehri: new Date("Mon Mar 17 2025 05:19:00 GMT+0530"),
    iftar: new Date("Mon Mar 17 2025 18:40:00 GMT+0530"),
  },
  {
    sehri: new Date("Tue Mar 18 2025 05:18:00 GMT+0530"),
    iftar: new Date("Tue Mar 18 2025 18:40:00 GMT+0530"),
  },
  {
    sehri: new Date("Wed Mar 19 2025 05:17:00 GMT+0530"),
    iftar: new Date("Wed Mar 19 2025 18:41:00 GMT+0530"),
  },
  {
    sehri: new Date("Thu Mar 20 2025 05:16:00 GMT+0530"),
    iftar: new Date("Thu Mar 20 2025 18:41:00 GMT+0530"),
  },
  {
    sehri: new Date("Fri Mar 21 2025 05:15:00 GMT+0530"),
    iftar: new Date("Fri Mar 21 2025 18:42:00 GMT+0530"),
  },
  {
    sehri: new Date("Sat Mar 22 2025 05:13:00 GMT+0530"),
    iftar: new Date("Sat Mar 22 2025 18:43:00 GMT+0530"),
  },
  {
    sehri: new Date("Sun Mar 23 2025 05:12:00 GMT+0530"),
    iftar: new Date("Sun Mar 23 2025 18:43:00 GMT+0530"),
  },
  {
    sehri: new Date("Mon Mar 24 2025 05:11:00 GMT+0530"),
    iftar: new Date("Mon Mar 24 2025 18:44:00 GMT+0530"),
  },
  {
    sehri: new Date("Tue Mar 25 2025 05:10:00 GMT+0530"),
    iftar: new Date("Tue Mar 25 2025 18:44:00 GMT+0530"),
  },
  {
    sehri: new Date("Wed Mar 26 2025 05:09:00 GMT+0530"),
    iftar: new Date("Wed Mar 26 2025 18:45:00 GMT+0530"),
  },
  {
    sehri: new Date("Thu Mar 27 2025 05:07:00 GMT+0530"),
    iftar: new Date("Thu Mar 27 2025 18:45:00 GMT+0530"),
  },
  {
    sehri: new Date("Fri Mar 28 2025 05:06:00 GMT+0530"),
    iftar: new Date("Fri Mar 28 2025 18:46:00 GMT+0530"),
  },
  {
    sehri: new Date("Sat Mar 29 2025 05:05:00 GMT+0530"),
    iftar: new Date("Sat Mar 29 2025 18:46:00 GMT+0530"),
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

const getSehriTime = (day: { sehri: Date; iftar: Date }) => {
  return (
    <span>
      {padZero(day.sehri.getHours().toString())}:
      {padZero(day.sehri.getMinutes().toString())}
    </span>
  );
};

const getIftarTime = (day: { sehri: Date; iftar: Date }) => {
  return (
    <span>
      {padZero(militaryToStandardTime(day.iftar.getHours().toString()))}:
      {padZero(day.sehri.getMinutes().toString())}
    </span>
  );
};

const getDayString = (day: { sehri: Date; iftar: Date }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day.sehri.getDay()];
};

const Main = () => {
  return (
    <main className="mx-3 mb-6">
      <table className="table-auto w-full bg-gray-900 text-center">
        <thead>
          <tr>
            <th>Ramadan</th>
            <th>Date</th>
            <th>Day</th>
            <th>Sehri</th>
            <th>Iftar</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((day, index) => (
            <tr
              key={index}
              className="bg-white odd:bg-slate-700 even:bg-slate-800"
            >
              <td>Ramadan {padZero((index + 1).toString())}</td>
              <td>{"March " + day.sehri.getDate()}</td>
              <td>{getDayString(day)}</td>
              <td>{getSehriTime(day)}</td>
              <td>{getIftarTime(day)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Main;
