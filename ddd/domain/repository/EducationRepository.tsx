// Repository/EducationRepository.ts

import ApiService from '../data/network/ApiService';
import LocalDataService from '../data/local/LocalDataService';

class EducationRepository {
  static async getEducationData(): Promise<any> {
    try {
      // Attempt to get data from the local database
      const localData = LocalDataService.getLocalData();

      // If there is data in the local database, return it
      if (localData) {
        return localData;
      }
      // If there is no data in the local database, fetch data from the API
      const apiUrl = 'https://api.skolverket.se/planned-educations/v3/support/adultTypeOfSchooling';
      const networkData = await ApiService.fetchData(apiUrl);

      // Return network data
      return networkData;
    } catch (error) {
      console.error('Error getting education data:', error);
      throw error;
    }
  }

  static async getAdultTypeOfSchoolings(): Promise<any> {
    try {
      const data = await this.getEducationData();
      return data?._embedded?.adultTypeOfSchoolings || [];
    } catch (error) {
      console.error('Error getting adult type of schoolings:', error);
      throw error;
    }
  }
}

export default EducationRepository;
