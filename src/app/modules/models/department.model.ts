export class departmentModel {
  id: number;
  name: string;
  isActive: boolean;
}
export class departmentDataModel {
  status: number;
  message: string;
  data: departmentModel[];
}