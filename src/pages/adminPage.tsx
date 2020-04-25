import React from 'react';
import '../pages/pageStyles.css';
import CreateModule from '../components/createModule/createModule';

class AdminPageComponent extends React.Component<any>{

    render() {
        return (
            <div className="admin-container">
                <div>
                    <h2>Section</h2>
                </div>
                <div>
                    <h3>CreateModule</h3>
                    <CreateModule />
                </div>
            </div>
        );
    }
}


export default AdminPageComponent;