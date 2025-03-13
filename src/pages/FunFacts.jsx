function FunFacts() {
    return (
        <section className="funfacts-section">
            <h1>Datos Curiosos</h1>
            <p className="section-description">
                Algunas cosas interesantes sobre mí que quizás no sepas.
            </p>

            <div className="funfacts-container">
                <div className="funfact-card">
                    <div className="funfact-icon">🎬</div>
                    <h3>Guionista</h3>
                    <p>
                        Antes de ser desarrollador, trabajé como guionista de
                        ficción, radio y publicidad. Durante un tiempo fui
                        colaborador en el programa 'yu:no te pierdas nada'. Hay
                        muchos paralelismos entre ambos sectores.
                    </p>
                </div>

                <div className="funfact-card">
                    <img
                        src="/upload/PYP.jpg"
                        alt="Proletario y Parásito"
                        className="funfact-image"
                    />
                    <h3>Podcaster</h3>
                    <p>
                        Tengo un podcast de Los Simpson en asociación con
                        Spotify llamado "Proletario y Parásito".
                    </p>
                </div>
                <div className="funfact-card">
                    <img
                        src="/upload/nlbs.jpg"
                        alt="Stand-up Comedy"
                        className="funfact-image"
                    />
                    <h3>Cómico</h3>
                    <p>
                        Soy cómico de stand-up comedy. Me encanta hacer reír a
                        la gente y compartir historias desde el escenario.
                    </p>
                </div>

                <div className="funfact-card">
                    <div className="funfact-icon">🎨</div>
                    <h3>Creativo</h3>
                    <p>
                        He enseñado técnicas creativas para aplicarlas en la
                        creacion de textos cómicos.
                    </p>
                </div>

                <div className="funfact-card">
                    <div className="funfact-icon">🤝</div>
                    <h3>Colaborador</h3>
                    <p>
                        Disfruto trabajando en equipo y compartiendo
                        conocimientos. Creo que la colaboración es clave para
                        crear proyectos exitosos.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FunFacts;
