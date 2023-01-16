import { departmentModel } from "./department.model";

export class employeeModel {
  id: number;
  name: string;
  mobile: number;
  joiningDate: Date | string;
  departmentId: number;
  offeredSalary: number;
  department: departmentModel;
  deptname?: number;
  isActive: boolean
}
export class employeeRequestModel {
  id: number;
  name: string;
  mobile: number;
  joiningDate: Date | string;
  departmentId: number;
  offeredSalary: number;
  isActive: boolean
}
export class employeeDataModel {
  status: number;
  message: string;
  data: employeeModel[];
}
