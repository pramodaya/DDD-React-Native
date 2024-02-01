// Models/EducationModels.ts

export interface Root {
  _embedded: AdultTypeOfSchoolingList;
  _links: Links;
}

export interface AdultTypeOfSchoolingList {
  adultTypeOfSchoolings: AdultTypeOfSchooling[];
}

export interface AdultTypeOfSchooling {
  id: string;
  value: string;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export function mapApiDataToModels(apiData: any): Root {
  // Implement your mapping logic here
  return {
    _embedded: {
      adultTypeOfSchoolings: apiData._embedded?.adultTypeOfSchoolings || [],
    },
    _links: apiData._links || {},
  };
}
