import moment from "moment";

export function formatDate(datetime) {
  return moment(datetime).format("YYYY-MM-DD");
}

export function formatTime(datetime) {
  return moment(datetime).format("hh:mm A");
}

export function formatDateTime(datetime) {
  const now = formatDate(moment.now());
  if (now === formatDate(datetime)) {
    return formatTime(datetime);
  }
  if (
    formatDate(moment(moment.now()).subtract(1, "days")) ===
    formatDate(datetime)
  )
    return "Yesterday";

  return moment(datetime).format("DD/MM/YYYY");
}
