import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import { filterAccounts } from '../../utils/filterAccounts';
import defaultAccounts from '../../data/accounts.json';

export default function AccountExplorer({ accounts = defaultAccounts }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAccounts = useMemo(
    () => filterAccounts(accounts, searchTerm),
    [accounts, searchTerm]
  );

  const hasResults = filteredAccounts.length > 0;
  const showEmptyState = !hasResults;

  const emptyStateTitle = searchTerm
    ? 'Sin resultados para tu búsqueda'
    : 'Aún no hay cuentas';

  const emptyStateMessage = searchTerm
    ? `No encontramos cuentas que coincidan con "${searchTerm}". Intenta con otro nombre o industria.`
    : 'Todavía no hay registros de cuentas para mostrar.';

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleClearSearch = () => setSearchTerm('');

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
            <BusinessIcon fontSize="medium" />
          </Avatar>
        }
        title="Account Explorer"
        slotProps={{ title: { fontWeight: 700, fontSize: 24 } }}
        sx={{ px: 3, pt: 3 }}
      />
      <Box sx={{ px: 3, pb: 3 }}>
        <TextField
          fullWidth
          size="medium"
          label="Buscar por nombre o industria"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ mb: 3, '& .MuiInputBase-input': { fontSize: '1.15rem' } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="medium" />
                </InputAdornment>
              ),
            },
            inputLabel: { sx: { fontSize: '1.1rem' } },
          }}
        />

        {showEmptyState ? (
          <Box sx={{ textAlign: 'center', py: 7 }}>
            <SearchIcon sx={{ fontSize: 64, color: 'primary.main' }} />
            <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', mt: 2 }}>
              {emptyStateTitle}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 420, mx: 'auto', mt: 1, fontSize: '1.15rem' }}
            >
              {emptyStateMessage}
            </Typography>
            {searchTerm && (
              <Button
                variant="outlined"
                size="large"
                onClick={handleClearSearch}
                sx={{ mt: 3, fontSize: '1.05rem' }}
              >
                Limpiar búsqueda
              </Button>
            )}
          </Box>
        ) : (
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: '1.05rem', fontWeight: 700 }}>Nombre</TableCell>
                  <TableCell sx={{ fontSize: '1.05rem', fontWeight: 700 }}>Industria</TableCell>
                  <TableCell sx={{ fontSize: '1.05rem', fontWeight: 700 }}>Teléfono</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAccounts.map((acc) => (
                  <TableRow key={acc.Name} hover>
                    <TableCell sx={{ fontSize: '1.05rem', py: 2 }}>{acc.Name}</TableCell>
                    <TableCell sx={{ fontSize: '1.05rem', py: 2 }}>{acc.Industry}</TableCell>
                    <TableCell sx={{ fontSize: '1.05rem', py: 2 }}>{acc.Phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Card>
  );
}

AccountExplorer.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
      Industry: PropTypes.string,
      Phone: PropTypes.string,
    })
  ),
};
