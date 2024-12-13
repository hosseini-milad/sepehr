import './ServerStatus.css';

const USAGE_COLORS = {
  Critical: 'danger',
  High: 'warning',
  Normal: 'info',
  Low: 'success',
  Idle: 'secondary',
};

export default function ServerStatus(props) {
  const { name, usage, ip, mac, cpu_usage, ram_usage } = props.data;

  const getUsageColor = (usage) => USAGE_COLORS[usage];
  const getResourceColor = (resourceValue) => {
    if (resourceValue >= 80) return 'danger';
    if (resourceValue < 80 && resourceValue >= 50) return 'warning';
    if (resourceValue < 50) return 'secondary';
  };

  return (
    <div className="server-status">
      {/* Header */}
      <div className="server-status__header">
        <div className="server-status__icon">
          <i className="fa fa-server"></i>
        </div>

        <div className="server-status__server">
          <div className="server-status__name">{name}</div>
          <div className={`server-status__usage text-${getUsageColor(usage)}`}>
            {usage}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="server-status__body">
        <div className="server-status__prop">
          <div className="server-status__prop-name">IP Address:</div>
          <div className="server-status__prop-value">{ip}</div>
        </div>
        <div className="server-status__prop">
          <div className="server-status__prop-name">MAC Address:</div>
          <div className="server-status__prop-value">{mac}</div>
        </div>
        <div
          className={`server-status__prop text-${getResourceColor(cpu_usage)}`}
        >
          <div className="server-status__prop-name">Avg. CPU Usage:</div>
          <div className="server-status__prop-value">{`${cpu_usage}%`}</div>
        </div>
        <div
          className={`server-status__prop text-${getResourceColor(ram_usage)}`}
        >
          <div className="server-status__prop-name">Avg. RAM Usage:</div>
          <div className="server-status__prop-value">{`${ram_usage}%`}</div>
        </div>
      </div>
    </div>
  );
}