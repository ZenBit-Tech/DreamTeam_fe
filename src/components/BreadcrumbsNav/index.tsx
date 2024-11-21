import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { pageConfig } from '@/config/pages.config';

export type PathType = { label: string; path: string };

export const BreadcrumbsNav: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string): void => {
    navigate(path);
  };

  const definedPaths: PathType[] = [
    { label: t('breadcrumbs.companyList'), path: pageConfig.superAdmin },
    { label: t('breadcrumbs.companyName'), path: pageConfig.admin },
  ];

  return (
    <Breadcrumbs aria-label='breadcrumb' sx={{ padding: '20px 0px' }}>
      {definedPaths.map((pathObj, index) => {
        const isActive = pathname.includes(pathObj.path);

        return isActive ? (
          <Typography
            key={pathObj.path}
            sx={{
              color:
                index === definedPaths.length - 1 ? 'text.primary' : 'inherit',
              fontWeight: index === definedPaths.length - 1 ? 'bold' : 'normal',
            }}
          >
            {index === definedPaths.length - 1 ? (
              pathObj.label
            ) : (
              <button
                type='button'
                onClick={() => handleNavigate(pathObj.path)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'inherit',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                {pathObj.label}
              </button>
            )}
          </Typography>
        ) : null;
      })}
    </Breadcrumbs>
  );
};
