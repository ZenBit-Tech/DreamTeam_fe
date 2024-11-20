import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export type PathType = { label: string; value: string };

export const definedPaths: PathType[] = [
  { label: 'Company List', value: 'companies' },
  { label: 'Company Name', value: 'admins' },
];

export const BreadcrumbsNav = (): React.ReactElement => {
  const { pathname } = useLocation();
  const pathNames = pathname.split('/');

  const renderLink = (pathObj: PathType): React.ReactElement => (
    <Link
      underline='hover'
      color='inherit'
      href={pathObj.value}
      key={pathObj.value}
    >
      {pathObj.label}
    </Link>
  );

  const renderTypography = (label: string): React.ReactElement => (
    <Typography sx={{ color: 'text.primary' }} key={label}>
      {label}
    </Typography>
  );

  return (
    <Breadcrumbs aria-label='breadcrumb' sx={{ padding: '20px 0px' }}>
      {pathNames.map((pathSegment) => {
        const pathObj = definedPaths.find((dp) => dp.value === pathSegment);
        const isLast =
          pathNames.findIndex((el) => el === pathSegment) ===
          pathNames.length - 1;
        if (pathObj) {
          return isLast ? renderTypography(pathObj.label) : renderLink(pathObj);
        }
        return null;
      })}
    </Breadcrumbs>
  );
};
