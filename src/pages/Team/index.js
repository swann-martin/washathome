import React from 'react';
import './style.scss';

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'Magali',
      role: 'dev back-end',
      specialty: ' Scrum Master, sql, squitch',
      avatar: 'https://cockpit.oclock.io/uploads/profiles/pictures/thumb/79723ede5a1c39fa0a455586ea3c78eb.jpeg',
      github: '/Magali-Sinbad21',
    },
    {
      id: 2,
      name: 'Guilhem',
      role: 'lead dev back-end',
      specialty: 'node, deploiement aws',
      avatar: 'https://cockpit.oclock.io/uploads/profiles/pictures/thumb/dc4b9d4cfaffd12dfca2d5b9f015fef1.jpeg',
      github: '/rocketgui1',
    },
    {
      id: 3,
      name: 'Nico',
      role: 'dev front-end',
      specialty: 'Product Owner, git Padawan',
      avatar: 'https://ca.slack-edge.com/T01KS87Q58D-U01N0JZGSBA-564542ef78be-512',
      github: '/Sunburst009',
    },
    {
      id: 4,
      name: 'Swann',
      role: 'lead dev front-end',
      specialty: 'sass, git Master',
      avatar: 'https://avatars.githubusercontent.com/u/71760899?v=4',
      github: '/swann-martin',
    },
  ];

  return (
    <div className="team">
      <div className="team-card">
        {
          team.map((member) => (
            <div className="team-card-member" key={member.id}>
              <img className="team-card-member-avatar" src={member.avatar} alt="avatar" />
              <h3 className="team-card-member-name">{member.name}</h3>
              <p className="team-card-member-role">{member.role}</p>
              <p className="team-card-member-specialty">{member.specialty}</p>
              <a href={`https://github.com${member.github}`} target="_blank" rel="noopener noreferrer" className="team-card-member-github">{`@github${member.github}`}</a>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Team;
