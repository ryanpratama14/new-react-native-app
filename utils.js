// assets

export function getUserInfo() {
  const user = localStorage.getItem("userData");
  if (!user) return;
  return JSON.parse(user);
}

export function getAccessTokenInfo() {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) return;
  return accessToken;
}

export function getRole() {
  const role = localStorage.getItem("role");
  if (!role) return;
  return role;
}
export const dateFormat = (date) => {
  let d = new Date(date);
  let ye = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en-US", { month: "long" }).format(d);
  let da = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(d);
  return `${da} ${mo} ${ye}`;
};

export const dateFormatToday = () => {
  let d = new Date();
  let ye = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en-US", { month: "long" }).format(d);
  let da = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(d);
  return `${da} ${mo} ${ye}`;
};

export const currentTime = () => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return time;
};

export const clearObject = (currentState, setState) => {
  const clearedState = Object.fromEntries(
    Object.keys(currentState).map((key) => [key, ""])
  );
  setState(clearedState);
};

export const removeObjectFromArray = (data, key, value) => {
  return data.filter((obj) => obj[key] !== value);
};

export const titleParams = (str) => {
  return str.toLowerCase().replace(/\s+/g, "-").replace("#", "");
};

export const textEllipsisCustom = (text, length) => {
  return text.length < length
    ? `${text}`
    : `${text.substring(0, length - 3)}...`;
};

export function idEllipsis(str) {
  return str.slice(0, -5) + "*****";
}

export const textEllipsis = (text) => {
  return text.length < 35 ? `${text}` : `${text.substring(0, 32)}...`;
};
export const textEllipsisKTP = (text) => {
  return text.length < 36 ? `${text}` : `${text.substring(0, 33)}...`;
};
export const textEllipsisLonger = (text) => {
  return text.length < 860 ? `${text}` : `${text.substring(0, 857)}...`;
};

export const textEllipsisNewsText = (text) => {
  return text.length < 385 ? `${text}` : `${text.substring(0, 382)}...`;
};
export const textEllipsisNewsTextShorter = (text) => {
  return text.length < 128 ? `${text}` : `${text.substring(0, 125)}...`;
};
export const textEllipsisNewsTitle = (text) => {
  return text.length < 56 ? `${text}` : `${text.substring(0, 53)}...`;
};

export const textEllipsisProgram = (text) => {
  return text.length < 24 ? `${text}` : `${text.substring(0, 21)}...`;
};

export const textEllipsisGallery = (text) => {
  return text.length < 24 ? `${text}` : `${text.substring(0, 21)}...`;
};

export const textEllipsisNewsCarousel = (text) => {
  return text.length < 30 ? `${text}` : `${text.substring(0, 27)}...`;
};

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

// to pascal case function
export function toPascalCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export const yearList = [
  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2022",
    label: "2022",
  },
  {
    value: "2021",
    label: "2021",
  },
  {
    value: "2020",
    label: "2020",
  },

  {
    value: "2019",
    label: "2019",
  },
  {
    value: "2018",
    label: "2018",
  },
  {
    value: "2017",
    label: "2017",
  },
  {
    value: "2016",
    label: "2016",
  },
  {
    value: "2015",
    label: "2015",
  },
  {
    value: "2014",
    label: "2014",
  },
];

export const monthList = [
  { value: "january", label: "Januari" },
  { value: "february", label: "Februari" },
  { value: "march", label: "Maret" },
  { value: "april", label: "April" },
  { value: "may", label: "Mei" },
  { value: "june", label: "Juni" },
  { value: "july", label: "Juli" },
  { value: "august", label: "Agustus" },
  { value: "september", label: "September" },
  { value: "october", label: "Oktober" },
  { value: "november", label: "November" },
  { value: "december", label: "Desember" },
];

export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export const isNumber = (str) => {
  const regexPattern = /^[0-9]+$/;
  return regexPattern.test(str);
};

export function convertDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
