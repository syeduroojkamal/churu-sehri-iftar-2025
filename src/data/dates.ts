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

export default dates;
