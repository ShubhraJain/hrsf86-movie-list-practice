import React from 'react';

class StatusButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="status-buttons">
        <button className="status-btn-name">Watched</button>
        <button className="status-btn-name">To Watch</button>
      </div>
    )
  }
}

export default StatusButtons;