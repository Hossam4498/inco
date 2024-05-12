"use client";

export default function ProjectHeading(props) {
  return (
    <div className="project-heading">
      <h2 className="project-title">{props.title}</h2>
      <h3 className="project-subtitle">{props.subtitle}</h3>
    </div>
  )
}