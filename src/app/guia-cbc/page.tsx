import Guide from '../components/Guide'
import guiaCbcData from '../../data/guia-cbc.json'

export default function GuiaCbcPage() {
    return (
        <Guide
            sections={guiaCbcData.sections}
            label="Guía del Estudiante del CBC · MLI 2026"
            title={['Guía del', 'Estudiante', 'del CBC']}
            lead="Todo lo que necesitás saber para tu primer año en el Ciclo Básico Común de Ingeniería"
            altLink={{ href: '/guia', label: 'Acá está la Guía del Fiubense' }}
            placeholder="Buscar... (ej: inscripción, parcial, beca)"
        />
    )
}
