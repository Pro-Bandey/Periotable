class Atom {
    constructor(atomic) {
        this.atomic = atomic

        this.buildElectronicDiagram()
        this.distributeElectrons()
    }

    buildElectronicDiagram() {
        this.electronicDiagram = new Array(7)
            .fill()
            .map((_, x) => {
                const length = 4.5 - Math.abs(x - 3.5)
                return new Array(length).fill(0)
            })
    }

    distributeElectrons() {

        let electrons = this.atomic
        let layer = 0
        let sublevel = 0
        while (electrons > 0) {
            let x = layer
            let y = sublevel
            for (; y >= 0 && x <= 6; x++, y--) {
                const maxDecay = 2 + 4 * y
                const decay = Math.min(electrons, maxDecay)
                this.electronicDiagram[x][y] = decay
                electrons -= decay
            }
            if (layer === sublevel) layer++
            else sublevel++
        }
    }

    get shells() {
        const result = []
        this.electronicDiagram.forEach((layer) => {
            const total = layer.reduce((a, b) => a + b)
            result.push(total)
        })
        return result
    }
}

function renderElectronicLayers(selector, atom) {
        const element = document.querySelector(selector)
        const html = document.createElement('div')

        for (const index in atom.electronicDiagram) {
            const layer = atom.electronicDiagram[index]
            const layerLength = atom.shells[index]
            const electrosphere = document.createElement('div')

            electrosphere.classList.add('electrosphere', `layer-${index}`)

            if (layerLength)
                electrosphere.style.setProperty('--length', layerLength)
            else
                electrosphere.classList.add('empty-layer')

            for (let i = 0; i < layerLength; i++) {
                const electron = document.createElement('div')

                electron.classList.add('electron')
                electron.style.setProperty('--index', i)
                electrosphere.appendChild(electron)
            }

            html.appendChild(electrosphere)
        }

        element.innerHTML = html.innerHTML
    }