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

export type USCollegeName = string;

export const US_COLLEGES: { [name: USCollegeName]: USCollege };
