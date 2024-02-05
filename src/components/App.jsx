import RenderProfile from './Profile/Profile';
import userData from "../data/user.json"
import data from "../data/data.json"
import RenderStatistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <RenderProfile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <RenderStatistics title="Upload stats" stats={data}/>
          </div>
  );
};
