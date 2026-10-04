import Guide from '../components/Guide'
import guiaData from '../../data/guia.json'

export default function GuiaPage() {
    return (
        <Guide
            sections={guiaData.sections}
            label="Guía del Estudiante Fiubense · MLI 2026"
            title={['Guía del', 'Estudiante', 'Fiubense']}
            lead="Todo lo que necesitás saber sobre tus derechos, trámites y oportunidades en FIUBA"
            altLink={{ href: '/guia-cbc', label: 'Acá está la Guía del CBC' }}
            placeholder="Buscar... (ej: recuperatorio, beca, inscripción)"
        />
    )
}
