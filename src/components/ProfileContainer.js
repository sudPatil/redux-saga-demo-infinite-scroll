import * as React from 'react';
import { connect } from 'react-redux';
import Loading from './core/Loading';
import '../style/profile.css';

const Profiles = ({ profiles }) => (
    profiles.map((prf, index) => (
        <div className="user" key={index}>
            <img src={`${prf.picture.medium}`} />
            <div>{prf.name.first} </div>
        </div>
    ))
);

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.getProfiles = this.getProfiles.bind(this);
        this.addScroll = this.addScroll.bind(this);
    }

    getProfiles() {

    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_USERS', page: 1 });
    }

    addScroll(node) {
        if (node) {
            let page = 1;
            node.addEventListener('scroll', (e) => {
                if (node.scrollHeight <= (node.clientHeight + node.scrollTop)) {
                    this.props.dispatch({ type: 'GET_USERS', page: page++ });
                }
            });
        }
    }

    render() {
        const { profiles, isloading } = this.props;
        return (
            <>
                { isloading && <Loading />}
                <div>
                    <button onClick={this.getProfiles}> Load Users</button>
                    {profiles &&
                        <div className="user-container" ref={this.addScroll}>
                            <Profiles profiles={profiles} />
                        </div>
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = store => (
    {
        profiles: store.profiles.records,
        isloading: store.profiles.isloading
    })

export default connect(mapStateToProps)(ProfileContainer)