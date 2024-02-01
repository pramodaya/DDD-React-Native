// Service/EducationService.ts

import EducationServiceImpl from './impl/EducationServiceImpl';

const EducationService = {
  getAdultTypeOfSchoolings: () => EducationServiceImpl.getAdultTypeOfSchoolings(),
};

export default EducationService;
