export const getDateDifference = (start: Date) => {
    const end = new Date();
    const diffInMs = end.getTime() - start.getTime();

    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
        seconds: seconds % 60,
        minutes: minutes % 60,
        hours: hours % 24,
        days: days
    };
}

interface IDay {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
}

export const getFormattedDate = (date: IDay) => {
    const { minutes, hours, days } = date;
    if(days <= 0 && hours <= 0) return `${minutes}m`;
    else if(days <= 0) return `${hours}h`;
    return `${days}d`;
}

export const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.startsWith("image/")) {
        reject(new Error("Invalid file type. Please provide an image file."));
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
      fileReader.onerror = () => {
        reject(new Error("Error reading the file."));
      };
      fileReader.readAsDataURL(file);
    });
  };