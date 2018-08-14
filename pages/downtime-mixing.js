import React from 'react';
import io from 'socket.io-client';
import {Container} from 'reactstrap';

import Menu, { MenuHeader } from '../components/menu';
import MenuItem from '../components/menu-item';
import Loading from '../components/loading';

export default class Index extends React.Component {
    socket = 'http://192.168.10.151:8898';
    state = {
        loading: false,
        data: ''
    };

    componentDidMount() {
        this.mounted = true;

        if (this.mounted) {
            let socket = io(this.socket);

            socket.on('connect', () => this.setState({ loading: true }));
            socket.on('downtime-mixing', (data) => this.setState({ data, loading: false }));
            socket.on('disconnect', () => this.setState({ loading: true }));
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        let {loading, data} = this.state;

        return (
            <div>
                { loading && <Loading/> }
                { !loading && data && <div className="mt-5">
                    <Container>
                        <div className="d-flex justify-content-between">
                            <div>
                                <MenuHeader>Pilih Event</MenuHeader>
                                <Menu>
                                    <MenuItem to="/">Line Bill Board</MenuItem>
                                    <MenuItem to="/status-line">Status Line</MenuItem>
                                    <MenuItem to="/status-mixer">Status Mixer</MenuItem>
                                    <MenuItem to="/line-info-sector">Line Info Sector</MenuItem>
                                    <MenuItem to="/mixer-input">Mixer Input</MenuItem>
                                    <MenuItem to="/line-produksi">Line Produksi</MenuItem>
                                    <MenuItem to="/line-overall">Line Overall</MenuItem>
                                    <MenuItem to="/company-summary">Company Summary</MenuItem>
                                    <MenuItem to="/mixer-bill-board">Mixer Bill Board</MenuItem>
                                    <MenuItem to="/machine-overall">Machine Overall</MenuItem>
                                    <MenuItem to="/machine-event">Machine Event</MenuItem>
                                    <MenuItem to="/machine-downtime">Machine Downtime</MenuItem>
                                    <MenuItem to="/ganti-shift">Ganti Shift</MenuItem>
                                    <MenuItem to="/device-downtime">Device Downtime</MenuItem>
                                    <MenuItem to="/device-end-dt">Device End DT</MenuItem>
                                    <MenuItem to="/device-set-reason">Device Set Reason</MenuItem>
                                    <MenuItem to="/device-bs-stock">Device BS Stock</MenuItem>
                                    <MenuItem to="/start-mixing">Start Mixing</MenuItem>
                                    <MenuItem to="/end-mixing">End Mixing</MenuItem>
                                    <MenuItem to="/downtime-mixing" active>Downtime Mixing</MenuItem>
                                    <MenuItem to="/run-mixing-every-second">Run Mixing Every Second</MenuItem>
                                </Menu>
                            </div>
                            <div className="border flex-fill ml-2 bg-dark text-white">
                                <div className="p-2 bg-secondary small text-center">Console</div>
                                <div className="p-2 small">
                                    {JSON.stringify(data, null, '\t')}
                                </div>
                            </div>
                        </div>
                    </Container>
                </div> }
            </div>
        );
    }
}