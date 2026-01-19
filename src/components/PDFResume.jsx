import React from 'react';
import { cvData } from '../data/cvData';
import profilePic from '../assets/profile.png';

const PDFResume = () => {
    const { personalInfo, experiences, education, certifications, skills, projects, contact } = cvData;

    return (
        <div id="pdf-resume" style={{
            width: '210mm',
            backgroundColor: '#ffffff',
            color: '#1e293b',
            fontFamily: '"Inter", sans-serif',
            fontSize: '9.2pt',
            lineHeight: '1.4',
            margin: '0 auto',
            boxSizing: 'border-box',
            display: 'flex',
            position: 'relative'
        }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
                
                #pdf-resume {
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }

                .sidebar {
                    width: 30%;
                    background-color: #f8fafc;
                    padding: 15mm 10mm 15mm 10mm;
                    border-right: 1px solid #e2e8f0;
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                }

                .main-content {
                    width: 70%;
                    padding: 15mm 15mm 15mm 15mm;
                    display: flex;
                    flex-direction: column;
                    gap: 22px;
                }

                .profile-pic-container {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 2px;
                }

                .profile-pic {
                    width: 100px;
                    height: 100px;
                    border-radius: 12px;
                    object-fit: cover;
                    border: 3px solid #ffffff;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                }

                .section-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .section-main {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .title-sidebar {
                    font-family: 'Outfit', sans-serif;
                    font-size: 9.5pt;
                    font-weight: 700;
                    color: #0f172a;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    border-bottom: 2px solid #0066FF;
                    padding-bottom: 3px;
                    margin-bottom: 6px;
                }

                .title-main {
                    font-family: 'Outfit', sans-serif;
                    font-size: 12pt;
                    font-weight: 700;
                    color: #0f172a;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 8px;
                }

                .title-main::after {
                    content: '';
                    flex: 1;
                    height: 1px;
                    background: #e2e8f0;
                }

                .name-header {
                    font-family: 'Outfit', sans-serif;
                    font-size: 24pt;
                    font-weight: 800;
                    color: #0f172a;
                    line-height: 1;
                    margin-bottom: 4px;
                    letter-spacing: -0.02em;
                }

                .specialty-header {
                    font-family: 'Outfit', sans-serif;
                    font-size: 11pt;
                    font-weight: 600;
                    color: #0066FF;
                    margin-bottom: 12px;
                    line-height: 1.2;
                }

                .contact-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    margin-bottom: 6px;
                }

                .contact-icon {
                    color: #0066FF;
                    font-size: 9pt;
                    min-width: 12px;
                    margin-top: 2px;
                }

                .contact-text {
                    display: flex;
                    flex-direction: column;
                }

                .contact-label {
                    font-size: 6.5pt;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: #64748b;
                    font-weight: 700;
                }

                .contact-value {
                    font-size: 8pt;
                    color: #334155;
                    word-break: break-all;
                }

                .skill-group {
                    margin-bottom: 8px;
                }

                .skill-category {
                    font-size: 7.5pt;
                    font-weight: 700;
                    color: #475569;
                    margin-bottom: 4px;
                }

                .skill-tags-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4px;
                }

                .skill-tag {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    padding: 1px 6px;
                    border-radius: 4px;
                    font-size: 7pt;
                    color: #334155;
                    font-weight: 500;
                }

                .exp-item {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .exp-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                }

                .exp-role {
                    font-weight: 700;
                    font-size: 10pt;
                    color: #0f172a;
                }

                .exp-date {
                    font-size: 8pt;
                    color: #64748b;
                    font-weight: 600;
                    background: #f1f5f9;
                    padding: 0px 6px;
                    border-radius: 12px;
                }

                .exp-company-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2px;
                }

                .exp-company {
                    font-weight: 600;
                    color: #0066FF;
                    font-size: 9pt;
                }

                .exp-location {
                    font-size: 7.5pt;
                    color: #94a3b8;
                    font-weight: 500;
                }

                .exp-achievements {
                    margin-top: 1px;
                    padding-left: 12px;
                    font-size: 8.5pt;
                    color: #334155;
                    list-style-type: none;
                }

                .exp-achievements li {
                    margin-bottom: 2px;
                    position: relative;
                    padding-left: 10px;
                }

                .exp-achievements li::before {
                    content: "•";
                    color: #0066FF;
                    position: absolute;
                    left: 0;
                    font-weight: bold;
                }

                .project-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .project-card {
                    background: #ffffff;
                    padding: 8px;
                    border-radius: 6px;
                    border: 1px solid #e2e8f0;
                }

                .project-title {
                    font-weight: 700;
                    font-size: 9pt;
                    color: #0f172a;
                    margin-bottom: 1px;
                }

                .project-desc {
                    font-size: 7.5pt;
                    color: #475569;
                    margin-bottom: 4px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .project-tech {
                    font-size: 6.5pt;
                    font-weight: 700;
                    color: #0066FF;
                    text-transform: uppercase;
                }

                .edu-item {
                    margin-bottom: 10px;
                }

                .edu-degree {
                    font-weight: 700;
                    font-size: 8.5pt;
                    line-height: 1.2;
                    color: #0f172a;
                }

                .edu-inst {
                    color: #0066FF;
                    font-weight: 600;
                    font-size: 8pt;
                    margin: 1px 0;
                }

                .edu-period {
                    font-size: 7.5pt;
                    color: #64748b;
                }

                .cert-list {
                    padding-left: 0;
                    list-style: none;
                    margin: 0;
                }

                .cert-item {
                    font-size: 7.5pt;
                    color: #334155;
                    display: flex;
                    gap: 6px;
                    margin-bottom: 4px;
                }

                .cert-bullet {
                    color: #0066FF;
                    font-weight: bold;
                }

                /* Force consecutive flow and prevent item splitting */
                .exp-item, .project-card, .edu-item, .contact-item, .skill-group {
                    page-break-inside: avoid;
                    break-inside: avoid;
                }
            `}</style>

            {/* Sidebar */}
            <div className="sidebar">
                {/* Profile Picture */}
                <div className="profile-pic-container">
                    <img src={profilePic} alt="Humberto Chacón" className="profile-pic" />
                </div>

                {/* Contact Section */}
                <div className="section-sidebar">
                    <h2 className="title-sidebar">Contacto</h2>
                    <div className="contact-item">
                        <span className="contact-icon">✉</span>
                        <div className="contact-text">
                            <span className="contact-label">Email</span>
                            <span className="contact-value">{contact.email}</span>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">☎</span>
                        <div className="contact-text">
                            <span className="contact-label">Teléfono</span>
                            <span className="contact-value">{contact.phone}</span>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <div className="contact-text">
                            <span className="contact-label">Ubicación</span>
                            <span className="contact-value">{contact.location}</span>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">in</span>
                        <div className="contact-text">
                            <span className="contact-label">LinkedIn</span>
                            <span className="contact-value">humberto-chacón...</span>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">⌨</span>
                        <div className="contact-text">
                            <span className="contact-label">Github</span>
                            <span className="contact-value">github.com/humbertodcr...</span>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="section-sidebar">
                    <h2 className="title-sidebar">Habilidades</h2>

                    <div className="skill-group">
                        <div className="skill-category">Backend & Arquitectura</div>
                        <div className="skill-tags-container">
                            {skills.backend.map((s, i) => (
                                <span key={i} className="skill-tag">{s.name}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-category">Frontend</div>
                        <div className="skill-tags-container">
                            {skills.frontend.map((s, i) => (
                                <span key={i} className="skill-tag">{s.name}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-category">Infraestructura & Servidores</div>
                        <div className="skill-tags-container">
                            {skills.infrastructure?.map((s, i) => (
                                <span key={i} className="skill-tag">{s.name}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-category">Herramientas & QA</div>
                        <div className="skill-tags-container">
                            {skills.tools.map((s, i) => (
                                <span key={i} className="skill-tag">{s.name}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className="section-sidebar">
                    <h2 className="title-sidebar">Educación</h2>
                    {education.map((edu) => (
                        <div key={edu.id} className="edu-item">
                            <div className="edu-degree">{edu.degree}</div>
                            <div className="edu-inst">{edu.institution}</div>
                            <div className="edu-period">{edu.period}</div>
                        </div>
                    ))}
                </div>

                {/* Certifications Section */}
                <div className="section-sidebar">
                    <h2 className="title-sidebar">Certificaciones</h2>
                    <ul className="cert-list">
                        {certifications.map((cert, i) => (
                            <li key={i} className="cert-item">
                                <span className="cert-bullet">›</span>
                                <span>{cert}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Header Info */}
                <div style={{ marginBottom: '8px' }}>
                    <h1 className="name-header">{personalInfo.name.toUpperCase()}</h1>
                    <p className="specialty-header">{personalInfo.specialty}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ height: '2px', width: '30px', background: '#0066FF' }}></div>
                        <span style={{ fontSize: '7.5pt', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                            Perfil Profesional
                        </span>
                    </div>
                    <p style={{ textAlign: 'justify', fontSize: '9pt', color: '#334155', marginTop: '8px' }}>
                        {personalInfo.heroDescription}
                    </p>
                </div>

                {/* Experience Section */}
                <div className="section-main">
                    <h2 className="title-main">Experiencia Profesional</h2>
                    {experiences.map((exp) => (
                        <div key={exp.id} className="exp-item">
                            <div className="exp-header">
                                <span className="exp-role">{exp.title}</span>
                                <span className="exp-date">{exp.period}</span>
                            </div>
                            <div className="exp-company-row">
                                <span className="exp-company">{exp.company}</span>
                                <span className="exp-location">{exp.location}</span>
                            </div>
                            <ul className="exp-achievements">
                                {exp.achievements.map((ach, i) => (
                                    <li key={i}>{ach}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Projects Section */}
                <div className="section-main">
                    <h2 className="title-main">Proyectos Destacados</h2>
                    <div className="project-grid">
                        {projects.filter(p => (p.featured || p.id <= 2)).map((proj) => (
                            <div key={proj.id} className="project-card">
                                <div className="project-title">{proj.title}</div>
                                <div className="project-desc">{proj.description}</div>
                                <div className="project-tech">
                                    {proj.technologies.slice(0, 4).join(' • ')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDFResume;
