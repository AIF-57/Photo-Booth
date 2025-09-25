export const getDateDifferenceFromNow = (fromDate) => {
  let difference = Math.floor(
    (new Date().getTime() - new Date(fromDate).getTime()) / 1000
  );

  const units = [
    { label: "y", seconds: 31536000 },
    { label: "m", seconds: 2592000 },
    { label: "w", seconds: 604800 },
    { label: "d", seconds: 86400 },
    { label: "h", seconds: 3600 },
    { label: "m", seconds: 60 },
  ];

  const results = [];

  for (const unit of units) {
    const value = Math.floor(difference / unit.seconds);
    if (value > 0) {
      results.push(`${value} ${unit.label}`);
      difference -= value * unit.seconds;
    }
    if (results.length === 2) break; // ✅ Only keep top 2 units
  }

  return results.join(" ");
};
