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
  [name: string]: USCollege;
}

export const US_COLLEGES: USColleges;
