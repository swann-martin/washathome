import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'Magali',
      role: 'dev back-end',
      specialty: ' Scrum Master, sql, squitch',
      avatar: 'https://avatars.githubusercontent.com/u/78724241?v=4',
      github: '/Magali-Sinbad21',
    },
    {
      id: 2,
      name: 'Guilhem',
      role: 'lead dev back-end',
      specialty: 'node, deploiement aws',
      avatar: 'https://avatars.githubusercontent.com/u/73582716?v=4',
      github: '/rocketgui1',
    },
    {
      id: 3,
      name: 'Nico',
      role: 'dev front-end',
      specialty: 'Product Owner, api,redux',
      avatar: 'https://avatars.githubusercontent.com/u/68157275?v=4',
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
  )
}

export default Team
