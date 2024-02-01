import EducationServiceImpl from '../service/impl/EducationServiceImpl';
import EducationRepository from '../repository/EducationRepository';
import ApiService from '../data/network/ApiService';
import LocalDataService from '../data/local/LocalDataService';

class Container {
  private static educationService = new EducationServiceImpl(
    new EducationRepository(new ApiService(),new LocalDataService())
  );

  static getEducationService() {
    return this.educationService;
  }
}

export default Container;
