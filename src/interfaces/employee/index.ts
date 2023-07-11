import { PayrollInterface } from 'interfaces/payroll';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  vacation_days: number;
  company_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  payroll?: PayrollInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    payroll?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  company_id?: string;
  user_id?: string;
}
