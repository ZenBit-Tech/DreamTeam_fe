interface useCompaniesProps {
  page: number;
  rowsPerPage: number;
}
type CompaniesType = {
  id: number;
  organization_name: string;
  email: string;
};
export const useCompanies = ({
  page,
  rowsPerPage,
}: useCompaniesProps): {
  companiesData: CompaniesType[];
  totalCompanies: number;
  numberOfPages: number;
  startIndex: number;
  endIndex: number;
} => {
  const companies = [
    { id: 1, organization_name: 'Air Baltic', email: 'test@test.com' },
    { id: 2, organization_name: 'British Airways', email: 'test@test.com' },
    { id: 3, organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { id: 4, organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { id: 5, organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { id: 6, organization_name: 'Ryanair', email: 'test@test.com' },
    { id: 7, organization_name: 'Air Baltic', email: 'test@test.com' },
    { id: 8, organization_name: 'British Airways', email: 'test@test.com' },
    { id: 9, organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { id: 10, organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { id: 11, organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { id: 12, organization_name: 'Ryanair', email: 'test@test.com' },
    { id: 13, organization_name: 'Air Baltic', email: 'test@test.com' },
    { id: 14, organization_name: 'British Airways', email: 'test@test.com' },
    { id: 15, organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { id: 16, organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { id: 17, organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { id: 18, organization_name: 'Ryanair', email: 'test@test.com' },
    { id: 19, organization_name: 'Air Baltic', email: 'test@test.com' },
    { id: 20, organization_name: 'British Airways', email: 'test@test.com' },
    { id: 21, organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { id: 22, organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { id: 23, organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { id: 24, organization_name: 'Ryanair', email: 'test@test.com' },
    { id: 25, organization_name: 'Air Baltic', email: 'test@test.com' },
    { id: 26, organization_name: 'British Airways', email: 'test@test.com' },
    { id: 27, organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { id: 28, organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { id: 29, organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { id: 30, organization_name: 'Ryanair', email: 'test@test.com' },
    { id: 31, organization_name: 'Air Baltic', email: 'test@test.com' },
    { id: 32, organization_name: 'British Airways', email: 'test@test.com' },
    { id: 33, organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { id: 34, organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { id: 35, organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { id: 36, organization_name: 'Ryanair', email: 'test@test.com' },
  ];

  const numberOfPages = Math.ceil(companies.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const returnedCompanies = companies.slice(startIndex, endIndex);

  return {
    companiesData: returnedCompanies,
    totalCompanies: companies.length,
    numberOfPages,
    startIndex,
    endIndex,
  };
};
