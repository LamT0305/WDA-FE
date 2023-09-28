import { parseISO, format } from "date-fns";

export function extractDate(dateTimeString: string): string {
  try {
    const dateObj = parseISO(dateTimeString);
    if (isNaN(dateObj.getTime())) {
      throw new Error("Invalid date format");
    }

    return format(dateObj, "yyyy-MM-dd");
  } catch (error: any) {
    console.error(error.message);
    return "Invalid Date";
  }
}
