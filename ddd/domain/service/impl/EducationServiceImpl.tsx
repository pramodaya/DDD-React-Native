import EducationRepository from '../../repository/EducationRepository';
import LocalDataService from '../../data/local/LocalDataService';
import ApiService from '../../data/network/ApiService';

class EducationServiceImpl {
  private educationRepository: EducationRepository;

  constructor(repository: EducationRepository) {
    this.educationRepository = repository;
  }

  async getAdultTypeOfSchoolings(): Promise<any> {
    return await this.educationRepository.getAdultTypeOfSchoolings();
  }
}

export default EducationServiceImpl;
