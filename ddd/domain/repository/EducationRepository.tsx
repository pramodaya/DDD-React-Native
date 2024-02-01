// Repository/EducationRepository.ts

import ApiService from '../data/network/ApiService';
import LocalDataService from '../data/local/LocalDataService';


class EducationRepository {
  private apiService: ApiService;
  private localDataService: LocalDataService;

  constructor(apiService: ApiService, localDataService: LocalDataService) {
    this.apiService = apiService;
    this.localDataService = localDataService;
  }

  async getEducationData(): Promise<any> {
    try {
      const localData = this.localDataService.getLocalData();

      if (localData) {
        return localData;
      }

      const apiUrl = 'https://api.skolverket.se/planned-educations/v3/support/adultTypeOfSchooling';
      const networkData = await this.apiService.fetchData(apiUrl);

      return networkData;
    } catch (error) {
      console.error('Error getting education data:', error);
      throw error;
    }
  }

  async getAdultTypeOfSchoolings(): Promise<any> {
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
