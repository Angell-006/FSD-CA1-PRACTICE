import React from 'react';
import './TeamMemberCard.css'

export default function TeamMemberCard({ name, title }) {
  return (
    <div className="card">
      <h3 className="name">{name}</h3>
      <p className="title">{title}</p>
    </div>
  );
}
