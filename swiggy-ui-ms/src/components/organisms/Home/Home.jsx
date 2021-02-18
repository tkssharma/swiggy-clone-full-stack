/**
 *
 * Home
 *
 */
import React from 'react';
import { useQuery } from '@apollo/client';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getCurrency } from '../../../graphQL/Queries/Currency';

const Home = () => {
  const { data, loading } = useQuery(getCurrency);

  if (loading) {
    return '...loading content';
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rate</TableCell>
            <TableCell align="right">Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rates.map(({ rate, currency }) => (
            <TableRow key={`rate_${currency}`}>
              <TableCell>{Math.round(rate * 100) / 100}</TableCell>
              <TableCell align="right">{currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
