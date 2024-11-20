import { apiSlice } from '@/redux/api/api.slice';
import { Company } from '@/types/company.interface';

export interface CompanyInterface {
  data: Company[];
  total: number;
}

export const companyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<CompanyInterface, string>({
      query: (url) => `companies${url}`,
    }),
  }),
});

export const { useGetCompaniesQuery } = companyApiSlice;
