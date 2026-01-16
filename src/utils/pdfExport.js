import html2pdf from 'html2pdf.js';

/**
 * Generates and downloads the CV as a PDF focusing on a dedicated template.
 * @param {string} userName - The name of the user for the filename.
 */
export const exportToPDF = (userName = 'Humberto_Chacon') => {
    console.log('Iniciando exportación a PDF (Plantilla Profesional) para:', userName);

    // Target the dedicated PDF template element
    const element = document.getElementById('pdf-resume');

    if (!element) {
        console.error('No se encontró la plantilla #pdf-resume para exportar.');
        alert('Eror: No se pudo encontrar la plantilla del PDF. Por favor, recarga la página.');
        return;
    }

    const opt = {
        margin: [0, 0, 0, 0], // Margins are already handled in the template component
        filename: `${userName}_CV.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 3, // Higher scale for better quality
            useCORS: true,
            logging: false,
            letterRendering: true
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
        console.log('Procesando PDF con html2pdf...');
        html2pdf().set(opt).from(element).save()
            .then(() => {
                console.log('PDF exportado exitosamente.');
            })
            .catch((err) => {
                console.error('Error durante la generación del PDF:', err);
            });
    } catch (error) {
        console.error('Error crítico al intentar exportar PDF:', error);
        alert('Hubo un problema al generar el PDF. Revisa la consola para más detalles.');
    }
};
