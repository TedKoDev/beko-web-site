export interface Country {
  country_id: number;
  country_code: string;
  country_name: string;
  flag_icon: string;
  user_count: number;
}

export interface CountryResponse {
  status: string;
  data: Country[];
}
