import { MULTILINGUAL_CONDITION_LISTS } from "../const/multilingualCondition";

export const getDayText = (code: number): string => {
  const dayText = MULTILINGUAL_CONDITION_LISTS.find(condition => condition.code === code)?.languages.find(language => language.lang_name === "Japanese")?.day_text ?? "";
  return dayText;
};
