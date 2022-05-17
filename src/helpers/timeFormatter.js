export const timeFormatter = (time) => {
  let dateString = "";
  let timeDub = Math.round(time);

  const repeater = (seconds) => {
    let counter = 0;

    while (timeDub >= seconds) {
      timeDub -= seconds;
      counter++;
    }

    if (seconds >= 3600) dateString += `${counter}h `;
    else if (seconds >= 60) dateString += `${counter}m `;
  };

  if (time >= 3600) repeater(3600);
  if (time >= 60) repeater(60);

  return (dateString += `${time % 60}s`);
};
