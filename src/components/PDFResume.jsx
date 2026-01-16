import React from 'react';
import { cvData } from '../data/cvData';

const PDFResume = () => {
    const { personalInfo, experiences, education, certifications, skills, projects, contact } = cvData;

    return (
        <div id="pdf-resume" style={{
            width: '210mm',
            minHeight: '297mm',
            padding: '20mm',
            backgroundColor: '#fff',
            color: '#000',
            fontFamily: 'Arial, sans-serif',
            fontSize: '10pt',
            lineHeight: '1.4',
            margin: '0 auto',
            boxSizing: 'border-box'
        }}>
            <style>{`
        #pdf-resume { color: #333; }
        .section { margin-bottom: 25px; }
        .section-title { 
          font-size: 14pt; 
          font-weight: bold; 
          color: #0066FF; 
          border-bottom: 2px solid #0066FF; 
          margin-bottom: 12px; 
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .header { margin-bottom: 30px; text-align: center; }
        .name { font-size: 24pt; font-weight: 900; color: #000; margin-bottom: 5px; }
        .specialty { font-size: 12pt; color: #666; margin-bottom: 15px; }
        .contact-info { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; font-size: 9pt; color: #444; }
        .contact-item { display: flex; align-items: center; gap: 5px; }
        
        .exp-item { margin-bottom: 15px; }
        .exp-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; }
        .exp-title { font-weight: bold; font-size: 11pt; color: #111; }
        .exp-company { font-weight: bold; color: #0066FF; }
        .exp-period { color: #777; font-size: 9pt; }
        .exp-achievements { margin-top: 5px; padding-left: 15px; }
        .exp-achievements li { margin-bottom: 2px; font-size: 9.5pt; }

        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .skill-list { list-style: none; padding: 0; margin: 0; }
        .skill-item { margin-bottom: 3px; font-size: 9pt; display: flex; justify-content: space-between; }
        .skill-name { font-weight: 500; }
        
        .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .project-item { padding: 10px; border: 1px solid #eee; border-radius: 4px; }
        .project-title { font-weight: bold; color: #333; margin-bottom: 4px; }
        .project-desc { font-size: 8.5pt; color: #666; }
        
        .page-break { page-break-before: always; }
      `}</style>

            {/* Header */}
            <div className="header">
                <h1 className="name">{personalInfo.name.toUpperCase()}</h1>
                <p className="specialty">{personalInfo.specialty}</p>
                <div className="contact-info">
                    <div className="contact-item">📧 {contact.email}</div>
                    <div className="contact-item">📱 {contact.phone}</div>
                    <div className="contact-item">📍 {contact.location}</div>
                    <div className="contact-item">🔗 linkedin.com/in/...</div>
                </div>
            </div>

            {/* Profile Section */}
            <div className="section">
                <h2 className="section-title">Perfil Profesional</h2>
                <p style={{ textAlign: 'justify', fontSize: '10pt' }}>{personalInfo.heroDescription}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
                {/* Left Column: Experience & Projects */}
                <div>
                    <div className="section">
                        <h2 className="section-title">Experiencia Laboral</h2>
                        {experiences.map((exp) => (
                            <div key={exp.id} className="exp-item">
                                <div className="exp-header">
                                    <span className="exp-title">{exp.title}</span>
                                    <span className="exp-period">{exp.period}</span>
                                </div>
                                <div style={{ marginBottom: '4px' }}>
                                    <span className="exp-company">{exp.company}</span> | <span style={{ fontSize: '9pt', color: '#666' }}>{exp.location}</span>
                                </div>
                                <ul className="exp-achievements">
                                    {exp.achievements.map((ach, i) => (
                                        <li key={i}>{ach}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="section">
                        <h2 className="section-title">Proyectos Destacados</h2>
                        <div className="projects-grid">
                            {projects.filter(p => p.featured).map((proj) => (
                                <div key={proj.id} className="project-item">
                                    <div className="project-title">{proj.title}</div>
                                    <div className="project-desc">{proj.description}</div>
                                    <div style={{ marginTop: '5px', fontSize: '7.5pt', color: '#0066FF', fontWeight: 'bold' }}>
                                        {proj.technologies.join(' • ')}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Skills & Education */}
                <div>
                    <div className="section">
                        <h2 className="section-title">Habilidades</h2>
                        <div style={{ marginBottom: '15px' }}>
                            <h3 style={{ fontSize: '10pt', marginBottom: '5px', color: '#444' }}>Backend & Arq</h3>
                            <ul className="skill-list">
                                {skills.backend.slice(0, 6).map((s, i) => (
                                    <li key={i} className="skill-item">
                                        <span className="skill-name">{s.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <h3 style={{ fontSize: '10pt', marginBottom: '5px', color: '#444' }}>Frontend</h3>
                            <ul className="skill-list">
                                {skills.frontend.map((s, i) => (
                                    <li key={i} className="skill-item">
                                        <span className="skill-name">{s.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '10pt', marginBottom: '5px', color: '#444' }}>Herramientas</h3>
                            <ul className="skill-list">
                                {skills.tools.slice(0, 6).map((s, i) => (
                                    <li key={i} className="skill-item">
                                        <span className="skill-name">{s.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Educación</h2>
                        {education.map((edu) => (
                            <div key={edu.id} style={{ marginBottom: '10px' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '10pt' }}>{edu.degree}</div>
                                <div style={{ color: '#0066FF', fontWeight: 'bold', fontSize: '9pt' }}>{edu.institution}</div>
                                <div style={{ color: '#777', fontSize: '8.5pt' }}>{edu.period}</div>
                            </div>
                        ))}
                    </div>

                    <div className="section">
                        <h2 className="section-title">Certificaciones</h2>
                        <ul style={{ paddingLeft: '15px', fontSize: '9pt', margin: 0 }}>
                            {certifications.map((cert, i) => (
                                <li key={i} style={{ marginBottom: '3px' }}>{cert}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDFResume;
