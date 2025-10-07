import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'


export default function AppsDiscovery () {

  const [apiData, setApiData] = useState()
  const [rows, setRows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://recotest.pythonanywhere.com/api/v1/app-service/get-apps', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pageNumber: 1,
            pageSize: 50
          })
        })
        const data = await response.json()
        setApiData(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    // @ts-expect-error-ignore
    setRows(apiData?.appRows)
  }, [apiData, rows]);

  return (
    <TableContainer component={Paper}>
      <div style={{ padding: 16, width: '100%' }}>
        <Typography variant="h6" gutterBottom>
          Apps Discovery
        </Typography>
      </div>
      <Table size="small" aria-label="apps table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Connection</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {rows?.map((row: any) => (
            <TableRow key={row.appId} hover>
              <TableCell component="th" scope="row">{row.appName}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.appSources}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
