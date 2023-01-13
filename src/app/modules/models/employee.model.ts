export class employeeModel {
  id: number;
  name: string;
  mobile: number;
  joiningDate: Date;
  departmentId: number;
  offeredSalary: number;
  isActive: boolean
}
export class employeeDataModel {
  status: number;
  message: string;
  data: employeeModel[];
}
