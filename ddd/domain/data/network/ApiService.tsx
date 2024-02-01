// Data/Network/ApiService.ts

import { mapApiDataToModels } from '../../model/EducationModels';

class ApiService {
  async fetchData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      // Map the API data to your models
      const mappedData = mapApiDataToModels(data);

      return mappedData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

export default ApiService;
