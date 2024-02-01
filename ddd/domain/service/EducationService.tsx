import Container from '../di/Container';

const EducationService = {
  getAdultTypeOfSchoolings: () => Container.getEducationService().getAdultTypeOfSchoolings(),
};

export default EducationService;
