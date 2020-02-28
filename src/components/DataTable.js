import React, {Component} from "react";
import Paper from "@material-ui/core/Paper/Paper";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";

export default class DataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: true,
            apiData: []
        };
    }

    componentDidMount = async () => {
        this.setState({isLoading: true});
        fetch("https://www.dallasopendata.com/resource/9fxf-t2tr.json")
            .then(res => res.json())
            .then(res => this.setState({ apiData: res }))
            .catch(() => this.setState({ hasErrors: true }));

        this.setState({isLoading: false});
    };


    render() {

        const {
            apiData
        } = this.state;

        return (
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Time</TableCell>
                            <TableCell>Incident#</TableCell>
                            <TableCell>Division</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Nature</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Unit#</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Beat</TableCell>
                            <TableCell>ReportingArea</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiData.map(data => (
                            <TableRow key={Math.random()}>
                                <TableCell component="th" scope="row">
                                    {data.date_time}
                                </TableCell>
                                <TableCell align="right">{data.incident_number}</TableCell>
                                <TableCell align="right">{data.division}</TableCell>
                                <TableCell align="right">{data.status}</TableCell>
                                <TableCell align="right">{data.nature_of_call}</TableCell>
                                <TableCell align="right">{data.priority}</TableCell>
                                <TableCell align="right">{data.unit_number}</TableCell>
                                <TableCell align="right">{data.block} {data.location}</TableCell>
                                <TableCell align="right">{data.beat}</TableCell>
                                <TableCell align="right">{data.reporting_area}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
