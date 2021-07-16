/* 
  TODO: track consumption
  click: 
    link:
      instagram
      email
  consumption:
    scroll_depth [0-100%]
  error:
    not_found

  event_name:
    label:
      value
*/

let analytics;
let performance;

try {
  analytics = firebase.analytics();
  performance = firebase.performance();
} catch (error) {
  console.error("Firebase has not been initialized");
}

function logEvent(eventName, eventLabel, eventValue) {
  if (!analytics || location.hostname === "localhost") {
    console.log("On localhost. Can't log events");
    return;
  }

  try {
    analytics.logEvent(eventName, {
      label: eventLabel || "",
      value: eventValue || "",
    });

    console.log("Logged event");
  } catch (error) {
    console.error("Error Logging Event");
  }
}

// log 404 in GA
if (document.title.includes("404")) {
  logEvent("error", "not_found");
}
