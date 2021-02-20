export interface USCollege {
  latitude: number;
  longitude: number;
  name: string;
  translation: string;
  zip_code: string;
  state_name: string;
  state_abbreviation: string;
  city: string;
}

export interface USColleges {
  [name: string]: USCollege | undefined;
}

export const ALL_US_COLLEGES: USColleges;

export const POPULAR_US_COLLEGES: USColleges;
