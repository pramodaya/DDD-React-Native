// Service/EducationServiceImpl.ts

import EducationRepository from '../../repository/EducationRepository';

class EducationServiceImpl {
  async getAdultTypeOfSchoolings(): Promise<any> {
    return await EducationRepository.getAdultTypeOfSchoolings();
  }
}

export default new EducationServiceImpl();
