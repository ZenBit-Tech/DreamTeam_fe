interface useCompaniesProps {
  page: number;
  rowsPerPage: number;
}
type CompaniesType = {
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
    { organization_name: 'Air Baltic', email: 'test@test.com' },
    { organization_name: 'British Airways', email: 'test@test.com' },
    { organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { organization_name: 'Ryanair', email: 'test@test.com' },
    { organization_name: 'Air Baltic', email: 'test@test.com' },
    { organization_name: 'British Airways', email: 'test@test.com' },
    { organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { organization_name: 'Ryanair', email: 'test@test.com' },
    { organization_name: 'Air Baltic', email: 'test@test.com' },
    { organization_name: 'British Airways', email: 'test@test.com' },
    { organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { organization_name: 'Ryanair', email: 'test@test.com' },
    { organization_name: 'Air Baltic', email: 'test@test.com' },
    { organization_name: 'British Airways', email: 'test@test.com' },
    { organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { organization_name: 'Ryanair', email: 'test@test.com' },
    { organization_name: 'Air Baltic', email: 'test@test.com' },
    { organization_name: 'British Airways', email: 'test@test.com' },
    { organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { organization_name: 'Ryanair', email: 'test@test.com' },
    { organization_name: 'Air Baltic', email: 'test@test.com' },
    { organization_name: 'British Airways', email: 'test@test.com' },
    { organization_name: 'Turkish Airlines', email: 'test@test.com' },
    { organization_name: 'Emirates Baltic', email: 'test@test.com' },
    { organization_name: 'Cathay Pacific', email: 'test@test.com' },
    { organization_name: 'Ryanair', email: 'test@test.com' },
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
