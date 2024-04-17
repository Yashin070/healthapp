import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid } from 'components/system';
import { Input } from 'components/ui';

export const SWelcomeModalMain = styled(Grid)<{ theme?: Theme }>`
  ${({ theme }) => `
  width: 100%;
  place-items: center;
  padding: 0 ${theme.spacing(10)} ${theme.spacing(10)};

  button {
    width: 100%;
    max-width: 400px;
    padding: ${theme.spacing(2.5)};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    margin: ${theme.spacing(5)} 0;
  }

  ${theme.breakpoints.down('sm')} {
    padding: 0;
  }

  ${theme.breakpoints.down('md')} {
    button {
      width: 100%;
    }
  }
`}
`;

export const SWelcomeModalTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  font-size: 48px;
  font-weight: 700;
  color: ${theme.palette.primary.main};
  margin-bottom: ${theme.spacing(2.5)};
  text-align: center;
  ${theme.breakpoints.down('sm')} {
    line-height: 120%;
  }
  ${theme.breakpoints.down('md')} {
    font-size: 32px;
  }
  `}
`;

export const SWelcomeModalText = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
font-size: 20px;
text-align: center;
color: #6D728E;

line-height: 30px;

${theme.breakpoints.down('md')} {
  margin-bottom: 0;
  font-size: 16px;
}
${theme.breakpoints.up('md')} {
  margin-bottom: ${theme.spacing(10)};
}

`}
`;

export const SWelcomeModalInput = styled(Input)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;
